"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { uploadCSV } from "@/lib/api";

interface Props {
  onUploadComplete: (data: any) => void;
}

export default function UploadZone({ onUploadComplete }: Props) {
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      if (file.size > 10 * 1024 * 1024) {
        toast.error("Maximum file size is 10 MB");
        return;
      }

      try {
        setLoading(true);

        toast.loading("🤖 AI is processing your CSV...");

        const result = await uploadCSV(file);

        toast.dismiss();

        toast.success("✅ Import completed successfully");

        onUploadComplete(result);
      } catch (error) {
        toast.dismiss();

        toast.error("❌ Upload failed");

        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [onUploadComplete]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
    disabled: loading,
  });

  return (
    <div
      {...getRootProps()}
      className={`mt-8 cursor-pointer rounded-2xl border-2 border-dashed p-14 transition-all duration-300
      ${
        loading
          ? "cursor-not-allowed border-blue-400 bg-blue-50"
          : isDragActive
          ? "border-emerald-500 bg-emerald-50"
          : "border-slate-300 hover:border-emerald-400 hover:bg-slate-50"
      }`}
    >
      <input {...getInputProps()} />

      {loading ? (
        <>
          <Loader2
            size={60}
            className="mx-auto animate-spin text-blue-600"
          />

          <h3 className="mt-6 text-center text-2xl font-bold">
            AI is Processing...
          </h3>

          <p className="mt-3 text-center text-slate-500">
            Please wait while we analyze your CSV and map it into
            GrowEasy CRM format.
          </p>
        </>
      ) : (
        <>
          <UploadCloud
            size={60}
            className="mx-auto text-emerald-600"
          />

          <h3 className="mt-6 text-center text-2xl font-bold">
            {isDragActive
              ? "Drop your CSV here"
              : "Drag & Drop your CSV"}
          </h3>

          <p className="mt-3 text-center text-slate-500">
            Click anywhere to browse files
          </p>

          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500">
            <span>✓ CSV Only</span>
            <span>✓ Max 10 MB</span>
            <span>✓ AI Powered</span>
          </div>
        </>
      )}
    </div>
  );
}