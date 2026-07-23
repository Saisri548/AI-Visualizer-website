import express from "express";

import {

createConcept,
getConceptsByCategory,
getConceptBySlug,
updateConcept,
deleteConcept,

} from "../Controllers/concept.controller.js"

const Crouter = express.Router();


// Category Based

Crouter.post(
    "/categories/:slug/concepts",
    createConcept
);

Crouter.get(
    "/categories/:slug/concepts",
    getConceptsByCategory
);


// Single Concept

Crouter.get(
    "/concepts/:slug",
    getConceptBySlug
);


// Update

Crouter.put(
    "/concepts/:id",
    updateConcept
);


// Delete

Crouter.delete(
    "/concepts/:id",
    deleteConcept
);

export default Crouter;