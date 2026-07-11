import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrowEasy Smart Import AI",
  description: "AI Powered CSV Import",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}