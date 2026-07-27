import mongoose from "mongoose";
import dotenv from "dotenv";

import Category from "./Models/Category.js";
import Concept from "./Models/Concepts.js";

dotenv.config();

async function seedConcepts() {
  try {
    // Connect MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    // Fetch all categories
    const categories = await Category.find();

    // Create lookup map
    const categoryMap = {};

    categories.forEach((category) => {
      categoryMap[category.slug] = category._id;
    });

    console.log("📂 Categories Found:");
    console.log(categoryMap);

    // Remove existing concepts
    await Concept.deleteMany({});

    console.log("🗑 Old concepts removed");

    // Insert concepts
  

const concepts = [
  {
    categoryId: categoryMap["llm"],
    title: "Large Language Models (LLMs)",
    slug: "large-language-models",
    excerpt: "Understanding how modern Large Language Models work.",
    markdownUrl: "markdown/large-language-models.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 25,
    tags: ["LLM", "Transformers", "NLP", "GenAI"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["rag"],
    title: "Retrieval-Augmented Generation (RAG)",
    slug: "retrieval-augmented-generation",
    excerpt: "Improve LLM responses using external knowledge.",
    markdownUrl: "markdown/retrieval-augmented-generation.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 25,
    tags: ["RAG", "Embeddings", "Vector Database", "LangChain"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["mcp"],
    title: "Model Context Protocol (MCP)",
    slug: "model-context-protocol",
    excerpt: "Learn how AI applications communicate securely using MCP.",
    markdownUrl: "markdown/model-context-protocol.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 22,
    tags: ["MCP", "Protocol", "Context", "AI"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["nlp"],
    title: "Natural Language Processing",
    slug: "natural-language-processing",
    excerpt: "Learn how computers process and analyze human language.",
    markdownUrl: "markdown/natural-language-processing.md",
    coverImage: "",
    difficulty: "Beginner",
    readingTime: 20,
    tags: ["NLP", "Language", "AI"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["nlu"],
    title: "Natural Language Understanding",
    slug: "natural-language-understanding",
    excerpt: "Understand how machines interpret meaning and intent.",
    markdownUrl: "markdown/natural-language-understanding.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 20,
    tags: ["NLU", "Intent", "Entities"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["ocr"],
    title: "Optical Character Recognition",
    slug: "optical-character-recognition",
    excerpt: "Extract text from images and scanned documents.",
    markdownUrl: "markdown/optical-character-recognition.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 20,
    tags: ["OCR", "Vision", "Text Extraction"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["asr"],
    title: "Automatic Speech Recognition",
    slug: "automatic-speech-recognition",
    excerpt: "Convert spoken language into text using AI.",
    markdownUrl: "markdown/automatic-speech-recognition.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 20,
    tags: ["ASR", "Speech", "Audio"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["lora"],
    title: "Low-Rank Adaptation (LoRA)",
    slug: "low-rank-adaptation",
    excerpt: "Parameter-efficient fine-tuning for Large Language Models.",
    markdownUrl: "markdown/lora-fine-tuning.md",
    coverImage: "",
    difficulty: "Advanced",
    readingTime: 28,
    tags: ["LoRA", "PEFT", "Fine-Tuning"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["reinforcement-learning"],
    title: "Reinforcement Learning",
    slug: "reinforcement-learning",
    excerpt: "Learn how intelligent agents learn through rewards and penalties.",
    markdownUrl: "markdown/reinforcement-learning.md",
    coverImage: "",
    difficulty: "Intermediate",
    readingTime: 25,
    tags: ["RL", "Agent", "Reward", "Policy"],
    order: 1,
    isPublished: true,
  },

  {
    categoryId: categoryMap["agi"],
    title: "Artificial General Intelligence",
    slug: "artificial-general-intelligence",
    excerpt: "Explore the future of human-level artificial intelligence.",
    markdownUrl: "markdown/artificial-general-intelligence.md",
    coverImage: "",
    difficulty: "Advanced",
    readingTime: 30,
    tags: ["AGI", "Future", "Research"],
    order: 1,
    isPublished: true,
  },
];
    await Concept.insertMany(concepts);

    console.log("🎉 Successfully inserted 10 concepts.");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB Disconnected");
  }
}

seedConcepts();