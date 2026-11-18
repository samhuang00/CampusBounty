"use client";

import { useState } from "react";

type CreationMethod = "ai" | "manual" | null;

export default function CreateTaskPage() {
  const [creationMethod, setCreationMethod] =
    useState<CreationMethod>(null);

  const [aiPrompt, setAiPrompt] = useState("");
  const [aiGenerated, setAiGenerated] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const [task, setTask] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    estimatedTime: "",
    date: "",
    time: "",
    price: "",
    expenses: "",
    proof: "",
  });

  function selectManual() {
    setCreationMethod("manual");
    setAiGenerated(false);
  }

  function selectAI() {
    setCreationMethod("ai");
    setAiGenerated(false);
  }

  function generateTaskCard() {
    const prompt = aiPrompt.trim();

    if (!prompt) {
      return;
    }

    const lowerPrompt = prompt.toLowerCase();

    if (
      lowerPrompt.includes("laundry") ||
      lowerPrompt.includes("clothes") ||
      lowerPrompt.includes("wash")
    ) {
      setTask({
        title: "Wash, dry, and fold one load of laundry",
        category: "Laundry",
        description:
          "I need someone to wash, dry, and fold one regular-sized load of laundry. I will provide the detergent, laundry bag, and washing instructions. Please return the clothes folded and placed inside the original laundry bag.",
        location: "Cardinal Gardens",
        estimatedTime: "1–2 hours",
        date: "",
        time: "18:00",
        price: "18",
        expenses: "3",
        proof:
          "Upload a photo of the laundry inside the washing machine, a photo of the folded clothes, and payment proof for any laundry expenses.",
      });
    } else if (
      lowerPrompt.includes("grocery") ||
      lowerPrompt.includes("groceries") ||
      lowerPrompt.includes("target")
    ) {
      setTask({
        title: "Pick up groceries from Target",
        category: "Purchase",
        description:
          "I need someone to pick up a small grocery order from Target and deliver it near campus. I will provide the complete shopping list after selecting an applicant.",
        location: "USC Village",
        estimatedTime: "About 1 hour",
        date: "",
        time: "",
        price: "12",
        expenses: "",
        proof:
          "Upload a photo of the purchased items and payment proof before delivery.",
      });
    } else {
      setTask({
        title: prompt.length > 70 ? `${prompt.slice(0, 70)}...` : prompt,
        category: "Other",
        description: `${prompt} Please message me if you have any questions before beginning the task.`,
        location: "Near USC",
        estimatedTime: "1–2 hours",
        date: "",
        time: "",
        price: "15",
        expenses: "",
        proof:
          "Upload a clear photo showing that the task has been completed.",
      });
    }

    setAiGenerated(true);
  }

  const showForm = creationMethod === "manual" || aiGenerated;

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
              className="hidden font-medium text-slate-600 hover:text-emerald-700 sm:block"
            >
              Messages
            </a>

            <a
              href="/dashboard/earn"
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
        <a
          href="/dashboard/post"
          className="font-bold text-emerald-700 hover:text-emerald-900"
        >
          ← Back to dashboard
        </a>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-emerald-700">
          Post Mode
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Create a TaskCard
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Choose how you would like to create your TaskCard.
        </p>

        {/* Creation method */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            How would you like to create your TaskCard?
          </h2>

          <p className="mt-2 text-slate-600">
            You can switch methods at any time before publishing.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* AI option */}
            <button
              type="button"
              onClick={selectAI}
              className={`relative rounded-2xl border-2 p-7 text-left transition ${
                creationMethod === "ai"
                  ? "border-emerald-600 bg-emerald-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-emerald-400"
              }`}
            >
              <span className="absolute right-5 top-5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                Recommended
              </span>

              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                ✨
              </span>

              <h3 className="mt-5 text-2xl font-bold">Create with AI</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Describe what you need in a few words. AI will draft the title,
                description, payment, deadline and completion requirements.
              </p>

              <p className="mt-5 font-bold text-emerald-700">
                Start with AI →
              </p>
            </button>

            {/* Manual option */}
            <button
              type="button"
              onClick={selectManual}
              className={`rounded-2xl border-2 p-7 text-left transition ${
                creationMethod === "manual"
                  ? "border-emerald-600 bg-emerald-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-emerald-400"
              }`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                ✎
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                Enter details manually
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Fill in the TaskCard information yourself, step by step, with
                complete control over every detail.
              </p>

              <p className="mt-5 font-bold text-emerald-700">
                Fill out the form →
              </p>
            </button>
          </div>
        </section>

        {/* AI prompt */}
        {creationMethod === "ai" && !aiGenerated && (
          <section className="mt-8 rounded-2xl border-2 border-emerald-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
              ✨
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              What do you need help with?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Write it naturally. You do not need to organize the details—the
              AI will turn your description into a complete TaskCard.
            </p>

            <textarea
              value={aiPrompt}
              onChange={(event) => setAiPrompt(event.target.value)}
              rows={4}
              placeholder="Example: I need someone to wash one load of clothes tomorrow. I will provide detergent and can pay $18."
              className="mt-6 w-full resize-none rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={generateTaskCard}
                className="rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700"
              >
                ✨ Generate my TaskCard
              </button>

              <button
                type="button"
                onClick={selectManual}
                className="rounded-xl border border-slate-300 px-7 py-4 font-bold hover:border-emerald-600 hover:text-emerald-700"
              >
                Enter details manually instead
              </button>
            </div>

            {!aiPrompt.trim() && (
              <p className="mt-3 text-sm text-slate-500">
                Enter a short description before generating your TaskCard.
              </p>
            )}
          </section>
        )}

        {/* Generated notice */}
        {aiGenerated && (
          <section className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-bold text-emerald-900">
                ✨ Your AI draft is ready
              </p>

              <p className="mt-1 text-sm text-emerald-800">
                Review and edit any information below before publishing.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setAiGenerated(false);
                setAiPrompt("");
              }}
              className="text-left text-sm font-bold text-emerald-800 hover:text-emerald-950"
            >
              Start again
            </button>
          </section>
        )}

        {/* Full form */}
        {showForm && (
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-7 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
            >
              {/* Task details */}
              <section>
                <h2 className="text-2xl font-bold">Task details</h2>

                <div className="mt-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Task title
                  </label>

                  <input
                    id="title"
                    type="text"
                    value={task.title}
                    onChange={(event) =>
                      setTask({ ...task, title: event.target.value })
                    }
                    placeholder="Example: Wash, dry, and fold one load of laundry"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="category"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Category
                  </label>

                  <select
                    id="category"
                    value={task.category}
                    onChange={(event) =>
                      setTask({ ...task, category: event.target.value })
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Select a category</option>
                    <option value="Laundry">Laundry</option>
                    <option value="Pickup & Delivery">
                      Pickup & Delivery
                    </option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Moving">Moving</option>
                    <option value="Academic Support">Academic Support</option>
                    <option value="Technology">Technology</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Task description
                  </label>

                  <textarea
                    id="description"
                    rows={5}
                    value={task.description}
                    onChange={(event) =>
                      setTask({ ...task, description: event.target.value })
                    }
                    placeholder="Explain what needs to be completed and include any important instructions."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </section>

              <div className="border-t border-slate-200" />

              {/* Photo */}
              <section>
                <h2 className="text-2xl font-bold">Task photo</h2>

                <p className="mt-2 text-slate-600">
                  Add a reference photo to help applicants understand the task.
                </p>

                <label
                  htmlFor="photo"
                  className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center transition hover:border-emerald-500 hover:bg-emerald-50"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                    ＋
                  </span>

                  <span className="mt-4 font-bold">
                    Upload a task photo
                  </span>

                  <span className="mt-1 text-sm text-slate-500">
                    PNG, JPG or HEIC
                  </span>
                </label>

                <input
                  id="photo"
                  type="file"
                  accept="image/png,image/jpeg,image/heic"
                  className="hidden"
                />
              </section>

              <div className="border-t border-slate-200" />

              {/* Location */}
              <section>
                <h2 className="text-2xl font-bold">
                  Location and deadline
                </h2>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-bold text-slate-700"
                    >
                      General location
                    </label>

                    <input
                      id="location"
                      type="text"
                      value={task.location}
                      onChange={(event) =>
                        setTask({ ...task, location: event.target.value })
                      }
                      placeholder="Example: Cardinal Gardens"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="estimatedTime"
                      className="block text-sm font-bold text-slate-700"
                    >
                      Estimated time
                    </label>

                    <input
                      id="estimatedTime"
                      type="text"
                      value={task.estimatedTime}
                      onChange={(event) =>
                        setTask({
                          ...task,
                          estimatedTime: event.target.value,
                        })
                      }
                      placeholder="Example: 1–2 hours"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-bold text-slate-700"
                    >
                      Due date
                    </label>

                    <input
                      id="date"
                      type="date"
                      value={task.date}
                      onChange={(event) =>
                        setTask({ ...task, date: event.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-bold text-slate-700"
                    >
                      Due time
                    </label>

                    <input
                      id="time"
                      type="time"
                      value={task.time}
                      onChange={(event) =>
                        setTask({ ...task, time: event.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>
              </section>

              <div className="border-t border-slate-200" />

              {/* Payment */}
              <section>
                <h2 className="text-2xl font-bold">Payment</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="rounded-xl border-2 border-emerald-600 bg-emerald-50 p-5">
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="paymentType"
                        defaultChecked
                        className="mt-1 accent-emerald-600"
                      />

                      <div>
                        <p className="font-bold">Fixed price</p>
                        <p className="mt-1 text-sm text-slate-600">
                          Set the amount the worker will receive.
                        </p>
                      </div>
                    </div>
                  </label>

                  <label className="rounded-xl border-2 border-slate-200 p-5">
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="paymentType"
                        className="mt-1 accent-emerald-600"
                      />

                      <div>
                        <p className="font-bold">Accept proposals</p>
                        <p className="mt-1 text-sm text-slate-600">
                          Applicants can suggest a price.
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Fixed task payment
                  </label>

                  <div className="mt-2 flex rounded-xl border border-slate-300">
                    <span className="flex items-center border-r border-slate-300 px-4 font-bold text-slate-600">
                      $
                    </span>

                    <input
                      id="price"
                      type="number"
                      min="1"
                      value={task.price}
                      onChange={(event) =>
                        setTask({ ...task, price: event.target.value })
                      }
                      placeholder="18"
                      className="w-full rounded-r-xl px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="expenses"
                    className="block text-sm font-bold text-slate-700"
                  >
                    Maximum expense allowance{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </label>

                  <div className="mt-2 flex rounded-xl border border-slate-300">
                    <span className="flex items-center border-r border-slate-300 px-4 font-bold text-slate-600">
                      $
                    </span>

                    <input
                      id="expenses"
                      type="number"
                      min="0"
                      value={task.expenses}
                      onChange={(event) =>
                        setTask({ ...task, expenses: event.target.value })
                      }
                      placeholder="3"
                      className="w-full rounded-r-xl px-4 py-3 outline-none"
                    />
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    Workers must provide payment proof for documented expenses.
                  </p>
                </div>
              </section>

              <div className="border-t border-slate-200" />

              {/* Completion requirements */}
              <section>
                <h2 className="text-2xl font-bold">
                  Completion requirements
                </h2>

                <p className="mt-2 text-slate-600">
                  Explain what must be submitted before payment is released.
                </p>

                <textarea
                  rows={4}
                  value={task.proof}
                  onChange={(event) =>
                    setTask({ ...task, proof: event.target.value })
                  }
                  placeholder="Example: Upload photos showing the completed task."
                  className="mt-5 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </section>

              <div className="flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row">
               <button
  type="button"
  onClick={() => setShowReview(true)}
  className="rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"
>
  Review and publish
</button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-6 py-4 font-bold hover:border-emerald-600 hover:text-emerald-700"
                >
                  Save as draft
                </button>
              </div>
            </form>

            {/* Side panel */}
            <aside className="space-y-6 lg:sticky lg:top-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                  Before publishing
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Make your TaskCard easy to understand
                </h2>

                <ul className="mt-5 space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-emerald-600">✓</span>
                    Use a short and specific title.
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-emerald-600">✓</span>
                    Clearly explain the required work.
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-emerald-600">✓</span>
                    Set a realistic deadline and payment.
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-emerald-600">✓</span>
                    Explain the required completion proof.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                  Protected by escrow
                </p>

                <h2 className="mt-3 text-xl font-bold">
                  Funds are secured before work begins
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Payment is secured after you select an applicant and both
                  parties accept the Task Agreement.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
            {/* Review pop-up */}
      {showReview && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 px-4 py-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 p-6 sm:p-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                  Final review
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Review your TaskCard
                </h2>

                <p className="mt-2 text-slate-600">
                  Check the information before publishing it to the
                  marketplace.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowReview(false)}
                aria-label="Close review"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <div className="space-y-7 p-6 sm:p-8">
              {/* Main information */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                    {task.category || "Category not selected"}
                  </span>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    Ready to publish
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-bold">
                  {task.title || "Task title not provided"}
                </h3>

                <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
                  {task.description || "Task description not provided."}
                </p>
              </section>

              <div className="border-t border-slate-200" />

              {/* Details */}
              <section className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    General location
                  </p>
                  <p className="mt-1 font-bold">
                    {task.location || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Estimated time
                  </p>
                  <p className="mt-1 font-bold">
                    {task.estimatedTime || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Due date
                  </p>
                  <p className="mt-1 font-bold">
                    {task.date || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">
                    Due time
                  </p>
                  <p className="mt-1 font-bold">
                    {task.time || "Not provided"}
                  </p>
                </div>
              </section>

              <div className="border-t border-slate-200" />

              {/* Payment */}
              <section>
                <h3 className="text-xl font-bold">Payment summary</h3>

                <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-5">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600">Task payment</span>
                    <span className="font-bold">
                      ${task.price || "0"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600">
                      Maximum expense allowance
                    </span>
                    <span className="font-bold">
                      ${task.expenses || "0"}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 border-t border-slate-300 pt-3">
                    <span className="font-bold">Maximum secured total</span>
                    <span className="font-bold text-emerald-700">
                      $
                      {(Number(task.price) || 0) +
                        (Number(task.expenses) || 0)}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Payment is not charged when the TaskCard is published. Funds
                  are secured after you select an applicant and both parties
                  accept the Task Agreement.
                </p>
              </section>

              <div className="border-t border-slate-200" />

              {/* Completion proof */}
              <section>
                <h3 className="text-xl font-bold">
                  Completion requirements
                </h3>

                <p className="mt-3 whitespace-pre-line leading-7 text-slate-600">
                  {task.proof || "Completion requirements not provided."}
                </p>
              </section>

              <div className="rounded-xl bg-emerald-50 p-5">
                <p className="font-bold text-emerald-900">
                  Ready to publish
                </p>

                <p className="mt-1 text-sm leading-6 text-emerald-800">
                  Your TaskCard will become visible to verified students after
                  you publish it.
                </p>
              </div>
            </div>

            {/* Review actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 p-6 sm:flex-row sm:justify-end sm:p-8">
              <button
                type="button"
                onClick={() => setShowReview(false)}
                className="rounded-xl border border-slate-300 px-6 py-3 font-bold hover:border-emerald-600 hover:text-emerald-700"
              >
                Go back and edit
              </button>

              <a
                href="/tasks/create/success"
                className="rounded-xl bg-emerald-600 px-6 py-3 text-center font-bold text-white hover:bg-emerald-700"
              >
                Publish TaskCard
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}