"use client";

import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <div>

        <h2 className="text-xl font-bold">
          Smart CSV Import
        </h2>

        <p className="text-sm text-slate-500">
          AI-powered CRM Lead Import
        </p>

      </div>

      <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700">

        <Sparkles size={18} />

        AI Ready

      </div>

    </header>
  );
}