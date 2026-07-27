import { getSection } from "./helpers/getSection.js";

export function parseInterview(markdown) {

  const section = getSection(
    markdown,
    "Interview Questions"
  );

  if (!section) return [];

  const regex =
    /\*\*(.*?)\*\*\s*([\s\S]*?)(?=\n\*\*|$)/g;

  const questions = [];

  let match;

  while ((match = regex.exec(section)) !== null) {

    questions.push({

      question: match[1].trim(),

      answer: match[2]
        .replace(/^---$/gm, "")
        .trim()

    });

  }

  return questions;
}