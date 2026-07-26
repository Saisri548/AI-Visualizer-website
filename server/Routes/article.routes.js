import express from "express";

import {
getArticleController
} from "../Controllers/article.controller.js";


const Arouter = express.Router();



Arouter.get(
"/:slug",
getArticleController
);



export default Arouter;