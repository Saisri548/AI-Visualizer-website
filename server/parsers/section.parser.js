import { getSection } from "./helpers/getSection.js";

export function extractSection(markdown, heading) {
  return getSection(markdown, heading);
}