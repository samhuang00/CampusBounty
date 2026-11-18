"use client";

import { useEffect, useState } from "react";
import { address, lamports } from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import { useConnectedWallet } from "@solana/kit-plugin-wallet/react";
import { useClient } from "@solana/react";
import WalletConnectButton from "@/app/components/wallet-connect-button";
import type { AppClient } from "@/app/providers";
import { setLaundryTaskStatus } from "@/lib/campusBountyState";

type FundingStatus = "idle" | "funding" | "funded";

const ESCROW_ADDRESS =
  "DdAidKA4KMx9b5Q1avZCBv9m1iXNvtw1NFVC7KqgCY3d";

const ESCROW_AMOUNT = 21_000_000n;

export default function EscrowPaymentPage() {
  const client = useClient<AppClient>();
  const connectedWallet = useConnectedWallet(client);

  const [mounted, setMounted] = useState(false);
  const [fundingStatus, setFundingStatus] =
    useState<FundingStatus>("idle");
  const [transactionSignature, setTransactionSignature] =
    useState<string | null>(null);
  const [transactionError, setTransactionError] =
    useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const walletConnected =
    mounted && Boolean(connectedWallet?.signer);

  async function securePayment() {
    if (!connectedWallet?.signer || fundingStatus !== "idle") {
      return;
    }

    setFundingStatus("funding");
    setTransactionError(null);

    try {
      const transferInstruction = getTransferSolInstruction({
        source: connectedWallet.signer,
        destination: address(ESCROW_ADDRESS),
        amount: lamports(ESCROW_AMOUNT),
      });

      const result = await client.sendTransaction([
        transferInstruction,
      ]);

      const signature = String(result.context.signature);

      setTransactionSignature(signature);
      setFundingStatus("funded");
      setLaundryTaskStatus("funded");
    } catch (error) {
      console.error(error);

      setFundingStatus("idle");
      setTransactionError(
        error instanceof Error
          ? error.message
          : "The transaction could not be completed.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <a href="/" className="text-xl font-bold">
              CampusBounty
            </a>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
              Post Mode
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/dashboard/post"
              className="font-medium text-slate-600 hover:text-emerald-700"
            >
              Dashboard
            </a>

            <a
              href="/messages"
              className="font-medium text-slate-600 hover:text-emerald-700"
            >
              Messages
            </a>

            <a
              href="/choose-mode"
              className="rounded-xl border border-slate-300 px-4 py-2 font-bold hover:border-emerald-600"
            >
              Switch mode
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <a
          href="/tasks/laundry-help/agreement/accepted"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to agreement
        </a>

        <div className="mt-8">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-emerald-800">
            Escrow funding
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            Secure the TaskCard payment
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Fund the TaskCard before Sam begins working. This demo
            records the payment transfer on Solana Devnet.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                  Laundry
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  Wash, dry, and fold one load of laundry
                </h2>

                <p className="mt-2 text-slate-600">
                  Cardinal Gardens · Due tomorrow at 6:00 PM
                </p>
              </div>

              <span className="self-start rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                Agreement accepted
              </span>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold">
                Payment breakdown
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">Task payment</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Released to the worker after approval
                    </p>
                  </div>

                  <p className="text-lg font-bold">$18</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium">
                      Expense allowance
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Only documented expenses are reimbursed
                    </p>
                  </div>

                  <p className="text-lg font-bold">Up to $3</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div>
                    <p className="text-lg font-bold">
                      Maximum secured total
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Unused expense funds return to Olivia
                    </p>
                  </div>

                  <p className="text-3xl font-bold text-emerald-700">
                    $21
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="grid gap-6 sm:grid-cols-[1fr_320px]">
                <div>
                  <h2 className="text-2xl font-bold">
                    Solana wallet
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Connect the wallet that will fund this
                    TaskCard.
                  </p>
                </div>

                <WalletConnectButton />
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">Network</span>
                  <span className="font-bold">Solana Devnet</span>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                  <span className="text-slate-600">
                    Demo amount sent
                  </span>
                  <span className="font-bold">
                    0.021 Devnet SOL
                  </span>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                  <span className="text-slate-600">
                    Escrow wallet
                  </span>
                  <span className="font-mono text-sm font-bold">
                    DdAi...CY3d
                  </span>
                </div>
              </div>

              {fundingStatus === "funded" ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <p className="text-lg font-bold text-emerald-900">
                    ✓ Payment recorded on Solana Devnet
                  </p>

                  <p className="mt-2 text-emerald-800">
                    The transaction was confirmed and the TaskCard
                    is now funded.
                  </p>

                  {transactionSignature ? (
                    <a
                      href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-bold text-emerald-700 underline hover:text-emerald-900"
                    >
                      View transaction on Solana Explorer ↗
                    </a>
                  ) : null}

                  <a
                    href="/tasks/laundry-help/manage"
                    className="mt-5 block rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white hover:bg-emerald-700"
                  >
                    View funded TaskCard
                  </a>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={securePayment}
                  disabled={
                    !walletConnected ||
                    fundingStatus === "funding"
                  }
                  className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {!walletConnected
                    ? "Connect wallet to continue"
                    : fundingStatus === "funding"
                      ? "Confirm in Phantom..."
                      : "Secure $21 in escrow"}
                </button>
              )}

              {transactionError ? (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <p className="font-bold">
                    Transaction unsuccessful
                  </p>
                  <p className="mt-1 break-words">
                    {transactionError}
                  </p>
                </div>
              ) : null}

              <p className="mt-4 text-center text-sm leading-6 text-slate-500">
                This prototype sends 0.021 Devnet SOL to a
                demonstration custody wallet. Devnet SOL has no
                monetary value.
              </p>
            </div>
          </section>

          <aside className="space-y-8 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Task agreement
              </p>

              <h2 className="mt-4 text-xl font-bold">
                Both parties have accepted
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold">Olivia Parker</p>
                    <p className="text-sm text-slate-500">
                      Requester
                    </p>
                  </div>

                  <span className="font-bold text-emerald-700">
                    ✓ Accepted
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold">Sam Huang</p>
                    <p className="text-sm text-slate-500">
                      Worker
                    </p>
                  </div>

                  <span className="font-bold text-emerald-700">
                    ✓ Accepted
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                Blockchain record
              </p>

              <h2 className="mt-4 text-xl font-bold">
                Verifiable Devnet transaction
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                After Phantom confirms the transfer, the transaction
                can be independently viewed on Solana Explorer.
              </p>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-7">
              <h2 className="font-bold text-amber-900">
                Work must not begin yet
              </h2>

              <p className="mt-3 leading-7 text-amber-800">
                Sam should begin only after the payment transaction
                succeeds and the TaskCard status changes to funded.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}