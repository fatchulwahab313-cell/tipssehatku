import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - TipsSehatku",
  description: "TipsSehatku adalah portal kesehatan terpercaya untuk keluarga Indonesia. Informasi berbasis riset, ditinjau oleh tenaga medis.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 4%" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.78rem", color: "var(--soft)", marginBottom: 24 }}>
          <Link href="/" style={{ color: "var(--green)" }}>🏠 Beranda</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Tentang Kami</span>
        </nav>

        <div style={{ background: "white", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)", padding: "36px 40px" }}>

          {/* Header */}
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>
            Tentang TipsSehatku
          </h1>
          <p style={{ fontSize: "0.82rem", color: "var(--soft)", marginBottom: 28, borderBottom: "2px solid var(--green-mint)", paddingBottom: 16 }}>
            Portal Kesehatan Terpercaya untuk Keluarga Indonesia
          </p>

          {/* Mission box */}
          <div style={{ background: "var(--green-pale)", border: "1px solid var(--green-mint)", borderRadius: "var(--radius-sm)", padding: "20px 24px", marginBottom: 28, borderLeft: "4px solid var(--green)" }}>
            <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--green-dark)", lineHeight: 1.7 }}>
              🎯 Misi kami: Menyediakan informasi kesehatan yang <strong>akurat, terpercaya, dan mudah dipahami</strong> untuk membantu keluarga Indonesia hidup lebih sehat.
            </p>
          </div>

          <div className="article-content">
            <h2>Tentang TipsSehatku</h2>
            <p>TipsSehatku adalah portal kesehatan digital yang didedikasikan untuk masyarakat Indonesia. Kami percaya bahwa setiap orang berhak mendapatkan akses ke informasi kesehatan yang berkualitas tinggi, akurat, dan mudah dimengerti.</p>

            <p>Website ini menyajikan artikel-artikel kesehatan yang mencakup berbagai topik, mulai dari gizi dan nutrisi, pencegahan penyakit, obat herbal, olahraga dan kebugaran, kesehatan ibu dan anak, hingga kesehatan mental.</p>

            <h2>Komitmen Kami terhadap Akurasi</h2>
            <p>Semua konten di TipsSehatku:</p>
            <ul>
              <li>✅ Ditulis berdasarkan penelitian ilmiah terkini</li>
              <li>✅ Ditinjau oleh tenaga medis berpengalaman</li>
              <li>✅ Diperbarui secara berkala sesuai perkembangan ilmu kedokteran</li>
              <li>✅ Mengacu pada pedoman dari WHO, Kemenkes RI, dan jurnal medis internasional</li>
            </ul>

            <h2>Tim Kami</h2>
            <p>TipsSehatku didukung oleh tim yang terdiri dari:</p>
            <ul>
              <li><strong>Tim Penulis Medis</strong> — Tenaga kesehatan yang berpengalaman menulis konten kesehatan</li>
              <li><strong>Tim Reviewer</strong> — Dokter dan spesialis yang memverifikasi keakuratan informasi</li>
              <li><strong>Tim Editorial</strong> — Memastikan konten mudah dipahami oleh masyarakat umum</li>
            </ul>

            <h2>Topik yang Kami Bahas</h2>
            <ul>
              <li>🥗 <strong>Gizi & Nutrisi</strong> — Panduan makan sehat, suplemen, dan diet</li>
              <li>🏥 <strong>Penyakit & Pencegahan</strong> — Informasi penyakit umum dan cara mencegahnya</li>
              <li>🌿 <strong>Obat Herbal</strong> — Manfaat dan cara aman menggunakan tanaman obat</li>
              <li>💪 <strong>Olahraga & Kebugaran</strong> — Tips aktif bergerak untuk semua usia</li>
              <li>👶 <strong>Ibu & Anak</strong> — Panduan kehamilan, bayi, dan tumbuh kembang anak</li>
              <li>🧠 <strong>Kesehatan Mental</strong> — Informasi tentang kesehatan jiwa dan manajemen stres</li>
            </ul>

            <h2>Disclaimer Medis</h2>
            <p>Konten di TipsSehatku hanya untuk tujuan <strong>informasi umum</strong> dan bukan merupakan pengganti konsultasi, diagnosis, atau pengobatan medis profesional. Selalu konsultasikan kondisi kesehatan Anda dengan dokter atau tenaga medis yang berkualifikasi.</p>

            <h2>Hubungi Kami</h2>
            <p>Kami senang mendengar dari Anda! Untuk pertanyaan, saran, atau kerjasama:</p>
            <ul>
              <li>📧 Email: info@tipssehatku.com</li>
              <li>🌐 Website: tipssehatku.com</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
