import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - TipsSehatku",
  description: "Kebijakan privasi TipsSehatku menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pengguna.",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 4%" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.78rem", color: "var(--soft)", marginBottom: 24 }}>
          <Link href="/" style={{ color: "var(--green)" }}>🏠 Beranda</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span>Kebijakan Privasi</span>
        </nav>

        <div style={{ background: "white", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)", padding: "36px 40px" }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>
            Kebijakan Privasi
          </h1>
          <p style={{ fontSize: "0.82rem", color: "var(--soft)", marginBottom: 28, borderBottom: "2px solid var(--green-mint)", paddingBottom: 16 }}>
            Terakhir diperbarui: 1 Januari 2026
          </p>

          <div className="article-content">
            <p>TipsSehatku ("<strong>kami</strong>") berkomitmen untuk melindungi privasi pengguna website kami di <strong>tipssehatku.com</strong>. Kebijakan privasi ini menjelaskan jenis informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hak Anda terkait informasi tersebut.</p>

            <h2>1. Informasi yang Kami Kumpulkan</h2>
            <p>Kami dapat mengumpulkan informasi berikut saat Anda menggunakan website kami:</p>
            <ul>
              <li><strong>Data penggunaan:</strong> Halaman yang dikunjungi, waktu kunjungan, browser, dan perangkat yang digunakan</li>
              <li><strong>Data teknis:</strong> Alamat IP, jenis browser, pengaturan bahasa, dan zona waktu</li>
              <li><strong>Cookie:</strong> File kecil yang disimpan di browser Anda untuk meningkatkan pengalaman pengguna</li>
            </ul>

            <h2>2. Cara Kami Menggunakan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan untuk:</p>
            <ul>
              <li>Menganalisis dan meningkatkan performa website</li>
              <li>Memahami konten yang diminati pembaca</li>
              <li>Menampilkan iklan yang relevan melalui Google AdSense</li>
              <li>Mematuhi kewajiban hukum yang berlaku</li>
            </ul>

            <h2>3. Google AdSense & Cookie Pihak Ketiga</h2>
            <p>Website ini menggunakan <strong>Google AdSense</strong> untuk menampilkan iklan. Google menggunakan cookie DART untuk menampilkan iklan berdasarkan kunjungan sebelumnya ke website ini dan website lain di internet. Pengguna dapat menonaktifkan penggunaan cookie DART melalui <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)" }}>Kebijakan Privasi Google</a>.</p>

            <p>Mitra iklan pihak ketiga kami mungkin menggunakan cookie dan web beacon untuk mengukur efektivitas iklan dan personalisasi konten iklan.</p>

            <h2>4. Google Analytics</h2>
            <p>Kami menggunakan Google Analytics untuk menganalisis lalu lintas website. Google Analytics mengumpulkan data secara anonim dan melaporkannya tanpa mengidentifikasi pengunjung secara pribadi. Anda dapat menolak pelacakan Google Analytics dengan memasang <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--green)" }}>Google Analytics Opt-out Browser Add-on</a>.</p>

            <h2>5. Cookie</h2>
            <p>Website ini menggunakan cookie untuk:</p>
            <ul>
              <li>Mengingat preferensi pengguna</li>
              <li>Menganalisis lalu lintas website (Google Analytics)</li>
              <li>Menampilkan iklan yang relevan (Google AdSense)</li>
            </ul>
            <p>Anda dapat mengatur browser untuk menolak cookie, namun hal ini dapat mempengaruhi fungsi website.</p>

            <h2>6. Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda. Namun, tidak ada metode transmisi melalui internet yang 100% aman.</p>

            <h2>7. Tautan ke Website Lain</h2>
            <p>Website kami dapat berisi tautan ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi website tersebut dan mendorong Anda untuk membaca kebijakan privasi mereka.</p>

            <h2>8. Hak Pengguna</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul>
              <li>Mengakses data pribadi yang kami miliki tentang Anda</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menolak pemrosesan data untuk tujuan pemasaran</li>
            </ul>

            <h2>9. Perubahan Kebijakan</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan terbaru.</p>

            <h2>10. Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di:</p>
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
