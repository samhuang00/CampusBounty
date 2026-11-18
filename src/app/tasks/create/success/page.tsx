export default function TaskPublishedPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
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

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
              SH
            </div>
          </div>
        </nav>
      </header>

      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-20">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white">
              ✓
            </div>
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-widest text-emerald-700">
            TaskCard published
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Your TaskCard is now live
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Verified students can now view your TaskCard and submit
            applications. We will notify you when someone applies.
          </p>

         <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left">
  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
        Published TaskCard
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        Your TaskCard is accepting applications
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        Verified students can now find it in the marketplace and submit an
        application.
      </p>
    </div>

    <span className="w-fit rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-bold text-emerald-800">
      Open
    </span>
  </div>

  <div className="mt-6 grid gap-5 border-t border-slate-200 pt-5 sm:grid-cols-3">
    <div>
      <p className="text-sm text-slate-500">Status</p>
      <p className="mt-1 font-bold text-emerald-700">
        Accepting applicants
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Visibility</p>
      <p className="mt-1 font-bold">Campus marketplace</p>
    </div>

    <div>
      <p className="text-sm text-slate-500">Next step</p>
      <p className="mt-1 font-bold">Review applications</p>
    </div>
  </div>
</div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/dashboard/post"
              className="rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"
            >
              Go to Post Mode dashboard
            </a>

            <a
              href="/tasks/create"
              className="rounded-xl border border-slate-300 px-6 py-4 font-bold transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Create another TaskCard
            </a>
          </div>

          <a
            href="/tasks"
            className="mt-6 inline-block font-bold text-emerald-700 hover:text-emerald-900"
          >
            View marketplace →
          </a>
        </section>
      </div>
    </main>
  );
}