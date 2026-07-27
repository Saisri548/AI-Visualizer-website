export function getSection(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(
    `#{1,6}\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=\\n#{1,6}\\s+|$)`,
    "i"
  );

  const match = markdown.match(regex);

  if (!match) return "";

  return match[1]
    .replace(/^---$/gm, "")
    .trim();
}