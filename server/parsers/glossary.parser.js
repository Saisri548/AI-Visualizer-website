import { getSection } from "./helpers/getSection.js";
import { cleanLines } from "./helpers/cleanLines.js";

export function parseGlossary(markdown) {

  const section = getSection(markdown, "Glossary");

  if (!section) return [];

  return cleanLines(section)
    .map(line => {

      const match = line.match(
        /^[-*]?\s*\*\*(.*?)\*\*\s*:\s*(.*)$/
      );

      if (!match) return null;

      return {
        term: match[1].trim(),
        definition: match[2].trim(),
      };

    })
    .filter(Boolean);
}