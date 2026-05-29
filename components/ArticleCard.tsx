import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { categories } from "@/data/articles";

interface Props { article: Article; featured?: boolean; }

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = categories.find(c => c.slug === article.category);

  const img = (
    <div className="relative w-full overflow-hidden bg-gray-100"
      style={{ paddingTop: featured ? 0 : "56.25%", height: featured ? "100%" : 0 }}>
      {article.image?.startsWith("http") ? (
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width:640px) 100vw, 320px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-4xl"
          style={{ background: "var(--green-mid)" }}>
          {cat?.icon || "🏥"}
        </div>
      )}
    </div>
  );

  /* ── Featured: horizontal card ── */
  if (featured) {
    return (
      <Link href={`/artikel/${article.slug}`} className="card block group overflow-hidden">
        <div className="flex" style={{ minHeight: 110 }}>
          <div className="relative w-36 shrink-0 overflow-hidden bg-gray-100">
            {article.image?.startsWith("http") ? (
              <Image src={article.image} alt={article.title} fill sizes="144px"
                className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-3xl"
                style={{ background: "var(--green-mid)" }}>{cat?.icon}</div>
            )}
          </div>
          <div className="p-3.5 flex flex-col justify-between flex-1 min-w-0">
            <div>
              <span className="badge badge-green text-[10px] mb-1.5 inline-block">{cat?.label}</span>
              <h2 className="text-xs font-bold leading-snug line-clamp-2 group-hover:text-green-700 transition-colors"
                style={{ color: "var(--text-primary)" }}>
                {article.title}
              </h2>
              <p className="text-[11px] mt-1 line-clamp-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {article.excerpt}
              </p>
            </div>
            <p className="text-[11px] mt-2 flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
              <Clock className="w-3 h-3" />{article.readTime}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  /* ── Standard: vertical card (Healthline style) ── */
  return (
    <Link href={`/artikel/${article.slug}`} className="card block group overflow-hidden">

      {/* Image 16:9 */}
      <div className="relative overflow-hidden bg-gray-100" style={{ paddingTop: "56.25%" }}>
        {article.image?.startsWith("http") ? (
          <Image src={article.image} alt={article.title} fill sizes="320px"
            className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl"
            style={{ background: "var(--green-mid)" }}>{cat?.icon || "🏥"}</div>
        )}
      </div>

      {/* Body */}
      <div className="p-3.5">
        <div className="flex items-center gap-1.5 mb-2 flex-wrap">
          <span className="badge badge-green text-[10px]">{cat?.label}</span>
          <span className="badge badge-review text-[10px]">✓ Ditinjau</span>
        </div>
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
