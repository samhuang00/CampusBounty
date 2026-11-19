import {
  AccountRole,
  address,
  getAddressEncoder,
  getProgramDerivedAddress,
  type Address,
  type TransactionSigner,
} from "@solana/kit";

const SYSTEM_PROGRAM_ADDRESS = address(
  "11111111111111111111111111111111",
);

export const ESCROW_PROGRAM_ADDRESS = address(
  process.env.NEXT_PUBLIC_ESCROW_PROGRAM_ID?.trim() ||
    "2oGovLkaS4MPBFcJ4rFofa6yN965Mp9QijWVtDw7X3EB",
);

export const WORKER_ADDRESS = address(
  "93P7YGVKFQZiSzLoE9Eg3D5rDzsgKxAYWmgCC5xg32RG",
);

export const WORKER_PAYMENT = 18_000_000n;
export const REQUESTER_REFUND = 3_000_000n;

function getEscrowProgramAddress(): Address | null {
  try {
    return ESCROW_PROGRAM_ADDRESS;
  } catch {
    return null;
  }
}

function encodeU64(value: bigint, target: Uint8Array, offset: number) {
  new DataView(
    target.buffer,
    target.byteOffset,
    target.byteLength,
  ).setBigUint64(offset, value, true);
}

function encodeTaskId(taskId: bigint) {
  const bytes = new Uint8Array(8);
  encodeU64(taskId, bytes, 0);
  return bytes;
}

export function isEscrowProgramConfigured() {
  return getEscrowProgramAddress() !== null;
}

export async function getEscrowPda(
  taskId: bigint,
  requesterAddress: string,
) {
  const programAddress = getEscrowProgramAddress();

  if (!programAddress) {
    throw new Error(
      "The escrow program ID has not been configured yet.",
    );
  }

  const [escrowAddress] = await getProgramDerivedAddress({
    programAddress,
    seeds: [
      "escrow",
      getAddressEncoder().encode(address(requesterAddress)),
      encodeTaskId(taskId),
    ],
  });

  return escrowAddress;
}

export async function getInitializeEscrowInstruction({
  requester,
  taskId,
}: {
  requester: TransactionSigner;
  taskId: bigint;
}) {
  const programAddress = getEscrowProgramAddress();

  if (!programAddress) {
    throw new Error(
      "The escrow program ID has not been configured yet.",
    );
  }

  const escrowAddress = await getEscrowPda(
    taskId,
    requester.address,
  );
  const data = new Uint8Array(25);
  data[0] = 0;
  encodeU64(taskId, data, 1);
  encodeU64(WORKER_PAYMENT, data, 9);
  encodeU64(REQUESTER_REFUND, data, 17);

  return {
    programAddress,
    accounts: [
      {
        address: requester.address,
        role: AccountRole.WRITABLE_SIGNER,
        signer: requester,
      },
      {
        address: escrowAddress,
        role: AccountRole.WRITABLE,
      },
      {
        address: WORKER_ADDRESS,
        role: AccountRole.READONLY,
      },
      {
        address: SYSTEM_PROGRAM_ADDRESS,
        role: AccountRole.READONLY,
      },
    ],
    data,
  };
}

export async function getReleaseEscrowInstruction({
  requester,
  taskId,
}: {
  requester: TransactionSigner;
  taskId: bigint;
}) {
  const programAddress = getEscrowProgramAddress();

  if (!programAddress) {
    throw new Error(
      "The escrow program ID has not been configured yet.",
    );
  }

  const escrowAddress = await getEscrowPda(
    taskId,
    requester.address,
  );
  const data = new Uint8Array(9);
  data[0] = 1;
  encodeU64(taskId, data, 1);

  return {
    programAddress,
    accounts: [
      {
        address: requester.address,
        role: AccountRole.WRITABLE_SIGNER,
        signer: requester,
      },
      {
        address: escrowAddress,
        role: AccountRole.WRITABLE,
      },
      {
        address: WORKER_ADDRESS,
        role: AccountRole.WRITABLE,
      },
    ],
    data,
  };
}
