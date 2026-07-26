export function parseInterview(markdown) {

  const match = markdown.match(
    /#\s+Interview Questions\s*\n([\s\S]*?)(?=\n#\s+|$)/i
  );


  if (!match) return [];


  const section = match[1];


  const regex =
    /\*\*\d+\.\s*(.*?)\*\*\s*\n([\s\S]*?)(?=\n\*\*\d+\.|$)/g;


  const questions = [];

  let item;


  while ((item = regex.exec(section)) !== null) {

    questions.push({

      question: item[1]
        .trim(),

      answer: item[2]
        .replace(/---/g, "")
        .trim()

    });

  }


  return questions;
}