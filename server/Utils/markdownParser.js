function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

export function parseMarkdown(markdown) {
  const article = {
    title: "",
    sections: [],
  };

  const sections = markdown.split(/^# /gm).filter(Boolean);

  sections.forEach((section, index) => {
    const lines = section.split("\n");

    const title = lines[0].trim();

    if (index === 0) {
      article.title = title;
    }

    const content = lines.slice(1).join("\n").trim();

    article.sections.push({
      id: slugify(title),
      type: getSectionType(title),
      title,
      data: parseSubSections(content),
    });
  });

  return article;
}

function parseSubSections(content) {
  const result = {};

  const subsections = content.split(/^### /gm);

  if (subsections.length === 1) {
    return {
      content,
    };
  }

  subsections.forEach((sub) => {
    if (!sub.trim()) return;

    const lines = sub.split("\n");

    const heading = lines[0].trim();

    const body = lines.slice(1).join("\n").trim();

    result[heading] = body;
  });

  return result;
}

function getSectionType(title) {
  const map = {
    "Hero Section": "hero",
    Introduction: "content",
    "Learning Objectives": "content",
    Prerequisites: "content",
    History: "content",
    "Why is it Important?": "content",
    "What is NLU?": "content",
    "Core Components": "content",
    "How It Works": "content",
    "Step-by-Step Workflow": "content",
    "Real World Example": "content",
    Applications: "content",
    Advantages: "content",
    Limitations: "content",
    "Best Practices": "content",
    "Common Mistakes": "content",
    "Interview Questions": "content",
    Summary: "summary",
    Glossary: "glossary",
    Quiz: "quiz",
    References: "references",
    "Next Concept": "next",
  };

  return map[title] || "content";
}