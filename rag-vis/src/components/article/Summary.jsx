import MarkdownRenderer from "./MarkdownRenderer";

export default function Summary({ section }) {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        {section.title}
      </h2>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <MarkdownRenderer content={section.data.content} />
      </div>
    </section>
  );
}