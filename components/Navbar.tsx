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
    <header className="w-full sticky top-0 z-50" style={{ background: "white", borderBottom: "1px solid var(--border)", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center h-14 gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--green-primary)" }}>
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-black text-base hidden sm:block" style={{ color: "var(--green-primary)", letterSpacing: "-0.03em" }}>
              TipsSehatku
            </span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-sm hidden md:flex">
            <div className="flex w-full rounded-lg overflow-hidden" style={{ border: "1.5px solid var(--border)", background: "var(--bg-gray)" }}>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Cari artikel kesehatan..."
                className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
                style={{ color: "var(--text-primary)" }}
              />
              <button type="submit" className="px-3 flex items-center" style={{ color: "var(--green-primary)" }}>
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Desktop category nav */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-auto overflow-x-auto">
            <Link href="/" className="text-xs px-2.5 py-1.5 rounded-md font-semibold whitespace-nowrap transition-colors hover:bg-green-50 hover:text-green-700"
              style={{ color: "var(--text-secondary)" }}>
              Beranda
            </Link>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="text-xs px-2.5 py-1.5 rounded-md font-semibold whitespace-nowrap transition-colors hover:bg-green-50 hover:text-green-700"
                style={{ color: "var(--text-secondary)" }}>
                {cat.icon} {cat.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: search + menu */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-1.5 rounded-lg" style={{ color: "var(--text-secondary)" }}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid var(--border-light)" }}>
          <form onSubmit={handleSearch} className="p-3 flex gap-2">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Cari artikel..." className="flex-1 px-3 py-2 text-sm rounded-lg outline-none"
              style={{ border: "1.5px solid var(--border)", color: "var(--text-primary)" }}
            />
            <button type="submit" className="px-4 py-2 rounded-lg text-white text-sm" style={{ background: "var(--green-primary)" }}>
              <Search className="w-4 h-4" />
            </button>
          </form>
          <div className="pb-2 grid grid-cols-2 gap-0.5 px-3">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg hover:bg-green-50 transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}>
                <span>{cat.icon}</span>
                <span className="font-medium">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
