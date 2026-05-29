import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { articles, categories, getFeaturedArticles, getRecentArticles } from "@/data/articles";
import { Search, BookOpen, CheckCircle, RefreshCw, ChevronRight } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const recent = getRecentArticles(6);

  return (
    <div>
      {/* ── Hero ── */}
      <div style={{ background: "linear-gradient(135deg, #052e16 0%, #16a34a 100%)" }} className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 mb-4"
              style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
              🏥 Informasi Kesehatan Terpercaya
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight" style={{ letterSpacing: "-0.03em" }}>
              Tips Sehat untuk<br />Keluarga Indonesia
            </h1>
            <p className="text-green-200 text-sm mb-6 leading-relaxed max-w-lg">
              Panduan kesehatan berbasis fakta, mudah dipahami. Ditulis oleh dokter dan ahli gizi profesional.
            </p>
            {/* Search */}
            <form action="/cari" className="flex max-w-md rounded-xl overflow-hidden shadow-lg" style={{ background: "white" }}>
              <div className="flex items-center pl-3.5" style={{ color: "var(--text-muted)" }}>
                <Search className="w-4 h-4" />
              </div>
              <input name="q" type="text" placeholder="Cari: diabetes, tidur, vitamin..."
                className="flex-1 px-3 py-3 text-sm outline-none"
                style={{ color: "var(--text-primary)" }} />
              <button type="submit" className="px-5 py-3 text-sm font-bold"
                style={{ background: "var(--green-primary)", color: "white" }}>
                Cari
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div style={{ background: "white", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-6 flex-wrap">
          {[
            { icon: BookOpen,     label: `${articles.length} Artikel`, color: "#16a34a" },
            { icon: CheckCircle,  label: "Ditulis Dokter",             color: "#2563eb" },
            { icon: RefreshCw,    label: "Diperbarui Rutin",           color: "#7c3aed" },
          ].map(i => (
            <div key={i.label} className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
              <i.icon className="w-3.5 h-3.5" style={{ color: i.color }} />
              {i.label}
            </div>
          ))}
          <div className="ml-auto hidden sm:flex gap-2 flex-wrap">
            {categories.slice(0, 3).map(c => (
              <Link key={c.slug} href={`/kategori/${c.slug}`}
                className="text-xs font-medium px-2.5 py-1 rounded-full transition-colors hover:bg-green-50"
                style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                {c.icon} {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <AdSlot size="leaderboard" className="mb-6" />

        <div className="flex gap-6">
          {/* Left: main feed */}
          <div className="flex-1 min-w-0 space-y-8">

            {/* Featured */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="section-title">⭐ Artikel Pilihan</h2>
                <Link href="/cari?q=" className="text-xs font-semibold flex items-center gap-0.5 hover:underline" style={{ color: "var(--green-primary)" }}>
                  Semua <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featured.slice(0, 4).map(a => <ArticleCard key={a.slug} article={a} featured />)}
              </div>
            </section>

            {/* Category pills */}
            <section>
              <h2 className="section-title mb-4">📂 Kategori</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {categories.map(cat => (
                  <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                    className="card text-center p-3 group hover:border-green-300 border border-transparent">
                    <div className="text-2xl mb-1.5">{cat.icon}</div>
                    <div className="text-xs font-semibold leading-tight group-hover:text-green-700 transition-colors line-clamp-1"
                      style={{ color: "var(--text-secondary)" }}>
                      {cat.label}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <AdSlot size="leaderboard" />

            {/* Recent */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="section-title">🕐 Artikel Terbaru</h2>
                <Link href="/cari?q=" className="text-xs font-semibold flex items-center gap-0.5 hover:underline" style={{ color: "var(--green-primary)" }}>
                  Semua <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {recent.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-4 shrink-0 w-64">
            <AdSlot size="rectangle" />

            {/* Popular tags */}
            <div className="card p-4">
              <h3 className="text-sm font-bold mb-3">🏷️ Tag Populer</h3>
              <div className="flex flex-wrap gap-1.5">
                {["kesehatan","gizi","herbal","olahraga","diet","jantung","diabetes","kolesterol","tidur","stres"].map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`}
                    className="badge badge-gray hover:bg-green-100 transition-colors text-xs">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* All categories */}
            <div className="card p-4">
              <h3 className="text-sm font-bold mb-3">📂 Semua Kategori</h3>
              <div className="space-y-0.5">
                {categories.map(c => (
                  <Link key={c.slug} href={`/kategori/${c.slug}`}
                    className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-medium transition-colors hover:bg-green-50 hover:text-green-700"
                    style={{ color: "var(--text-secondary)" }}>
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl p-3.5 text-xs leading-relaxed" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
              <div className="font-bold text-amber-700 mb-1">⚠️ Disclaimer</div>
              <p style={{ color: "#92400e" }}>
                Konten ini hanya untuk informasi umum, bukan pengganti saran medis profesional. Konsultasikan ke dokter.
              </p>
            </div>
          </aside>
        </div>

        <AdSlot size="leaderboard" className="mt-8" />
      </div>
    </div>
  );
}
