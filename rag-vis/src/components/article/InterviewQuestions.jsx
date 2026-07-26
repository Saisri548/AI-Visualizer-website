import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

export default function InterviewQuestions({ questions = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!questions.length) return null;

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm">

      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
          <Briefcase className="h-6 w-6 text-indigo-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Interview Questions
          </h2>

          <p className="mt-1 text-slate-500">
            Frequently asked interview questions with detailed answers.
          </p>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between p-5 text-left transition hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-800">
                  Q{index + 1}. {question.question}
                </span>

                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="border-t bg-slate-50 p-5">
                  <h4 className="mb-2 font-semibold text-green-700">
                    Answer
                  </h4>

                  <p className="leading-7 text-slate-700">
                    {question.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}