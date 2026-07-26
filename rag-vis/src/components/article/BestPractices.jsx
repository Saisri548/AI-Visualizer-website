import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BestPractices({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
          <ShieldCheck className="h-6 w-6 text-green-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Best Practices
          </h2>

          <p className="mt-1 text-slate-500">
            Follow these recommendations when working with this concept.
          </p>
        </div>
      </div>

      {/* Practices */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-green-200 bg-white p-5 transition duration-300 hover:shadow-md"
          >
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />

            <div>
              <h3 className="font-semibold text-slate-900">
                Best Practice #{index + 1}
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