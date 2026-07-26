import express from "express";

import {
getArticleController
} from "../controllers/article.controller.js";


const Arouter = express.Router();



Arouter.get(
"/:slug",
getArticleController
);



export default Arouter;