import MarkdownRenderer from "./MarkdownRenderer";

export default function LearningObjectives({ data }) {
  if (!data?.content) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        Learning Objectives
      </h2>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <MarkdownRenderer content={data.content} />
      </div>
    </section>
  );
}