import { getArticleBySlug, getRelatedArticles, getRecentArticles, articles, categories } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AdSlot from "@/components/AdSlot";
import AiSummary from "@/components/AiSummary";
import { Clock, Calendar, ChevronRight, Tag, Printer } from "lucide-react";
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 4);
  const recent  = getRecentArticles(6);
  const cat     = categories.find(c => c.slug === article.category);
  const dateFormatted = new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const htmlContent = article.content
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith('## '))  return `<h2>${line.slice(3)}</h2>`;
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
    <div style={{ background: "#f7f8fa", minHeight: "100vh" }}>

      {/* ── Top Ad ── */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <AdSlot size="leaderboard" />
      </div>

      {/* ── Breadcrumb ── */}
      <div className="max-w-5xl mx-auto px-4 pt-3 pb-1">
        <nav className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-green-600 transition-colors">Beranda</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/kategori/${article.category}`} className="hover:text-green-600 transition-colors">{cat?.label}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="line-clamp-1" style={{ color: "var(--text-secondary)" }}>{article.title}</span>
        </nav>
      </div>

      {/* ══════════════════════════════════
           ARTICLE LAYOUT (2 col)
          ══════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex gap-6 items-start">

          {/* ── MAIN ARTICLE ── */}
          <main className="flex-1 min-w-0">
            <div style={{ background: "white", borderRadius: 10, border: "1px solid var(--border-light)", overflow: "hidden" }}>
              <div className="p-6 md:p-8">

                {/* Category badge */}
                <Link href={`/kategori/${article.category}`}>
                  <span className="badge badge-green mb-3 inline-block">{cat?.icon} {cat?.label}</span>
                </Link>

                {/* Title */}
                <h1 style={{ fontSize: "1.7rem", fontWeight: 800, lineHeight: 1.25, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  {article.title}
                </h1>

                {/* Author + date + print row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5"
                  style={{ borderBottom: "2px solid var(--green-mid)" }}>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ background: "var(--green-primary)" }}>
                        {article.author.charAt(0)}
                      </span>
                      <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>{article.author}</span>
                    </span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{dateFormatted}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  </div>
                  <button onClick={() => window.print()} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded"
                    style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    <Printer className="w-3.5 h-3.5" /> Cetak
                  </button>
                </div>

                {/* Intro / excerpt */}
                <div className="mb-6 p-4 rounded-lg text-sm leading-relaxed"
                  style={{ background: "var(--green-light)", borderLeft: "4px solid var(--green-primary)", color: "var(--green-dark)" }}>
                  {article.excerpt}
                </div>

                {/* AI Summary */}
                <AiSummary title={article.title} content={article.content} />

                {/* Article body */}
                <div className="article-content mt-6" dangerouslySetInnerHTML={{ __html: htmlContent }} />

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-8 pt-5"
                  style={{ borderTop: "1px solid var(--border-light)" }}>
                  <Tag className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--text-muted)" }} />
                  {article.tags.map(tag => (
                    <Link key={tag} href={`/cari?q=${tag}`}
                      className="badge badge-gray hover:bg-green-100 hover:text-green-700 transition-colors">
                      #{tag}
                    </Link>
                  ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-3 rounded-lg text-xs leading-relaxed"
                  style={{ background: "#fffbeb", border: "1px solid #fde68a", color: "#78350f" }}>
                  <strong>⚠️ Disclaimer:</strong> Artikel ini bersifat informatif dan tidak menggantikan saran, diagnosis, atau pengobatan medis profesional. Selalu konsultasikan kondisi kesehatan Anda kepada dokter.
                </div>
              </div>
            </div>

            {/* Bottom ad */}
            <AdSlot size="leaderboard" className="my-5" />

            {/* Related articles */}
            {related.length > 0 && (
              <div style={{ background: "white", borderRadius: 10, border: "1px solid var(--border-light)", padding: "1.5rem" }}>
                <p className="section-head mb-4">Artikel Terkait</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {related.map(a => {
                    const ac = categories.find(c => c.slug === a.category);
                    return (
                      <Link key={a.slug} href={`/artikel/${a.slug}`}
                        className="flex gap-3 group p-2 rounded-lg hover:bg-green-50 transition-colors">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0"
                          style={{ background: "var(--green-mid)" }}>
                          {a.image?.startsWith("http") ? (
                            <Image src={a.image} alt={a.title} fill className="object-cover" unoptimized sizes="64px" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-2xl">{ac?.icon}</div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold line-clamp-2 group-hover:text-green-700 transition-colors leading-snug"
                            style={{ color: "var(--text-primary)" }}>{a.title}</p>
                          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                            {ac?.label} · {a.readTime}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </main>

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:flex flex-col gap-4 shrink-0 w-60">

            {/* Article image */}
            {article.image?.startsWith("http") && (
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--border-light)" }}>
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image src={article.image} alt={article.title} fill className="object-cover" unoptimized sizes="240px" />
                </div>
                <div className="p-2.5 text-center text-xs" style={{ background: "#f9fafb", color: "var(--text-muted)" }}>
                  {cat?.icon} {cat?.label}
                </div>
              </div>
            )}

            {/* Ad rectangle */}
            <AdSlot size="rectangle" />

            {/* Artikel terbaru */}
            <div style={{ background: "white", borderRadius: 10, border: "1px solid var(--border-light)", padding: "1rem" }}>
              <p className="section-head text-xs mb-3">Artikel Terbaru</p>
              <div className="space-y-3">
                {recent.filter(a => a.slug !== slug).slice(0, 5).map(a => (
                  <Link key={a.slug} href={`/artikel/${a.slug}`} className="flex gap-2.5 group">
                    <div className="relative w-10 h-10 rounded shrink-0 overflow-hidden"
                      style={{ background: "var(--green-mid)" }}>
                      {a.image?.startsWith("http") ? (
                        <Image src={a.image} alt={a.title} fill className="object-cover" unoptimized sizes="40px" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg">
                          {categories.find(c => c.slug === a.category)?.icon}
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-green-700 transition-colors leading-snug"
                      style={{ color: "var(--text-secondary)" }}>
                      {a.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Kategori */}
            <div style={{ background: "white", borderRadius: 10, border: "1px solid var(--border-light)", padding: "1rem" }}>
              <p className="section-head text-xs mb-3">Topik Kesehatan</p>
              {categories.map(c => (
                <Link key={c.slug} href={`/kategori/${c.slug}`}
                  className="flex items-center gap-2 py-1.5 text-xs font-medium hover:text-green-700 transition-colors"
                  style={{ color: c.slug === article.category ? "var(--green-primary)" : "var(--text-secondary)", borderBottom: "1px solid var(--border-light)" }}>
                  <span>{c.icon}</span>
                  <span className={c.slug === article.category ? "font-bold" : ""}>{c.label}</span>
                  {c.slug === article.category && <span className="ml-auto text-green-500">◀</span>}
                </Link>
              ))}
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
