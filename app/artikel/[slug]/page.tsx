import { getArticleBySlug, getRelatedArticles, getRecentArticles, articles, categories } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import AiSummary from "@/components/AiSummary";
import { Clock, User, Calendar, ChevronRight, Tag } from "lucide-react";
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
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

function renderContent(content: string) {
  return content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\| (.+) \|$/gm, (_, row) => `<tr>${row.split(' | ').map((cell: string, i: number) => i === 0 && row.includes('---|') ? '' : `<td>${cell}</td>`).join('')}</tr>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|l|t])/gm, '')
    .trim();
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const recent = getRecentArticles(5);
  const cat = categories.find(c => c.slug === article.category);

  const dateFormatted = new Date(article.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs mb-4" style={{ color: "var(--text-muted)" }}>
        <Link href="/" className="hover:text-green-600">Beranda</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/kategori/${article.category}`} className="hover:text-green-600">{cat?.label}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="line-clamp-1" style={{ color: "var(--text-secondary)" }}>{article.title}</span>
      </nav>

      <AdSlot size="leaderboard" className="mb-6" />

      <div className="flex gap-6">
        {/* Article */}
        <article className="flex-1 min-w-0">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Article header image */}
            <div className="h-52 flex items-center justify-center text-7xl"
              style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)" }}>
              {cat?.icon || "🏥"}
            </div>

            <div className="p-6 md:p-8">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Link href={`/kategori/${article.category}`}>
                  <span className="badge badge-green">{cat?.icon} {cat?.label}</span>
                </Link>
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="badge badge-gray">#{tag}</span>
                ))}
              </div>

              <h1 className="text-2xl md:text-3xl font-black mb-4 leading-tight">{article.title}</h1>

              {/* Author info */}
              <div className="flex flex-wrap items-center gap-4 pb-4 mb-6" style={{ borderBottom: "1px solid #e5e7eb" }}>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "var(--green-primary)" }}>
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{article.author}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>Penulis Medis</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs ml-auto" style={{ color: "var(--text-muted)" }}>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{dateFormatted}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                </div>
              </div>

              {/* Excerpt highlight */}
              <div className="rounded-xl p-4 mb-6 text-sm italic leading-relaxed" style={{ background: "#f0fdf4", borderLeft: "4px solid var(--green-primary)", color: "var(--green-dark)" }}>
                {article.excerpt}
              </div>

              {/* AI Summary */}
              <AiSummary title={article.title} content={article.content} />

              {/* Article content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
                      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
                      if (line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('🚫 ')) return `<li>${line.slice(2)}</li>`;
                      if (/^\d+\.\s/.test(line)) return `<li>${line.replace(/^\d+\.\s/, '')}</li>`;
                      if (line.startsWith('|')) {
                        if (line.includes('---')) return '';
                        return `<tr>${line.split('|').filter(Boolean).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`;
                      }
                      if (line.trim() === '') return '<br/>';
                      return `<p>${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</p>`;
                    })
                    .join('')
                    .replace(/<li>.*?<\/li>/gs, m => `<ul>${m}</ul>`)
                    .replace(/<\/ul><ul>/g, '')
                    .replace(/<tr>.*?<\/tr>/gs, m => `<table>${m}</table>`)
                    .replace(/<\/table><table>/g, '')
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6" style={{ borderTop: "1px solid #e5e7eb" }}>
                <Tag className="w-4 h-4 mt-0.5" style={{ color: "var(--text-muted)" }} />
                {article.tags.map(tag => (
                  <Link key={tag} href={`/cari?q=${tag}`} className="badge badge-gray hover:bg-green-100 transition-colors">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <AdSlot size="leaderboard" className="my-6" />

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-black mb-4">📚 Artikel Terkait</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block shrink-0 w-72 space-y-5">
          <AdSlot size="rectangle" />

          <div className="card p-4">
            <h3 className="font-bold text-sm mb-3">🕐 Artikel Terbaru</h3>
            <div className="space-y-3">
              {recent.map(a => (
                <Link key={a.slug} href={`/artikel/${a.slug}`} className="flex gap-3 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ background: "#dcfce7" }}>
                    {categories.find(c => c.slug === a.category)?.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold line-clamp-2 group-hover:text-green-700 transition-colors leading-snug">{a.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-4" style={{ background: "var(--green-primary)" }}>
            <p className="text-white font-bold text-sm mb-1">⚠️ Peringatan</p>
            <p className="text-green-100 text-xs leading-relaxed">
              Selalu konsultasikan kondisi kesehatan Anda dengan dokter atau tenaga medis profesional.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
