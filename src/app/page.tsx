const tasks = [
  {
    category: "Pickup & Delivery",
    title: "Pick up a package",
    location: "University Village",
    deadline: "Due today · 8:00 PM",
    price: "$10 fixed",
    student: "John Lee",
  },
  {
    category: "Build",
    title: "Assemble an IKEA desk",
    location: "Near USC",
    deadline: "Due Sat, Nov 21 · 4:00 PM",
    price: "Name your price",
    student: "Jay Cole",
  },
  {
    category: "Purchase",
    title: "Buy groceries from Target",
    location: "USC Village",
   deadline: "Due tomorrow · 12:00 PM",
    price: "$8 fixed",
    student: "Maya Smith",
  },
  {
    category: "Academic Support",
    title: "Tutoring in mathematics",
    location: "New North",
    deadline: "Due Mon, Nov 23 · 6:00 PM",
    price: "Name your price",
    student: "Steph Green",
  },
];

const steps = [
  {
    number: "1",
    title: "Create or find a TaskCard",
    description:
      "Post what you need done or browse TaskCards from verified students.",
  },
  {
    number: "2",
    title: "Agree on the details",
    description:
      "Confirm the price, deadline, requirements, and proof of completion.",
  },
  {
    number: "3",
    title: "Secure payment",
    description:
      "The requester locks payment in Solana escrow before work begins.",
  },
  {
    number: "4",
    title: "Complete it and get paid",
    description:
      "Submit proof, receive approval, and release the secured payment.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold">
            CampusBounty
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a href="/tasks" className="font-medium hover:text-emerald-700">
              Browse TaskCards
            </a>
            <a href="#" className="font-medium hover:text-emerald-700">
              Create a TaskCard
            </a>
           <a href="/login" className="font-medium hover:text-emerald-700">
  Log in
</a>
<a
  href="/signup"
  className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"
>
  Sign up
</a>
            <button className="rounded-lg border border-slate-300 px-4 py-2 font-medium">
              Menu ☰
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Verified student marketplace
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Post it. Do it. Get paid.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A trusted marketplace where verified students can post everyday tasks
          or earn money completing them for others on campus.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#tasks"
            className="rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white hover:bg-emerald-700"
          >
            Browse TaskCards
          </a>

          <a
            href="#"
            className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold hover:bg-slate-50"
          >
            Create a TaskCard
          </a>
        </div>
      </section>

      <section id="tasks" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Earn on campus
            </p>
            <h2 className="mt-2 text-3xl font-bold">Available TaskCards</h2>
          </div>

          <a href="/tasks" className="font-semibold text-emerald-700">
            View all →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tasks.map((task) => (
            <article
              key={task.title}
              className="flex min-h-64
             flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {task.category}
              </p>

              <h3 className="mt-3 text-xl font-bold">{task.title}</h3>

              <p className="mt-4 text-sm text-slate-600">
                {task.location} · {task.deadline}
              </p>

              <p className="mt-3 font-semibold">{task.price}</p>

              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 text-slate-600">
  <span>{task.student}</span>

  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
      ✓
    </span>
    Verified
  </span>
</div>

                <a
                  href="#"
                  className="mt-4 inline-block font-semibold text-emerald-700"
                >
                  View TaskCard →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Simple and secure
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              How CampusBounty works
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-slate-900 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-slate-950">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl justify-between">
          <p className="font-bold">CampusBounty</p>
          <p className="text-sm text-slate-500">
            Built by students, for students.
          </p>
        </div>
      </footer>
    </main>
  );
}
