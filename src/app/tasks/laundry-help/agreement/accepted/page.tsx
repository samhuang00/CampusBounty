export default function AgreementAcceptedPage() {
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

      <section className="mx-auto flex max-w-4xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-3xl font-bold text-white">
              ✓
            </div>
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-emerald-700">
            Agreement accepted
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            You accepted the Task Agreement
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Olivia has been notified. She must now secure the payment in escrow
            before you begin the laundry task.
          </p>

          <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">
                !
              </div>

              <div>
                <h2 className="text-lg font-bold text-amber-900">
                  Waiting for Olivia to secure payment
                </h2>

                <p className="mt-2 leading-7 text-amber-800">
                  Do not begin work yet. We will notify you when the $21 maximum
                  payment has been secured and your TaskCard becomes active.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              TaskCard
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Wash, dry, and fold one load of laundry
            </h2>

            <div className="mt-6 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">Worker payment</p>
                <p className="mt-1 font-bold">$18 fixed</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Expense allowance</p>
                <p className="mt-1 font-bold">Up to $3</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Deadline</p>
                <p className="mt-1 font-bold">Tomorrow, 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/dashboard/earn"
              className="rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700"
            >
              Go to Earn Mode dashboard
            </a>

            <a
              href="/messages"
              className="rounded-xl border border-slate-300 px-7 py-4 font-bold transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Message Olivia
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Your Active TaskCard will become available after payment is secured.
          </p>
        </div>
      </section>
    </main>
  );
}