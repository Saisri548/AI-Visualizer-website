import { Clock, BookOpen, Tag, BarChart3 } from "lucide-react";

export default function HeroSection({ metadata }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white shadow-2xl">

      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="relative px-8 py-12 lg:px-12 lg:py-16">

        {/* Category */}
        <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-semibold text-cyan-300">
          {metadata.category}
        </span>

        {/* Title */}
        <h1 className="mt-5 text-4xl font-extrabold leading-tight lg:text-6xl">
          {metadata.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          {metadata.subtitle}
        </p>

        {/* Metadata */}
        <div className="mt-8 flex flex-wrap gap-4">

          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
            <Clock className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-xs text-slate-300">Reading Time</p>
              <p className="font-semibold">{metadata.readingTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
            <BarChart3 className="h-5 w-5 text-green-300" />
            <div>
              <p className="text-xs text-slate-300">Difficulty</p>
              <p className="font-semibold">{metadata.difficulty}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
            <BookOpen className="h-5 w-5 text-yellow-300" />
            <div>
              <p className="text-xs text-slate-300">Topic</p>
              <p className="font-semibold">{metadata.title}</p>
            </div>
          </div>

        </div>

        {/* Tags */}
        {metadata.tags?.length > 0 && (
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <Tag className="h-5 w-5 text-cyan-300" />
              <span className="font-semibold">Tags</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}