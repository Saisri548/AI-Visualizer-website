export function parseGlossary(markdown) {

  const match = markdown.match(
    /#\s+Glossary\s*\n([\s\S]*?)(?=\n#\s+|$)/i
  );


  if (!match) return [];


  return match[1]
    .split("\n")
    .map(line => {

      const item = line.match(
        /[-*]?\s*\*\*(.*?)\*\*\s*:\s*(.*)/
      );


      if (!item) return null;


      return {
        term: item[1].trim(),
        definition: item[2].trim(),
      };

    })
    .filter(Boolean);
}