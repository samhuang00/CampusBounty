"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getCurrentUser,
  setLaundryTaskStatus,
} from "@/lib/campusBountyState";
export default function ApplyForLaundryTaskPage() {
    const router = useRouter();
const [isAuthorized, setIsAuthorized] = useState(false);

useEffect(() => {
  const currentUser = getCurrentUser();

  if (currentUser !== "sam") {
    router.replace("/login?next=/tasks/laundry-help/apply");
    return;
  }

  setIsAuthorized(true);
}, [router]);
function handleSubmitApplication() {
  setLaundryTaskStatus("applied");
  router.push("/tasks/laundry-help/apply/success");
}
if (!isAuthorized) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5]">
      <p className="font-medium text-slate-600">Checking your account...</p>
    </main>
  );
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
        href="/tasks"
        className="hidden font-medium text-slate-600 hover:text-emerald-700 sm:block"
      >
        Browse TaskCards
      </a>

      <a
        href="/tasks/laundry-help"
        className="hidden font-medium text-slate-600 hover:text-emerald-700 md:block"
      >
        Back to TaskCard
      </a>

      <a
        href="/dashboard/earn"
        aria-label="Open worker dashboard"
        title="Worker dashboard"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800 transition hover:bg-emerald-200"
      >
        SH
      </a>
    </div>
  </nav>
</header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/tasks/laundry-help"
          className="font-medium text-emerald-700 hover:text-emerald-900"
        >
          ← Back to TaskCard
        </a>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              TaskCard application
            </p>

            <h1 className="mt-3 text-3xl font-bold">
              Apply for this TaskCard
            </h1>

            <p className="mt-3 leading-7 text-slate-600">
              Introduce yourself to Olivia and confirm that you can complete
              the laundry task according to the listed requirements.
            </p>

            <form className="mt-8 space-y-7">
              <div>
                <label className="block text-sm font-bold text-slate-700">
                  Applying as
                </label>

                <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                    SH
                  </div>

                  <div>
                    <p className="font-bold">Sam Huang</p>

                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-700">
                        ✓
                      </span>
                      Verified USC student
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-slate-700"
                >
                  Message to Olivia
                <div>
  <label
    htmlFor="message"
    className="block text-sm font-bold text-slate-700"
  >
    <span className="font-normal text-slate-500"></span>
  </label>

  <textarea
    id="message"
    name="message"
    rows={3}
    placeholder="Optional: explain why you are a good fit for this task."
    className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
  />
</div>
                
                  Your availability
                </label>

                <input
                  id="availability"
                  name="availability"
                  type="text"
                  placeholder="Example: I can pick it up tomorrow at 1:00 PM."
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-emerald-600"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I have reviewed the TaskCard requirements, deadline, payment,
                  expense allowance and completion-proof requirements.
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-emerald-600"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I understand that work must not begin until Olivia selects me,
                  both parties accept the Task Agreement and payment is secured
                  in escrow.
                </span>
              </label>

              <button
  type="button"
  onClick={handleSubmitApplication}
  className="block w-full rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white transition hover:bg-emerald-700"
>
  Submit application
</button>
            </form>
          </div>

          <aside className="self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Applying for
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Wash, dry, and fold one load of laundry
            </h2>

            <div className="mt-6 space-y-4 border-y border-slate-200 py-6">
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Task payment</span>
                <span className="font-bold">$18 fixed</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Expense allowance</span>
                <span className="font-bold">Up to $3</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Deadline</span>
                <span className="text-right font-bold">
                  Tomorrow, 6:00 PM
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Location</span>
                <span className="text-right font-bold">
                  Cardinal Gardens
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-900">
                Payment protected by escrow
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-800">
                If selected, you will review the complete Task Agreement before
                accepting. Work begins only after payment is secured.
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Submitting an application does not guarantee that you will be
              selected.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}