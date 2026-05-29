import Link from "next/link";
import { Heart } from "lucide-react";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#9ca3af", marginTop: "48px" }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--green-primary)" }}>
                <Heart className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-black text-white" style={{ letterSpacing: "-0.02em" }}>TipsSehatku</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">
              Informasi kesehatan terpercaya untuk keluarga Indonesia.
            </p>
            <p className="text-xs">✉️ info@tipssehatku.com</p>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Kategori</h4>
            <ul className="space-y-1.5">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/kategori/${cat.slug}`}
                    className="text-xs hover:text-white transition-colors">
                    {cat.icon} {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Informasi</h4>
            <ul className="space-y-1.5">
              {["Tentang Kami", "Tim Penulis", "Panduan Editorial", "Hubungi Kami"].map(item => (
                <li key={item}>
                  <a href="/tentang" className="text-xs hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-1.5">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Disclaimer", "Cookie Policy"].map(item => (
                <li key={item}>
                  <a href="#" className="text-xs hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: "1px solid #1f2937" }}>
          <p className="text-xs">© 2026 TipsSehatku.com — Hak cipta dilindungi</p>
          <p className="text-xs">Dibuat dengan ❤️ & <span style={{ color: "#4ade80" }}>Claude AI</span></p>
        </div>
      </div>
    </footer>
  );
}
