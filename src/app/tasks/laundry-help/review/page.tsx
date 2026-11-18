"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { address, lamports } from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import { useConnectedWallet } from "@solana/kit-plugin-wallet/react";
import { useClient } from "@solana/react";
import WalletConnectButton from "@/app/components/wallet-connect-button";
import type { AppClient } from "@/app/providers";
import {
  getCurrentUser,
  setLaundryTaskStatus,
} from "@/lib/campusBountyState";

type ReleaseStatus = "idle" | "releasing" | "released";

const ESCROW_ADDRESS =
  "DdAidKA4KMx9b5Q1avZCBv9m1iXNvtw1NFVC7KqgCY3d";

const SAM_ADDRESS =
  "93P7YGVKFQZiSzLoE9Eg3D5rDzsgKxAYWmgCC5xg32RG";

const OLIVIA_ADDRESS =
  "WH3iyZW6KyHJiCGsX2vkTM6Up769o6BCMbgteLjPZHE";

const WORKER_PAYMENT = 18_000_000n;
const REQUESTER_REFUND = 2_500_000n;

function shortenAddress(walletAddress: string) {
  return `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`;
}

export default function ReviewLaundryTaskPage() {
  const router = useRouter();
  const client = useClient<AppClient>();
  const connectedWallet = useConnectedWallet(client);

  const [mounted, setMounted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [releaseStatus, setReleaseStatus] =
    useState<ReleaseStatus>("idle");
  const [transactionSignature, setTransactionSignature] =
    useState<string | null>(null);
  const [transactionError, setTransactionError] =
    useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    if (getCurrentUser() !== "olivia") {
      router.replace(
        "/login?next=/tasks/laundry-help/review",
      );
      return;
    }

    setIsReady(true);
  }, [router]);

  const connectedAddress = connectedWallet
    ? String(connectedWallet.account.address)
    : "";

  const walletConnected =
    mounted && Boolean(connectedWallet?.signer);

  const escrowWalletConnected =
    walletConnected && connectedAddress === ESCROW_ADDRESS;

  async function approveAndReleasePayment() {
    if (!connectedWallet?.signer) {
      return;
    }

    if (connectedAddress !== ESCROW_ADDRESS) {
      setTransactionError(
        "Switch Phantom to the Escrow account, then reconnect it.",
      );
      return;
    }

    setReleaseStatus("releasing");
    setTransactionError(null);

    try {
      const workerPaymentInstruction =
        getTransferSolInstruction({
          source: connectedWallet.signer,
          destination: address(SAM_ADDRESS),
          amount: lamports(WORKER_PAYMENT),
        });

      const requesterRefundInstruction =
        getTransferSolInstruction({
          source: connectedWallet.signer,
          destination: address(OLIVIA_ADDRESS),
          amount: lamports(REQUESTER_REFUND),
        });

      const result = await client.sendTransaction([
        workerPaymentInstruction,
        requesterRefundInstruction,
      ]);

      const signature = String(result.context.signature);

      setTransactionSignature(signature);
      setReleaseStatus("released");
      setLaundryTaskStatus("completed");
    } catch (error) {
      console.error(error);

      setReleaseStatus("idle");
      setTransactionError(
        error instanceof Error
          ? error.message
          : "The payment release could not be completed.",
      );
    }
  }

  if (!isReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5]">
        <p className="font-medium text-slate-600">
          Loading completion review...
        </p>
      </main>
    );
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
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <a
          href="/tasks/laundry-help/manage"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to TaskCard
        </a>

        <div className="mt-8">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
            Completion review
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            Review Sam’s completed work
          </h1>

          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Approve the submitted proof to release the secured
            Devnet payment to Sam.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                    Work submitted
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    Wash, dry, and fold one load of laundry
                  </h2>

                  <p className="mt-2 text-slate-600">
                    Submitted by Sam Huang
                  </p>
                </div>

                <span className="self-start rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
                  Awaiting approval
                </span>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Proof 1
                  </p>

                  <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-slate-200 text-center text-slate-600">
                    Laundry inside washing machine
                  </div>

                  <p className="mt-4 font-bold">
                    Washing proof submitted
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Proof 2
                  </p>

                  <div className="mt-4 flex h-48 items-center justify-center rounded-xl bg-slate-200 text-center text-slate-600">
                    Completed folded laundry
                  </div>

                  <p className="mt-4 font-bold">
                    Completion proof submitted
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Worker note
                </p>

                <p className="mt-3 leading-7 text-slate-700">
                  Laundry was washed according to the instructions,
                  dried completely and folded inside the original
                  laundry bag.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">
                Release payment
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Connect the Escrow Phantom account. Approval will
                create one Solana Devnet transaction that pays Sam
                and returns the unused allowance to Olivia.
              </p>

              <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_320px]">
                <div>
                  <p className="font-bold">Required wallet</p>
                  <p className="mt-2 font-mono text-sm text-slate-600">
                    {shortenAddress(ESCROW_ADDRESS)}
                  </p>

                  {walletConnected && !escrowWalletConnected ? (
                    <p className="mt-3 text-sm font-bold text-amber-700">
                      The connected wallet is not the Escrow
                      account.
                    </p>
                  ) : null}
                </div>

                <WalletConnectButton />
              </div>

              <div className="mt-7 rounded-2xl bg-slate-50 p-6">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-600">
                    Payment to Sam
                  </span>
                  <span className="font-bold">
                    0.018 Devnet SOL
                  </span>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                  <span className="text-slate-600">
                    Return to Olivia
                  </span>
                  <span className="font-bold">
                    0.0025 Devnet SOL
                  </span>
                </div>

                <div className="mt-4 flex justify-between border-t border-slate-200 pt-4">
                  <span className="text-slate-600">
                    Network
                  </span>
                  <span className="font-bold">Solana Devnet</span>
                </div>
              </div>

              {releaseStatus === "released" ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <p className="text-lg font-bold text-emerald-900">
                    ✓ Work approved and payment released
                  </p>

                  <p className="mt-2 text-emerald-800">
                    Sam’s payment was recorded on Solana Devnet and
                    the TaskCard is now complete.
                  </p>

                  {transactionSignature ? (
                    <a
                      href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-bold text-emerald-700 underline hover:text-emerald-900"
                    >
                      View release on Solana Explorer ↗
                    </a>
                  ) : null}

                  <a
                    href="/dashboard/post"
                    className="mt-5 block rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white hover:bg-emerald-700"
                  >
                    Return to dashboard
                  </a>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={approveAndReleasePayment}
                  disabled={
                    !escrowWalletConnected ||
                    releaseStatus === "releasing"
                  }
                  className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {!walletConnected
                    ? "Connect Escrow wallet to continue"
                    : !escrowWalletConnected
                      ? "Switch Phantom to Escrow"
                      : releaseStatus === "releasing"
                        ? "Confirm release in Phantom..."
                        : "Approve work and release payment"}
                </button>
              )}

              {transactionError ? (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <p className="font-bold">
                    Payment release unsuccessful
                  </p>
                  <p className="mt-1 break-words">
                    {transactionError}
                  </p>
                </div>
              ) : null}

              <p className="mt-4 text-center text-sm leading-6 text-slate-500">
                Devnet SOL is test currency with no monetary value.
                This prototype uses a demonstration custody wallet,
                not a production smart-contract escrow.
              </p>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Worker
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  SH
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Sam Huang
                  </h2>
                  <p className="text-sm text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>

              <p className="mt-5 text-slate-600">
                Payout wallet
              </p>

              <p className="mt-2 font-mono text-sm font-bold">
                {shortenAddress(SAM_ADDRESS)}
              </p>
            </section>

            <section className="rounded-2xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                Payment protection
              </p>

              <h2 className="mt-4 text-xl font-bold">
                Verify before releasing
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Approving the work creates a permanent Devnet
                transaction that can be viewed in Solana Explorer.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}