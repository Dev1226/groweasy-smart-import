"use client";

import {
  LayoutDashboard,
  Upload,
  Users,
  Database,
  FileSpreadsheet,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
  },
  {
    icon: Upload,
    title: "Smart Import",
    active: true,
  },
  {
    icon: Database,
    title: "Manage Leads",
  },
  {
    icon: Users,
    title: "Team Members",
  },
  {
    icon: FileSpreadsheet,
    title: "CRM Fields",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h1 className="text-2xl font-bold text-emerald-600">
          GrowEasy
        </h1>

        <p className="text-sm text-slate-500">
          Smart Import AI
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => (
          <button
            key={item.title}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition

            ${
              item.active
                ? "bg-emerald-100 text-emerald-700"
                : "hover:bg-slate-100"
            }`}
          >
            <item.icon size={20} />

            {item.title}
          </button>
        ))}

      </nav>
    </aside>
  );
}