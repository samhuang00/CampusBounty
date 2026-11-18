export default function ChooseModePage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
              SH
            </div>

            <span className="font-medium">Sam Huang</span>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
          Welcome back, Sam
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          What would you like to do?
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          Choose how you want to use CampusBounty right now. You can switch
          modes at any time.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="/dashboard/earn"
            className="group rounded-2xl border-2 border-slate-200 bg-white p-8 text-left shadow-sm transition hover:border-emerald-600"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
              $
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-emerald-700">
              Earn Mode
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Complete tasks and earn money
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Browse TaskCards, submit applications, complete work and track
              your earnings.
            </p>

            <p className="mt-6 font-bold text-emerald-700">
              Continue in Earn Mode →
            </p>
          </a>

          <a
            href="/dashboard/post"
            className="group rounded-2xl border-2 border-slate-200 bg-white p-8 text-left shadow-sm transition hover:border-emerald-600"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
              +
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-emerald-700">
              Post Mode
            </p>

            <h2 className="mt-2 text-2xl font-bold">Post and manage tasks</h2>

            <p className="mt-3 leading-7 text-slate-600">
              Create TaskCards, review applicants, manage active work and
              approve payments.
            </p>

            <p className="mt-6 font-bold text-emerald-700">
              Continue in Post Mode →
            </p>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Both modes use the same CampusBounty account, messages and profile.
        </p>
      </section>
    </main>
  );
}