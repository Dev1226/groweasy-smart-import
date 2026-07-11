import fs from "fs";

import { parseCSV } from "../utils/csvParser.js";
import { createBatches } from "../utils/batchProcessor.js";
import { extractCRMData } from "../services/aiService.js";

export const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "CSV file is required.",
      });
    }

    const rows = parseCSV(req.file.path);

    if (!rows.length) {
      return res.status(400).json({
        success: false,
        message: "CSV file is empty.",
      });
    }

    const batches = createBatches(rows, 50);

    let crmRecords = [];

    for (const batch of batches) {
      const result = await extractCRMData(batch);

      if (Array.isArray(result)) {
        crmRecords.push(...result);
      }
    }

    // Delete uploaded file after processing
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.warn("Unable to delete uploaded file:", err.message);
      }
    });

    return res.json({
      success: true,
      totalRows: rows.length,
      imported: crmRecords.length,
      skipped: rows.length - crmRecords.length,
      crmRecords,
    });

  } catch (err) {
    console.error("Upload Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};