
import MarkdownRenderer from "./MarkdownRenderer";

function getValue(content, key) {
  const regex = new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`);
  const match = content.match(regex);

  return match ? match[1].trim() : "";
}

function getTags(content) {
  const line = getValue(content, "Tags");

  if (!line) return [];

  return [...line.matchAll(/`(.*?)`/g)].map((m) => m[1]);
}

export default function HeroSection({ section }) {
  const content = section?.data?.content || "";

  const title = getValue(content, "Title");
  const subtitle = getValue(content, "Subtitle");
  const difficulty = getValue(content, "Difficulty");
  const readingTime = getValue(content, "Reading Time");
  const category = getValue(content, "Category");

  const tags = getTags(content);

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-10 shadow-lg">

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-4 text-lg text-blue-100">
        {subtitle}
      </p>

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="bg-white/20 px-4 py-2 rounded-full">
          📚 {category}
        </span>

        <span className="bg-white/20 px-4 py-2 rounded-full">
          ⭐ {difficulty}
        </span>

        <span className="bg-white/20 px-4 py-2 rounded-full">
          ⏱ {readingTime}
        </span>

      </div>

      <div className="flex flex-wrap gap-2 mt-8">

        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}

      </div>

    </section>
  );
}