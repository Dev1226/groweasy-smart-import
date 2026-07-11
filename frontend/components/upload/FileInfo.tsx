"use client";

import {
  FileSpreadsheet,
  Database,
  Columns,
  HardDrive,
} from "lucide-react";

interface Props {
  data: {
    fileName: string;
    fileSize: number;
    rows: any[];
    columns: string[];
  };
}

export default function FileInfo({ data }: Props) {
  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024)
      return (bytes / 1024).toFixed(2) + " KB";

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg border border-slate-200">

      <h2 className="mb-6 text-2xl font-bold">
        📄 File Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-slate-50 p-5">
          <FileSpreadsheet
            className="mb-3 text-emerald-600"
            size={30}
          />

          <p className="text-sm text-slate-500">
            File Name
          </p>

          <p className="font-semibold break-all">
            {data.fileName}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <HardDrive
            className="mb-3 text-blue-600"
            size={30}
          />

          <p className="text-sm text-slate-500">
            File Size
          </p>

          <p className="font-semibold">
            {formatBytes(data.fileSize)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <Database
            className="mb-3 text-purple-600"
            size={30}
          />

          <p className="text-sm text-slate-500">
            Total Rows
          </p>

          <p className="font-semibold">
            {data.rows.length}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <Columns
            className="mb-3 text-orange-500"
            size={30}
          />

          <p className="text-sm text-slate-500">
            Total Columns
          </p>

          <p className="font-semibold">
            {data.columns.length}
          </p>
        </div>

      </div>

    </div>
  );
}