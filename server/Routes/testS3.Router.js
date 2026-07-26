import express from "express";
import { testS3Connection } from "../Controllers/tests3Controller.js";

const trouter = express.Router();

trouter.get("/test", testS3Connection);

export default trouter;