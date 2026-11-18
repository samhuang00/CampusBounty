"use client";

import { useState } from "react";

type FundingStatus = "idle" | "funding" | "funded";

export default function EscrowPaymentPage() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [fundingStatus, setFundingStatus] =
    useState<FundingStatus>("idle");

  function securePayment() {
    if (!walletConnected) return;

    setFundingStatus("funding");

    window.setTimeout(() => {
      setFundingStatus("funded");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <div className="flex items-center gap-5">
            <span className="hidden rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-bold text-emerald-800 sm:inline-flex">
              Post Mode
            </span>

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

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
              OP
            </div>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <a
          href="/tasks/laundry-help/agreement"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to Task Agreement
        </a>

        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Secure payment
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Fund the TaskCard escrow
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Secure the agreed payment before work begins. Funds will remain
            protected until the task is completed and approved.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Main payment section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            {fundingStatus !== "funded" ? (
              <>
                <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start">
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

                  <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                    Agreement accepted
                  </span>
                </div>

                {/* Payment breakdown */}
                <div className="py-7">
                  <h2 className="text-xl font-bold">Payment breakdown</h2>

                  <div className="mt-5 space-y-4">
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
                        <p className="font-medium">Expense allowance</p>
                        <p className="mt-1 text-sm text-slate-500">
                          Only documented expenses will be reimbursed
                        </p>
                      </div>

                      <p className="text-lg font-bold">Up to $3</p>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
                      <div>
                        <p className="text-lg font-bold">
                          Maximum secured total
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Unused expense funds return to the requester
                        </p>
                      </div>

                      <p className="text-3xl font-bold text-emerald-700">
                        $21
                      </p>
                    </div>
                  </div>
                </div>

                {/* Wallet */}
                <div className="border-t border-slate-200 pt-7">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="text-xl font-bold">Solana wallet</h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Connect the wallet that will fund this TaskCard.
                      </p>
                    </div>

                    {!walletConnected ? (
                      <button
                        type="button"
                        onClick={() => setWalletConnected(true)}
                        className="rounded-xl border border-emerald-600 px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
                      >
                        Connect wallet
                      </button>
                    ) : (
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                          <span className="font-bold text-emerald-900">
                            7xK9...4Lm2
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-emerald-700">
                          Wallet connected
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-7 rounded-xl bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-600">Network</span>
                      <span className="font-bold">Solana Devnet</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span className="text-slate-600">
                        Amount to secure
                      </span>
                      <span className="font-bold">$21 equivalent</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={securePayment}
                    disabled={
                      !walletConnected || fundingStatus === "funding"
                    }
                    className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {!walletConnected
                      ? "Connect wallet to continue"
                      : fundingStatus === "funding"
                        ? "Securing payment..."
                        : "Secure $21 in escrow"}
                  </button>

                  <p className="mt-3 text-center text-sm text-slate-500">
                    This prototype uses a simulated Solana Devnet transaction.
                  </p>
                </div>
              </>
            ) : (
              /* Successful funding state */
              <div className="py-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
                    ✓
                  </div>
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-widest text-emerald-700">
                  Payment secured
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  The TaskCard is ready to begin
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  The $21 maximum payment is now secured. Sam and Olivia have
                  been notified that work may begin.
                </p>

                <div className="mx-auto mt-7 max-w-lg rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-left">
                  <div className="flex justify-between gap-4">
                    <span className="text-emerald-800">
                      Secured amount
                    </span>
                    <span className="font-bold text-emerald-950">$21</span>
                  </div>

                  <div className="mt-3 flex justify-between gap-4">
                    <span className="text-emerald-800">Network</span>
                    <span className="font-bold text-emerald-950">
                      Solana Devnet
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between gap-4">
                    <span className="text-emerald-800">Transaction</span>
                    <span className="font-bold text-emerald-950">
                      4Gm8...9Qp2
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                      href="/tasks/laundry-help/manage"
                    className="rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white hover:bg-emerald-700"
                  >
                   View active TaskCard
                  </a>

                  <a
                    href="/messages"
                    className="rounded-xl border border-slate-300 px-6 py-4 font-bold hover:border-emerald-600 hover:text-emerald-700"
                  >
                    Message worker
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* Side panel */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Task Agreement
              </p>

              <h2 className="mt-3 text-xl font-bold">
                Both parties have accepted
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold">Olivia Parker</p>
                    <p className="text-sm text-slate-500">Requester</p>
                  </div>

                  <span className="font-bold text-emerald-700">
                    ✓ Accepted
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold">Sam Huang</p>
                    <p className="text-sm text-slate-500">Worker</p>
                  </div>

                  <span className="font-bold text-emerald-700">
                    ✓ Accepted
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                Escrow protection
              </p>

              <h2 className="mt-3 text-xl font-bold">
                Do not pay outside CampusBounty
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Secured funds remain protected while the task is active.
                Payment is released only after the completion proof is
                reviewed and approved.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-bold text-amber-900">
                Work must not begin yet
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-800">
                The worker should begin only after the payment status changes
                to secured.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}