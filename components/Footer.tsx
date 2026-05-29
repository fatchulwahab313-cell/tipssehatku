import Link from "next/link";
import { Heart, Mail, Shield } from "lucide-react";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#d1d5db", marginTop: "48px" }}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--green-primary)" }}>
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-black text-lg text-white">TipsSehatku</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Informasi kesehatan terpercaya untuk keluarga Indonesia. Ditulis oleh tenaga medis dan ahli gizi berpengalaman.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: "#9ca3af" }}>
              <Mail className="w-4 h-4" /> info@tipssehatku.com
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Kategori</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/kategori/${cat.slug}`} className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>
                    {cat.icon} {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Informasi</h4>
            <ul className="space-y-2">
              {["Tentang Kami", "Tim Penulis", "Panduan Editorial", "Hubungi Kami"].map(item => (
                <li key={item}>
                  <a href="/tentang" className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Disclaimer Medis", "Cookie Policy"].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#9ca3af" }}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg text-xs" style={{ background: "#2a2a2a", color: "#9ca3af" }}>
              <Shield className="w-3 h-3 inline mr-1 text-green-400" />
              Konten ini hanya untuk informasi, bukan pengganti saran dokter.
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid #2a2a2a" }}>
          <p className="text-xs" style={{ color: "#6b7280" }}>© 2026 TipsSehatku.com — Hak cipta dilindungi</p>
          <p className="text-xs" style={{ color: "#6b7280" }}>Powered by <span className="text-green-400 font-semibold">Claude AI</span></p>
        </div>
      </div>
    </footer>
  );
}
