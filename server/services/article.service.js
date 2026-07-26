// services/article.service.js

import Concept from "../Models/Concepts.js";


import {
getMarkdownFromS3
}
from "./s3.service.js";


import {
parseMarkdownArticle
}
from "./markdownParser.js";




export async function getArticle(slug) {
  console.log("1. Slug:", slug);

  const concept = await Concept.findOne({
    slug,
    isPublished: true,
  }).populate("categoryId");

  console.log("2. Concept:", concept);

  if (!concept) {
    throw new Error("Concept not found");
  }

  console.log("3. Markdown URL:", concept.markdownUrl);

  const markdown = await getMarkdownFromS3(concept.markdownUrl);

  console.log("4. Markdown loaded");

  const article = parseMarkdownArticle(markdown);

  console.log("5. Markdown parsed");

  return {
    metadata: {
      title: concept.title,
      excerpt: concept.excerpt,
      difficulty: concept.difficulty,
      readingTime: concept.readingTime,
      category: concept.categoryId?.name,
      tags: concept.tags,
      coverImage: concept.coverImage,
    },

    article: article.article,
    quiz: article.quiz,
    references: article.references,
    nextConcept: article.nextConcept,
  };
}