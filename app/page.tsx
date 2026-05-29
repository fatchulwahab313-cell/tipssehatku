import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import BmiCalculator from "@/components/BmiCalculator";
import { categories, getFeaturedArticles, getRecentArticles, articles } from "@/data/articles";

export default function HomePage() {
  const featured    = getFeaturedArticles();
  const heroArticle = featured[0];
  const recent      = getRecentArticles(8);

  /* Trending = first 5 articles (stand-in for view count) */
  const trending = articles.slice(0, 5);

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── CATEGORY PILLS ── */}
      <div style={{ padding: "14px 4%", maxWidth: 1100, margin: "0 auto 4px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/" className="cat-pill-link cat-pill-active">✨ Semua</Link>
          {categories.map(cat => (
            <Link key={cat.slug} href={`/kategori/${cat.slug}`} className="cat-pill-link">
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="main-page-grid" style={{ padding: "16px 4%", maxWidth: 1100, margin: "0 auto" }}>

        {/* ── LEFT MAIN ── */}
        <main style={{ minWidth: 0 }}>

          {/* FEATURED */}
          {heroArticle && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div className="section-label">Topik Unggulan</div>
              </div>
              <ArticleCard article={heroArticle} featured />
            </div>
          )}

          {/* Ad */}
          <div style={{ marginBottom: 24 }}>
            <AdSlot size="leaderboard" />
          </div>

          {/* ARTIKEL PILIHAN */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div className="section-label">Artikel Pilihan</div>
              <Link href="/cari?q=" style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--green)" }}>
                Lihat Semua ›
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {recent.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <Link href="/cari?q=" className="btn-load-more">
                Lihat Artikel Lainnya
              </Link>
            </div>
          </div>

        </main>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className="page-sidebar">

          {/* Trust widget */}
          <div style={{ background: "linear-gradient(135deg, var(--green-dark), #1a5c3a)", color: "white", borderRadius: "var(--radius-sm)", padding: 18, textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🩺</div>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 6, color: "white" }}>Konten Terverifikasi Medis</h3>
            <p style={{ fontSize: "0.78rem", opacity: .8, marginBottom: 12, lineHeight: 1.5 }}>
              Semua artikel ditinjau oleh tim dokter dan tenaga medis berpengalaman
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {["dr. Spesialis","Nutrisionis","Psikolog"].map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,.15)", color: "white", fontSize: "0.7rem", padding: "3px 10px", borderRadius: 50, border: "1px solid rgba(255,255,255,.2)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* BMI Calculator */}
          <div className="widget-box">
            <div className="widget-header-bar">⚖️ Kalkulator BMI</div>
            <div style={{ padding: "14px 16px" }}>
              <BmiCalculator />
            </div>
          </div>

          {/* Trending */}
          <div className="widget-box">
            <div className="widget-header-bar">🔥 Artikel Terpopuler</div>
            <div style={{ padding: "4px 16px 8px" }}>
              {trending.map((a, i) => {
                const cat = categories.find(c => c.slug === a.category);
                const isTop = i < 2;
                return (
                  <Link key={a.slug} href={`/artikel/${a.slug}`} className="trending-link"
                    style={{ borderBottom: i < trending.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: isTop ? "var(--green)" : "#bbf7d0", lineHeight: 1, flexShrink: 0, width: 22 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="trend-title-txt" style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--dark)", lineHeight: 1.4 }}>
                        {a.title}
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "var(--soft)", marginTop: 2 }}>
                        {cat?.label} · {a.readTime}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Ad */}
          <AdSlot size="rectangle" />

          {/* Tags */}
          <div className="widget-box">
            <div className="widget-header-bar">🏷️ Tag Populer</div>
            <div style={{ padding: "14px 16px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["diabetes","kolesterol","diet","hidrasi","tidur","stres","jantung","herbal","imun","kulit","ibu hamil","olahraga"].map(tag => (
                <Link key={tag} href={`/cari?q=${tag}`} className="sidebar-tag-link">#{tag}</Link>
              ))}
            </div>
          </div>

          {/* Categories list */}
          <div className="widget-box">
            <div className="widget-header-bar">📂 Topik Kesehatan</div>
            <div style={{ paddingBottom: 8 }}>
              {categories.map(c => (
                <Link key={c.slug} href={`/kategori/${c.slug}`} className="sidebar-cat-link">
                  <span style={{ fontSize: "1rem", width: 20, textAlign: "center" }}>{c.icon}</span>
                  <span>{c.label}</span>
                  <span style={{ marginLeft: "auto", opacity: .3, fontSize: "0.7rem" }}>›</span>
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </div>

      {/* Bottom ad */}
      <div style={{ borderTop: "1px solid var(--border)", background: "white", marginTop: 24 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 4%" }}>
          <AdSlot size="leaderboard" />
        </div>
      </div>

    </div>
  );
}
