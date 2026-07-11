const steps = [
  "Upload CSV",
  "AI Analysis",
  "Review Data",
  "Import Complete",
];

export default function Workflow() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl border bg-white p-6 text-center shadow-sm"
          >
            <div className="mb-3 text-2xl font-bold text-emerald-600">
              {index + 1}
            </div>

            <p className="font-medium text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}