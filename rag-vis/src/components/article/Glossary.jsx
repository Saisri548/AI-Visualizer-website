import { BookMarked, Hash } from "lucide-react";

export default function Glossary({ terms = [] }) {
  if (!terms.length) return null;

  return (
    <section className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
          <BookMarked className="h-6 w-6 text-purple-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Glossary
          </h2>

          <p className="mt-1 text-slate-500">
            Important terms you should remember.
          </p>
        </div>
      </div>

      {/* Terms */}
      <div className="grid gap-5 md:grid-cols-2">

        {terms.map((term, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Hash className="h-5 w-5 text-purple-700" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {term.word}
              </h3>

            </div>

            <p className="leading-7 text-slate-700">
              {term.definition}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}