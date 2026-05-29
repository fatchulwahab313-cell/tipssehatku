import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

interface Props { searchParams: Promise<{ q?: string }> }

export default async function CariPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = q
    ? articles.filter(a =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(q.toLowerCase())) ||
        a.content.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-black mb-1">
        {q ? `Hasil pencarian: "${q}"` : "Cari Artikel"}
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        {q ? `${results.length} artikel ditemukan` : "Masukkan kata kunci untuk mencari"}
      </p>

      <AdSlot size="leaderboard" className="mb-6" />

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      ) : q ? (
        <div className="card p-12 text-center" style={{ color: "var(--text-muted)" }}>
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold">Tidak ada artikel untuk "{q}"</p>
          <Link href="/" className="btn-primary mt-4 inline-flex">← Kembali ke Beranda</Link>
        </div>
      ) : null}
    </div>
  );
}
