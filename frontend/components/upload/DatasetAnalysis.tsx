"use client";

import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  Database,
} from "lucide-react";

interface Props {
  data: {
    rows: any[];
    columns: string[];
  };
}

export default function DatasetAnalysis({ data }: Props) {
  const rows = data.rows;
  const columns = data.columns;

  const lowerColumns = columns.map((c) => c.toLowerCase());

  const emailColumns = lowerColumns.filter((c) =>
    c.includes("email")
  ).length;

  const phoneColumns = lowerColumns.filter(
    (c) =>
      c.includes("phone") ||
      c.includes("mobile") ||
      c.includes("contact")
  ).length;

  const nameColumns = lowerColumns.filter((c) =>
    c.includes("name")
  ).length;

  // Simple dataset detection
  let dataset = "Custom Spreadsheet";
  let confidence = 75;

  if (
    lowerColumns.some((c) => c.includes("facebook"))
  ) {
    dataset = "Facebook Lead Export";
    confidence = 98;
  } else if (
    lowerColumns.some((c) => c.includes("google"))
  ) {
    dataset = "Google Ads Export";
    confidence = 95;
  } else if (
    emailColumns > 0 &&
    phoneColumns > 0 &&
    nameColumns > 0
  ) {
    dataset = "CRM Lead Export";
    confidence = 92;
  }

  const ready =
    emailColumns > 0 || phoneColumns > 0;

  return (
    <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">

      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-violet-600" size={32} />
        <div>
          <h2 className="text-2xl font-bold">
            AI Dataset Analysis
          </h2>
          <p className="text-slate-500">
            Smart inspection before AI import
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-slate-50 p-5">
          <Database className="mb-3 text-blue-600" />
          <p className="text-sm text-slate-500">
            Dataset Type
          </p>
          <p className="font-semibold">
            {dataset}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Confidence
          </p>
          <p className="text-3xl font-bold text-emerald-600">
            {confidence}%
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Email Columns
          </p>
          <p className="text-3xl font-bold">
            {emailColumns}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Phone Columns
          </p>
          <p className="text-3xl font-bold">
            {phoneColumns}
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl bg-slate-100 p-5">

        {ready ? (
          <div className="flex items-center gap-3 text-emerald-700 font-semibold">
            <CheckCircle2 />
            Dataset is ready for AI import.
          </div>
        ) : (
          <div className="flex items-center gap-3 text-red-600 font-semibold">
            <AlertTriangle />
            No email or phone columns detected.
          </div>
        )}

      </div>

    </div>
  );
}