export function extractSection(markdown, heading) {
  if (!markdown || !heading) return "";

  // Escape special regex characters in heading
  const escapedHeading = heading.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  // Match either # Heading or ## Heading
  const regex = new RegExp(
    `^#{1,2}\\s+${escapedHeading}\\s*$([\\s\\S]*?)(?=^#{1,2}\\s+|\\Z)`,
    "gim"
  );

  const match = regex.exec(markdown);

  if (!match) {
    return "";
  }

  return match[1]
    .replace(/^---$/gm, "")
    .trim();
}