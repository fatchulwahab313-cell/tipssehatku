import Link from "next/link";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { categories } from "@/data/articles";

interface Props {
  article: Article;
  featured?: boolean;
}

const catColors: Record<string, string> = {
  gizi:     "linear-gradient(135deg,#d1fae5,#a7f3d0)",
  penyakit: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
  herbal:   "linear-gradient(135deg,#d1fae5,#6ee7b7)",
  olahraga: "linear-gradient(135deg,#fef3c7,#fde68a)",
  "ibu-anak": "linear-gradient(135deg,#fce7f3,#fbcfe8)",
  mental:   "linear-gradient(135deg,#ede9fe,#ddd6fe)",
};

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = categories.find(c => c.slug === article.category);
  const bg = catColors[article.category] || "linear-gradient(135deg,#d1fae5,#a7f3d0)";

  if (featured) {
    return (
      <Link href={`/artikel/${article.slug}`} className="card block group">
        <div className="flex h-full min-h-[148px]">
          {/* Thumbnail */}
          <div className="w-40 shrink-0 flex items-center justify-center text-5xl"
            style={{ background: bg }}>
            {cat?.icon || "🏥"}
          </div>
          {/* Content */}
          <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
            <div>
              <span className="badge badge-green mb-2 inline-block">{cat?.label}</span>
              <h2 className="text-sm font-bold leading-snug mb-1.5 line-clamp-2 group-hover:text-green-700 transition-colors">
                {article.title}
              </h2>
              <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
              <span className="ml-auto font-semibold" style={{ color: "var(--green-primary)" }}>Baca →</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/artikel/${article.slug}`} className="card block group">
      {/* Thumbnail */}
      <div className="h-32 flex items-center justify-center text-4xl" style={{ background: bg }}>
        {cat?.icon || "🏥"}
      </div>
      {/* Content */}
      <div className="p-3.5">
        <span className="badge badge-green text-xs mb-2 inline-block">{cat?.label}</span>
        <h3 className="font-bold text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-green-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-xs line-clamp-2 mb-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
          <span className="font-semibold" style={{ color: "var(--green-primary)" }}>Baca →</span>
        </div>
      </div>
    </Link>
  );
}
