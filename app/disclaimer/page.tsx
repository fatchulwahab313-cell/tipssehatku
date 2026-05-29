import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer Medis - TipsSehatku",
  description: "Disclaimer medis TipsSehatku. Konten kami hanya untuk informasi umum dan tidak menggantikan konsultasi dokter.",
};

export default function DisclaimerPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 4%" }}>

        <nav style={{ fontSize: "0.78rem", color: "var(--soft)", marginBottom: 24 }}>
          <Link href="/" style={{ color: "var(--green)" }}>🏠 Beranda</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Disclaimer Medis</span>
        </nav>

        <div style={{ background: "white", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)", padding: "36px 40px" }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>
            Disclaimer Medis
          </h1>
          <p style={{ fontSize: "0.82rem", color: "var(--soft)", marginBottom: 28, borderBottom: "2px solid var(--green-mint)", paddingBottom: 16 }}>
            Harap baca disclaimer ini sebelum menggunakan informasi dari TipsSehatku
          </p>

          {/* Warning box */}
          <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "var(--radius-sm)", padding: "16px 20px", marginBottom: 28, borderLeft: "4px solid #f97316" }}>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#9a3412", marginBottom: 6 }}>⚠️ Peringatan Penting</p>
            <p style={{ fontSize: "0.85rem", color: "#7c2d12", lineHeight: 1.6 }}>
              Informasi di TipsSehatku <strong>BUKAN</strong> pengganti konsultasi medis profesional. Jika Anda memiliki kekhawatiran tentang kesehatan Anda, segera hubungi dokter atau tenaga kesehatan.
            </p>
          </div>

          <div className="article-content">
            <h2>1. Tujuan Informasi</h2>
            <p>Seluruh konten yang tersedia di TipsSehatku (tipssehatku.com) disediakan semata-mata untuk tujuan <strong>informasi dan edukasi umum</strong>. Konten ini tidak dirancang untuk memberikan saran medis, diagnosis, atau rencana pengobatan.</p>

            <h2>2. Bukan Pengganti Konsultasi Dokter</h2>
            <p>Informasi yang disajikan di website ini <strong>tidak menggantikan</strong> hubungan profesional antara pasien dan tenaga kesehatan. Anda tidak boleh mengandalkan informasi di website ini sebagai pengganti saran medis dari dokter atau profesional kesehatan yang berkualifikasi.</p>

            <h2>3. Kondisi Darurat Medis</h2>
            <p>Jika Anda mengalami keadaan darurat medis, <strong>segera hubungi layanan darurat (119)</strong> atau pergi ke rumah sakit terdekat. Jangan menunda mencari bantuan medis profesional karena informasi yang Anda baca di website ini.</p>

            <h2>4. Akurasi Informasi</h2>
            <p>Meskipun kami berusaha menyajikan informasi yang akurat dan terkini, ilmu kedokteran terus berkembang. Informasi di website ini mungkin tidak selalu mencerminkan penelitian atau pedoman medis terbaru.</p>

            <h2>5. Variasi Individual</h2>
            <p>Kondisi kesehatan setiap orang berbeda-beda. Informasi yang berlaku untuk satu orang mungkin tidak tepat untuk orang lain. Selalu pertimbangkan kondisi kesehatan pribadi Anda dan konsultasikan dengan dokter sebelum mengambil keputusan medis.</p>

            <h2>6. Obat dan Suplemen</h2>
            <p>Informasi tentang obat-obatan, suplemen, atau herbal di website ini bukan rekomendasi untuk menggunakan produk tersebut. Selalu konsultasikan dengan dokter atau apoteker sebelum mengonsumsi obat atau suplemen baru.</p>

            <h2>7. Iklan dan Sponsor</h2>
            <p>Website ini menampilkan iklan melalui Google AdSense. Penampilan iklan tidak berarti kami mendukung produk atau layanan yang diiklankan. Kami tidak bertanggung jawab atas konten iklan pihak ketiga.</p>

            <h2>8. Tanggung Jawab</h2>
            <p>TipsSehatku tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan informasi di website ini. Penggunaan website ini sepenuhnya atas risiko Anda sendiri.</p>

            <h2>Hubungi Kami</h2>
            <p>Jika Anda menemukan informasi yang tidak akurat atau memiliki pertanyaan, hubungi kami di <strong>info@tipssehatku.com</strong></p>
          </div>
        </div>

      </div>
    </div>
  );
}
