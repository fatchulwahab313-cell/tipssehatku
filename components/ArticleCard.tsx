import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles";
import { categories } from "@/data/articles";

interface Props { article: Article; featured?: boolean; }

const badgeClass: Record<string, string> = {
  gizi:       "badge-gizi",
  penyakit:   "badge-penyakit",
  herbal:     "badge-herbal",
  olahraga:   "badge-olahraga",
  "ibu-anak": "badge-ibu-anak",
  mental:     "badge-mental",
};

export default function ArticleCard({ article, featured = false }: Props) {
  const cat = categories.find(c => c.slug === article.category);
  const cls = badgeClass[article.category] || "badge-gray";

  /* ── Featured: big card with image top ── */
  if (featured) {
    return (
      <Link href={`/artikel/${article.slug}`} className="featured-card-link group">
        {/* Image */}
        <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
          {article.image?.startsWith("http") ? (
            <Image src={article.image} alt={article.title} fill sizes="700px"
              className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", background: "var(--green-mint)" }}>
              {cat?.icon}
            </div>
          )}
          <div style={{ position: "absolute", top: 14, left: 14, background: "var(--green)", color: "white", fontSize: "0.7rem", fontWeight: 700, letterSpacing: ".5px", padding: "4px 12px", borderRadius: 50 }}>
            {cat?.icon} {cat?.label?.toUpperCase()}
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: 18 }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.35, marginBottom: 8, color: "var(--dark)" }}
            className="group-hover:text-green-700 transition-colors">
            {article.title}
          </h2>
          <p style={{ color: "var(--soft)", fontSize: "0.87rem", lineHeight: 1.6, marginBottom: 14 }}>
            {article.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--soft)", marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 600, color: "var(--mid)" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--green-mint)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".9rem" }}>✍️</div>
              {article.author}
            </div>
            <span>⏱ {article.readTime}</span>
          </div>
          <div className="btn-read">Pelajari Selengkapnya →</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "var(--soft)", marginTop: 10 }}>
            🩺 Ditinjau oleh <span style={{ color: "var(--green)", fontWeight: 600 }}>{article.author}</span>
          </div>
        </div>
      </Link>
    );
  }

  /* ── Standard: horizontal card ── */
  return (
    <Link href={`/artikel/${article.slug}`} className="article-card-link group">
      {/* Thumbnail */}
      <div style={{ width: 120, flexShrink: 0, position: "relative", overflow: "hidden" }}>
        {article.image?.startsWith("http") ? (
          <Image src={article.image} alt={article.title} fill sizes="120px"
            className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", background: "var(--green-mint)" }}>
            {cat?.icon || "🏥"}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 14, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
        <div>
          <span className={`badge ${cls}`} style={{ marginBottom: 6, display: "inline-block" }}>{cat?.icon} {cat?.label}</span>
          <h3 style={{ fontFamily: "'Lora', serif", fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.35, color: "var(--dark)", marginBottom: 6 }}
            className="line-clamp-2 group-hover:text-green-700 transition-colors">
            {article.title}
          </h3>
          <p className="line-clamp-2" style={{ fontSize: "0.78rem", color: "var(--soft)", lineHeight: 1.5, marginBottom: 8 }}>
            {article.excerpt}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.72rem", color: "var(--soft)" }}>⏱ {article.readTime}</span>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--green)" }}>Baca →</span>
        </div>
      </div>
    </Link>
  );
}
