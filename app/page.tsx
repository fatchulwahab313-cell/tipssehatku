import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { categories, getFeaturedArticles, getRecentArticles } from "@/data/articles";
import { ChevronRight, Shield, BookOpen, UserCheck } from "lucide-react";

export default function HomePage() {
  const featured  = getFeaturedArticles();
  const hero      = featured[0];
  const subHero   = featured.slice(1, 4);
  const recent    = getRecentArticles(8);
  const heroCat   = categories.find(c => c.slug === hero?.category);

  return (
    <div style={{ background: "var(--bg-page)" }}>

      {/* ══════════════════════════
          WELCOME STRIP (MedlinePlus)
          ══════════════════════════ */}
      <div style={{ background: "white", borderBottom: "1px solid var(--border-light)" }}>
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
              Selamat datang di TipsSehatku
            </h1>
            <p className="text-sm" style={{ color: "var(--text-secondary)", maxWidth: 560 }}>
              Sumber informasi kesehatan terpercaya berbasis riset untuk masyarakat Indonesia.
              Ditulis dan ditinjau oleh dokter dan tenaga medis berpengalaman.
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            {[
              { icon: BookOpen,  label: "12 Artikel",       color: "#0a8f4f" },
              { icon: UserCheck, label: "Ditinjau Dokter",  color: "#1a73e8" },
              { icon: Shield,    label: "Berbasis Riset",   color: "#7c3aed" },
            ].map(i => (
              <div key={i.label} className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: "var(--text-secondary)" }}>
                <i.icon className="w-4 h-4 shrink-0" style={{ color: i.color }} />
                {i.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad top */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <AdSlot size="leaderboard" />
      </div>

      {/* ══════════════════
          HERO + SUB-HERO
          ══════════════════ */}
      {hero && (
        <div className="max-w-6xl mx-auto px-4 pb-2">
          <p className="section-head">Topik Unggulan</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Hero besar — 2/3 lebar */}
            <Link href={`/artikel/${hero.slug}`}
              className="card group md:col-span-2 block relative overflow-hidden" style={{ minHeight: 300 }}>
              <div className="relative w-full h-72 md:h-80">
                {hero.image?.startsWith("http") ? (
                  <Image src={hero.image} alt={hero.title} fill sizes="700px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl"
                    style={{ background: "var(--green-mid)" }}>{heroCat?.icon}</div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
              </div>
              {/* Content over image */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="badge badge-green mb-2 inline-block">{heroCat?.icon} {heroCat?.label}</span>
                <h2 className="text-white font-black text-xl md:text-2xl leading-tight mb-2 line-clamp-2"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                  {hero.title}
                </h2>
                <p className="text-sm text-white/80 line-clamp-2">{hero.excerpt}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
                  Baca Selengkapnya <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Sub-hero 3 artikel kecil — 1/3 lebar */}
            <div className="flex flex-col gap-4">
              {subHero.map(a => {
                const ac = categories.find(c => c.slug === a.category);
                return (
                  <Link key={a.slug} href={`/artikel/${a.slug}`}
                    className="card flex gap-3 group p-0 overflow-hidden" style={{ minHeight: 0 }}>
                    <div className="relative w-24 shrink-0" style={{ minHeight: 80 }}>
                      {a.image?.startsWith("http") ? (
                        <Image src={a.image} alt={a.title} fill sizes="96px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl"
                          style={{ background: "var(--green-mid)" }}>{ac?.icon}</div>
                      )}
                    </div>
                    <div className="p-2.5 flex flex-col justify-center min-w-0">
                      <span className="badge badge-green mb-1 inline-block text-[10px]">{ac?.label}</span>
                      <p className="text-xs font-bold line-clamp-2 group-hover:text-green-700 transition-colors leading-snug"
                        style={{ color: "var(--text-primary)" }}>{a.title}</p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>{a.readTime}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════
          MAIN LAYOUT (2 col)
          ════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">

          {/* ── LEFT MAIN ── */}
          <main className="flex-1 min-w-0 space-y-8">

            {/* Topik Kesehatan — 6 tiles */}
            <section>
              <p className="section-head">Topik Kesehatan</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {categories.map(cat => (
                  <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                    className="card flex flex-col items-center text-center p-3.5 gap-2 group hover:border-green-400 border-2 border-transparent cursor-pointer">
                    <div className="text-3xl">{cat.icon}</div>
                    <div className="text-xs font-bold leading-tight group-hover:text-green-700 transition-colors line-clamp-2"
                      style={{ color: "var(--text-secondary)" }}>
                      {cat.label}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Mid Ad */}
            <AdSlot size="leaderboard" />

            {/* Artikel Terbaru — 4 col grid (Healthline style) */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <p className="section-head">Artikel Terbaru</p>
                <Link href="/cari?q=" className="text-xs font-semibold flex items-center gap-0.5 hover:underline"
                  style={{ color: "var(--green-primary)" }}>
                  Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recent.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </section>

          </main>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="hidden lg:flex flex-col gap-5 shrink-0 w-64">

            <AdSlot size="rectangle" />

            {/* Disclaimer (seperti MedlinePlus medical disclaimer) */}
            <div className="rounded-lg p-4 text-xs leading-relaxed"
              style={{ background: "#fff7ed", border: "1px solid #fed7aa", color: "#7c2d12" }}>
              <p className="font-bold text-orange-800 mb-1.5">⚕️ Tentang Konten Kami</p>
              <p>Konten TipsSehatku hanya untuk tujuan informasi umum. Tidak menggantikan konsultasi, diagnosis, atau pengobatan medis profesional.</p>
            </div>

            {/* Kategori list */}
            <div className="card p-4">
              <p className="section-head text-xs mb-3">Topik Kesehatan</p>
              {categories.map(c => (
                <Link key={c.slug} href={`/kategori/${c.slug}`}
                  className="flex items-center gap-2 py-2 text-xs font-medium hover:text-green-700 transition-colors"
                  style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-light)" }}>
                  <span className="text-base w-5 shrink-0 text-center">{c.icon}</span>
                  <span>{c.label}</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-30" />
                </Link>
              ))}
            </div>

            {/* Tags populer */}
            <div className="card p-4">
              <p className="section-head text-xs mb-3">Tag Populer</p>
              <div className="flex flex-wrap gap-1.5">
                {["kesehatan","gizi","herbal","olahraga","diet","jantung","diabetes","kolesterol","tidur","stres","kulit","imun"].map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`}
                    className="badge badge-gray text-[11px] hover:bg-green-100 hover:text-green-800 transition-colors cursor-pointer">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            <AdSlot size="rectangle" />

          </aside>
        </div>
      </div>

      {/* Bottom ad strip */}
      <div style={{ borderTop: "1px solid var(--border)", background: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <AdSlot size="leaderboard" />
        </div>
      </div>
    </div>
  );
}
