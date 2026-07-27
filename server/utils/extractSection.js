export function extractSection(markdown, heading) {
  const escapedHeading = heading.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(
    `#\\s+${escapedHeading}\\s*\\n([\\s\\S]*?)(?=\\n#\\s+|$)`,
    "i"
  );

  const match = markdown.match(regex);

  if (!match) return "";

  return match[1]
    .replace(/\n---\s*/g, "\n")
    .trim();
}