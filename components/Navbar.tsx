"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, Heart } from "lucide-react";
import { categories } from "@/data/articles";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) window.location.href = `/cari?q=${encodeURIComponent(query)}`;
  };

  return (
    <header className="w-full sticky top-0 z-50" style={{ background: "white", borderBottom: "1px solid var(--border)" }}>

      {/* ── Top bar: logo + search ── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "var(--green-primary)" }}>
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-black text-base leading-tight" style={{ color: "var(--green-primary)", letterSpacing: "-0.03em" }}>TipsSehatku</div>
              <div className="text-xs leading-tight" style={{ color: "var(--text-muted)" }}>Informasi Kesehatan Terpercaya</div>
            </div>
          </Link>

          {/* Search bar — center */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex mx-auto">
            <div className="flex w-full rounded-md overflow-hidden" style={{ border: "2px solid var(--border)", background: "var(--bg-gray)" }}>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Cari topik kesehatan..."
                className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
                style={{ color: "var(--text-primary)" }}
              />
              <button type="submit" className="px-5 py-2 text-sm font-bold text-white shrink-0" style={{ background: "var(--green-primary)" }}>
                Cari
              </button>
            </div>
          </form>

          {/* Mobile toggle */}
          <button className="ml-auto md:hidden p-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Category nav ── */}
      <div style={{ background: "var(--green-primary)" }}>
        <div className="max-w-6xl mx-auto px-4 hidden md:flex items-center overflow-x-auto">
          <Link href="/" className="text-xs font-semibold px-4 py-2.5 text-white opacity-90 whitespace-nowrap hover:opacity-100 hover:bg-green-700 transition-colors">
            Beranda
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/kategori/${cat.slug}`}
              className="text-xs font-semibold px-4 py-2.5 text-white opacity-90 whitespace-nowrap hover:opacity-100 hover:bg-green-700 transition-colors">
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid var(--border)" }}>
          <form onSubmit={handleSearch} className="p-3 flex gap-2">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Cari topik kesehatan..." className="flex-1 px-3 py-2 text-sm rounded-md outline-none"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-primary)" }} />
            <button type="submit" className="px-4 py-2 rounded-md text-white text-sm font-semibold"
              style={{ background: "var(--green-primary)" }}>Cari</button>
          </form>
          <div className="grid grid-cols-2 gap-0.5 px-3 pb-3">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-md hover:bg-green-50 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}>
                <span>{cat.icon}</span><span className="font-medium">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
