export interface CSVRow {
  [key: string]: string;
}

export interface ParsedCSV {
  fileName: string;
  fileSize: number;
  rows: CSVRow[];
  columns: string[];
}