import Link from "next/link";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "rgba(255,255,255,.7)", marginTop: 40 }}>

      {/* Top grid */}
      <div className="footer-grid" style={{ padding: "36px 4%", gap: 32, maxWidth: 1100, margin: "0 auto" }}>

        {/* Brand */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160" height="36" style={{ display: "block" }}>
            <rect width="520" height="160" rx="20" fill="#0d4f3c"/>
            <circle cx="80" cy="80" r="54" fill="#1e9966"/>
            <path d="M58,62 Q44,72 50,90 Q62,108 76,96 Q60,85 58,62Z" fill="#5edc9e" opacity=".95"/>
            <path d="M102,62 Q116,72 110,90 Q98,108 84,96 Q100,85 102,62Z" fill="#5edc9e" opacity=".9"/>
            <path d="M80,95 C80,95 62,82 62,71 C62,63 68,58 74,60 C77,61 80,65 80,65 C80,65 83,61 86,60 C92,58 98,63 98,71 C98,82 80,95 80,95Z" fill="#ff6b8a"/>
            <rect x="77" y="66" width="6" height="16" rx="2" fill="#fff" opacity=".85"/>
            <rect x="72" y="71" width="16" height="6" rx="2" fill="#fff" opacity=".85"/>
            <text x="152" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#5edc9e" letterSpacing="-0.5">tips</text>
            <text x="222" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#ffffff" letterSpacing="-0.5">sehat</text>
            <text x="348" y="85" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fontStyle="italic" fill="#ff8fab" letterSpacing="-0.5">ku</text>
          </svg>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginTop: 12, maxWidth: 280 }}>
            Informasi kesehatan terpercaya untuk keluarga Indonesia. Semua konten ditinjau oleh tenaga medis berpengalaman.
          </p>
          <div style={{ marginTop: 12, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 6, color: "#86efac" }}>
            ✉️ info@tipssehatku.com
          </div>
        </div>

        {/* Kategori */}
        <div>
          <h4 style={{ color: "white", fontSize: "0.88rem", fontWeight: 700, marginBottom: 12 }}>Kategori</h4>
          <ul style={{ listStyle: "none" }}>
            {categories.map(cat => (
              <li key={cat.slug} style={{ marginBottom: 8 }}>
                <Link href={`/kategori/${cat.slug}`} className="footer-link">
                  {cat.icon} {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informasi */}
        <div>
          <h4 style={{ color: "white", fontSize: "0.88rem", fontWeight: 700, marginBottom: 12 }}>Informasi</h4>
          <ul style={{ listStyle: "none" }}>
            {[
              { label: "Tentang Kami",      href: "/tentang-kami" },
              { label: "Tim Penulis",       href: "/tentang-kami" },
              { label: "Panduan Editorial", href: "/tentang-kami" },
              { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
              { label: "Syarat & Ketentuan",href: "/kebijakan-privasi" },
              { label: "Disclaimer Medis",  href: "/disclaimer" },
            ].map(item => (
              <li key={item.label} style={{ marginBottom: 8 }}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar" style={{ borderTop: "1px solid rgba(255,255,255,.08)", maxWidth: 1100, margin: "0 auto", fontSize: "0.78rem" }}>
        <span>© 2026 TipsSehatku.com — Hak cipta dilindungi undang-undang</span>
        <span style={{ background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.3)", color: "#fca5a5", fontSize: "0.72rem", padding: "4px 10px", borderRadius: 50, flexShrink: 0 }}>
          ⚠️ Bukan pengganti konsultasi dokter
        </span>
      </div>
    </footer>
  );
}
