"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getCurrentUser,
  getLaundryTaskStatus,
  type LaundryTaskStatus,
} from "@/lib/campusBountyState";

const statusLabels: Record<LaundryTaskStatus, string> = {
  open: "Open",
  applied: "Application received",
  selected: "Worker selected",
  funded: "Payment secured",
  active: "Active",
  submitted: "Proof submitted",
  completed: "Completed",
};

const primaryActions: Partial<
  Record<LaundryTaskStatus, { href: string; label: string }>
> = {
  applied: {
    href: "/tasks/laundry-help/applicants",
    label: "Review applicant",
  },
  selected: {
    href: "/tasks/laundry-help/agreement",
    label: "Continue agreement",
  },
  funded: {
    href: "/tasks/laundry-help/manage",
    label: "View funded offer",
  },
  active: {
    href: "/tasks/laundry-help/manage",
    label: "Manage active task",
  },
  submitted: {
    href: "/tasks/laundry-help/review",
    label: "Review proof",
  },
};

const recentActivity: Record<
  LaundryTaskStatus,
  {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  }
> = {
  open: {
    title: "TaskCard published",
    description: "Your laundry TaskCard is visible in the marketplace.",
    href: "/tasks/laundry-help",
    linkLabel: "View TaskCard",
  },
  applied: {
    title: "Sam Huang applied",
    description:
      "Sam applied to your laundry TaskCard and confirmed his availability.",
    href: "/tasks/laundry-help/applicants",
    linkLabel: "Review application",
  },
  selected: {
    title: "Worker selected",
    description:
      "You selected Sam. Complete the agreement before securing payment.",
    href: "/tasks/laundry-help/agreement",
    linkLabel: "Continue agreement",
  },
  funded: {
    title: "Payment secured",
    description:
      "The payment is secured. Sam must now review and accept the funded offer.",
    href: "/tasks/laundry-help/manage",
    linkLabel: "View status",
  },
  active: {
    title: "TaskCard activated",
    description:
      "Sam accepted the funded offer. The laundry task is now in progress.",
    href: "/tasks/laundry-help/manage",
    linkLabel: "Manage task",
  },
  submitted: {
    title: "Completion proof submitted",
    description:
      "Sam submitted the laundry photos and expense proof for your approval.",
    href: "/tasks/laundry-help/review",
    linkLabel: "Review proof",
  },
  completed: {
    title: "TaskCard completed",
    description:
      "You approved Sam’s work and released the secured payment.",
    href: "/tasks/laundry-help/review",
    linkLabel: "View completed task",
  },
};

