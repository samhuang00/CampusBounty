"use client";

import { useEffect, useState } from "react";
import {
  getLaundryTaskStatus,
  setLaundryTaskStatus,
  type LaundryTaskStatus,
} from "@/lib/campusBountyState";

export default function ActiveLaundryTaskPage() {
  const [taskStatus, setTaskStatus] =
    useState<LaundryTaskStatus>("active");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    function syncTaskStatus() {
      setTaskStatus(getLaundryTaskStatus());
    }

    syncTaskStatus();
    setIsReady(true);

    window.addEventListener("storage", syncTaskStatus);
    window.addEventListener("focus", syncTaskStatus);

    return () => {
      window.removeEventListener("storage", syncTaskStatus);
      window.removeEventListener("focus", syncTaskStatus);
    };
  }, []);

  if (!isReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5]">
        <p className="font-medium text-slate-600">Loading TaskCard...</p>
      </main>
    );
  }

  const submitted = taskStatus === "submitted";
  const completed = taskStatus === "completed";

  function submitWork() {
    setLaundryTaskStatus("submitted");
    setTaskStatus("submitted");
  }

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <div className="flex items-center gap-5">
            <span className="hidden rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-bold text-emerald-800 sm:inline-flex">
              Earn Mode
            </span>

            <a
              href="/dashboard/earn"
              className="hidden font-medium text-slate-600 hover:text-emerald-700 sm:block"
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
              className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800"
            >
              SH
            </a>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <a
          href="/dashboard/earn"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to dashboard
        </a>

        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                {completed
                  ? "Completed TaskCard"
                  : submitted
                    ? "Work submitted"
                    : "Active TaskCard"}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  completed
                    ? "bg-emerald-100 text-emerald-800"
                    : submitted
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-700"
                }`}
              >
                {completed
                  ? "✓ Payment released"
                  : submitted
                    ? "Awaiting approval"
                    : "● In progress"}
              </span>
            </div>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight">
              Wash, dry, and fold one load of laundry
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              {completed
                ? "Olivia approved your work and released your payment."
                : submitted
                  ? "Your completion proof is waiting for Olivia’s approval."
                  : "Complete the task and submit the required proof before the deadline."}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
            <p className="text-sm font-bold text-emerald-900">
              {completed ? "✓ Payment released" : "✓ Payment secured"}
            </p>

            <p className="mt-1 text-sm text-emerald-700">
              {completed
                ? "$18 released to your earnings"
                : "$21 maximum secured in escrow"}
            </p>
          </div>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <section className="space-y-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold">Task progress</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <ProgressCard
                  title="Agreement accepted"
                  description="Both parties agreed"
                  complete
                />

                <ProgressCard
                  title="Payment secured"
                  description="Escrow was funded"
                  complete
                />

                <ProgressCard
                  title={
                    completed
                      ? "Payment released"
                      : submitted
                        ? "Requester review"
                        : "Complete the task"
                  }
                  description={
                    completed
                      ? "TaskCard completed"
                      : submitted
                        ? "Waiting for Olivia"
                        : "Submit proof below"
                  }
                  complete={completed}
                  number={submitted && !completed ? "3" : undefined}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold">Task instructions</h2>

              <p className="mt-5 leading-8 text-slate-600">
                Wash, dry, and fold one regular-sized load of laundry. Olivia
                will provide the detergent, laundry bag and washing
                instructions. Return the clothes folded and placed inside the
                original laundry bag.
              </p>

              <div className="mt-6 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold text-slate-500">Deadline</p>
                  <p className="mt-1 font-bold">Tomorrow, 6:00 PM</p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">Location</p>
                  <p className="mt-1 font-bold">Cardinal Gardens</p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-1 font-bold">1–2 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              {completed ? (
                <CompletedFeedback />
              ) : submitted ? (
                <SubmittedFeedback />
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    submitWork();
                  }}
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                    Complete TaskCard
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Submit completion proof
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Olivia will review your submission before the secured
                    payment is released.
                  </p>

                  <div className="mt-6 rounded-xl bg-slate-50 p-5">
                    <p className="font-bold">Required proof</p>

                    <ul className="mt-3 space-y-3 text-slate-600">
                      <li>1. Photo of the laundry inside the washing machine</li>
                      <li>2. Photo of the clean and folded clothes</li>
                      <li>3. Payment proof for any laundry expenses</li>
                    </ul>
                  </div>

                  <div className="mt-7">
                    <label className="block text-sm font-bold text-slate-700">
                      Completion photos
                    </label>

                    <label
                      htmlFor="completionPhotos"
                      className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-9 text-center hover:border-emerald-500 hover:bg-emerald-50"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xl">
                        ＋
                      </span>
                      <span className="mt-3 font-bold">
                        Upload completion photos
                      </span>
                      <span className="mt-1 text-sm text-slate-500">
                        Select one or more images
                      </span>
                    </label>

                    <input
                      id="completionPhotos"
                      type="file"
                      accept="image/png,image/jpeg,image/heic"
                      multiple
                      className="hidden"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-slate-700">
                      Expense payment proof
                    </label>

                    <p className="mt-1 text-sm text-slate-500">
                      Required only if you used part of the $3 allowance.
                    </p>

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/heic,application/pdf"
                      className="mt-3 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-slate-700">
                      Expense amount
                    </label>

                    <div className="mt-2 flex rounded-xl border border-slate-300">
                      <span className="flex items-center border-r border-slate-300 px-4 font-bold text-slate-600">
                        $
                      </span>

                      <input
                        type="number"
                        min="0"
                        max="3"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full rounded-r-xl px-4 py-3 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-slate-700">
                      Note to Olivia
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Add any useful details about the completed task."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none"
                    />
                  </div>

                  <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-emerald-600"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      I confirm that I completed the TaskCard according to the
                      agreed requirements.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white hover:bg-emerald-700"
                  >
                    Submit work for approval
                  </button>
                </form>
              )}
            </div>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {completed ? "Payment released" : "Payment"}
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Task payment</span>
                  <span className="font-bold">$18</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Expense allowance</span>
                  <span className="font-bold">Up to $3</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4">
                  <span className="font-bold">
                    {completed ? "Amount earned" : "Maximum secured"}
                  </span>
                  <span className="font-bold text-emerald-700">
                    {completed ? "$18" : "$21"}
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                <p className="font-bold text-emerald-900">
                  {completed
                    ? "✓ Released to your earnings"
                    : "✓ Secured in escrow"}
                </p>

                <p className="mt-1 text-sm text-emerald-700">
                  Transaction: 4Gm8...9Qp2
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Requester
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  OP
                </div>

                <div>
                  <p className="text-lg font-bold">Olivia Parker</p>
                  <p className="text-sm font-medium text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>

              <p className="mt-5 text-slate-600">★ 4.9 rating · 12 reviews</p>

              <a
                href="/messages"
                className="mt-5 block rounded-xl border border-slate-300 px-5 py-3 text-center font-bold hover:border-emerald-600"
              >
                Message Olivia
              </a>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                Payment protection
              </p>

              <h2 className="mt-3 text-xl font-bold">
                Keep proof inside CampusBounty
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Your messages, Task Agreement and completion proof can be used
                as evidence if a dispute occurs.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function ProgressCard({
  title,
  description,
  complete = false,
  number,
}: {
  title: string;
  description: string;
  complete?: boolean;
  number?: string;
}) {
  return (
    <div
      className={`rounded-xl p-5 ${
        complete
          ? "bg-emerald-50"
          : "border-2 border-blue-200 bg-blue-50"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full font-bold text-white ${
          complete ? "bg-emerald-600" : "bg-blue-600"
        }`}
      >
        {complete ? "✓" : number || "3"}
      </div>

      <p className="mt-3 font-bold">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </div>
  );
}

function SubmittedFeedback() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700">
        ✓
      </div>

      <p className="mt-7 text-sm font-bold uppercase tracking-widest text-emerald-700">
        Work submitted
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Your completion proof was sent to Olivia
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        Your payment remains secured in escrow while Olivia reviews your work.
      </p>

      <div className="mx-auto mt-7 max-w-lg rounded-xl border border-amber-200 bg-amber-50 p-5">
        <p className="font-bold text-amber-900">
          Waiting for requester approval
        </p>
        <p className="mt-1 text-sm text-amber-800">
          You will be notified when Olivia approves the work.
        </p>
      </div>
    </div>
  );
}

function CompletedFeedback() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700">
        ✓
      </div>

      <p className="mt-7 text-sm font-bold uppercase tracking-widest text-emerald-700">
        Payment released
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Olivia approved your completed TaskCard
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        You earned $18 for completing the laundry task. The TaskCard has been
        moved to your completed history.
      </p>

      <div className="mx-auto mt-7 max-w-lg rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-xl font-bold text-emerald-900">+$18 earned</p>
        <p className="mt-1 text-sm text-emerald-800">
          Payment successfully released
        </p>
      </div>

      <a
        href="/dashboard/earn"
        className="mt-8 inline-block rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white hover:bg-emerald-700"
      >
        Return to dashboard
      </a>
    </div>
  );
}