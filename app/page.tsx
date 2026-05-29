import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { categories, getFeaturedArticles, getRecentArticles } from "@/data/articles";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const hero = featured[0];
  const subFeatured = featured.slice(1, 4);
  const recent = getRecentArticles(8);
  const heroCat = categories.find(c => c.slug === hero?.category);

  return (
    <div style={{ background: "white" }}>

      {/* ── Ad: Leaderboard top ── */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <AdSlot size="leaderboard" />
      </div>

      {/* ════════════════════════════════
          HERO — Featured artikel utama
          ════════════════════════════════ */}
      {hero && (
        <div className="max-w-6xl mx-auto px-4 py-5">
          <p className="section-head">Topik Unggulan</p>
          <div className="flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>

            {/* Gambar kiri */}
            <Link href={`/artikel/${hero.slug}`} className="relative md:w-[58%] group block" style={{ minHeight: 300 }}>
              {hero.image?.startsWith("http") ? (
                <Image src={hero.image} alt={hero.title} fill sizes="700px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl" style={{ background: "var(--green-mid)" }}>
                  {heroCat?.icon}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
              {heroCat && (
                <span className="absolute top-3 left-3 badge badge-green text-xs">{heroCat.icon} {heroCat.label}</span>
              )}
            </Link>

            {/* Konten kanan */}
            <div className="md:w-[42%] p-6 flex flex-col justify-between" style={{ background: "#fafff9" }}>
              <div>
                <h2 className="text-xl font-black mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                  <Link href={`/artikel/${hero.slug}`} className="hover:text-green-700 transition-colors">
                    {hero.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: "var(--text-secondary)" }}>
                  {hero.excerpt}
                </p>
              </div>
              <div className="space-y-2">
                <Link href={`/artikel/${hero.slug}`} className="btn-primary text-sm w-full justify-center">
                  Pelajari Selengkapnya →
                </Link>
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  ✍️ {hero.author} · ⏱ {hero.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════
          MAIN LAYOUT
          ════════════ */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="flex gap-7">

          {/* ── LEFT: Konten utama ── */}
          <main className="flex-1 min-w-0 space-y-8">

            {/* Sub-featured: 3 artikel pilihan */}
            {subFeatured.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-head">Artikel Pilihan</p>
                  <Link href="/cari?q=" className="text-xs font-semibold flex items-center gap-0.5 hover:underline" style={{ color: "var(--green-primary)" }}>
                    Lihat Semua <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {subFeatured.map(a => <ArticleCard key={a.slug} article={a} />)}
                </div>
              </section>
            )}

            {/* Kategori Topik */}
            <section>
              <p className="section-head">Topik Kesehatan</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {categories.map(cat => (
                  <Link key={cat.slug} href={`/kategori/${cat.slug}`}
                    className="card text-center p-3 group hover:border-green-400 border border-transparent cursor-pointer">
                    <div className="text-2xl mb-1.5">{cat.icon}</div>
                    <div className="text-xs font-semibold leading-tight group-hover:text-green-700 transition-colors line-clamp-1"
                      style={{ color: "var(--text-secondary)" }}>
                      {cat.label}
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Ad: mid content */}
            <AdSlot size="leaderboard" />

            {/* Artikel Terbaru — grid */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <p className="section-head">Artikel Terbaru</p>
                <Link href="/cari?q=" className="text-xs font-semibold flex items-center gap-0.5 hover:underline" style={{ color: "var(--green-primary)" }}>
                  Semua Artikel <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {recent.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </section>

          </main>

          {/* ── RIGHT: Sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-5 shrink-0 w-64">

            {/* Ad rectangle */}
            <AdSlot size="rectangle" />

            {/* Disclaimer */}
            <div className="rounded-lg p-4" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
              <p className="text-xs font-bold text-amber-700 mb-1.5">⚠️ Disclaimer Medis</p>
              <p className="text-xs leading-relaxed" style={{ color: "#92400e" }}>
                Informasi di TipsSehatku bersifat edukatif dan tidak menggantikan konsultasi dengan dokter atau tenaga medis.
              </p>
            </div>

            {/* Semua Kategori */}
            <div className="card p-4">
              <p className="section-head text-xs mb-3">Topik Kesehatan</p>
              {categories.map(c => (
                <Link key={c.slug} href={`/kategori/${c.slug}`}
                  className="flex items-center gap-2 py-2 px-1.5 border-b text-xs font-medium hover:text-green-700 transition-colors"
                  style={{ color: "var(--text-secondary)", borderColor: "var(--border-light)" }}>
                  <span className="text-base">{c.icon}</span>
                  <span>{c.label}</span>
                  <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
                </Link>
              ))}
            </div>

            {/* Tag Populer */}
            <div className="card p-4">
              <p className="section-head text-xs mb-3">Tag Populer</p>
              <div className="flex flex-wrap gap-1.5">
                {["kesehatan","gizi","herbal","olahraga","diet","jantung","diabetes","kolesterol","tidur","stres","kulit","imun"].map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`}
                    className="badge badge-gray text-xs hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Ad rectangle 2 */}
            <AdSlot size="rectangle" />

          </aside>
        </div>
      </div>

      {/* ── Ad: Leaderboard bottom ── */}
      <div style={{ background: "var(--bg-gray)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <AdSlot size="leaderboard" />
        </div>
      </div>

    </div>
  );
}
