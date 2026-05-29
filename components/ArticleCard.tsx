import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { categories } from "@/data/articles";

interface Props {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = categories.find(c => c.slug === article.category);

  const Thumb = ({ h, cls = "" }: { h: number; cls?: string }) => (
    <div className={`relative overflow-hidden ${cls}`} style={{ height: h }}>
      {article.image?.startsWith("http") ? (
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width:768px) 100vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-4xl"
          style={{ background: "linear-gradient(135deg,#d1fae5,#a7f3d0)" }}>
          {cat?.icon || "🏥"}
        </div>
      )}
    </div>
  );

  if (featured) {
    return (
      <Link href={`/artikel/${article.slug}`} className="card block group overflow-hidden">
        <div className="flex h-full min-h-[140px]">
          <Thumb h={140} cls="w-40 shrink-0" />
          <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
            <div>
              <span className="badge badge-green mb-2 inline-block">{cat?.label}</span>
              <h2 className="text-sm font-bold leading-snug mb-1.5 line-clamp-2 group-hover:text-green-700 transition-colors"
                style={{ color: "var(--text-primary)" }}>
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
    <Link href={`/artikel/${article.slug}`} className="card block group overflow-hidden">
      <Thumb h={160} />
      <div className="p-3.5">
        <span className="badge badge-green text-xs mb-2 inline-block">{cat?.label}</span>
        <h3 className="font-bold text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-green-700 transition-colors"
          style={{ color: "var(--text-primary)" }}>
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
