import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function NextConcept({ concept }) {
  if (!concept) return null;

  return (
    <section className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
          <BookOpen className="h-6 w-6" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-100">
            Continue Learning
          </p>

          <h2 className="text-3xl font-bold">
            Next Concept
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">

        <h3 className="text-2xl font-semibold">
          {concept.title}
        </h3>

        <p className="mt-3 max-w-3xl leading-8 text-indigo-100">
          {concept.description}
        </p>

      </div>

      {/* Metadata */}
      <div className="mt-8 flex flex-wrap gap-3">

        {concept.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
          >
            #{tag}
          </span>
        ))}

      </div>

      {/* Button */}
      <div className="mt-10">

        <Link
          to={`/concept/${concept.slug}`}
          className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:scale-105 hover:bg-slate-100"
        >
          Start Learning

          <ArrowRight className="h-5 w-5" />
        </Link>

      </div>

    </section>
  );
}