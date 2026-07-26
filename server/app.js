import express from "express";
import cors from "cors";
import router from "./Routes/category.routes.js";
import Crouter from "./Routes/concept.router.js";
import trouter from "./Routes/testS3.Router.js";
import Arouter from "./Routes/article.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Concepts Visualizer API is running 🚀",
  });
});

app.use("/api", router);      // Categories + category concepts
app.use("/api/concepts", Crouter); // Concept operations
app.use("/api/articles", Arouter);
app.use("/api/S3", trouter);


app.use("/api/S3",trouter)
// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;