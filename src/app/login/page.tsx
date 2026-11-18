"use client";

import { useRouter } from "next/navigation";
import { loginAs, type DemoUserId } from "@/lib/campusBountyState";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(user: DemoUserId) {
    loginAs(user);

    const nextPage = new URLSearchParams(window.location.search).get("next");

    if (user === "sam" && nextPage) {
      router.push(nextPage);
      return;
    }

    router.push(user === "sam" ? "/dashboard/earn" : "/dashboard/post");
  }
function resetDemo() {
  localStorage.clear();
  window.location.href = "/";
}

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <a href="/tasks" className="font-medium text-slate-600">
            Browse TaskCards
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Demo login
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Choose who you are
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Sign in as either side of the CampusBounty TaskCard flow.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleLogin("sam")}
              className="rounded-2xl border-2 border-slate-200 p-6 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                SH
              </div>

              <h2 className="mt-5 text-2xl font-bold">Sam Huang</h2>

              <p className="mt-1 font-bold text-emerald-700">Earn Mode</p>

              <p className="mt-3 text-slate-600">
                Apply for TaskCards, accept funded offers, submit work and
                receive payment.
              </p>

              <p className="mt-5 font-bold text-emerald-700">
                Continue as Sam →
              </p>
            </button>

            <button
              type="button"
              onClick={() => handleLogin("olivia")}
              className="rounded-2xl border-2 border-slate-200 p-6 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-800">
                OP
              </div>

              <h2 className="mt-5 text-2xl font-bold">Olivia Parker</h2>

              <p className="mt-1 font-bold text-emerald-700">Post Mode</p>

              <p className="mt-3 text-slate-600">
                Review applicants, select a worker, secure payment and approve
                completed work.
              </p>

              <p className="mt-5 font-bold text-emerald-700">
                Continue as Olivia →
              </p>
            </button>
          </div>
<button
  type="button"
  onClick={resetDemo}
  className="mt-6 w-full rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
>
  Reset demo
</button>
          <p className="mt-8 text-center text-sm text-slate-500">
            These demo accounts let judges experience both sides of the
            marketplace.
          </p>
        </div>
      </section>
    </main>
  );
}