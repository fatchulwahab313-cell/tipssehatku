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
    <header className="w-full sticky top-0 z-50 shadow-sm" style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
      {/* Top bar */}
      <div style={{ background: "var(--green-primary)" }}>
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <p className="text-xs text-white opacity-80">💡 Informasi kesehatan terpercaya untuk keluarga Indonesia</p>
          <span className="text-xs text-white opacity-80">📧 info@tipssehatku.com</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--green-primary)" }}>
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="font-black text-lg leading-tight" style={{ color: "var(--green-primary)" }}>TipsSehatku</div>
              <div className="text-xs leading-tight" style={{ color: "var(--text-muted)" }}>Tips Kesehatan Terpercaya</div>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md hidden md:flex">
            <div className="flex w-full rounded-lg overflow-hidden border" style={{ borderColor: "#d1d5db" }}>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Cari tips kesehatan..."
                className="flex-1 px-4 py-2 text-sm outline-none"
                style={{ color: "var(--text-primary)" }}
              />
              <button type="submit" className="px-4 py-2 text-white text-sm" style={{ background: "var(--green-primary)" }}>
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <div className="border-t hidden md:block" style={{ borderColor: "#e5e7eb", background: "white" }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-1 overflow-x-auto py-1">
          <Link href="/" className="text-sm px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors hover:bg-green-50" style={{ color: "var(--text-secondary)" }}>
            🏠 Beranda
          </Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/kategori/${cat.slug}`}
              className="text-sm px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors hover:bg-green-50"
              style={{ color: "var(--text-secondary)" }}>
              {cat.icon} {cat.label}
            </Link>
          ))}
          <Link href="/tentang" className="text-sm px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors hover:bg-green-50 ml-auto" style={{ color: "var(--text-secondary)" }}>
            Tentang Kami
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: "white", borderColor: "#e5e7eb" }}>
          <form onSubmit={handleSearch} className="p-3 flex gap-2">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Cari tips kesehatan..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border outline-none"
              style={{ borderColor: "#d1d5db" }}
            />
            <button type="submit" className="px-4 py-2 rounded-lg text-white text-sm" style={{ background: "var(--green-primary)" }}>
              <Search className="w-4 h-4" />
            </button>
          </form>
          <div className="pb-3">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="flex items-center gap-3 px-4 py-2.5 text-sm border-t"
                style={{ color: "var(--text-secondary)", borderColor: "#f3f4f6" }}
                onClick={() => setMenuOpen(false)}>
                <span>{cat.icon}</span> {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
