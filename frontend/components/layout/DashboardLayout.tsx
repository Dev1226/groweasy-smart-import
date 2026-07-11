"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}