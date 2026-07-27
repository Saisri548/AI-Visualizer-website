import MarkdownRenderer from "./MarkdownRenderer";

export default function ContentSection({ section }) {
  if (!section) return null;

  const { title, data } = section;

  return (
    <section
      id={section.id}
      className="mb-12 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-3">
        {title}
      </h2>

      <div className="space-y-8">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-6"
          >
            {key !== "content" && (
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {key}
              </h3>
            )}

            <MarkdownRenderer content={value} />
          </div>
        ))}
      </div>
    </section>
  );
}