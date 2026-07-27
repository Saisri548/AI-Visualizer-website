import MarkdownRenderer from "./MarkdownRenderer";

export default function Prerequisites({ data }) {
  if (!data?.content) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        Prerequisites
      </h2>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <MarkdownRenderer content={data.content} />
      </div>
    </section>
  );
}