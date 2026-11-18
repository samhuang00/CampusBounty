export default function MessagesPage() {
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
              Earn Mode
            </span>

            <a
              href="/dashboard/earn"
              className="font-medium text-slate-600 hover:text-emerald-700"
            >
              Dashboard
            </a>

            <a
              href="/choose-mode"
              className="font-medium text-emerald-700 hover:text-emerald-900"
            >
              Switch mode
            </a>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
              SH
            </div>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Messages
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Your conversations
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Keep TaskCard communication and important updates in one place.
          </p>
        </div>

        <section className="mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[360px_1fr]">
          {/* Conversation list */}
          <aside className="border-b border-slate-200 lg:border-b-0 lg:border-r">
            <div className="border-b border-slate-200 p-5">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Active conversation */}
            <button className="w-full border-b border-slate-200 bg-emerald-50 p-5 text-left">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                  OP
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold">Olivia Parker</p>
                    <p className="text-xs text-slate-500">10:42 AM</p>
                  </div>

                  <p className="mt-1 text-sm font-medium text-emerald-800">
                    Laundry TaskCard
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-600">
                    Thanks for applying! I reviewed your application...
                  </p>
                </div>
              </div>
            </button>

            {/* Second conversation */}
            <button className="w-full border-b border-slate-200 p-5 text-left transition hover:bg-slate-50">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700">
                  ED
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold">Emma Davis</p>
                    <p className="text-xs text-slate-500">Yesterday</p>
                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Apartment cleaning
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-500">
                    The TaskCard has been completed. Thank you!
                  </p>
                </div>
              </div>
            </button>
          </aside>

          {/* Open conversation */}
          <div className="flex min-h-[650px] flex-col">
            {/* Conversation header */}
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
                  OP
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-bold">Olivia Parker</h2>

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
                        ✓
                      </span>
                      Verified
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    Requester · Laundry TaskCard
                  </p>
                </div>
              </div>

              <a
                href="/tasks/laundry-help"
                className="font-bold text-emerald-700 hover:text-emerald-900"
              >
                View TaskCard →
              </a>
            </div>

            {/* Task update */}
            <div className="border-b border-slate-200 bg-emerald-50 px-6 py-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-bold text-emerald-900">
                    Application update
                  </p>

                  <p className="mt-1 text-sm text-emerald-800">
                    Olivia selected you for this TaskCard. Review the Task
                    Agreement before work begins.
                  </p>
                </div>

                <a
                  href="/tasks/laundry-help/agreement"
                  className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-bold text-white hover:bg-emerald-700"
                >
                  Review agreement
                </a>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-6 overflow-y-auto bg-slate-50 p-6">
              <p className="text-center text-xs font-medium uppercase tracking-wide text-slate-400">
                Today
              </p>

              <div className="flex justify-end">
                <div className="max-w-md rounded-2xl rounded-br-md bg-emerald-600 px-5 py-3 text-white">
                  <p>
                    Hi Olivia! I can pick up the laundry tomorrow at 1:00 PM and
                    return it before the deadline.
                  </p>
                  <p className="mt-2 text-right text-xs text-emerald-100">
                    10:30 AM
                  </p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-md rounded-2xl rounded-bl-md border border-slate-200 bg-white px-5 py-3">
                  <p>
                    Thanks for applying! I reviewed your application and that
                    time works for me.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">10:40 AM</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-md rounded-2xl rounded-bl-md border border-slate-200 bg-white px-5 py-3">
                  <p>
                    I selected you for the TaskCard. Please review the agreement
                    before you begin.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">10:42 AM</p>
                </div>
              </div>
            </div>

            {/* Message box */}
            <div className="border-t border-slate-200 bg-white p-5">
              <div className="flex items-end gap-3">
                <textarea
                  rows={2}
                  placeholder="Write a message..."
                  className="flex-1 resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />

                <button className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700">
                  Send
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Keep payments and TaskCard details inside CampusBounty.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}