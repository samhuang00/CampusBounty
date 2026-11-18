export default function ManageLaundryTaskPage() {
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
                Active TaskCard
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                Awaiting acceptance
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight">
              Wash, dry, and fold one load of laundry
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              Sam has been selected and notified. Work begins after he accepts the funded offer.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5">
            <p className="font-bold text-emerald-900">
              ✓ Payment secured
            </p>
            <p className="mt-1 text-emerald-700">
              $21 maximum secured in escrow
            </p>
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

                <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    3
                  </div>
                  <h3 className="mt-4 text-lg font-bold">
                    Worker acceptance
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Waiting for Sam to accept
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Current status</h2>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                  Waiting for worker
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Sam is reviewing the funded offer
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Sam has been notified that the payment is secured. If he accepts, the TaskCard will become active. If he declines or the offer expires, the secured funds will return to you.
                </p>
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
                  <p className="text-sm text-slate-500">Expense allowance</p>
                  <p className="mt-1 font-bold">Up to $3</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Completion requirements</h2>

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
                <p>8 completed TaskCards</p>
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
                Secured payment
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
                  <span className="font-bold">Maximum secured</span>
                  <span className="font-bold text-emerald-700">$21</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="font-bold">Secured through escrow</p>
                <p className="mt-1">Transaction: 4Gm8...9Qp2</p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}