import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
} from "../Controllers/category.controller.js";

import {
  createConcept,
  getConceptsByCategory,
} from "../Controllers/concept.controller.js";

const router = express.Router();


// ==========================
// Categories
// ==========================

// Create
router.post("/categories", createCategory);

// Get all
router.get("/categories", getCategories);

// Get one by SLUG
router.get("/categories/:slug", getCategoryBySlug);

// Update
router.put("/categories/:id", updateCategory);

// Delete
router.delete("/categories/:id", deleteCategory);


// ==========================
// Concepts inside category
// ==========================

// Create concept
router.post(
  "/categories/:slug/concepts",
  createConcept
);

// Get concepts
router.get(
  "/categories/:slug/concepts",
  getConceptsByCategory
);

export default router;