"use client";

import { useEffect, useState } from "react";
import {
  getLaundryTaskStatus,
  type LaundryTaskStatus,
} from "@/lib/campusBountyState";

type StatusContent = {
  badge: string;
  badgeClass: string;
  label: string;
  heading: string;
  description: string;
  progressTitle: string;
  progressDescription: string;
  progressIcon: string;
  progressClass: string;
  action?: {
    href: string;
    label: string;
  };
};

const statusContent: Record<LaundryTaskStatus, StatusContent> = {
  open: {
    badge: "Setup in progress",
    badgeClass: "bg-slate-100 text-slate-700",
    label: "TaskCard open",
    heading: "This TaskCard is accepting applications",
    description:
      "Review applicants and select a worker before creating the agreement.",
    progressTitle: "Select a worker",
    progressDescription: "Waiting for a worker to be selected",
    progressIcon: "3",
    progressClass: "border-slate-200 bg-slate-50 text-slate-700",
    action: {
      href: "/tasks/laundry-help/applicants",
      label: "Review applicants",
    },
  },

  applied: {
    badge: "Application received",
    badgeClass: "bg-blue-100 text-blue-700",
    label: "Applicant available",
    heading: "Sam applied to your TaskCard",
    description:
      "Review Sam’s application and select him before creating the agreement.",
    progressTitle: "Select a worker",
    progressDescription: "Sam is waiting for your decision",
    progressIcon: "3",
    progressClass: "border-blue-200 bg-blue-50 text-blue-700",
    action: {
      href: "/tasks/laundry-help/applicants",
      label: "Review application",
    },
  },

  selected: {
    badge: "Worker selected",
    badgeClass: "bg-blue-100 text-blue-700",
    label: "Agreement required",
    heading: "Sam has been selected",
    description:
      "Complete the Task Agreement and secure payment before Sam begins work.",
    progressTitle: "Secure payment",
    progressDescription: "Complete the agreement and fund escrow",
    progressIcon: "3",
    progressClass: "border-blue-200 bg-blue-50 text-blue-700",
    action: {
      href: "/tasks/laundry-help/agreement",
      label: "Continue agreement",
    },
  },

  funded: {
    badge: "Awaiting acceptance",
    badgeClass: "bg-blue-100 text-blue-700",
    label: "Waiting for worker",
    heading: "Sam is reviewing the funded offer",
    description:
      "Sam has been notified that payment is secured. The TaskCard will become active only after he accepts the offer.",
    progressTitle: "Worker acceptance",
    progressDescription: "Waiting for Sam to accept",
    progressIcon: "3",
    progressClass: "border-blue-200 bg-blue-50 text-blue-700",
  },

  active: {
    badge: "In progress",
    badgeClass: "bg-emerald-100 text-emerald-800",
    label: "Task active",
    heading: "Sam accepted the funded offer",
    description:
      "The TaskCard is now active and Sam can begin the laundry task. You will be notified when he submits completion proof.",
    progressTitle: "Complete the task",
    progressDescription: "Sam is completing the work",
    progressIcon: "3",
    progressClass: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },

  submitted: {
    badge: "Proof submitted",
    badgeClass: "bg-amber-100 text-amber-800",
    label: "Approval required",
    heading: "Sam submitted completion proof",
    description:
      "Review the laundry photos and expense proof. Approving the work will complete the TaskCard and release payment.",
    progressTitle: "Review proof",
    progressDescription: "Waiting for your approval",
    progressIcon: "!",
    progressClass: "border-amber-200 bg-amber-50 text-amber-800",
    action: {
      href: "/tasks/laundry-help/review",
      label: "Review completion proof",
    },
  },

  completed: {
    badge: "Completed",
    badgeClass: "bg-emerald-100 text-emerald-800",
    label: "Payment released",
    heading: "The TaskCard has been completed",
    description:
      "You approved Sam’s completion proof and the secured payment was released.",
    progressTitle: "Task completed",
    progressDescription: "Work approved and payment released",
    progressIcon: "✓",
    progressClass: "border-emerald-200 bg-emerald-50 text-emerald-800",
    action: {
      href: "/dashboard/post",
      label: "Return to dashboard",
    },
  },
};

