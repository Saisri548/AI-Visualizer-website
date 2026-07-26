/**
 * Remove leading/trailing whitespace
 */
export function cleanMarkdown(text = "") {
  return text.trim();
}

/**
 * Remove empty lines
 */
export function removeEmptyLines(text = "") {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}

/**
 * Convert markdown into array of lines
 */
export function splitLines(text = "") {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Parse bullet list
 */
export function parseBulletList(text = "") {
  return splitLines(text)
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace("-", "").trim());
}

/**
 * Parse numbered list
 */
export function parseNumberedList(text = "") {
  return splitLines(text)
    .map((line) => line.replace(/^\d+\./, "").trim())
    .filter(Boolean);
}