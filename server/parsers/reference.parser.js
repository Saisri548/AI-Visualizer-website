import { getSection } from "./helpers/getSection.js";

function extractCategory(section, title) {

  const regex = new RegExp(
    `\\*\\*${title}\\*\\*([\\s\\S]*?)(?=\\n\\*\\*|$)`,
    "i"
  );

  const match = section.match(regex);

  if (!match) return [];

  return match[1]
    .split("\n")
    .map(line =>
      line.replace(/^[-*]\s*/, "").trim()
    )
    .filter(Boolean);

}

export function parseReferences(markdown) {

  const section = getSection(
    markdown,
    "References"
  );

  if (!section) {

    return {

      papers: [],

      books: [],

      documentation: [],

      websites: []

    };

  }

  return {

    papers: extractCategory(
      section,
      "Research Papers"
    ),

    books: extractCategory(
      section,
      "Books"
    ),

    documentation: extractCategory(
      section,
      "Official Documentation"
    ),

    websites: extractCategory(
      section,
      "Important Websites"
    )

  };

}