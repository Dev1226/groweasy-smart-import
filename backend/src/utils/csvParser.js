import fs from "fs";
import Papa from "papaparse";

export const parseCSV = (filePath) => {
  const csvContent = fs.readFileSync(filePath, "utf8");

  const result = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true,
    delimiter: "", // Auto-detect delimiter
    dynamicTyping: false,
    transformHeader: (header) => header.trim(),
  });

  // Ignore delimiter detection warnings
  const actualErrors = result.errors.filter(
    (err) => err.code !== "UndetectableDelimiter"
  );

  if (actualErrors.length > 0) {
    throw new Error(actualErrors[0].message);
  }

  return result.data;
};