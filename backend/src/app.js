import express from "express";
import cors from "cors";
import importRoutes from "./routes/importRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/import", importRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GrowEasy Smart Import Backend Running",
  });
});

export default app;