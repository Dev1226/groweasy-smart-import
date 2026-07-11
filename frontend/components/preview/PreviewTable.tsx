"use client";

interface Props {
  data: {
    rows: any[];
    columns: string[];
  };
}

export default function PreviewTable({ data }: Props) {
  const previewRows = data.rows.slice(0, 10);

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-6">

        <div>
          <h2 className="text-2xl font-bold">
            CSV Preview
          </h2>

          <p className="text-slate-500">
            Showing first 10 records
          </p>
        </div>

        <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          {data.rows.length} Rows
        </div>

      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[500px]">

        <table className="min-w-full text-sm">

          <thead className="sticky top-0 bg-slate-100">

            <tr>
              {data.columns.map((column) => (
                <th
                  key={column}
                  className="border-b px-4 py-3 text-left font-semibold whitespace-nowrap"
                >
                  {column}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>

            {previewRows.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50"
              >
                {data.columns.map((column) => (
                  <td
                    key={column}
                    className="border-b px-4 py-3 whitespace-nowrap"
                  >
                    {String(row[column] ?? "")}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}