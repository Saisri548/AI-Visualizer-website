import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../Controllers/category.controller.js"

const router = express.Router();

// Create
router.post("/", createCategory);

// Read All
router.get("/", getCategories);

// Read One
router.get("/:id", getCategoryById);

// Update
router.put("/:id", updateCategory);

// Delete
router.delete("/:id", deleteCategory);

export default router;