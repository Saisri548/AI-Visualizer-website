import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
} from "lucide-react";

export default function Quiz({ questions = [] }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!questions.length) return null;

  const handleSelect = (questionIndex, optionIndex) => {
    if (showResults) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const score = questions.reduce((total, question, index) => {
    return (
      total +
      (selectedAnswers[index] === question.correctAnswer ? 1 : 0)
    );
  }, 0);

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

          <HelpCircle className="h-6 w-6 text-blue-600" />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900">

            Quiz

          </h2>

          <p className="mt-1 text-slate-500">

            Test your understanding of this topic.

          </p>

        </div>

      </div>

      {/* Questions */}

      <div className="space-y-10">

        {questions.map((question, qIndex) => (

          <div
            key={qIndex}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >

            <h3 className="text-lg font-semibold text-slate-900">

              Q{qIndex + 1}. {question.question}

            </h3>

            <div className="mt-5 space-y-3">

              {question.options.map((option, optionIndex) => {

                const selected =
                  selectedAnswers[qIndex] === optionIndex;

                const correct =
                  optionIndex === question.correctAnswer;

                let classes =
                  "w-full rounded-lg border p-4 text-left transition ";

                if (!showResults) {
                  classes += selected
                    ? "border-blue-500 bg-blue-50"
                    : "hover:bg-slate-50";
                } else {
                  if (correct) {
                    classes +=
                      "border-green-500 bg-green-50";
                  } else if (selected) {
                    classes +=
                      "border-red-500 bg-red-50";
                  }
                }

                return (
                  <button
                    key={optionIndex}
                    onClick={() =>
                      handleSelect(qIndex, optionIndex)
                    }
                    className={classes}
                  >
                    <div className="flex items-center justify-between">

                      <span>{option}</span>

                      {showResults && correct && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}

                      {showResults &&
                        selected &&
                        !correct && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}

                    </div>

                  </button>
                );
              })}

            </div>

            {showResults && (

              <div className="mt-5 rounded-lg bg-slate-50 p-5">

                <h4 className="font-semibold text-blue-700">

                  Explanation

                </h4>

                <p className="mt-2 leading-7 text-slate-700">

                  {question.explanation}

                </p>

              </div>

            )}

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-10 flex flex-wrap gap-4">

        {!showResults ? (

          <button
            onClick={() => setShowResults(true)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Quiz
          </button>

        ) : (

          <>
            <div className="flex items-center rounded-xl bg-green-100 px-5 py-3 font-semibold text-green-700">

              Score : {score} / {questions.length}

            </div>

            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              <RotateCcw className="h-5 w-5" />

              Try Again

            </button>
          </>

        )}

      </div>

    </section>
  );
}