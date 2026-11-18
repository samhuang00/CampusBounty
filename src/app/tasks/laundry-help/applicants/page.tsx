"use client";

import { setLaundryTaskStatus } from "@/lib/campusBountyState";
const applicants = [
  {
    name: "Sam Huang",
    initials: "SH",
    rating: "4.9",
    completed: "12 TaskCards completed",
    availability: "Available tomorrow at 1:00 PM",
    message: "I can complete the laundry and return it before 6:00 PM.",
  },
  {
    name: "Alex Kim",
    initials: "AK",
    rating: "4.7",
    completed: "6 TaskCards completed",
    availability: "Available tomorrow at 2:30 PM",
    message: "I live nearby and can complete the task tomorrow.",
  },
];

export default function ApplicantsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <a
            href="/tasks/laundry-help"
            className="font-medium text-slate-600 hover:text-emerald-700"
          >
            View TaskCard
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
          Requester view
        </p>

        <h1 className="mt-3 text-3xl font-bold">Review applicants</h1>

        <p className="mt-3 text-slate-600">
          Select a student to complete your laundry TaskCard.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Your TaskCard
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-bold">
                Wash, dry, and fold one load of laundry
              </h2>

              <p className="mt-2 text-slate-600">
                Cardinal Gardens · Due tomorrow at 6:00 PM
              </p>
            </div>

            <p className="font-bold">$18 fixed</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Applicants</h2>
          <p className="text-sm text-slate-500">
            {applicants.length} applications
          </p>
        </div>

        <div className="mt-5 space-y-5">
          {applicants.map((applicant) => (
            <article
              key={applicant.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-6 sm:flex-row">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-800">
                    {applicant.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold">{applicant.name}</h3>

                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px]">
                          ✓
                        </span>
                        Verified USC student
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      ★ {applicant.rating} · {applicant.completed}
                    </p>
                  </div>
                </div>

                <a
                onClick={() => {
  if (applicant.name === "Sam Huang") {
    setLaundryTaskStatus("selected");
  }
}}
                  href={
                    applicant.name === "Sam Huang"
                      ? "/tasks/laundry-help/agreement"
                      : "#"
                  }
                  className="self-start rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white hover:bg-emerald-700"
                >
                  Select worker
                </a>
              </div>

              <div className="mt-6 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-slate-700">
                    Availability
                  </p>
                  <p className="mt-1 text-slate-600">
                    {applicant.availability}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-700">Message</p>
                  <p className="mt-1 text-slate-600">{applicant.message}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-emerald-50 p-5 text-sm leading-6 text-emerald-900">
          Selecting a worker does not immediately begin the task. Both students
          must review and accept the Task Agreement before payment is secured.
        </div>
      </section>
    </main>
  );
}