# CampusBounty Escrow Program

This native Solana program replaces the prototype's user-controlled custody
wallet with a program-derived account (PDA).

## Instructions

- `initialize` creates and funds a unique escrow PDA for the TaskCard.
- `release` can only be signed by the original requester. It pays the stored
  worker address, returns the unused allowance and reclaimed account rent to
  the requester, and closes the PDA.

The frontend supplies a random 64-bit TaskCard ID, allowing the demo to be
reset and run repeatedly without reusing an old PDA.

## Deploy

Deploy `src/lib.rs` as a native Rust program on Solana Devnet, then expose its
program address to the Next.js app as:

```bash
NEXT_PUBLIC_ESCROW_PROGRAM_ID=YOUR_DEPLOYED_PROGRAM_ADDRESS
```
