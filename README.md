# CampusBounty

## Post it. Do it. Get paid.

**CampusBounty doesn’t create another marketplace. It turns campus favors into protected agreements.**

Every campus runs on favors—but favors break down when money, trust, and strangers enter the equation. CampusBounty turns informal requests into protected TaskCards: the requester commits payment before work begins, the student completes the task with proof, and funds are released through a verifiable Solana transaction.

It transforms the invisible economy already operating around every university into a trusted way for students to get things done and earn on their own schedule.

## Live Demo

[Launch CampusBounty](https://campus-bounty.vercel.app)

## The Problem

Students constantly need help with small, immediate tasks: doing laundry, picking up packages, buying groceries, assembling furniture, delivering items, or providing tutoring.

These requests already exist in group chats, residence halls, and friend networks, but the process is unreliable:

- Students do not always know whom to trust.
- Workers cannot know whether they will actually be paid.
- Requesters have little protection if work is not completed.
- Informal agreements provide no transparent record.
- Traditional freelance platforms are not designed for campus life.

CampusBounty gives these everyday exchanges structure, accountability, and payment protection.

## How It Works

Each request becomes a **TaskCard** containing the work, compensation, deadline, expenses, and completion requirements.

The platform guides both participants through one protected workflow:

1. A requester posts a TaskCard.
2. Students apply to complete it.
3. The requester selects a worker.
4. Both parties accept the task agreement.
5. Payment is committed before work begins.
6. The worker completes the task and submits proof.
7. The requester reviews the proof.
8. Payment is released to the worker.
9. The transaction can be independently verified on Solana Explorer.

## Demo Experience

The hackathon prototype follows one complete laundry TaskCard from application to payout:

1. **Sam**, the worker, applies for the TaskCard.
2. **Olivia**, the requester, reviews the applicants and selects Sam.
3. Both participants confirm the agreement.
4. Olivia funds the demonstration custody wallet using Solana Devnet.
5. Sam accepts the funded offer and submits completion proof.
6. Olivia reviews and approves the completed work.
7. The custody wallet pays Sam and returns the unused allowance to Olivia.
8. The resulting transaction is displayed on Solana Explorer.

A **Reset demo** button on the login page allows judges to restart and replay the complete experience.

## Why Solana?

CampusBounty treats blockchain as invisible payment infrastructure—not as another task users must understand.

Solana provides:

- Fast payment settlement
- Low transaction fees
- Publicly verifiable transaction records
- Wallet-based payment authorization
- A foundation for future programmable escrow

Students interact with a familiar marketplace interface while Solana operates underneath the payment workflow.

## Solana Integration

The prototype uses:

- Solana Devnet
- Phantom wallet connections
- Native SOL transfer instructions
- Solana System Program
- Public transaction verification through Solana Explorer

### System Program ID

```text
11111111111111111111111111111111
```

The prototype creates genuine transactions on Solana Devnet. Devnet SOL is test currency and has no monetary value.

For this hackathon demonstration, payment custody is represented by a dedicated Phantom account controlled by the demo operator. This is a demonstration custody wallet—not a production-ready or trustless smart-contract escrow.

A production version would replace the demonstration account with an audited on-chain escrow program.

## Demonstration Payment

The sample TaskCard commits `0.021 Devnet SOL`.

After the requester approves the work:

- `0.018 Devnet SOL` is paid to Sam.
- `0.0025 Devnet SOL` is returned to Olivia as the unused allowance.
- The custody wallet pays the Solana network fee.

The completed transaction can be inspected directly through Solana Explorer.

## What Makes CampusBounty Different?

CampusBounty is not simply a listing board for student jobs. It creates a complete trust and payment workflow around informal campus work.

### Campus-specific trust

The product is designed around verified university communities rather than anonymous global marketplaces.

### Agreements before work

Both parties see and accept the responsibilities, payment, expenses, and completion requirements before the task begins.

### Payment before labor

The workflow requires the requester to commit funds before the worker starts, reducing uncertainty about payment.

### Proof-based completion

Workers submit evidence of completion, giving requesters a clear approval step before funds are released.

### Verifiable settlement

Payments produce a permanent Solana Devnet transaction that can be independently inspected.

### Consumer-first blockchain

Users experience TaskCards, agreements, proof, and payment—not complicated blockchain terminology.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- Solana Kit
- Solana React
- Phantom Wallet
- Solana Devnet
- Vercel

## Local Setup

### Requirements

- Node.js 20 or newer
- npm
- Phantom Wallet configured for Solana Devnet

### Installation

```bash
git clone https://github.com/samhuang00/CampusBounty.git
cd CampusBounty
npm install
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## Architecture

```text
CampusBounty
├── Next.js consumer interface
├── Requester and worker demo identities
├── Browser-based TaskCard state
├── Agreement and completion workflow
├── Phantom wallet connection
├── Solana payment instructions
└── Solana Explorer transaction verification
```

The hackathon prototype stores workflow state in the browser. This allows judges to experience and reset the complete two-sided marketplace flow without creating accounts or configuring a database.

## Current Prototype Scope

The current version demonstrates:

- Requester and worker modes
- TaskCard discovery
- Worker applications
- Applicant selection
- Two-party task agreements
- Phantom wallet connections
- Devnet payment funding
- Completion-proof submission
- Requester approval
- Worker payout
- Requester refund
- Solana Explorer verification
- Repeatable demo reset

## Future Development

The next version would introduce:

- An audited Solana escrow program
- University email verification
- Persistent database storage
- Production authentication
- Stablecoin-denominated TaskCards
- Reputation and review systems
- Dispute resolution
- Real-time messaging
- Push notifications
- Additional university communities

## Hackathon Submission

**Main Track:** Consumer Applications  
**Additional Award:** Best Use of Solana

## Author

Built by **Sam Huang** for UBC Hackathon 2026.