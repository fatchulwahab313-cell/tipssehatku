"use client";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded"
      style={{ border: "1px solid var(--border)", color: "var(--text-secondary)", background: "white", cursor: "pointer", fontFamily: "inherit" }}>
      <Printer className="w-3.5 h-3.5" /> Cetak
    </button>
  );
}
