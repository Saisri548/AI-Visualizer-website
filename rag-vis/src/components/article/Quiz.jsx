import { useMemo, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function Quiz({ data }) {
  if (!data?.content) return null;

  const questions = useMemo(() => {
    return data.content
      .split("\n---")
      .filter(Boolean)
      .map((q) => {
        const answer =
          q.match(/\*\*Correct Answer:\*\*\s*([A-D])/i)?.[1] || "";

        return {
          text: q,
          answer,
        };
      });
  }, [data]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value) => {
    if (submitted) return;

    setSelected({
      ...selected,
      [current]: value,
    });
  };

  const score = questions.filter(
    (q, i) => selected[i] === q.answer
  ).length;

  return (
    <section className="mb-12">

      <h2 className="text-3xl font-bold mb-6">
        Quiz
      </h2>

      <div className="border rounded-xl p-6">

        <MarkdownRenderer
          content={questions[current].text}
        />

        <div className="grid grid-cols-2 gap-4 mt-6">

          {["A", "B", "C", "D"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`border rounded-lg p-3 transition

${
selected[current]===opt
?"bg-blue-600 text-white"
:"hover:bg-gray-100"
}`}
            >
              {opt}
            </button>
          ))}

        </div>

        <div className="flex justify-between mt-8">

          <button
            disabled={current===0}
            onClick={()=>setCurrent(current-1)}
            className="px-4 py-2 border rounded-lg"
          >
            Previous
          </button>

          {current!==questions.length-1 && (
            <button
              onClick={()=>setCurrent(current+1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Next
            </button>
          )}

          {current===questions.length-1 && (
            <button
              onClick={()=>setSubmitted(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Submit Quiz
            </button>
          )}

        </div>
      </div>

      {submitted && (
        <div className="mt-8 border rounded-xl p-6 bg-green-50">

          <h3 className="text-2xl font-bold">
            Quiz Result
          </h3>

          <p className="mt-2 text-lg">
            Score :
            <strong>
              {" "}
              {score} / {questions.length}
            </strong>
          </p>

          <div className="w-full bg-gray-300 rounded-full h-4 mt-5">

            <div
              className="bg-green-600 h-4 rounded-full"
              style={{
                width: `${
                  (score/questions.length)*100
                }%`,
              }}
            />

          </div>

          <p className="mt-4">
            {score===questions.length &&
              "🎉 Excellent!"}

            {score>=7 &&
             score<questions.length &&
              "👏 Great Job!"}

            {score>=5 &&
             score<7 &&
              "👍 Good Attempt!"}

            {score<5 &&
              "📚 Revise once and try again."}
          </p>

        </div>
      )}
    </section>
  );
}