"use client";
import { useState } from "react";
import { Loader2, ChevronDown, ChevronUp } from "lucide-react";

export default function AiSummary({ title, content }: { title: string; content: string }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (summary) { setOpen(!open); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/ai-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else { setSummary(data.summary); setOpen(true); }
    } catch { setError("Gagal menghubungi AI."); }
    finally { setLoading(false); }
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border" style={{ borderColor: "#bbf7d0" }}>
      <button onClick={generate} disabled={loading}
        className="w-full flex items-center justify-between px-4 py-3 font-semibold text-sm transition-colors"
        style={{ background: "#f0fdf4", color: "var(--green-dark)" }}>
        <div className="flex items-center gap-2">
          {loading ? <Loader2 className="w-4 h-4 animate-spin text-green-600" /> : <span>✨</span>}
          {loading ? "AI sedang merangkum artikel..." : "Ringkasan Cepat oleh AI"}
        </div>
        {summary && !loading && (open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
      </button>
      {error && <p className="px-4 py-2 text-xs text-red-500">{error}</p>}
      {summary && open && (
        <div className="px-4 py-3 text-sm leading-relaxed" style={{ background: "white", color: "var(--text-secondary)" }}>
          <p className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: "var(--green-primary)" }}>✨ Ringkasan AI</p>
          {summary}
        </div>
      )}
    </div>
  );
}
