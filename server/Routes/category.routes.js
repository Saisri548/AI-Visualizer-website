import express from "express";

import {
  createCategory,
  getCategories,

  updateCategory,
  deleteCategory,
} from "../Controllers/category.controller.js";

import {
  createConcept,
  getConceptsByCategory,
} from "../Controllers/concept.controller.js";

const router = express.Router();

// Categories
router.post("/categories", createCategory);
router.get("/categories", getCategories);

router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

// Concepts inside a category
router.post("/categories/:slug/concepts", createConcept);
router.get("/categories/:slug/concepts", getConceptsByCategory);

export default router;