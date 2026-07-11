export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            GrowEasy Smart Import AI
          </h1>

          <p className="text-sm text-slate-500">
            AI-powered CRM CSV Import Assistant
          </p>
        </div>

        <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          AI Ready
        </div>
      </div>
    </header>
  );
}