"use client";

import { useState } from "react";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8f5] px-6 text-slate-950">
        <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-700">
            ✓
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-widest text-emerald-700">
            Verification sent
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Check your university email
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            We sent a student verification link to{" "}
            <span className="font-bold text-slate-900">{email}</span>.
            Verify your email before accessing CampusBounty.
          </p>

          <a
            href="/login"
            className="mt-8 block rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"
          >
            Continue to log in
          </a>

          <a
            href="/"
            className="mt-4 inline-block font-bold text-slate-500 hover:text-emerald-700"
          >
            Return to homepage
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-slate-500 sm:block">
              Already registered?
            </span>

            <a
              href="/login"
              className="rounded-xl border border-slate-300 px-5 py-2.5 font-bold transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Log in
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1fr_520px] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Verified student marketplace
          </p>

          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
            Join your trusted campus task network.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Post everyday tasks, earn money helping students nearby, and use
            protected payments without dealing with anonymous strangers.
          </p>

          <div className="mt-8 space-y-5">
            <Feature
              number="1"
              title="Verify your student identity"
              description="Use your university email to join your campus community."
            />

            <Feature
              number="2"
              title="Choose how you participate"
              description="Post tasks, earn money completing them, or switch between both."
            />

            <Feature
              number="3"
              title="Use protected payments"
              description="Task payments are secured before work begins."
            />
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold">Create your account</h2>

          <p className="mt-2 text-slate-600">
            CampusBounty is currently available to verified students.
          </p>

          <div className="mt-7">
            <label
              htmlFor="fullName"
              className="block text-sm font-bold text-slate-700"
            >
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-slate-700"
            >
              University email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@usc.edu"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />

            <p className="mt-2 text-sm text-slate-500">
              Your university email is used to verify your student status.
            </p>
          </div>

          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-slate-700"
            >
              Create password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="At least 8 characters"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold text-slate-700"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              placeholder="Enter your password again"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-4">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 accent-emerald-600"
            />

            <span className="text-sm leading-6 text-slate-600">
              I agree to follow CampusBounty’s community guidelines and only
              post or accept tasks that are safe and permitted on campus.
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-emerald-700"
          >
            Create student account
          </button>

          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-emerald-700 hover:text-emerald-900"
            >
              Log in
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}

function Feature({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">
        {number}
      </div>

      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-1 leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}