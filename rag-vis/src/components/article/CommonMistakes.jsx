import { AlertTriangle, XCircle } from "lucide-react";

export default function CommonMistakes({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
          <AlertTriangle className="h-6 w-6 text-amber-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Common Mistakes
          </h2>

          <p className="mt-1 text-slate-500">
            Avoid these common mistakes while learning this concept.
          </p>
        </div>
      </div>

      {/* Mistakes */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-amber-200 bg-white p-5 transition duration-300 hover:shadow-md"
          >
            <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />

            <div>
              <h3 className="font-semibold text-slate-900">
                Mistake #{index + 1}
              </h3>

              <p className="mt-1 leading-7 text-slate-700">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}