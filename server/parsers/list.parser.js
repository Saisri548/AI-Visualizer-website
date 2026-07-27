import { getSection } from "./helpers/getSection.js";
import { cleanLines } from "./helpers/cleanLines.js";

export function parseList(markdown, heading) {

  const section = getSection(markdown, heading);

  if (!section) return [];

  return cleanLines(section)
    .map(line => line.replace(/^[-*]\s*/, ""));
}