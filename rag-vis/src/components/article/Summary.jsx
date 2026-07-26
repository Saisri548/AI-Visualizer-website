import { BookCheck, CheckCircle2 } from "lucide-react";

export default function Summary({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <BookCheck className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Summary
          </h2>

          <p className="mt-1 text-slate-500">
            Key takeaways from this article.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 md:grid-cols-2">

        {items.map((item, index) => (

          <div
            key={index}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              {index + 1}
            </div>

            <div>

              <div className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />

                <h3 className="font-semibold text-slate-900">
                  Key Takeaway
                </h3>
              </div>

              <p className="leading-7 text-slate-700">
                {item}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}