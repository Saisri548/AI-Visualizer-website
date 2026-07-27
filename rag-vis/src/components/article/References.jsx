import MarkdownRenderer from "./MarkdownRenderer";

export default function References({ section }) {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        {section.title}
      </h2>

      <MarkdownRenderer content={section.data.content} />
    </section>
  );
}