"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import UploadZone from "@/components/upload/UploadZone";

interface CRMRecord {
  created_at: string;
  name: string;
  email: string;
  country_code: string;
  mobile_without_country_code: string;
  company: string;
  city: string;
  state: string;
  country: string;
  lead_owner: string;
  crm_status: string;
  crm_note: string;
  data_source: string;
  possession_time: string;
  description: string;
}

interface UploadResponse {
  success: boolean;
  totalRows: number;
  imported: number;
  skipped: number;
  crmRecords: CRMRecord[];
}

export default function Home() {
  const [result, setResult] = useState<UploadResponse | null>(null);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        <div>
          <h1 className="text-5xl font-bold">
            GrowEasy Smart Import
          </h1>

          <p className="mt-3 text-slate-600">
            AI Powered CRM Import System
          </p>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow">

          <UploadZone
            onUploadComplete={setResult}
          />

        </div>

        {result && (

          <>
            <div className="grid grid-cols-3 gap-6">

              <div className="rounded-2xl bg-emerald-100 p-6">
                <h3 className="text-xl font-bold">
                  Total Rows
                </h3>

                <p className="mt-4 text-4xl font-bold">
                  {result.totalRows}
                </p>
              </div>

              <div className="rounded-2xl bg-blue-100 p-6">
                <h3 className="text-xl font-bold">
                  Imported
                </h3>

                <p className="mt-4 text-4xl font-bold">
                  {result.imported}
                </p>
              </div>

              <div className="rounded-2xl bg-red-100 p-6">
                <h3 className="text-xl font-bold">
                  Skipped
                </h3>

                <p className="mt-4 text-4xl font-bold">
                  {result.skipped}
                </p>
              </div>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="mb-6 text-3xl font-bold">
                CRM Records
              </h2>

              <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                  <thead>

                    <tr className="border-b">

                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Company</th>
                      <th className="p-3 text-left">City</th>

                    </tr>

                  </thead>

                  <tbody>

                    {result.crmRecords.map((lead, index) => (

                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50"
                      >

                        <td className="p-3">{lead.name}</td>

                        <td className="p-3">
                          {lead.email}
                        </td>

                        <td className="p-3">
                          {lead.country_code}
                          {" "}
                          {lead.mobile_without_country_code}
                        </td>

                        <td className="p-3">
                          {lead.company}
                        </td>

                        <td className="p-3">
                          {lead.city}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </>

        )}

      </div>
    </DashboardLayout>
  );
}