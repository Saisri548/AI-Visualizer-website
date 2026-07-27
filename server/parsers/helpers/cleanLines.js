export function cleanLines(text) {
  return text
    .replace(/^---$/gm, "")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);
}