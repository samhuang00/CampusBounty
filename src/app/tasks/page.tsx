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
  { category: "Laundry",
    title: "Wash, dry, and fold one load of laundry",
    location: "Cardinal Gardens",
    deadline: "Due tomorrow · 6:00 PM",
    price: "$18 fixed",
    student: "Olivia Parker",
},
  {
    category: "Academic Support",
    title: "Tutoring in mathematics",
    location: "New North",
    deadline: "Due Mon, Nov 23 · 6:00 PM",
    price: "Name your price",
    student: "Steph Green",
  },
  {
    category: "Cleaning",
    title: "Help clean my apartment",
    location: "West 27th Place",
    deadline: "Due tomorrow · 5:30 PM",
    price: "$25 fixed",
    student: "Emma Davis",
  },
  {
    category: "Moving",
    title: "Move boxes into my dorm",
    location: "Cardinal Gardens",
    deadline: "Due Fri, Nov 20 · 2:00 PM",
    price: "$20 fixed",
    student: "Alex Kim",
  },
  {
    category: "Technology",
    title: "Set up a new monitor",
    location: "Gateway Apartments",
    deadline: "Due Sun, Nov 22 · 3:00 PM",
    price: "Name your price",
    student: "Daniel Chen",
  },
  {
    category: "Other",
    title: "Take photos at a club event",
    location: "USC Campus",
    deadline: "Due Tue, Nov 24 · 7:00 PM",
    price: "$30 fixed",
    student: "Sofia Martinez",
  },
];

const categories = [
  "All",
  "Pickup & Delivery",
  "Purchase",
  "Cleaning",
  "Laundry",
  "Moving",
  "Build",
  "Academic Support",
  "Technology",
  "Other",
];

export default function BrowseTasksPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold">
            CampusBounty
          </a>

          <nav className="flex items-center gap-6 text-sm font-semibold">
            <a href="/tasks" className="text-emerald-700">
              Browse TaskCards
            </a>
            <a href="/tasks/create" className="hover:text-emerald-700">
              Create a TaskCard
            </a>
            <a href="/login" className="hover:text-emerald-700">
              Log in
            </a>
            <a href="#" className="hover:text-emerald-700">
              Menu ☰
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 font-bold uppercase tracking-widest text-emerald-700">
            Earn on campus
          </p>
          <h1 className="text-4xl font-bold">Browse TaskCards</h1>
          <p className="mt-3 text-lg text-slate-600">
            Find flexible paid tasks posted by verified students near you.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            <input
              type="text"
              placeholder="Search TaskCards..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
            />

            <select className="rounded-xl border border-slate-300 bg-white px-4 py-3">
              <option>Any location</option>
              <option>USC Campus</option>
              <option>USC Village</option>
              <option>Near USC</option>
              <option>Remote</option>
            </select>

            <select className="rounded-xl border border-slate-300 bg-white px-4 py-3">
              <option>Any price type</option>
              <option>Fixed price</option>
              <option>Name your price</option>
            </select>

            <select className="rounded-xl border border-slate-300 bg-white px-4 py-3">
              <option>Sort: Newest</option>
              <option>Deadline soonest</option>
              <option>Highest payment</option>
            </select>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  index === 0
                    ? "border-emerald-700 bg-emerald-700 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-700 hover:text-emerald-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Available TaskCards</h2>
          <p className="text-sm text-slate-500">{tasks.length} tasks found</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tasks.map((task) => (
            <article
              key={task.title}
              className="flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                {task.category}
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight">
                {task.title}
              </h3>

              <p className="mt-5 text-slate-600">{task.location}</p>
              <p className="mt-1 text-slate-600">{task.deadline}</p>

              <p className="mt-5 font-bold">{task.price}</p>

              <div className="mt-auto pt-8">
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
                  href={
  task.title === "Wash, dry, and fold one load of laundry"
    ? "/tasks/laundry-help"
    : "#"
}
                  className="mt-4 inline-block font-bold text-emerald-700 hover:text-emerald-900"
                >
                  View TaskCard →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        CampusBounty · Student tasks with secured payments
      </footer>
    </main>
  );
}