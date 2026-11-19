# Smart-contract launch checklist

The application code is complete except for the address that Solana assigns
when the escrow program is deployed.

## 1. Deploy the program on Devnet

1. Open [Solana Playground](https://beta.solpg.io/).
2. Create a **Native / Rust** project.
3. Replace its `src/lib.rs` with
   `programs/campusbounty-escrow/src/lib.rs` from this repository.
4. Connect the Playground wallet to **Devnet**, fund it with Devnet SOL, then
   click **Build** and **Deploy**.
5. Copy the deployed **Program ID**.

## 2. Connect the web app

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_ESCROW_PROGRAM_ID=2oGovLkaS4MPBFcJ4rFofa6yN965Mp9QijWVtDw7X3EB
```

For Vercel, add the same variable under Project Settings → Environment
Variables, then redeploy.

## 3. Test the complete payment path

Reset the demo, run the normal Sam/Olivia workflow, fund the TaskCard with
Olivia's wallet, and approve the completed work with that same wallet. The
funding transaction should create a PDA and the release transaction should pay
Sam without switching to an escrow Phantom account.
