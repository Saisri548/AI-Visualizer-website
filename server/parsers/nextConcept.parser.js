export function parseNextConcept(markdown) {
  const match = markdown.match(
    /##\s+Next Concept\s*\n([\s\S]*?)$/i
  );

  if (!match) return null;

  return {
    title: match[1]
      .replace(/---/g, "")
      .trim(),
  };
}