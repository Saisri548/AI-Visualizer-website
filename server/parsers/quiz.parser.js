import { getSection } from "./helpers/getSection.js";

export function parseQuiz(markdown) {

  const section = getSection(markdown, "Quiz");

  if (!section) return [];

  const blocks = section
    .split(/---/)
    .map(block => block.trim())
    .filter(Boolean);

  const questions = [];

  for (const block of blocks) {

    const lines = block
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);

    const question = lines.find(
      line =>
        /^\*\*\d+\./.test(line) ||
        /^[0-9]+\./.test(line)
    );

    const options = lines
      .filter(line => /^[A-D]\)/.test(line))
      .map(line =>
        line.replace(/^[A-D]\)\s*/, "")
      );

    const answerLine = lines.find(line =>
      line.startsWith("**Correct Answer:**")
    );

    const letter = answerLine
      ?.replace("**Correct Answer:**", "")
      .trim();

    const explanationLine = lines.find(line =>
      line.startsWith("**Explanation:**")
    );

    const map = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    };

    questions.push({

      question: question
        ?.replace(/\*\*/g, "")
        .trim(),

      options,

      correctAnswer: map[letter],

      explanation: explanationLine
        ?.replace("**Explanation:**", "")
        .trim() || ""

    });

  }

  return questions;
}