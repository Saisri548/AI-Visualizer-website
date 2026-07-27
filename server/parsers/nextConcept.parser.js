import { getSection } from "./helpers/getSection.js";

export function parseNextConcept(markdown) {

  const section = getSection(
    markdown,
    "Next Concept"
  );

  if (!section) return null;

  return {

    title: section
      .replace(/\*\*/g, "")
      .trim()

  };

}