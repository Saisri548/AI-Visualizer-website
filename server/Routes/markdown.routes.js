import express from "express";
import { getMarkdown } from "../Controllers/markdown.controller.js";

const Mrouter = express.Router();

Mrouter.get("/:filename", getMarkdown);

export default Mrouter;