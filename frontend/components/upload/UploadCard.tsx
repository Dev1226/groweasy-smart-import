"use client";

import UploadZone from "./UploadZone";

interface Props {
  onUploadComplete: (data: any) => void;
}

export default function UploadCard({
  onUploadComplete,
}: Props) {
  return (
    <section className="rounded-3xl bg-white p-10 shadow-lg">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Upload Your Dataset
        </h2>

        <p className="mt-3 text-slate-500">
          Facebook Leads, Google Ads,
          Excel, CRM exports and more.
        </p>
      </div>

      <UploadZone
        onUploadComplete={onUploadComplete}
      />
    </section>
  );
}