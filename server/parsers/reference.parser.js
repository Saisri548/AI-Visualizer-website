export function parseReferences(markdown) {
  const match = markdown.match(
    /##\s+References\s*\n([\s\S]*?)$/i
  );

  if (!match)
    return {
      papers: [],
      books: [],
      documentation: [],
      websites: [],
    };

  const section = match[1];

  const getCategory = (title) => {
    const regex = new RegExp(
      `###\\s+${title}\\s*\\n([\\s\\S]*?)(?=\\n###|$)`,
      "i"
    );

    const m = section.match(regex);

    if (!m) return [];

    return m[1]
      .split("\n")
      .map(x => x.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean);
  };

  return {
    papers: getCategory("Papers"),
    books: getCategory("Books"),
    documentation: getCategory("Documentation"),
    websites: getCategory("Websites"),
  };
}