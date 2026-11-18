"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WorkerAgreementPage() {
  const router = useRouter();
  const [agreementAccepted, setAgreementAccepted] = useState(false);

  function acceptTaskCard() {
    if (!agreementAccepted) return;

    router.push("/tasks/laundry-help/active");
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
              Earn Mode
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/dashboard/earn"
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
              href="/dashboard/earn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800"
              aria-label="Open worker dashboard"
            >
              SH
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <a
          href="/dashboard/earn"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to Earn Mode dashboard
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              You were selected
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Review your funded TaskCard offer
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Olivia selected you for this TaskCard and has already secured the
              payment. Review the final terms before accepting.
            </p>

            <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-bold text-emerald-900">
                ✓ Payment secured before work begins
              </p>

              <p className="mt-2 leading-7 text-emerald-800">
                A maximum of $21 is secured through escrow: $18 for completing
                the task and up to $3 for documented laundry expenses.
              </p>
            </div>

            <section className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold">
                Wash, dry, and fold one load of laundry
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Requester</p>
                  <p className="mt-1 font-bold">Olivia Parker</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-bold">Cardinal Gardens</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Deadline</p>
                  <p className="mt-1 font-bold">Tomorrow, 6:00 PM</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Estimated time</p>
                  <p className="mt-1 font-bold">1.5–2 hours</p>
                </div>
              </div>
            </section>

            <section className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold">Required work</h2>

              <p className="mt-4 leading-8 text-slate-600">
                Wash, dry, and fold one regular-sized load of laundry. Olivia
                will provide the detergent, laundry bag and washing
                instructions. Return the clothes folded inside the original
                laundry bag.
              </p>
            </section>

            <section className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold">Completion requirements</h2>

              <ul className="mt-5 space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Photo of the laundry inside the washing machine
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Photo of the completed and folded clothes
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Payment proof for any claimed laundry expense
                </li>
              </ul>
            </section>

            <section className="mt-8 border-t border-slate-200 pt-8">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-5">
                <input
                  type="checkbox"
                  checked={agreementAccepted}
                  onChange={(event) =>
                    setAgreementAccepted(event.target.checked)
                  }
                  className="mt-1 h-5 w-5 accent-emerald-600"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I have reviewed and agree to the payment, deadline, required
                  work, completion requirements and platform conditions. I
                  understand that accepting activates this TaskCard.
                </span>
              </label>

              <button
                type="button"
                onClick={acceptTaskCard}
                disabled={!agreementAccepted}
                className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Accept and activate TaskCard
              </button>

              <a
                href="/dashboard/earn"
                className="mt-3 block w-full rounded-xl border border-slate-300 px-6 py-4 text-center font-bold hover:border-red-300 hover:text-red-700"
              >
                Decline offer
              </a>

              <p className="mt-4 text-center text-sm text-slate-500">
                Declining or allowing the offer to expire returns the secured
                funds to Olivia.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Funded offer
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Task payment</span>
                  <span className="font-bold">$18</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Expense allowance</span>
                  <span className="font-bold">Up to $3</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4">
                  <span className="font-bold">Maximum secured</span>
                  <span className="font-bold text-emerald-700">$21</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="font-bold">✓ Secured in escrow</p>
                <p className="mt-1">Solana Devnet</p>
                <p className="mt-1">Transaction: 4Gm8...9Qp2</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Requester
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  OP
                </div>

                <div>
                  <p className="text-lg font-bold">Olivia Parker</p>
                  <p className="text-sm text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>

              <a
                href="/messages"
                className="mt-6 block rounded-xl border border-slate-300 px-5 py-3 text-center font-bold hover:border-emerald-600 hover:text-emerald-700"
              >
                Message Olivia
              </a>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}