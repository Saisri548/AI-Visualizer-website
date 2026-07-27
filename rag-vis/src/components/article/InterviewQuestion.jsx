import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function InterviewQuestions({ data }) {
  if (!data?.content) return null;

  const blocks = data.content
    .split(/\n(?=\*\*\d+\.)/)
    .filter(Boolean);

  const [open, setOpen] = useState(null);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">
        Interview Questions
      </h2>

      <div className="space-y-4">
        {blocks.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-5 text-left font-semibold bg-gray-50 hover:bg-gray-100"
            >
              Question {index + 1}

              {open === index ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {open === index && (
              <div className="p-6">
                <MarkdownRenderer content={item} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}