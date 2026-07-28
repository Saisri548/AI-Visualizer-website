import { useMemo, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

export default function Quiz({ section }) {
  const data = section?.data;

  if (!data?.content) return null;


  const questions = useMemo(() => {
    return data.content
      .split("\n---")
      .filter(Boolean)
      .map((q) => {

        const answer =
          q.match(
            /\*\*Correct Answer:\*\*\s*([A-D])/i
          )?.[1]?.toUpperCase() || "";


        const explanation =
          q.match(
            /\*\*Explanation:\*\*\s*([\s\S]*)/
          )?.[1] || "";


        const questionText =
          q
            .replace(
              /\*\*Correct Answer:\*\*[\s\S]*/i,
              ""
            )
            .trim();


        const options = {};

        ["A", "B", "C", "D"].forEach((letter) => {

          const regex = new RegExp(
            `${letter}\\)\\s*(.*)`
          );

          const match = q.match(regex);

          if (match) {
            options[letter] = match[1];
          }

        });


        return {
          questionText,
          options,
          answer,
          explanation,
        };

      });

  }, [data]);


  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState({});

  const [checked, setChecked] = useState({});

  const [finished, setFinished] = useState(false);



  const question = questions[current];



  const selectOption = (option) => {

    if (checked[current]) return;

    setSelected({
      ...selected,
      [current]: option,
    });

  };



  const checkAnswer = () => {

    if (!selected[current]) return;

    setChecked({
      ...checked,
      [current]: true,
    });

  };



  const nextQuestion = () => {

    if (current < questions.length - 1) {

      setCurrent(current + 1);

    } else {

      setFinished(true);

    }

  };



  const previousQuestion = () => {

    if (current > 0) {
      setCurrent(current - 1);
    }

  };



  const score = questions.filter(
    (q, index) =>
      selected[index] === q.answer
  ).length;



  if (finished) {

    return (

      <section className="mb-12">

        <h2 className="text-3xl font-bold mb-6">
          Quiz Result
        </h2>


        <div className="border rounded-xl p-6">

          <p className="text-xl">
            Your Score:
            {" "}
            <strong>
              {score}/{questions.length}
            </strong>
          </p>


          <button
            onClick={() => {
              setCurrent(0);
              setSelected({});
              setChecked({});
              setFinished(false);
            }}
            className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Retry Quiz
          </button>


        </div>

      </section>

    );

  }



  return (

    <section className="mb-12">


      <h2 className="text-3xl font-bold mb-6">
        {section.title}
      </h2>



      <div className="border rounded-xl p-6">


        <p className="mb-4 font-semibold">
          Question {current + 1} / {questions.length}
        </p>



        <MarkdownRenderer
          content={question.questionText}
        />



       <div className="flex flex-col gap-3 mt-6">

  {Object.entries(question.options).map(([key, value]) => (

    <label
      key={key}
      className={`
        flex items-center gap-3 cursor-pointer p-3 rounded-lg
        transition

        ${
          selected[current] === key
            ? "bg-blue-50"
            : "hover:bg-gray-50"
        }

        ${
          checked[current] &&
          key === question.answer
            ? "bg-green-50"
            : ""
        }

        ${
          checked[current] &&
          selected[current] === key &&
          key !== question.answer
            ? "bg-red-50"
            : ""
        }
      `}
    >

      <input
        type="radio"
        name={`question-${current}`}
        value={key}
        checked={selected[current] === key}
        onChange={() => selectOption(key)}
        disabled={checked[current]}
        className="w-4 h-4"
      />


      <span>
        <strong>
          {key})
        </strong>
        {" "}
        {value}
      </span>


    </label>

  ))}

</div>




        {!checked[current] && (

          <button

            onClick={checkAnswer}

            className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"

          >
            Check Answer

          </button>

        )}





        {checked[current] && (

          <div className="mt-6 p-5 rounded-lg border">


            {
              selected[current] === question.answer

              ?

              <p className="text-green-600 font-bold">
                ✅ Correct Answer!
              </p>

              :

              <p className="text-red-600 font-bold">
                ❌ Wrong Answer
              </p>

            }



            <p className="mt-3">

              <strong>
                Correct Answer:
              </strong>

              {" "}
              {question.answer}

            </p>



            <div className="mt-4">

              <strong>
                Explanation:
              </strong>


              <MarkdownRenderer
                content={question.explanation}
              />


            </div>


          </div>

        )}






        <div className="flex justify-between mt-8">


          <button

            disabled={current === 0}

            onClick={previousQuestion}

            className="px-5 py-2 border rounded-lg disabled:opacity-50"

          >

            Previous

          </button>




          <button

            onClick={nextQuestion}

            className="px-5 py-2 bg-green-600 text-white rounded-lg"

          >

            {current === questions.length - 1
              ? "Finish"
              : "Next"}

          </button>



        </div>


      </div>


    </section>

  );

}