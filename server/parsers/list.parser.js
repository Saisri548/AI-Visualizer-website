export function parseList(markdown, heading) {
  if (!markdown || !heading) return [];

  // Escape regex characters
  const escapedHeading = heading.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  // Supports both # Heading and ## Heading
  const regex = new RegExp(
    `^#{1,2}\\s+${escapedHeading}\\s*$([\\s\\S]*?)(?=^#{1,2}\\s+|\\Z)`,
    "gim"
  );

  const match = regex.exec(markdown);

  if (!match) return [];

  return match[1]
    .split("\n")
    .map(line => line.trim())

    // Remove separators
    .filter(line => line !== "---")

    // Keep only bullet or numbered items
    .filter(line =>
      /^[-*]\s+/.test(line) ||
      /^\d+\.\s+/.test(line)
    )

    // Remove bullet/number prefix
    .map(line =>
      line.replace(/^[-*]\s+/, "")
          .replace(/^\d+\.\s+/, "")
          .trim()
    )

    .filter(Boolean);
}