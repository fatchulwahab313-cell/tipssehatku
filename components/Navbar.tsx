"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/articles";

const qaColors: Record<string, string> = {
  gizi:       "#dcfce7",
  penyakit:   "#fce7f3",
  herbal:     "#ccfbf1",
  olahraga:   "#fff7ed",
  "ibu-anak": "#dbeafe",
  mental:     "#f3e8ff",
};

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) window.location.href = `/cari?q=${encodeURIComponent(query)}`;
  };

  return (
    <>
      {/* ── TOP BAR ── */}
      <div style={{ background: "var(--green-dark)", color: "rgba(255,255,255,.85)", fontSize: "0.75rem", padding: "6px 4%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>📋 Informasi Kesehatan Terpercaya · 19 Artikel Terverifikasi Medis</span>
        <span className="hidden sm:block" style={{ color: "rgba(255,255,255,.85)" }}>
          ✉️ info@tipssehatku.com &nbsp;|&nbsp;
          <Link href="#" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,.85)" }}>Tentang Kami</Link>
        </span>
      </div>

      {/* ── MAIN NAV ── */}
      <nav style={{ background: "white", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 200, boxShadow: "var(--shadow)" }}>

        {/* Row 1: Logo + Badge + Search */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4%", height: 62, gap: 16 }}>

          {/* SVG Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160" height="40" style={{ display: "block" }}>
              <defs>
                <linearGradient id="ng1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d4f3c"/>
                  <stop offset="100%" stopColor="#1a7a58"/>
                </linearGradient>
                <linearGradient id="ng2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5edc9e"/>
                  <stop offset="100%" stopColor="#2ebd7a"/>
                </linearGradient>
                <linearGradient id="ng3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b8a"/>
                  <stop offset="100%" stopColor="#e84369"/>
                </linearGradient>
                <radialGradient id="ng4" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#1e9966"/>
                  <stop offset="100%" stopColor="#0d5c3a"/>
                </radialGradient>
              </defs>
              <rect width="520" height="160" rx="20" fill="url(#ng1)"/>
              <circle cx="80" cy="80" r="54" fill="url(#ng4)"/>
              <path d="M58,62 Q44,72 50,90 Q62,108 76,96 Q60,85 58,62Z" fill="url(#ng2)" opacity=".95"/>
              <path d="M102,62 Q116,72 110,90 Q98,108 84,96 Q100,85 102,62Z" fill="url(#ng2)" opacity=".9"/>
              <path d="M80,95 C80,95 62,82 62,71 C62,63 68,58 74,60 C77,61 80,65 80,65 C80,65 83,61 86,60 C92,58 98,63 98,71 C98,82 80,95 80,95Z" fill="url(#ng3)"/>
              <rect x="77" y="66" width="6" height="16" rx="2" fill="#fff" opacity=".85"/>
              <rect x="72" y="71" width="16" height="6" rx="2" fill="#fff" opacity=".85"/>
              <text x="152" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#5edc9e" letterSpacing="-0.5">tips</text>
              <text x="222" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#ffffff" letterSpacing="-0.5">sehat</text>
              <text x="348" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#ff8fab" letterSpacing="-0.5">ku</text>
              <text x="153" y="112" fontFamily="Trebuchet MS,sans-serif" fontSize="13" fill="#a8d8c4" letterSpacing="3.5">HIDUP SEHAT DIMULAI DARI SINI</text>
            </svg>
          </Link>

          {/* Pulse badge — desktop */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 6, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "4px 10px", fontSize: "0.7rem", fontWeight: 600, color: "var(--green-dark)", flexShrink: 0 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "pulse 2s infinite", display: "inline-block" }} />
            Terverifikasi Medis
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:block" style={{ flex: 1, maxWidth: 380, position: "relative" }}>
            <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--soft)", fontSize: "1rem", pointerEvents: "none" }}>🔍</span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Cari gejala, penyakit, tips..."
              style={{ width: "100%", padding: "9px 16px 9px 40px", border: "1.5px solid var(--border)", borderRadius: 50, fontSize: "0.88rem", fontFamily: "inherit", background: "var(--bg)", color: "var(--dark)", outline: "none", transition: "border-color .2s, box-shadow .2s" }}
              onFocus={e => { e.target.style.borderColor = "var(--green)"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,.1)"; e.target.style.background = "white"; }}
              onBlur={e => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = ""; e.target.style.background = "var(--bg)"; }}
            />
          </form>

          {/* Semua Artikel button */}
          <Link href="/cari?q=" className="hidden md:block nav-btn-articles">
            Semua Artikel
          </Link>

          {/* Mobile hamburger */}
          <button className="ml-auto md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Row 2: Quick Access Category Bar */}
        <div className="hidden md:flex" style={{ borderTop: "1px solid var(--border)", background: "white", overflowX: "auto", scrollbarWidth: "none" }}>
          <Link href="/" className="qa-link" style={{ borderBottomColor: "var(--green)" }}>
            🏠 Beranda
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/kategori/${cat.slug}`} className="qa-link">
              <span style={{ width: 30, height: 30, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", background: qaColors[cat.slug] || "#f3f4f6", flexShrink: 0 }}>
                {cat.icon}
              </span>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid var(--border)" }}>
            <form onSubmit={handleSearch} className="p-3 flex gap-2">
              <div className="flex flex-1 items-center overflow-hidden" style={{ border: "1.5px solid var(--border)", borderRadius: 50, background: "var(--bg)" }}>
                <Search className="w-4 h-4 ml-3 shrink-0" style={{ color: "var(--soft)" }} />
                <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                  placeholder="Cari topik kesehatan..."
                  className="flex-1 px-2.5 py-2 text-sm outline-none bg-transparent"
                  style={{ color: "var(--dark)" }} />
              </div>
              <button type="submit" className="px-4 py-2 text-white text-sm font-bold" style={{ background: "var(--green)", borderRadius: 50, border: "none" }}>Cari</button>
            </form>
            <div className="grid grid-cols-2 pb-2">
              {categories.map(cat => (
                <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors border-b"
                  style={{ color: "var(--mid)", borderColor: "var(--border)" }}
                  onClick={() => setMenuOpen(false)}>
                  <span className="text-base">{cat.icon}</span>
                  <span className="font-semibold text-xs">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
