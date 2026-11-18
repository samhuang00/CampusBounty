"use client";

import { useState } from "react";

export default function ReviewCompletionPage() {
  const [paymentReleased, setPaymentReleased] = useState(false);

  if (paymentReleased) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5] px-6 text-slate-950">
        <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-3xl font-bold text-white">
              ✓
            </div>
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-emerald-700">
            Payment released
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            TaskCard completed
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Sam’s work was approved. The $18 task payment and documented
            expenses have been released from escrow.
          </p>

          <div className="mt-8 rounded-2xl bg-emerald-50 p-6">
            <p className="text-sm text-emerald-700">Released to Sam</p>
            <p className="mt-1 text-3xl font-bold text-emerald-900">$21</p>
            <p className="mt-2 text-sm text-emerald-700">
              Solana Devnet · Transaction: 7Kd2...3Lm9
            </p>
          </div>

          <a
            href="/dashboard/post"
            className="mt-8 inline-block rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white hover:bg-emerald-700"
          >
            Return to Post Mode dashboard
          </a>
        </section>
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
            <a href="/dashboard/post" className="text-slate-600">
              Dashboard
            </a>

            <a href="/messages" className="text-slate-600">
              Messages
            </a>

            <a
              href="/dashboard/post"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800"
            >
              OP
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <a
          href="/tasks/laundry-help/manage"
          className="font-bold text-emerald-700"
        >
          ← Back to TaskCard management
        </a>

        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Completion submitted
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Review Sam’s completed work
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Confirm that the task and payment-proof requirements were completed
            before releasing the secured payment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Completion photos</h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="flex min-h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <div>
                    <div className="text-4xl">🧺</div>
                    <p className="mt-3 font-bold">
                      Laundry in washing machine
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Uploaded by Sam
                    </p>
                  </div>
                </div>

                <div className="flex min-h-64 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <div>
                    <div className="text-4xl">👕</div>
                    <p className="mt-3 font-bold">Completed folded laundry</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Uploaded by Sam
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Expense payment proof</h2>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-bold">Laundry machine payment</p>
                    <p className="mt-1 text-slate-500">
                      Payment proof uploaded by Sam
                    </p>
                  </div>

                  <p className="text-2xl font-bold">$3.00</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Worker note</h2>

              <p className="mt-4 leading-8 text-slate-600">
                The laundry was washed according to the provided instructions,
                dried and folded inside the original laundry bag.
              </p>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Payment summary
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Task payment</span>
                  <span className="font-bold">$18</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Approved expense</span>
                  <span className="font-bold">$3</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4">
                  <span className="font-bold">Total release</span>
                  <span className="font-bold text-emerald-700">$21</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
  localStorage.setItem("laundryTaskStatus", "completed");
  setPaymentReleased(true);
}}
                className="mt-7 w-full rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white hover:bg-emerald-700"
              >
                Approve and release $21
              </button>

              <a
                href="/messages"
                className="mt-3 block rounded-xl border border-slate-300 px-6 py-4 text-center font-bold hover:border-emerald-600"
              >
                Request changes
              </a>

              <p className="mt-4 text-center text-sm leading-6 text-slate-500">
                Approval releases the secured payment to Sam.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Worker
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  SH
                </div>

                <div>
                  <p className="text-lg font-bold">Sam Huang</p>
                  <p className="text-sm text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}