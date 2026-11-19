use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke_signed,
    program_error::ProgramError,
    pubkey::Pubkey,
    rent::Rent,
    system_instruction,
    system_program,
    sysvar::Sysvar,
};

const ESCROW_SEED: &[u8] = b"escrow";
const STATE_LEN: usize = 73;

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let (&instruction, rest) = instruction_data
        .split_first()
        .ok_or(ProgramError::InvalidInstructionData)?;

    match instruction {
        0 => initialize_escrow(program_id, accounts, rest),
        1 => release_escrow(program_id, accounts, rest),
        _ => Err(ProgramError::InvalidInstructionData),
    }
}

fn initialize_escrow(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    data: &[u8],
) -> ProgramResult {
    if data.len() != 24 {
        return Err(ProgramError::InvalidInstructionData);
    }

    let task_id = read_u64(&data[0..8])?;
    let worker_payment = read_u64(&data[8..16])?;
    let requester_refund = read_u64(&data[16..24])?;

    if worker_payment == 0 {
        return Err(ProgramError::InvalidArgument);
    }

    let account_iter = &mut accounts.iter();
    let requester = next_account_info(account_iter)?;
    let escrow = next_account_info(account_iter)?;
    let worker = next_account_info(account_iter)?;
    let system = next_account_info(account_iter)?;

    if !requester.is_signer || !requester.is_writable || !escrow.is_writable {
        return Err(ProgramError::MissingRequiredSignature);
    }

    if system.key != &system_program::ID {
        return Err(ProgramError::IncorrectProgramId);
    }

    let task_seed = task_id.to_le_bytes();
    let (expected_escrow, bump) = Pubkey::find_program_address(
        &[ESCROW_SEED, requester.key.as_ref(), &task_seed],
        program_id,
    );

    if escrow.key != &expected_escrow {
        return Err(ProgramError::InvalidSeeds);
    }

    let secured_amount = worker_payment
        .checked_add(requester_refund)
        .ok_or(ProgramError::Custom(1))?;
    let rent = Rent::get()?.minimum_balance(STATE_LEN);
    let account_lamports = rent
        .checked_add(secured_amount)
        .ok_or(ProgramError::Custom(1))?;

    invoke_signed(
        &system_instruction::create_account(
            requester.key,
            escrow.key,
            account_lamports,
            STATE_LEN as u64,
            program_id,
        ),
        &[requester.clone(), escrow.clone(), system.clone()],
        &[&[
            ESCROW_SEED,
            requester.key.as_ref(),
            &task_seed,
            &[bump],
        ]],
    )?;

    let mut state = escrow.try_borrow_mut_data()?;
    state[0] = 1;
    state[1..33].copy_from_slice(requester.key.as_ref());
    state[33..65].copy_from_slice(worker.key.as_ref());
    state[65..73].copy_from_slice(&worker_payment.to_le_bytes());

    msg!("CampusBounty escrow funded");
    Ok(())
}

fn release_escrow(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    data: &[u8],
) -> ProgramResult {
    if data.len() != 8 {
        return Err(ProgramError::InvalidInstructionData);
    }

    let task_id = read_u64(data)?;
    let task_seed = task_id.to_le_bytes();
    let account_iter = &mut accounts.iter();
    let requester = next_account_info(account_iter)?;
    let escrow = next_account_info(account_iter)?;
    let worker = next_account_info(account_iter)?;

    let (expected_escrow, _) = Pubkey::find_program_address(
        &[ESCROW_SEED, requester.key.as_ref(), &task_seed],
        program_id,
    );

    if !requester.is_signer || !requester.is_writable {
        return Err(ProgramError::MissingRequiredSignature);
    }

    if !escrow.is_writable || !worker.is_writable {
        return Err(ProgramError::InvalidAccountData);
    }

    if escrow.key != &expected_escrow || escrow.owner != program_id {
        return Err(ProgramError::IncorrectProgramId);
    }

    let worker_payment = {
        let state = escrow.try_borrow_data()?;

        if state.len() != STATE_LEN || state[0] != 1 {
            return Err(ProgramError::UninitializedAccount);
        }

        if &state[1..33] != requester.key.as_ref() {
            return Err(ProgramError::IllegalOwner);
        }

        if &state[33..65] != worker.key.as_ref() {
            return Err(ProgramError::InvalidAccountData);
        }

        read_u64(&state[65..73])?
    };

    let escrow_balance = escrow.lamports();
    let worker_balance = worker.lamports();
    let requester_balance = requester.lamports();
    let requester_return = escrow_balance
        .checked_sub(worker_payment)
        .ok_or(ProgramError::InsufficientFunds)?;

    **escrow.try_borrow_mut_lamports()? = 0;
    **worker.try_borrow_mut_lamports()? = worker_balance
        .checked_add(worker_payment)
        .ok_or(ProgramError::Custom(1))?;
    **requester.try_borrow_mut_lamports()? = requester_balance
        .checked_add(requester_return)
        .ok_or(ProgramError::Custom(1))?;

    escrow.try_borrow_mut_data()?.fill(0);

    msg!("CampusBounty escrow released");
    Ok(())
}

fn read_u64(bytes: &[u8]) -> Result<u64, ProgramError> {
    let value: [u8; 8] = bytes
        .try_into()
        .map_err(|_| ProgramError::InvalidInstructionData)?;
    Ok(u64::from_le_bytes(value))
}
