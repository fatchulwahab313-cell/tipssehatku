import { getArticleBySlug, getRelatedArticles, getRecentArticles, articles, categories } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AdSlot from "@/components/AdSlot";
import AiSummary from "@/components/AiSummary";
import PrintButton from "@/components/PrintButton";
import { Clock, Calendar, ChevronRight, Tag } from "lucide-react";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: `${article.title} - TipsSehatku`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: { title: article.title, description: article.excerpt, type: "article", images: article.image ? [article.image] : [] },
  };
}

/* ─── badge class per category ─── */
const badgeClass: Record<string, string> = {
  gizi: "badge-gizi", penyakit: "badge-penyakit", herbal: "badge-herbal",
  olahraga: "badge-olahraga", "ibu-anak": "badge-ibu-anak", mental: "badge-mental",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 4);
  const recent  = getRecentArticles(6);
  const cat     = categories.find(c => c.slug === article.category);
  const cls     = badgeClass[article.category] || "badge-gray";
  const dateFormatted = new Date(article.date).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });

  const htmlContent = article.content
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith('## '))  return `<h2>${line.slice(3)}</h2>`;
      // Inline image: [IMG:url|alt|caption]
      if (line.startsWith('[IMG:')) {
        const inner = line.slice(5, -1);
        const [url, alt = '', caption = ''] = inner.split('|');
        return `<figure class="article-figure"><img src="${url}" alt="${alt}" loading="lazy" />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
      }
      if (line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('🚫 '))
        return `<li>${line.replace(/^[-✅🚫]\s/, '')}</li>`;
      if (/^\d+\.\s/.test(line)) return `<li>${line.replace(/^\d+\.\s/, '')}</li>`;
      if (line.startsWith('|')) {
        if (line.includes('---')) return '';
        return `<tr>${line.split('|').filter(Boolean).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`;
      }
      if (line.trim() === '') return '';
      return `<p>${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`;
    })
    .join('')
    .replace(/<li>[\s\S]*?<\/li>/g, m => `<ul>${m}</ul>`)
    .replace(/<\/ul><ul>/g, '')
    .replace(/<tr>[\s\S]*?<\/tr>/g, m => `<table>${m}</table>`)
    .replace(/<\/table><table>/g, '');

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── Wrapper same as homepage ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 4%" }}>

        {/* Top Ad */}
        <div style={{ paddingTop: 16, paddingBottom: 8 }}>
          <AdSlot size="leaderboard" />
        </div>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.78rem", color: "var(--soft)", paddingBottom: 12 }}>
          <Link href="/" style={{ color: "var(--green)" }}>🏠 Beranda</Link>
          <ChevronRight style={{ width: 12, height: 12 }} />
          <Link href={`/kategori/${article.category}`} style={{ color: "var(--green)" }}>{cat?.label}</Link>
          <ChevronRight style={{ width: 12, height: 12 }} />
          <span className="line-clamp-1" style={{ color: "var(--soft)" }}>{article.title}</span>
        </nav>

        {/* ── 2-column grid ── */}
        <div className="article-page-grid" style={{ paddingBottom: 32 }}>

          {/* ════════════════════
              MAIN ARTICLE COLUMN
              ════════════════════ */}
          <main style={{ minWidth: 0 }}>

            {/* Article card */}
            <div style={{ background: "white", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)", overflow: "hidden" }}>

              {/* Hero image */}
              {article.image?.startsWith("http") && (
                <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
                  <Image src={article.image} alt={article.title} fill
                    sizes="800px" className="object-cover" unoptimized />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.45) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: 14, left: 18 }}>
                    <span className={`badge ${cls}`}>{cat?.icon} {cat?.label}</span>
                  </div>
                </div>
              )}

              <div style={{ padding: "24px 28px 28px" }}>

                {/* Category badge (no image fallback) */}
                {!article.image?.startsWith("http") && (
                  <Link href={`/kategori/${article.category}`}>
                    <span className={`badge ${cls}`} style={{ marginBottom: 12, display: "inline-block" }}>{cat?.icon} {cat?.label}</span>
                  </Link>
                )}

                {/* Title */}
                <h1 style={{ fontFamily: "'Lora', serif", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--dark)", marginBottom: "0.6rem" }}>
                  {article.title}
                </h1>

                {/* Author + date + print */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, paddingBottom: 16, marginBottom: 20, borderBottom: "2px solid var(--green-mint)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: "0.78rem", color: "var(--soft)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--green)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.7rem", fontWeight: 800, flexShrink: 0 }}>
                        {article.author.charAt(0)}
                      </span>
                      <span style={{ fontWeight: 600, color: "var(--mid)" }}>{article.author}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Calendar style={{ width: 12, height: 12 }} />{dateFormatted}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Clock style={{ width: 12, height: 12 }} />{article.readTime}
                    </span>
                  </div>
                  <PrintButton />
                </div>

                {/* Excerpt box */}
                <div style={{ marginBottom: 20, padding: "14px 18px", borderRadius: "var(--radius-sm)", background: "var(--green-pale)", borderLeft: "4px solid var(--green)", color: "var(--green-dark)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {article.excerpt}
                </div>

                {/* AI Summary */}
                <AiSummary title={article.title} content={article.content} />

                {/* Article body */}
                <div className="article-content" style={{ marginTop: 20 }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }} />

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                  <Tag style={{ width: 14, height: 14, flexShrink: 0, color: "var(--soft)" }} />
                  {article.tags.map(tag => (
                    <Link key={tag} href={`/cari?q=${tag}`} className="sidebar-tag-link">#{tag}</Link>
                  ))}
                </div>

                {/* Disclaimer */}
                <div style={{ marginTop: 20, padding: "12px 16px", borderRadius: "var(--radius-sm)", background: "#fffbeb", border: "1px solid #fde68a", color: "#78350f", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  <strong>⚠️ Disclaimer:</strong> Artikel ini bersifat informatif dan tidak menggantikan saran, diagnosis, atau pengobatan medis profesional. Selalu konsultasikan kondisi kesehatan Anda kepada dokter.
                </div>

                {/* Reviewed by */}
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--soft)", padding: "10px 14px", background: "var(--green-pale)", borderRadius: "var(--radius-sm)" }}>
                  🩺 Ditinjau secara medis oleh <span style={{ color: "var(--green)", fontWeight: 700 }}>{article.author}</span>
                </div>
              </div>
            </div>

            {/* Bottom ad */}
            <div style={{ margin: "20px 0" }}>
              <AdSlot size="leaderboard" />
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div style={{ background: "white", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", padding: "20px 24px" }}>
                <div className="section-label" style={{ marginBottom: 14 }}>Artikel Terkait</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {related.map(a => {
                    const ac = categories.find(c => c.slug === a.category);
                    const acls = badgeClass[a.category] || "badge-gray";
                    return (
                      <Link key={a.slug} href={`/artikel/${a.slug}`}
                        style={{ display: "flex", gap: 10, padding: "10px", borderRadius: "var(--radius-sm)", background: "var(--bg)", transition: "background .15s" }}
                        className="group hover:bg-green-50">
                        <div style={{ position: "relative", width: 56, height: 56, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "var(--green-mint)" }}>
                          {a.image?.startsWith("http") ? (
                            <Image src={a.image} alt={a.title} fill className="object-cover" unoptimized sizes="56px" />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>{ac?.icon}</div>
                          )}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <span className={`badge ${acls}`} style={{ marginBottom: 4, display: "inline-block", fontSize: "0.65rem" }}>{ac?.label}</span>
                          <p style={{ fontSize: "0.8rem", fontWeight: 600, lineHeight: 1.35, color: "var(--dark)" }}
                            className="line-clamp-2 group-hover:text-green-700 transition-colors">
                            {a.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </main>

          {/* ════════════════════
              SIDEBAR
              ════════════════════ */}
          <aside className="article-sidebar" style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Article thumbnail */}
            {article.image?.startsWith("http") && (
              <div style={{ background: "white", borderRadius: "var(--radius-sm)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                  <Image src={article.image} alt={article.title} fill className="object-cover" unoptimized sizes="280px" />
                </div>
                <div style={{ padding: "8px 12px", textAlign: "center", fontSize: "0.75rem", color: "var(--soft)", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                  {cat?.icon} {cat?.label}
                </div>
              </div>
            )}

            {/* Trust widget */}
            <div style={{ background: "linear-gradient(135deg, var(--green-dark), #1a5c3a)", color: "white", borderRadius: "var(--radius-sm)", padding: 16, textAlign: "center" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 6 }}>🩺</div>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: 4, color: "white" }}>Terverifikasi Medis</h3>
              <p style={{ fontSize: "0.75rem", opacity: .8, lineHeight: 1.5 }}>Ditinjau oleh dokter dan tenaga medis berpengalaman</p>
            </div>

            {/* Ad */}
            <AdSlot size="rectangle" />

            {/* Recent articles */}
            <div className="widget-box">
              <div className="widget-header-bar">📰 Artikel Terbaru</div>
              <div style={{ padding: "8px 14px 12px" }}>
                {recent.filter(a => a.slug !== slug).slice(0, 5).map((a, i) => {
                  const rc = categories.find(c => c.slug === a.category);
                  return (
                    <Link key={a.slug} href={`/artikel/${a.slug}`}
                      style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < 4 ? "1px solid var(--border)" : "none", alignItems: "flex-start" }}
                      className="group">
                      <div style={{ position: "relative", width: 44, height: 44, borderRadius: 6, overflow: "hidden", flexShrink: 0, background: "var(--green-mint)" }}>
                        {a.image?.startsWith("http") ? (
                          <Image src={a.image} alt={a.title} fill className="object-cover" unoptimized sizes="44px" />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>{rc?.icon}</div>
                        )}
                      </div>
                      <p style={{ fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.35, color: "var(--dark)" }}
                        className="line-clamp-2 group-hover:text-green-700 transition-colors">
                        {a.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div className="widget-box">
              <div className="widget-header-bar">📂 Topik Kesehatan</div>
              <div style={{ paddingBottom: 6 }}>
                {categories.map(c => (
                  <Link key={c.slug} href={`/kategori/${c.slug}`} className="sidebar-cat-link"
                    style={{ color: c.slug === article.category ? "var(--green)" : "var(--mid)", fontWeight: c.slug === article.category ? 700 : 600 }}>
                    <span style={{ fontSize: "1rem", width: 20, textAlign: "center" }}>{c.icon}</span>
                    <span>{c.label}</span>
                    {c.slug === article.category
                      ? <span style={{ marginLeft: "auto", color: "var(--green)", fontSize: "0.7rem" }}>◀</span>
                      : <span style={{ marginLeft: "auto", opacity: .3, fontSize: "0.7rem" }}>›</span>
                    }
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="widget-box">
              <div className="widget-header-bar">🏷️ Tag Populer</div>
              <div style={{ padding: "12px 14px", display: "flex", flexWrap: "wrap", gap: 6 }}>
                {article.tags.map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`} className="sidebar-tag-link">#{tag}</Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
