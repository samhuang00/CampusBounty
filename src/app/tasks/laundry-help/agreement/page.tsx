export default function TaskAgreementPage() {
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

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-7 sm:flex-row">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Final Task Agreement
              </p>

              <h1 className="mt-3 text-3xl font-bold">
                Wash, dry, and fold one load of laundry
              </h1>

              <p className="mt-3 text-slate-600">
                Review the final details before accepting this TaskCard.
              </p>
            </div>

            <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
              Awaiting acceptance
            </span>
          </div>

          <div className="grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Task payment</p>
              <p className="mt-1 font-bold">$18 fixed</p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Expense allowance
              </p>
              <p className="mt-1 font-bold">Up to $3</p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Deadline</p>
              <p className="mt-1 font-bold">Tomorrow, 6:00 PM</p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">Location</p>
              <p className="mt-1 font-bold">Cardinal Gardens</p>
            </div>
          </div>

          <div className="space-y-8 py-8">
            <section>
              <h2 className="text-xl font-bold">People in this agreement</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Requester</p>
                  <p className="mt-1 font-bold">Olivia Parker</p>
                  <p className="mt-2 text-sm font-medium text-emerald-700">
                    ✓ Accepted
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Selected worker</p>
                  <p className="mt-1 font-bold">Sam Huang</p>
                  <p className="mt-2 text-sm font-medium text-amber-700">
                    Waiting for acceptance
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold">Required work</h2>

              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                <li>Collect one regular-sized laundry bag from Olivia.</li>
                <li>Wash and dry the clothes using the provided detergent.</li>
                <li>Follow the washing instructions provided by Olivia.</li>
                <li>Fold the clean clothes and return them in the laundry bag.</li>
                <li>Complete and return the laundry before the deadline.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">Completion requirements</h2>

              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                <li>Photo showing the laundry inside the washing machine.</li>
                <li>Payment proof for any laundry expense claimed.</li>
                <li>Photo showing the completed and folded laundry.</li>
                <li>Confirmation that the laundry was returned to Olivia.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">Payment and expenses</h2>

              <div className="mt-4 rounded-xl bg-emerald-50 p-5 text-emerald-900">
                <div className="flex justify-between gap-4">
                  <span>Task payment</span>
                  <span className="font-bold">$18</span>
                </div>

                <div className="mt-3 flex justify-between gap-4">
                  <span>Maximum expense allowance</span>
                  <span className="font-bold">$3</span>
                </div>

                <div className="mt-4 flex justify-between gap-4 border-t border-emerald-200 pt-4">
                  <span className="font-bold">Total secured in escrow</span>
                  <span className="font-bold">$21</span>
                </div>

                <p className="mt-4 text-sm leading-6">
                  Only documented expenses will be paid. Any unused expense
                  funds will return to Olivia.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold">
                Changes, cancellations and disputes
              </h2>

              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                <li>
                  This agreement becomes locked after both students accept.
                </li>
                <li>
                  Additional work requires a formal change request or a new
                  TaskCard.
                </li>
                <li>
                  Payment remains secured while an active dispute is reviewed.
                </li>
                <li>
                  The Task Agreement, messages and completion proof may be used
                  as evidence during a dispute.
                </li>
              </ul>
            </section>
          </div>

          <div className="border-t border-slate-200 pt-7">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-emerald-600"
              />

              <span className="text-sm leading-6 text-slate-600">
                I have reviewed and agree to the payment, deadline, required
                work, completion requirements and platform conditions above.
              </span>
            </label>

            <a
             href="/tasks/laundry-help/agreement/escrow"
              className="mt-5 block rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white hover:bg-emerald-700"
            >
              Accept agreement and continue to payment
            </a>

            <p className="mt-4 text-center text-sm text-slate-500">
              Do not begin work until payment has been secured in escrow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}