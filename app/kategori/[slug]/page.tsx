import { categories, getArticlesByCategory } from "@/data/articles";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) return { title: "Kategori Tidak Ditemukan" };
  return { title: `${cat.label} - Tips Kesehatan`, description: `Kumpulan artikel kesehatan tentang ${cat.label}` };
}

export default async function KategoriPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find(c => c.slug === slug);
  if (!cat) notFound();

  const arts = getArticlesByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="rounded-2xl p-8 mb-6 text-center" style={{ background: "linear-gradient(135deg, #14532d, #16a34a)" }}>
        <div className="text-5xl mb-3">{cat.icon}</div>
        <h1 className="text-2xl font-black text-white mb-2">{cat.label}</h1>
        <p className="text-green-100 text-sm">{arts.length} artikel tersedia</p>
      </div>

      <AdSlot size="leaderboard" className="mb-6" />

      <div className="flex gap-6">
        <div className="flex-1">
          {arts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {arts.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          ) : (
            <div className="card p-12 text-center" style={{ color: "var(--text-muted)" }}>
              <p className="text-4xl mb-3">📝</p>
              <p className="font-semibold">Belum ada artikel di kategori ini.</p>
              <Link href="/" className="btn-outline mt-4 inline-flex">← Kembali ke Beranda</Link>
            </div>
          )}
        </div>

        <aside className="hidden lg:block shrink-0 w-64 space-y-4">
          <AdSlot size="rectangle" />
          <div className="card p-4">
            <h3 className="font-bold text-sm mb-3">📂 Semua Kategori</h3>
            {categories.map(c => (
              <Link key={c.slug} href={`/kategori/${c.slug}`}
                className={`flex items-center gap-2 py-2 px-2 rounded-lg text-sm transition-colors ${c.slug === slug ? 'font-bold text-green-700 bg-green-50' : 'hover:bg-gray-50'}`}
                style={{ color: c.slug === slug ? "var(--green-primary)" : "var(--text-secondary)" }}>
                {c.icon} {c.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