export default function ManageLaundryTaskPage() {
  const [taskStatus, setTaskStatus] =
    useState<LaundryTaskStatus>("funded");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const syncTaskStatus = () => {
      setTaskStatus(getLaundryTaskStatus());
    };

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
        <p className="font-medium text-slate-600">
          Loading TaskCard status...
        </p>
      </main>
    );
  }

  const content = statusContent[taskStatus];
  const isCompleted = taskStatus === "completed";
  const paymentText = isCompleted
    ? "Payment released to Sam"
    : "$21 maximum secured in escrow";

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

            <a
              href="/dashboard/post"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800"
              aria-label="Open creator dashboard"
            >
              OP
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <a
          href="/dashboard/post"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to Post Mode dashboard
        </a>

        <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-emerald-800">
                {isCompleted ? "Completed TaskCard" : "Active TaskCard"}
              </span>

              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${content.badgeClass}`}
              >
                {content.badge}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight">
              Wash, dry, and fold one load of laundry
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              {content.description}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5">
            <p className="font-bold text-emerald-900">
              {isCompleted ? "✓ Payment released" : "✓ Payment secured"}
            </p>

            <p className="mt-1 text-emerald-700">{paymentText}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Task progress</h2>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-emerald-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                    ✓
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    Agreement accepted
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Both parties agreed
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                    ✓
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    Payment secured
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Escrow is funded
                  </p>
                </div>

                <div
                  className={`rounded-2xl border-2 p-6 ${content.progressClass}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-current font-bold">
                    <span className="text-white">{content.progressIcon}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold">
                    {content.progressTitle}
                  </h3>

                  <p className="mt-1 opacity-80">
                    {content.progressDescription}
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Current status</h2>

              <div
                className={`mt-6 rounded-2xl border p-6 ${content.progressClass}`}
              >
                <p className="text-sm font-bold uppercase tracking-wider">
                  {content.label}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {content.heading}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {content.description}
                </p>

                {content.action && (
                  <a
                    href={content.action.href}
                    className="mt-5 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
                  >
                    {content.action.label}
                  </a>
                )}
              </div>

              <div className="mt-6 grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-500">Deadline</p>
                  <p className="mt-1 font-bold">Tomorrow, 6:00 PM</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Task payment</p>
                  <p className="mt-1 font-bold">$18 fixed</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Expense allowance
                  </p>
                  <p className="mt-1 font-bold">Up to $3</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">
                Completion requirements
              </h2>

              <ul className="mt-5 space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Photo of the laundry inside the washing machine
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Photo of the completed, folded clothes
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-emerald-700">✓</span>
                  Payment proof for any claimed laundry expense
                </li>
              </ul>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Assigned worker
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  SH
                </div>

                <div>
                  <h2 className="text-xl font-bold">Sam Huang</h2>
                  <p className="text-sm text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-slate-600">
                <p>★ 4.9 rating</p>
                <p>
                  {isCompleted
                    ? "9 completed TaskCards"
                    : "8 completed TaskCards"}
                </p>
              </div>

              <a
                href="/messages"
                className="mt-6 block rounded-xl border border-slate-300 px-5 py-3 text-center font-bold hover:border-emerald-600 hover:text-emerald-700"
              >
                Message Sam
              </a>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {isCompleted ? "Released payment" : "Secured payment"}
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Task payment</span>
                  <span className="font-bold">$18</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Expense allowance
                  </span>
                  <span className="font-bold">Up to $3</span>
                </div>

                <div className="flex justify-between border-t border-slate-200 pt-4">
                  <span className="font-bold">
                    {isCompleted ? "Payment released" : "Maximum secured"}
                  </span>

                  <span className="font-bold text-emerald-700">
                    {isCompleted ? "$18" : "$21"}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="font-bold">
                  {isCompleted
                    ? "Payment released successfully"
                    : "Secured through escrow"}
                </p>
                <p className="mt-1">Transaction: 4Gm8...9Qp2</p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}