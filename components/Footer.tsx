import Link from "next/link";
import { Heart } from "lucide-react";
import { categories } from "@/data/articles";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1f2e", color: "#8b95a4", marginTop: 0 }}>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0a8f4f,#16a34a)" }}>
                <Heart className="w-4 h-4 text-white fill-white" strokeWidth={0} />
              </div>
              <span className="font-black text-white text-base" style={{ letterSpacing: "-0.03em" }}>TipsSehatku</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">
              Portal kesehatan terpercaya untuk keluarga Indonesia. Informasi berbasis riset, ditulis dan ditinjau oleh tenaga medis.
            </p>
            <p className="text-xs">✉️ info@tipssehatku.com</p>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Topik</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/kategori/${cat.slug}`}
                    className="text-xs hover:text-white transition-colors flex items-center gap-1.5">
                    {cat.icon} {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Informasi</h4>
            <ul className="space-y-2">
              {["Tentang Kami", "Tim Penulis", "Kebijakan Editorial", "Hubungi Kami"].map(item => (
                <li key={item}>
                  <a href="#" className="text-xs hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Disclaimer Medis", "Cookie Policy"].map(item => (
                <li key={item}>
                  <a href="#" className="text-xs hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg text-xs leading-relaxed"
              style={{ background: "#252b3b", color: "#8b95a4", borderLeft: "3px solid #0a8f4f" }}>
              Konten ini hanya untuk informasi. Bukan pengganti saran dokter.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #252b3b" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs">© 2026 TipsSehatku.com — Hak cipta dilindungi undang-undang</p>
          <p className="text-xs">Dibangun dengan ❤️ & <span style={{ color: "#4ade80" }}>Claude AI</span></p>
        </div>
      </div>
    </footer>
  );
}
