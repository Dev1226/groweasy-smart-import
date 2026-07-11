"use client";

import {
  Brain,
  CheckCircle2,
} from "lucide-react";

interface Props {
  columns: string[];
}

export default function MappingPreview({ columns }: Props) {

  const detectField = (target: string) => {

    const map: Record<string, string[]> = {
      name: ["name", "full name", "customer", "lead"],
      email: ["email", "mail"],
      mobile_without_country_code: [
        "phone",
        "mobile",
        "contact",
      ],
      company: ["company", "organization"],
      city: ["city"],
      state: ["state"],
      country: ["country"],
      crm_note: ["remark", "note", "comment"],
      created_at: ["date", "created"],
    };

    const lower = columns.map((c) => c.toLowerCase());

    for (const key of map[target]) {

      const found = lower.find((c) =>
        c.includes(key)
      );

      if (found) return found;
    }

    return "Not Detected";
  };

  const fields = [
    "name",
    "email",
    "mobile_without_country_code",
    "company",
    "city",
    "state",
    "country",
    "crm_note",
    "created_at",
  ];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-8 shadow-lg">

      <div className="mb-8 flex items-center gap-3">

        <Brain
          className="text-violet-600"
          size={30}
        />

        <div>

          <h2 className="text-2xl font-bold">
            AI Field Mapping Preview
          </h2>

          <p className="text-slate-500">
            Estimated CRM mapping before AI processing
          </p>

        </div>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">
              CRM Field
            </th>

            <th className="py-3 text-left">
              Detected Column
            </th>

            <th className="py-3">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {fields.map((field) => {

            const detected =
              detectField(field);

            return (

              <tr
                key={field}
                className="border-b"
              >

                <td className="py-4 font-medium">
                  {field}
                </td>

                <td className="py-4">
                  {detected}
                </td>

                <td className="text-center">

                  {detected !==
                  "Not Detected" ? (
                    <CheckCircle2
                      className="mx-auto text-emerald-600"
                    />
                  ) : (
                    "-"
                  )}

                </td>

              </tr>

            );
          })}

        </tbody>

      </table>

    </div>
  );
}