import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { articles, categories, getFeaturedArticles, getRecentArticles } from "@/data/articles";
import { ChevronRight, TrendingUp, BookOpen, Shield } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const recent = getRecentArticles(6);

  return (
    <div>
      {/* Hero Banner */}
      <div style={{ background: "linear-gradient(135deg, #14532d, #16a34a)" }} className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block badge mb-3" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
            🏥 Informasi Kesehatan Terpercaya
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Tips Hidup Sehat untuk<br />Keluarga Indonesia
          </h1>
          <p className="text-green-100 text-base mb-6 max-w-xl mx-auto">
            Panduan kesehatan berbasis fakta, ditulis oleh dokter dan ahli gizi. Gratis, terpercaya, mudah dipahami.
          </p>
          <form action="/cari" className="flex max-w-md mx-auto gap-0 rounded-xl overflow-hidden shadow-lg">
            <input name="q" type="text" placeholder="Cari tips kesehatan..." className="flex-1 px-4 py-3 text-sm outline-none" style={{ color: "#1a1a1a" }} />
            <button type="submit" className="px-5 py-3 font-bold text-sm" style={{ background: "#f0fdf4", color: "var(--green-primary)" }}>
              Cari →
            </button>
          </form>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: BookOpen, label: `${articles.length} Artikel`, color: "#16a34a" },
            { icon: Shield, label: "Ditulis Dokter", color: "#2563eb" },
            { icon: TrendingUp, label: "Diperbarui Rutin", color: "#9333ea" },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Ad */}
        <AdSlot size="leaderboard" className="mb-8" />

        {/* Featured Articles */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black flex items-center gap-2">
              <span style={{ color: "var(--green-primary)" }}>⭐</span> Artikel Pilihan
            </h2>
            <Link href="/artikel" className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "var(--green-primary)" }}>
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.slice(0, 2).map(article => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">📂 Kategori Kesehatan</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                className="card text-center p-4 hover:border-green-300 border-2 border-transparent group">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-xs font-bold leading-tight group-hover:text-green-700 transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {cat.label}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mid Ad */}
        <AdSlot size="leaderboard" className="mb-10" />

        {/* Recent + Sidebar */}
        <div className="flex gap-6">
          {/* Recent articles */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-black">🕐 Artikel Terbaru</h2>
              <Link href="/artikel" className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "var(--green-primary)" }}>
                Semua Artikel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recent.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block shrink-0 w-72 space-y-5">
            <AdSlot size="rectangle" />

            {/* Disclaimer box */}
            <div className="rounded-xl p-4 text-sm" style={{ background: "#fefce8", border: "1px solid #fde68a" }}>
              <div className="font-bold text-amber-800 mb-1 text-xs">⚠️ Disclaimer Medis</div>
              <p className="text-xs leading-relaxed" style={{ color: "#92400e" }}>
                Konten di TipsSehatku hanya untuk tujuan informasi umum dan tidak menggantikan saran, diagnosis, atau pengobatan medis profesional.
              </p>
            </div>

            {/* Popular tags */}
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-3">🏷️ Tag Populer</h3>
              <div className="flex flex-wrap gap-2">
                {["kesehatan","gizi","herbal","olahraga","diet","jantung","diabetes","kolesterol","tidur","stres"].map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`}
                    className="badge badge-gray text-xs hover:bg-green-100 transition-colors">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl p-4" style={{ background: "var(--green-primary)" }}>
              <h3 className="font-bold text-white text-sm mb-1">📧 Newsletter Sehat</h3>
              <p className="text-green-100 text-xs mb-3">Dapatkan tips kesehatan terbaru langsung di email kamu.</p>
              <input type="email" placeholder="Email kamu..." className="w-full px-3 py-2 rounded-lg text-xs mb-2 outline-none" style={{ color: "#1a1a1a" }} />
              <button className="w-full py-2 rounded-lg text-xs font-bold text-green-700" style={{ background: "white" }}>
                Daftar Gratis
              </button>
            </div>
          </aside>
        </div>

        {/* Bottom Ad */}
        <AdSlot size="leaderboard" className="mt-8" />
      </div>
    </div>
  );
}