export default function PostDashboardPage() {
  const router = useRouter();
  const [taskStatus, setTaskStatus] =
    useState<LaundryTaskStatus>("open");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (getCurrentUser() !== "olivia") {
      router.replace("/login");
      return;
    }

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
  }, [router]);

  if (!isReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5]">
        <p className="font-medium text-slate-600">
          Loading your dashboard...
        </p>
      </main>
    );
  }

  const completionSubmitted = taskStatus === "submitted";
  const primaryAction = primaryActions[taskStatus];
  const activity = recentActivity[taskStatus];

  const openTaskCards =
    taskStatus === "open" || taskStatus === "applied" ? 1 : 0;

  const newApplicants = taskStatus === "applied" ? 1 : 0;

  const activeTasks =
    taskStatus === "active" || taskStatus === "submitted" ? 1 : 0;

  const completedTaskCards = taskStatus === "completed" ? 9 : 8;

  const applicantText =
    taskStatus === "applied"
      ? "1 applicant"
      : ["selected", "funded", "active", "submitted"].includes(taskStatus)
        ? "Sam selected"
        : "0 applicants";

  const securedText = ["funded", "active", "submitted"].includes(taskStatus)
    ? "$21 secured"
    : "Not secured";

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
              href="/messages"
              className="hidden font-medium text-slate-600 hover:text-emerald-700 md:block"
            >
              Messages
            </a>

            <a
              href="/dashboard/earn"
              className="font-medium text-emerald-700 hover:text-emerald-900"
            >
              Switch to Earn Mode
            </a>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
              OP
            </div>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome */}
        <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Post Mode
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Welcome back, Olivia
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              Manage your TaskCards, review applicants and track active work.
            </p>
          </div>

          <a
            href="/tasks/create"
            className="rounded-xl bg-emerald-600 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-700"
          >
            + Create a TaskCard
          </a>
        </section>

        {/* Completion notification */}
        {completionSubmitted && (
          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                  !
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
                    Approval required
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Sam submitted completion proof
                  </h2>

                  <p className="mt-1 text-slate-600">
                    Review the laundry photos and expense proof before releasing
                    the secured payment.
                  </p>
                </div>
              </div>

              <a
                href="/tasks/laundry-help/review"
                className="shrink-0 rounded-xl bg-emerald-600 px-6 py-3 text-center font-bold text-white hover:bg-emerald-700"
              >
                Review proof
              </a>
            </div>
          </section>
        )}

        {/* Stats */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Open TaskCards
            </p>
            <p className="mt-2 text-3xl font-bold">{openTaskCards}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              New applicants
            </p>
            <p className="mt-2 text-3xl font-bold text-emerald-700">
              {newApplicants}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Active tasks</p>
            <p className="mt-2 text-3xl font-bold">{activeTasks}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Completed TaskCards
            </p>
            <p className="mt-2 text-3xl font-bold">
              {completedTaskCards}
            </p>
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Main section */}
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your posted TaskCards</h2>

              <a
                href="/tasks"
                className="font-bold text-emerald-700 hover:text-emerald-900"
              >
                Browse marketplace →
              </a>
            </div>

            {/* Laundry TaskCard */}
            {taskStatus !== "completed" && (
              <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex flex-col justify-between gap-6 sm:flex-row">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                        Laundry
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          taskStatus === "submitted"
                            ? "bg-amber-100 text-amber-800"
                            : taskStatus === "active"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {statusLabels[taskStatus]}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold">
                      Wash, dry, and fold one load of laundry
                    </h3>

                    <p className="mt-3 text-slate-600">
                      Cardinal Gardens · Due tomorrow at 6:00 PM
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm font-medium text-slate-500">
                      Task payment
                    </p>
                    <p className="mt-1 text-2xl font-bold">$18 fixed</p>
                    <p className="mt-1 text-sm text-slate-500">
                      + up to $3 expenses
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-slate-500">Applicants</p>
                    <p className="mt-1 font-bold text-emerald-700">
                      {applicantText}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Payment</p>
                    <p className="mt-1 font-bold">{securedText}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Posted</p>
                    <p className="mt-1 font-bold">Today</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryAction && (
                    <a
                      href={primaryAction.href}
                      className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"
                    >
                      {primaryAction.label}
                    </a>
                  )}

                  <a
                    href="/tasks/laundry-help"
                    className="rounded-xl border border-slate-300 px-5 py-3 font-bold transition hover:border-emerald-600 hover:text-emerald-700"
                  >
                    View TaskCard
                  </a>
                </div>
              </article>
            )}

            {/* Recently completed */}
            <h2 className="mt-10 text-2xl font-bold">Recently completed</h2>

            {taskStatus === "completed" && (
              <article className="mt-5 rounded-2xl border border-emerald-200 bg-white p-7 shadow-sm">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                      Laundry
                    </span>

                    <h3 className="mt-4 text-xl font-bold">
                      Wash, dry, and fold one load of laundry
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Completed by Sam Huang
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="font-bold">$18 paid</p>
                    <p className="mt-1 text-sm font-bold text-emerald-700">
                      ✓ Completed
                    </p>
                  </div>
                </div>
              </article>
            )}

            <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                    Moving
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    Move boxes into my dorm
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Completed by Alex Chen
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="font-bold">$20 paid</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    ✓ Completed
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* Activity */}
          <aside>
            <h2 className="text-2xl font-bold">Recent activity</h2>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                  SH
                </div>

                <div>
                  <p className="font-bold">{activity.title}</p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {activity.description}
                  </p>

                  <a
                    href={activity.href}
                    className="mt-3 inline-block text-sm font-bold text-emerald-700 hover:text-emerald-900"
                  >
                    {activity.linkLabel} →
                  </a>

                  <p className="mt-3 text-xs text-slate-400">
                    Latest update
                  </p>
                </div>
              </div>

              {taskStatus !== "open" && (
                <>
                  <div className="my-6 border-t border-slate-200" />

                  <div>
                    <p className="font-bold">TaskCard published</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Your laundry TaskCard was published in the marketplace.
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                      Earlier today
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                Payment protection
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Payment is secured before work begins
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                Work only begins after you select a worker, approve the
                agreement, secure the payment, and the worker accepts the
                funded offer.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}