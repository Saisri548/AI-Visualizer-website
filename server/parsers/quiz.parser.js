export function parseQuiz(markdown){

  const match = markdown.match(
    /#\s+Quiz\s*\n([\s\S]*?)(?=\n#\s+|$)/i
  );


  if(!match) return [];


  const section = match[1];


  const blocks = section.split(
    /\n---\n/
  );


  const questions=[];


  for(const block of blocks){


    const lines = block
      .split("\n")
      .map(x=>x.trim())
      .filter(Boolean);



    const questionLine = lines.find(x =>
      /^\*\*\d+\./.test(x)
    );


    if(!questionLine) continue;



    const question =
      questionLine
      .replace(/\*\*/g,"")
      .replace(/^\d+\.\s*/,"")
      .trim();



    const options = lines
      .filter(x=>/^[A-D]\)/.test(x))
      .map(x=>
        x.replace(/^[A-D]\)\s*/,"")
      );



    const answerLine = lines.find(x =>
      x.includes("Correct Answer")
    );


    const letter =
      answerLine
      ?.replace(/\*\*Correct Answer:\*\*/,"")
      .trim();



    const answerMap={
      A:0,
      B:1,
      C:2,
      D:3
    };



    const explanationLine = lines.findIndex(x =>
      x.includes("Explanation")
    );


    const explanation =
      explanationLine >=0
      ? lines
          .slice(explanationLine)
          .join(" ")
          .replace(/\*\*Explanation:\*\*/,"")
          .trim()
      :"";



    questions.push({

      question,

      options,

      correctAnswer:
        answerMap[letter],

      explanation

    });

  }


  return questions;

}