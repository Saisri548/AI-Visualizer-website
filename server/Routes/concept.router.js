import express from "express";

import {
  getAllConcepts,
  getConceptBySlug,
  updateConcept,
  deleteConcept,
} from "../Controllers/concept.controller.js";

const Crouter = express.Router();

// Get all concepts
Crouter.get("/", getAllConcepts);

// Get single concept
Crouter.get("/:slug", getConceptBySlug);

// Update concept
Crouter.put("/:id", updateConcept);

// Delete concept
Crouter.delete("/:id", deleteConcept);

export default Crouter;