"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, Heart, ChevronDown } from "lucide-react";
import { categories } from "@/data/articles";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) window.location.href = `/cari?q=${encodeURIComponent(query)}`;
  };

  return (
    <>
      {/* ── Trust bar (seperti NIH / MedlinePlus) ── */}
      <div className="trust-strip">
        ✅ Informasi kesehatan terpercaya &nbsp;|&nbsp; 🩺 Ditinjau tenaga medis &nbsp;|&nbsp; 📚 12+ artikel berbasis riset
      </div>

      {/* ── Main header ── */}
      <header className="w-full sticky top-0 z-50" style={{ background: "white", boxShadow: "0 1px 0 var(--border), 0 2px 8px rgba(0,0,0,0.04)" }}>

        {/* Row 1: Logo + Search */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #0a8f4f, #16a34a)" }}>
                <Heart className="w-4.5 h-4.5 text-white fill-white" strokeWidth={0} style={{ width: 18, height: 18 }} />
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-[15px] leading-tight" style={{ color: "var(--green-primary)", letterSpacing: "-0.03em" }}>
                  TipsSehatku
                </div>
                <div className="text-[10px] leading-tight font-medium" style={{ color: "var(--text-muted)" }}>
                  Portal Kesehatan Terpercaya
                </div>
              </div>
            </Link>

            {/* Search — center, mirip Healthline */}
            <form onSubmit={handleSearch} className="flex-1 max-w-lg hidden md:flex mx-4">
              <div className="flex w-full items-center rounded-lg overflow-hidden"
                style={{ border: "1.5px solid var(--border)", background: "var(--bg-gray)", transition: "border-color .15s" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-primary)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
                <Search className="w-4 h-4 ml-3 shrink-0" style={{ color: "var(--text-muted)" }} />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Cari topik kesehatan, gejala, obat..."
                  className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent"
                  style={{ color: "var(--text-primary)" }}
                />
                <button type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white shrink-0"
                  style={{ background: "var(--green-primary)" }}>
                  Cari
                </button>
              </div>
            </form>

            {/* Mobile toggle */}
            <button className="ml-auto md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Row 2: Category nav bar (seperti Healthline topic bar) */}
        <div style={{ borderTop: "1px solid var(--border-light)", background: "var(--bg-white)" }}>
          <div className="max-w-6xl mx-auto px-4 hidden md:flex items-center gap-0 overflow-x-auto">
            <Link href="/"
              className="text-xs font-semibold px-3.5 py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-green-500 transition-colors"
              style={{ color: "var(--text-secondary)" }}>
              Beranda
            </Link>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="text-xs font-semibold px-3.5 py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-green-500 hover:text-green-700 transition-colors flex items-center gap-1"
                style={{ color: "var(--text-secondary)" }}>
                {cat.icon} {cat.label}
              </Link>
            ))}
            <Link href="/cari?q="
              className="text-xs font-semibold px-3.5 py-2.5 whitespace-nowrap border-b-2 border-transparent hover:border-green-500 hover:text-green-700 transition-colors ml-auto"
              style={{ color: "var(--text-secondary)" }}>
              Semua Artikel →
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid var(--border)" }}>
            <form onSubmit={handleSearch} className="p-3 flex gap-2">
              <div className="flex flex-1 items-center rounded-lg overflow-hidden"
                style={{ border: "1.5px solid var(--border)", background: "var(--bg-gray)" }}>
                <Search className="w-4 h-4 ml-2.5 shrink-0" style={{ color: "var(--text-muted)" }} />
                <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Cari topik kesehatan..."
                  className="flex-1 px-2.5 py-2 text-sm outline-none bg-transparent"
                  style={{ color: "var(--text-primary)" }} />
              </div>
              <button type="submit" className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                style={{ background: "var(--green-primary)" }}>Cari</button>
            </form>
            <div className="grid grid-cols-2 gap-0 pb-2">
              {categories.map(cat => (
                <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-green-50 transition-colors border-b"
                  style={{ color: "var(--text-secondary)", borderColor: "var(--border-light)" }}
                  onClick={() => setMenuOpen(false)}>
                  <span className="text-base">{cat.icon}</span>
                  <span className="font-medium text-xs">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
