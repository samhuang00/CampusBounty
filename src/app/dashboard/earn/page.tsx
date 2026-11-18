"use client";

import { useEffect, useState } from "react";
export default function EarnDashboardPage() {
  const [paymentReleased, setPaymentReleased] = useState(false);

useEffect(() => {
  const taskStatus = localStorage.getItem("laundryTaskStatus");
  setPaymentReleased(taskStatus === "completed");
}, []);
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <a href="/" className="text-xl font-bold">
              CampusBounty
            </a>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              Earn Mode
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="/tasks"
              className="hidden font-medium text-slate-600 hover:text-emerald-700 md:block"
            >
              Browse TaskCards
            </a>

            <a
  href="/messages"
  className="font-medium text-slate-600 hover:text-emerald-700"
>
  Messages
</a>

            <a
              href="/choose-mode"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold hover:border-emerald-700 hover:text-emerald-700"
            >
              Switch mode
            </a>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
              SH
            </div>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Earn Mode dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold">Welcome back, Sam</h1>

            <p className="mt-2 text-slate-600">
              Track your applications, active work and earnings.
            </p>
          </div>

          <a
            href="/tasks"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white hover:bg-emerald-700"
          >
            Browse TaskCards
          </a>
        </div>
{paymentReleased && (
  <section className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:flex-row sm:items-center">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
        ✓
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
          Payment released
        </p>

        <h2 className="mt-1 text-xl font-bold">
          Olivia approved your completed TaskCard
        </h2>

        <p className="mt-1 text-slate-600">
          You earned $18 for completing the laundry task.
        </p>
      </div>
    </div>

    <a
      href="/tasks/laundry-help/active"
      className="shrink-0 font-bold text-emerald-700 hover:text-emerald-900"
    >
      View completed task →
    </a>
  </section>
)}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending applications</p>
            <p className="mt-2 text-3xl font-bold">
  {paymentReleased ? 0 : 1}
</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Active TaskCards</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Completed TaskCards</p>
            <p className="mt-2 text-3xl font-bold">
  {paymentReleased ? 9 : 8}
</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total earnings</p>
            <p className="mt-2 text-3xl font-bold">
  {paymentReleased ? "$144" : "$126"}
</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My applications</h2>

              <a href="#" className="font-bold text-emerald-700">
                View all
              </a>
            </div>

            <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-5 sm:flex-row">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      Selected · Payment secured
                    </span>

                    <span className="text-sm text-slate-500">
                      Action required
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Wash, dry, and fold one load of laundry
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Olivia Parker · Cardinal Gardens
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <p>
                      <span className="text-slate-500">Payment:</span>{" "}
                      <span className="font-bold">$18 fixed</span>
                    </p>

                    <p>
                      <span className="text-slate-500">Deadline:</span>{" "}
                      <span className="font-bold">Tomorrow, 6:00 PM</span>
                    </p>
                  </div>
                </div>

                <a
                  href="/tasks/laundry-help/agreement/worker"
                  className="self-start rounded-xl border border-slate-300 px-4 py-2 font-bold hover:border-emerald-700 hover:text-emerald-700"
                >
                  Review funded offer
                </a>
              </div>
            </article>

            <div className="mt-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Completed TaskCards</h2>

              <a href="#" className="font-bold text-emerald-700">
                View history
              </a>
            </div>

            <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <span className="text-sm font-bold text-emerald-700">
                    Completed
                  </span>

                  <h3 className="mt-2 text-lg font-bold">
                    Help set up a monitor
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Completed November 10 · ★ 5.0 rating
                  </p>
                </div>

                <p className="font-bold text-emerald-700">+$25 earned</p>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Recent updates</h2>

              <div className="mt-5 border-l-2 border-emerald-200 pl-4">
                <p className="font-bold">Application submitted</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Your laundry TaskCard application was sent to Olivia.
                </p>
                <p className="mt-2 text-xs text-slate-400">Today</p>
              </div>

              <div className="mt-6 border-l-2 border-slate-200 pl-4">
                <p className="font-bold">Payment released</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  You received $25 for completing a monitor setup.
                </p>
                <p className="mt-2 text-xs text-slate-400">November 10</p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                Earn more
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Find your next TaskCard
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Browse paid tasks posted by verified students nearby.
              </p>

              <a
                href="/tasks"
                className="mt-5 block rounded-xl bg-emerald-500 px-4 py-3 text-center font-bold text-slate-950 hover:bg-emerald-400"
              >
                Browse TaskCards
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}