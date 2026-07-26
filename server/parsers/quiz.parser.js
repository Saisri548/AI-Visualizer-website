export function parseQuiz(markdown) {
  const sectionMatch = markdown.match(
    /##\s+Quiz\s*\n([\s\S]*?)(?=\n##\s+|$)/i
  );

  if (!sectionMatch) return [];

  const section = sectionMatch[1];

  const blocks = section
    .split(/###\s+Question\s+\d+/i)
    .filter(Boolean);

  const questions = [];

  for (const block of blocks) {
    const lines = block
      .split("\n")
      .map(l => l.trim())
      .filter(Boolean);

    const question = lines[0];

    const options = lines
      .filter(l => /^[A-D]\)/.test(l))
      .map(l => l.replace(/^[A-D]\)\s*/, ""));

    const answerLine = lines.find(l =>
      l.startsWith("**Correct Answer:**")
    );

    const letter = answerLine
      ?.replace("**Correct Answer:**", "")
      .trim();

    const map = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    };

    const explanationIndex = lines.findIndex(l =>
      l.startsWith("**Explanation:**")
    );

    const explanation =
      explanationIndex >= 0
        ? lines
            .slice(explanationIndex + 1)
            .join(" ")
            .replace(/---/g, "")
        : "";

    questions.push({
      question,
      options,
      correctAnswer: map[letter],
      explanation,
    });
  }

  return questions;
}