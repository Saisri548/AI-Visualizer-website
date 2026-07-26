export function parseList(markdown, heading) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(
    `##\\s+${escapedHeading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`,
    "i"
  );

  const match = markdown.match(regex);

  if (!match) return [];

  return match[1]
    .split("\n")
    .map(line =>
      line
        .replace(/^[-*]\s*/, "")
        .trim()
    )
    .filter(line => line.length > 0)
    .filter(line => line !== "---");
}