import { articles, categories } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

interface Props { searchParams: Promise<{ q?: string; kat?: string }> }

export default async function CariPage({ searchParams }: Props) {
  const { q = "", kat = "" } = await searchParams;

  let results = q
    ? articles.filter(a =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(q.toLowerCase())) ||
        a.content.toLowerCase().includes(q.toLowerCase())
      )
    : [...articles];

  // filter by category if selected
  if (kat) results = results.filter(a => a.category === kat);

  // sort newest first
  results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const isSearch = q.trim().length > 0;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 4%" }}>

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--dark)", marginBottom: 4 }}>
            {isSearch ? `Hasil: "${q}"` : "Semua Artikel Kesehatan"}
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--soft)" }}>
            {isSearch
              ? `${results.length} artikel ditemukan`
              : `${results.length} artikel tersedia — terverifikasi medis`}
          </p>
        </div>

        {/* Category filter pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          <Link
            href={isSearch ? `/cari?q=${encodeURIComponent(q)}` : "/cari?q="}
            className="cat-pill-link"
            style={!kat ? { background: "var(--green)", borderColor: "var(--green)", color: "white" } : {}}>
            ✨ Semua ({articles.length})
          </Link>
          {categories.map(cat => {
            const count = articles.filter(a => a.category === cat.slug).length;
            const active = kat === cat.slug;
            const href = isSearch
              ? `/cari?q=${encodeURIComponent(q)}&kat=${cat.slug}`
              : `/cari?q=&kat=${cat.slug}`;
            return (
              <Link key={cat.slug} href={href}
                className="cat-pill-link"
                style={active ? { background: "var(--green)", borderColor: "var(--green)", color: "white" } : {}}>
                {cat.icon} {cat.label} ({count})
              </Link>
            );
          })}
        </div>

        {/* Ad */}
        <div style={{ marginBottom: 20 }}>
          <AdSlot size="leaderboard" />
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {results.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        ) : (
          <div style={{ background: "white", borderRadius: "var(--radius)", padding: "48px 24px", textAlign: "center", boxShadow: "var(--shadow)" }}>
            <p style={{ fontSize: "3rem", marginBottom: 12 }}>🔍</p>
            <p style={{ fontWeight: 700, fontSize: "1rem", color: "var(--dark)", marginBottom: 8 }}>
              Tidak ada artikel untuk &ldquo;{q}&rdquo;
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--soft)", marginBottom: 20 }}>
              Coba kata kunci lain atau lihat semua artikel
            </p>
            <Link href="/cari?q=" className="btn-primary" style={{ display: "inline-flex" }}>
              ← Lihat Semua Artikel
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
