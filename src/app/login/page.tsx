export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <a
            href="/tasks"
            className="font-medium text-slate-600 hover:text-emerald-700"
          >
            Browse TaskCards
          </a>
        </nav>
      </header>

      <section className="mx-auto flex max-w-md px-6 py-16">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Student marketplace
          </p>

          <h1 className="mt-3 text-3xl font-bold">Welcome back</h1>

          <p className="mt-3 leading-7 text-slate-600">
            Log in with your verified university account.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-700"
              >
                University email
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@usc.edu"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <a
              href="/choose-mode"
              className="block w-full rounded-xl bg-emerald-600 px-6 py-4 text-center font-bold text-white hover:bg-emerald-700"
            >
              Log in
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            New to CampusBounty?{" "}
            <a href="#" className="font-bold text-emerald-700">
              Create an account
            </a>
          </p>

          <div className="mt-7 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            For this prototype, any email and password will continue to Sam’s
            demo account.
          </div>
        </div>
      </section>
    </main>
  );
}