import { BookOpenCheck, CheckCircle2 } from "lucide-react";

export default function Prerequisites({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
          <BookOpenCheck className="h-6 w-6 text-green-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Prerequisites
          </h2>

          <p className="mt-1 text-slate-500">
            Before starting this topic, you should be familiar with:
          </p>
        </div>
      </div>

      {/* List */}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-green-300 hover:shadow-md"
          >
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />

            <p className="leading-7 text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}