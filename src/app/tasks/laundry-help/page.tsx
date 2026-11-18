export default function LaundryTaskPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <nav className="flex items-center gap-6 text-sm font-semibold">
            <a href="/tasks" className="hover:text-emerald-700">
              Browse TaskCards
            </a>
            <a href="#" className="hover:text-emerald-700">
              Create a TaskCard
            </a>
            <a href="#" className="hover:text-emerald-700">
              Log in
            </a>
            <a href="#" className="hover:text-emerald-700">
              Menu ☰
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <a
          href="/tasks"
          className="font-semibold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to TaskCards
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
                  Laundry
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
                  Open
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight">
                Wash, dry, and fold one load of laundry
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Posted by Olivia Parker · ✓ Verified USC Student
              </p>

              <div className="mt-8 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Task payment
                  </p>
                  <p className="mt-1 text-lg font-bold">$18 fixed</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Deadline
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    Tomorrow · 6:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-1 text-lg font-bold">1.5–2 hours</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    General location
                  </p>
                  <p className="mt-1 text-lg font-bold">Cardinal Gardens</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Task description</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  I need someone to wash, dry, and fold one regular-sized load
                  of laundry. I will provide the detergent, laundry bag, and
                  washing instructions. Please return the clothes folded and
                  placed back inside the original laundry bag.
                </p>

                <div className="mt-6">
                  <p className="mb-3 font-semibold text-slate-700">
                    Photo provided by the requester
                  </p>

                  <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
                    <div className="px-6 text-center">
                      <p className="text-4xl">🖼️</p>
                      <p className="mt-3 font-semibold text-slate-600">
                        Task reference photo
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        The requester&apos;s uploaded laundry photo will appear
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">
                  What the requester provides
                </h2>

                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>✓ Laundry detergent</li>
                  <li>✓ Laundry bag</li>
                  <li>✓ Specific washing instructions</li>
                  <li>
  ✓ Up to $3 reimbursement for documented washer and dryer costs
</li>
                </ul>

                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
  The requester will secure a maximum $3 expense allowance
  together with the task payment. The worker must submit payment
  proof to receive the actual washer and dryer cost. Any unused
  expense funds will be returned to the requester.
</div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">Worker requirements</h2>

                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>✓ Must be a verified student</li>
                  <li>✓ Must follow the provided washing instructions</li>
                  <li>✓ Must handle the clothes carefully</li>
                  <li>✓ Must complete and return the laundry by the deadline</li>
                  <li>✓ No special equipment or experience required</li>
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">
                  Completion requirements
                </h2>

                <p className="mt-3 text-slate-700">
                  Before submitting this task for approval, the worker must
                  provide:
                </p>

                <ul className="mt-4 space-y-3 text-slate-700">
                  <li>✓ A photo of the laundry inside the washing machine</li>
                  <li>✓ Payment proof showing the washer and dryer costs</li>
                  <li>
                    ✓ A photo of the clean, folded laundry inside the original
                    bag
                  </li>
                  <li>✓ A short completion note</li>
                  <li>
                    ✓ Confirmation that the laundry was returned to the
                    requester
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">Location and privacy</h2>

                <p className="mt-4 leading-7 text-slate-700">
                  The exact building, room, pickup time, and contact details
                  will only be shared through the private task chat after a
                  worker is selected and the payment is secured.
                </p>
              </div>
            </div>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Fixed-price TaskCard
              </p>

              <p className="mt-3 text-4xl font-bold">$18</p>
<p className="mt-1 text-slate-600">Fixed task payment</p>

<div className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
  <div className="flex justify-between">
    <span className="text-slate-600">Task payment</span>
    <span className="font-bold">$18</span>
  </div>

  <div className="flex justify-between">
    <span className="text-slate-600">Expense allowance</span>
    <span className="font-bold">Up to $3</span>
  </div>

  <div className="border-t border-slate-300 pt-3">
    <div className="flex justify-between">
      <span className="font-bold">Total secured</span>
      <span className="font-bold text-emerald-700">$21</span>
    </div>
  </div>
</div>

              <div className="mt-6 rounded-xl bg-emerald-50 p-4">
                <p className="font-bold text-emerald-900">
                  Payment secured through escrow
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-800">
                    A total of $21 will be secured through Solana escrow before
  work begins: $18 for the task and up to $3 for documented
  expenses. Unused expense funds return to the requester.
                </p>
              </div>

              <a
                href="/tasks/laundry-help/apply"
                className="mt-6 block rounded-xl bg-emerald-600 px-5 py-4 text-center font-bold text-white hover:bg-emerald-700"
              >
                Apply for this TaskCard
              </a>

              <a
                href="#"
                className="mt-3 block rounded-xl border border-slate-300 px-5 py-4 text-center font-bold hover:border-emerald-700 hover:text-emerald-700"
              >
                Propose a different price
              </a>

              <p className="mt-4 text-center text-sm text-slate-500">
                You will review the full Task Agreement before accepting.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Posted by
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                  OP
                </div>

                <div>
                  <p className="text-lg font-bold">Olivia Parker</p>
                  <p className="text-sm text-emerald-700">
                    ✓ Verified USC Student
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-slate-700">
                <p>★ 4.9 rating · 12 reviews</p>
                <p>8 TaskCards posted</p>
                <p>Member since 2026</p>
              </div>

              <a
                href="#"
                className="mt-5 inline-block font-bold text-emerald-700 hover:text-emerald-900"
              >
                View student profile →
              </a>
            </div>
          </aside>
        </div>
      </div>

      <footer className="mt-12 bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        CampusBounty · Student tasks with secured payments
      </footer>
    </main>
  );
}