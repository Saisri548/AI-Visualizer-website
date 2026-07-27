import MarkdownRenderer from "./MarkdownRenderer";

export default function NextConcept({ section }) {
  return (
    <section
      id={section.id}
      className="bg-blue-50 border border-blue-200 rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        {section.title}
      </h2>

      <MarkdownRenderer content={section.data.content} />
    </section>
  );
}