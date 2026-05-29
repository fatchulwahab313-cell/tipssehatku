import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";
import { categories } from "@/data/articles";

interface Props {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = categories.find(c => c.slug === article.category);

  if (featured) {
    return (
      <Link href={`/artikel/${article.slug}`} className="card block group">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image placeholder */}
          <div className="md:w-56 h-48 md:h-auto shrink-0 flex items-center justify-center text-5xl"
            style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)" }}>
            {cat?.icon || "🏥"}
          </div>
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <span className="badge badge-green mb-2 inline-block">{cat?.label}</span>
              <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm line-clamp-3" style={{ color: "var(--text-secondary)" }}>
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
              </div>
              <span className="btn-outline text-xs py-1.5 px-3 group-hover:bg-green-50">
                Baca <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/artikel/${article.slug}`} className="card block group">
      {/* Image emoji placeholder */}
      <div className="h-36 flex items-center justify-center text-5xl"
        style={{ background: "linear-gradient(135deg, #dcfce7, #bbf7d0)" }}>
        {cat?.icon || "🏥"}
      </div>
      <div className="p-4">
        <span className="badge badge-green text-xs mb-2 inline-block">{cat?.label}</span>
        <h3 className="font-bold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-xs line-clamp-2 mb-3" style={{ color: "var(--text-secondary)" }}>
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
          <span style={{ color: "var(--green-primary)" }} className="font-semibold">Baca →</span>
        </div>
      </div>
    </Link>
  );
}
