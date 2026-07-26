import { Target, CheckCircle2 } from "lucide-react";

export default function LearningObjectives({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <Target className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Learning Objectives
          </h2>

          <p className="text-slate-500 mt-1">
            After completing this article, you will be able to:
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:shadow-md"
          >
            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600 flex-shrink-0" />

            <p className="text-slate-700 leading-7">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}