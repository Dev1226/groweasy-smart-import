import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadCSV } from "../controllers/importController.js";

const router = express.Router();

router.post(
  "/upload",
  upload.single("file"),
  uploadCSV
);

export default router;