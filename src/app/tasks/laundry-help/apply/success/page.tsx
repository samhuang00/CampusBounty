export default function ApplicationSuccessPage() {
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
        className="font-medium text-slate-600 hover:text-emerald-700"
      >
        Browse TaskCards
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

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700">
            ✓
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-emerald-700">
            Application submitted
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Your application was sent to Olivia
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
            Olivia can now review your application. You will be notified if you
            are selected for this TaskCard.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              TaskCard
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Wash, dry, and fold one load of laundry
            </h2>

            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-medium text-slate-500">Payment</p>
                <p className="mt-1 font-bold text-slate-950">$18 fixed</p>
              </div>

              <div>
                <p className="font-medium text-slate-500">Deadline</p>
                <p className="mt-1 font-bold text-slate-950">
                  Tomorrow, 6:00 PM
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-500">Location</p>
                <p className="mt-1 font-bold text-slate-950">
                  Cardinal Gardens
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-left">
            <h2 className="text-lg font-bold">What happens next?</h2>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  1
                </span>

                <div>
                  <p className="font-bold">Olivia reviews your application</p>
                  <p className="mt-1 text-sm text-slate-600">
                    The requester compares applicants and selects a worker.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  2
                </span>

                <div>
                  <p className="font-bold">Both parties accept the agreement</p>
                  <p className="mt-1 text-sm text-slate-600">
                    You will review the final requirements, deadline and
                    payment before accepting.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                  3
                </span>

                <div>
                  <p className="font-bold">Payment is secured</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Work begins only after the payment is secured in escrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <a
              href="/dashboard/earn"
              className="rounded-xl border border-slate-300 px-5 py-3 font-bold hover:border-emerald-700 hover:text-emerald-700"
            >
              Go to Dashboard
            </a>

            <a
              href="/tasks"
              className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Browse more TaskCards
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}