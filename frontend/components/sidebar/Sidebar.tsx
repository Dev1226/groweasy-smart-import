"use client";

import {
  LayoutDashboard,
  Upload,
  Users,
  Database,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Smart Import",
    icon: Upload,
    active: true,
  },
  {
    title: "Manage Leads",
    icon: Database,
  },
  {
    title: "Team Members",
    icon: Users,
  },
  {
    title: "CRM Fields",
    icon: Database,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r">

      <div className="p-8 border-b">

        <h1 className="text-3xl font-bold text-emerald-600">
          GrowEasy
        </h1>

        <p className="text-slate-500">
          Smart Import AI
        </p>

      </div>

      <nav className="p-5 space-y-2">

        {menus.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition

              ${
                item.active
                  ? "bg-emerald-100 text-emerald-700"
                  : "hover:bg-slate-100"
              }`}
            >

              <Icon size={20} />

              {item.title}

            </button>

          );

        })}

      </nav>

    </aside>
  );
}