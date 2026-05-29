export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  { slug: "gizi", label: "Gizi & Nutrisi", icon: "🥗", color: "#16a34a" },
  { slug: "penyakit", label: "Penyakit & Pencegahan", icon: "🏥", color: "#dc2626" },
  { slug: "herbal", label: "Obat Herbal", icon: "🌿", color: "#15803d" },
  { slug: "olahraga", label: "Olahraga & Kebugaran", icon: "💪", color: "#2563eb" },
  { slug: "ibu-anak", label: "Ibu & Anak", icon: "👶", color: "#9333ea" },
  { slug: "mental", label: "Kesehatan Mental", icon: "🧠", color: "#ea580c" },
];

export const articles: Article[] = [
  {
    slug: "manfaat-minum-air-putih-8-gelas-sehari",
    title: "Manfaat Minum Air Putih 8 Gelas Sehari yang Jarang Diketahui",
    excerpt: "Minum air putih yang cukup bukan hanya menghilangkan dahaga. Temukan 10 manfaat luar biasa yang akan membuat tubuhmu jauh lebih sehat.",
    content: `
Air putih adalah komponen paling penting dalam tubuh manusia. Sekitar 60% tubuh kita terdiri dari air, dan menjaga kecukupan cairan adalah salah satu hal terpenting untuk kesehatan optimal.

## Mengapa 8 Gelas Per Hari?

Para ahli kesehatan dari WHO merekomendasikan konsumsi air putih minimal 8 gelas atau sekitar 2 liter per hari untuk orang dewasa. Namun, kebutuhan ini bisa berbeda tergantung aktivitas fisik, iklim, dan kondisi kesehatan masing-masing individu.

## 10 Manfaat Minum Air Putih yang Cukup

### 1. Meningkatkan Fungsi Otak
Otak terdiri dari 73% air. Ketika dehidrasi bahkan ringan sekalipun, konsentrasi dan kemampuan kognitif dapat menurun signifikan. Penelitian menunjukkan dehidrasi 1-2% sudah cukup mengganggu fungsi otak.

### 2. Melancarkan Sistem Pencernaan
Air membantu melarutkan nutrisi dan mineral sehingga mudah diserap tubuh. Selain itu, air membantu melunakkan feses dan mencegah sembelit.

### 3. Menjaga Berat Badan Ideal
Minum segelas air sebelum makan dapat mengurangi nafsu makan dan membantu mengonsumsi kalori lebih sedikit. Beberapa penelitian menunjukkan minum air dapat meningkatkan metabolisme hingga 30% selama 1-1,5 jam.

### 4. Menyehatkan Kulit
Air membantu menjaga elastisitas kulit, mengurangi kerutan, dan membuat kulit tampak lebih bercahaya. Dehidrasi membuat kulit tampak kering, kusam, dan lebih rentan terhadap masalah kulit.

### 5. Mencegah Batu Ginjal
Konsumsi air yang cukup mengencerkan mineral dalam urine sehingga mencegah pembentukan kristal yang dapat menjadi batu ginjal.

### 6. Meningkatkan Performa Fisik
Saat berolahraga, tubuh kehilangan banyak cairan melalui keringat. Dehidrasi dapat menyebabkan penurunan performa, kelelahan lebih cepat, dan meningkatkan risiko cedera.

### 7. Melumasi Sendi
Air adalah komponen utama cairan sinovial yang melumasi sendi. Kecukupan cairan membantu mencegah nyeri sendi dan meningkatkan fleksibilitas.

### 8. Mengatur Suhu Tubuh
Melalui keringat dan pernapasan, air membantu tubuh mengatur suhu dan mencegah kepanasan berlebih (heatstroke).

### 9. Mencegah Infeksi Saluran Kemih
Minum air yang cukup membantu "membilas" bakteri dari saluran kemih dan mengurangi risiko infeksi.

### 10. Mendukung Fungsi Jantung
Jantung harus bekerja lebih keras ketika darah mengental akibat dehidrasi. Cukup minum air membantu jantung memompa darah lebih efisien.

## Tips Memastikan Cukup Minum Air

- **Bawa botol minum** ke mana pun kamu pergi
- **Pasang pengingat** di ponsel setiap 2 jam
- **Minum segelas air** segera setelah bangun tidur
- **Tambahkan irisan lemon atau mentimun** jika bosan dengan air putih biasa
- **Perhatikan warna urine** — kuning pucat berarti terhidrasi baik, kuning tua berarti kurang minum

## Tanda-tanda Dehidrasi yang Perlu Diwaspadai

- Mulut dan tenggorokan kering
- Sakit kepala
- Pusing atau lelah
- Urine berwarna gelap
- Jarang buang air kecil (kurang dari 4 kali sehari)

Mulai hari ini, jadikan minum air putih sebagai kebiasaan sehat yang tidak bisa ditinggalkan. Investasi kecil ini memberikan manfaat luar biasa bagi kesehatan jangka panjangmu.
    `,
    category: "gizi",
    tags: ["air putih", "hidrasi", "kesehatan", "tips"],
    author: "dr. Sari Andini",
    date: "2026-05-20",
    readTime: "5 menit",
    image: "/images/air-putih.jpg",
    featured: true,
  },
  {
    slug: "cara-tidur-berkualitas-7-jam",
    title: "7 Cara Mendapatkan Tidur Berkualitas Setiap Malam",
    excerpt: "Kurang tidur berdampak besar pada kesehatan fisik dan mental. Ini 7 cara ilmiah yang terbukti membantu kamu tidur lebih nyenyak.",
    content: `
Tidur berkualitas adalah salah satu pilar utama kesehatan, sejajar dengan nutrisi dan olahraga. Namun di era modern ini, banyak orang mengalami gangguan tidur yang berdampak pada produktivitas dan kesehatan.

## Berapa Lama Tidur yang Dibutuhkan?

National Sleep Foundation merekomendasikan:
- **Remaja (14-17 tahun):** 8-10 jam
- **Dewasa muda (18-25 tahun):** 7-9 jam
- **Dewasa (26-64 tahun):** 7-9 jam
- **Lansia (65+ tahun):** 7-8 jam

## 7 Cara Ilmiah untuk Tidur Lebih Berkualitas

### 1. Konsisten dengan Jadwal Tidur
Tidur dan bangun di waktu yang sama setiap hari — termasuk akhir pekan — membantu mengatur ritme sirkadian tubuh. Fluktuasi jadwal tidur mengganggu "jam biologis" internal kita.

### 2. Ciptakan Lingkungan Tidur yang Nyaman
- **Suhu kamar ideal:** 18-22°C
- **Kegelapan total** mengoptimalkan produksi melatonin
- **Ketenangan** — gunakan earplug atau white noise jika perlu
- **Kasur dan bantal** yang mendukung postur tubuh dengan baik

### 3. Batasi Paparan Layar Sebelum Tidur
Cahaya biru dari ponsel, tablet, dan laptop menekan produksi melatonin (hormon tidur). Hindari layar elektronik minimal 1 jam sebelum tidur.

### 4. Perhatikan Asupan Kafein dan Alkohol
Kafein memiliki waktu paruh 5-6 jam. Artinya, secangkir kopi yang diminum jam 4 sore masih punya efek stimulan setengahnya saat jam 10 malam. Hindari kafein setelah jam 2 siang.

### 5. Rutinitas Relaksasi Sebelum Tidur
Buat "wind-down routine" selama 30-60 menit sebelum tidur:
- Mandi air hangat
- Membaca buku fisik
- Meditasi atau pernapasan dalam
- Stretching ringan

### 6. Olahraga Teratur (Tapi Bukan Malam Hari)
Olahraga teratur meningkatkan kualitas tidur secara signifikan. Namun hindari olahraga intens 2-3 jam sebelum tidur karena dapat meningkatkan adrenalin.

### 7. Kelola Stres dengan Baik
Stres dan kecemasan adalah penyebab utama insomnia. Teknik journaling sebelum tidur — menuliskan kekhawatiran dan rencana esok hari — terbukti membantu "mematikan" pikiran yang aktif.

## Tanda Gangguan Tidur yang Perlu Diperiksakan

Segera konsultasi ke dokter jika mengalami:
- Mendengkur keras dan sering terbangun
- Masih sangat mengantuk walau sudah tidur 7+ jam
- Tidak bisa tidur lebih dari 30 menit setiap malam
- Kaki terasa tidak nyaman saat hendak tidur

Investasi dalam kualitas tidur adalah investasi terbaik untuk kesehatan dan produktivitasmu.
    `,
    category: "mental",
    tags: ["tidur", "insomnia", "kesehatan mental", "tips"],
    author: "dr. Budi Santoso",
    date: "2026-05-18",
    readTime: "6 menit",
    image: "/images/tidur.jpg",
    featured: true,
  },
  {
    slug: "makanan-penurun-kolesterol-alami",
    title: "10 Makanan Penurun Kolesterol yang Mudah Ditemukan di Indonesia",
    excerpt: "Kolesterol tinggi bisa dikontrol dengan pola makan yang tepat. Ini daftar makanan penurun kolesterol yang mudah didapat dan terbukti efektif.",
    content: `
Kolesterol tinggi (hiperkolesterolemia) adalah salah satu faktor risiko utama penyakit jantung dan stroke — dua penyebab kematian tertinggi di Indonesia. Kabar baiknya, kadar kolesterol bisa dikontrol secara alami melalui pola makan.

## Memahami Jenis Kolesterol

- **LDL (Low-Density Lipoprotein):** Kolesterol "jahat" yang menumpuk di dinding arteri
- **HDL (High-Density Lipoprotein):** Kolesterol "baik" yang membawa kolesterol ke hati untuk diproses
- **Trigliserida:** Lemak dalam darah yang kadar tingginya meningkatkan risiko jantung

Target ideal:
- LDL: < 100 mg/dL
- HDL: > 60 mg/dL (pria), > 50 mg/dL (wanita)
- Total kolesterol: < 200 mg/dL

## 10 Makanan Penurun Kolesterol

### 1. Oat dan Gandum Utuh
Oat mengandung beta-glukan, serat larut yang terbukti secara ilmiah menurunkan LDL. Sarapan semangkuk oatmeal setiap hari dapat menurunkan LDL hingga 5-8%.

### 2. Tempe dan Tahu
Protein kedelai dalam tempe dan tahu membantu menurunkan LDL. Konsumsi 25 gram protein kedelai per hari dapat menurunkan LDL rata-rata 5-6%.

### 3. Ikan Laut Berlemak
Ikan salmon, tuna, makarel, dan sarden kaya omega-3 yang meningkatkan HDL dan menurunkan trigliserida. Konsumsi 2 porsi per minggu.

### 4. Alpukat
Alpukat kaya lemak tak jenuh tunggal yang menurunkan LDL tanpa mengurangi HDL. Juga mengandung beta-sitosterol yang menghambat penyerapan kolesterol.

### 5. Kacang-kacangan
Almond, kenari, dan kacang tanah mengandung lemak tak jenuh, serat, dan fitosterol. Segenggam kacang per hari dapat menurunkan LDL 5%.

### 6. Bawang Putih
Senyawa allicin dalam bawang putih menghambat sintesis kolesterol di hati. Konsumsi 1-2 siung bawang putih mentah per hari.

### 7. Kunyit
Kurkumin dalam kunyit memiliki sifat anti-inflamasi dan terbukti menurunkan LDL serta meningkatkan HDL.

### 8. Buah Beri
Blueberry, stroberi, dan anggur kaya antioksidan yang melindungi pembuluh darah dan meningkatkan profil lipid darah.

### 9. Sayuran Hijau Gelap
Bayam, brokoli, dan kangkung mengandung lutein dan serat yang membantu menurunkan kolesterol.

### 10. Minyak Zaitun
Gunakan minyak zaitun extra virgin sebagai pengganti minyak goreng biasa. Kaya polifenol yang melindungi kolesterol LDL dari oksidasi.

## Makanan yang Harus Dihindari

- Gorengan dan makanan berlemak jenuh tinggi
- Daging merah berlemak (kambing, sapi berlemak)
- Jeroan (hati, otak, usus)
- Makanan olahan dan fast food
- Produk susu full-fat berlebihan

Konsultasikan dengan dokter atau ahli gizi untuk program penurunan kolesterol yang sesuai kondisimu.
    `,
    category: "gizi",
    tags: ["kolesterol", "jantung", "makanan sehat", "diet"],
    author: "Nurul Fitria, S.Gz",
    date: "2026-05-15",
    readTime: "7 menit",
    image: "/images/kolesterol.jpg",
  },
  {
    slug: "olahraga-30-menit-sehari-manfaatnya",
    title: "Olahraga 30 Menit Sehari: Manfaat Luar Biasa yang Mengubah Hidupmu",
    excerpt: "Tidak perlu gym mahal atau waktu berjam-jam. Cukup 30 menit sehari untuk mendapatkan manfaat kesehatan yang signifikan.",
    content: `
Banyak orang berpikir olahraga harus dilakukan berjam-jam untuk mendapat manfaat. Kenyataannya, hanya 30 menit per hari sudah cukup untuk mengubah kesehatan secara dramatis.

## Apa yang Terjadi di Tubuhmu Saat Olahraga 30 Menit?

Dalam 30 menit olahraga aerobik sedang:
- Jantung memompa darah lebih cepat memasok oksigen ke otot
- Tubuh melepaskan endorfin yang meningkatkan mood
- Metabolisme meningkat dan berlanjut beberapa jam setelah olahraga
- Sel-sel tubuh menjadi lebih sensitif terhadap insulin

## 10 Manfaat Ilmiah Olahraga 30 Menit Sehari

### 1. Menurunkan Risiko Penyakit Jantung hingga 35%
Olahraga rutin memperkuat otot jantung, menurunkan tekanan darah, dan meningkatkan kadar kolesterol baik (HDL).

### 2. Mengontrol Gula Darah
Olahraga meningkatkan sensitivitas insulin dan membantu sel menyerap glukosa lebih efisien — sangat penting bagi penderita atau berisiko diabetes tipe 2.

### 3. Menjaga Berat Badan Ideal
30 menit jalan cepat membakar 150-200 kalori. Kombinasi olahraga dan diet sehat adalah cara paling efektif menurunkan dan menjaga berat badan.

### 4. Memperkuat Tulang dan Otot
Olahraga beban dan impact seperti jalan, lari, atau senam menstimulasi pembentukan tulang dan mencegah osteoporosis.

### 5. Meningkatkan Kesehatan Mental
Olahraga sama efektifnya dengan obat antidepresan ringan dalam mengatasi depresi dan kecemasan. Endorfin yang dilepaskan menciptakan perasaan euforia alami.

### 6. Meningkatkan Kualitas Tidur
Penelitian menunjukkan olahraga teratur membantu tertidur lebih cepat dan tidur lebih nyenyak — tapi hindari olahraga intens 2 jam sebelum tidur.

### 7. Meningkatkan Daya Ingat dan Fungsi Otak
Olahraga meningkatkan aliran darah ke otak dan mendorong pertumbuhan sel-sel otak baru, terutama di area memori (hipokampus).

### 8. Memperpanjang Umur
Penelitian dari Harvard menunjukkan olahraga teratur dapat menambah harapan hidup 3-7 tahun.

### 9. Meningkatkan Energi Sehari-hari
Paradoksnya, "menghabiskan" energi untuk berolahraga justru meningkatkan stamina dan energi keseluruhan.

### 10. Meningkatkan Sistem Imun
Olahraga sedang meningkatkan sirkulasi sel-sel imun, membantu tubuh mendeteksi dan melawan infeksi lebih efektif.

## Pilihan Olahraga 30 Menit yang Mudah Dilakukan

| Olahraga | Kalori Terbakar | Level |
|---|---|---|
| Jalan cepat | 150-200 kkal | Pemula |
| Bersepeda santai | 200-300 kkal | Pemula |
| Senam aerobik | 250-350 kkal | Menengah |
| Lari | 300-400 kkal | Menengah |
| HIIT | 400-600 kkal | Lanjutan |

## Tips Konsisten Berolahraga

1. **Jadwalkan seperti janji penting** — masukkan ke kalender
2. **Mulai dari yang kamu sukai** — olahraga terbaik adalah yang bisa konsisten dilakukan
3. **Cari teman olahraga** untuk saling memotivasi
4. **Reward dirimu** setelah konsisten seminggu penuh
5. **Ingat tujuanmu** — bukan sekadar langsing, tapi hidup sehat lebih lama

Mulai hari ini. Tidak perlu sempurna, yang penting konsisten.
    `,
    category: "olahraga",
    tags: ["olahraga", "kebugaran", "diet", "sehat"],
    author: "Ahmad Fauzi, S.Or",
    date: "2026-05-12",
    readTime: "6 menit",
    image: "/images/olahraga.jpg",
    featured: true,
  },
  {
    slug: "jahe-merah-manfaat-dan-cara-mengonsumsi",
    title: "Jahe Merah: Manfaat Kesehatan dan Cara Tepat Mengonsumsinya",
    excerpt: "Jahe merah sudah digunakan sebagai obat tradisional selama ribuan tahun. Ini manfaat ilmiahnya dan cara terbaik menggunakannya.",
    content: `
Jahe merah (Zingiber officinale var. rubrum) adalah varietas jahe yang lebih kecil namun memiliki kandungan minyak atsiri dan oleoresin lebih tinggi dibanding jahe biasa. Inilah yang membuatnya lebih pedas dan berkhasiat.

## Kandungan Aktif Jahe Merah

- **Gingerol:** Senyawa anti-inflamasi dan antioksidan utama
- **Shogaol:** Terbentuk saat jahe dikeringkan, lebih kuat dari gingerol
- **Zingeron:** Memberikan efek antioksidan
- **Minyak atsiri:** Zingiberene, bisabolene, camphene

## 8 Manfaat Jahe Merah yang Terbukti Ilmiah

### 1. Anti-Inflamasi Kuat
Gingerol dalam jahe merah menghambat enzim COX-2 — mekanisme yang sama dengan obat anti-inflamasi (ibuprofen). Efektif untuk radang sendi dan nyeri otot.

### 2. Meredakan Mual
Jahe adalah salah satu obat mual paling efektif yang diakui secara medis. Efektif untuk mual kehamilan, mual pasca operasi, dan mabuk perjalanan.

### 3. Menurunkan Gula Darah
Penelitian menunjukkan 2 gram jahe bubuk per hari dapat menurunkan gula darah puasa hingga 12% dan HbA1c (penanda diabetes) hingga 10%.

### 4. Meningkatkan Imunitas
Kandungan antioksidan tinggi dalam jahe merah memperkuat sistem imun dan melindungi sel dari kerusakan radikal bebas.

### 5. Meredakan Nyeri Haid
Dalam sebuah penelitian, 1 gram jahe per hari selama 3 hari pertama haid seefektif ibuprofen dalam mengurangi nyeri haid.

### 6. Menurunkan Kolesterol
Jahe merah terbukti menurunkan trigliserida dan LDL (kolesterol jahat) secara signifikan.

### 7. Membantu Pencernaan
Jahe mempercepat pengosongan lambung — penting bagi penderita dispepsia (maag fungsional). Juga mengurangi kembung dan gas berlebih.

### 8. Sifat Antibakteri dan Antiviral
Ekstrak jahe merah aktif melawan berbagai bakteri patogen termasuk E. coli dan Salmonella, serta virus influenza.

## Cara Mengonsumsi Jahe Merah

### Minuman Jahe Merah Segar
1. Cuci 2-3 ruas jahe merah
2. Memarkan atau iris tipis
3. Rebus dalam 400 ml air selama 15 menit
4. Saring dan tambahkan madu secukupnya
5. Minum hangat-hangat

### Dosis yang Dianjurkan
- **Umum:** 1-3 gram jahe kering per hari
- **Mual kehamilan:** 1 gram per hari (konsultasi dokter)
- **Anti-inflamasi:** 2-4 gram per hari

## Perhatian dan Kontraindikasi

Konsultasi dokter sebelum konsumsi dosis tinggi jika:
- Mengonsumsi obat pengencer darah (warfarin)
- Akan menjalani operasi (hentikan 2 minggu sebelumnya)
- Memiliki batu empedu
- Trimester awal kehamilan

Jahe merah adalah hadiah alam yang luar biasa — murah, mudah didapat, dan manfaatnya nyata.
    `,
    category: "herbal",
    tags: ["jahe merah", "herbal", "obat alami", "imunitas"],
    author: "Dr. Hendra Wijaya",
    date: "2026-05-10",
    readTime: "5 menit",
    image: "/images/jahe-merah.jpg",
  },
  {
    slug: "cara-mengatasi-stres-kerja",
    title: "8 Cara Efektif Mengatasi Stres Kerja Sebelum Berdampak pada Kesehatan",
    excerpt: "Stres kerja yang tidak dikelola bisa menjadi penyakit serius. Ini strategi yang terbukti efektif mengelola stres di tempat kerja.",
    content: `
Stres kerja adalah epidemi diam-diam yang dialami jutaan pekerja Indonesia. WHO menyebut stres kerja sebagai "hazard of the 21st century" — dan dampaknya pada kesehatan fisik maupun mental sangat nyata.

## Dampak Stres Kerja pada Kesehatan

Stres kronis yang tidak diatasi dapat menyebabkan:
- Penyakit jantung dan hipertensi
- Sistem imun melemah
- Gangguan tidur dan kelelahan kronis
- Masalah pencernaan (maag, IBS)
- Depresi dan kecemasan
- Burnout

## 8 Strategi Efektif Mengelola Stres Kerja

### 1. Teknik Pernapasan 4-7-8
Teknik yang dikembangkan Dr. Andrew Weil ini bekerja dalam hitungan menit:
- Hirup napas 4 hitungan
- Tahan 7 hitungan
- Hembuskan perlahan 8 hitungan
- Ulangi 3-4 kali

Aktivasi sistem saraf parasimpatis (rest & digest) ini langsung menenangkan respons stres.

### 2. Atur Prioritas dengan Metode Eisenhower
Pisahkan tugas menjadi 4 kuadran:
- Penting & Mendesak → Lakukan segera
- Penting & Tidak Mendesak → Jadwalkan
- Tidak Penting & Mendesak → Delegasikan
- Tidak Penting & Tidak Mendesak → Eliminasi

### 3. Teknik Pomodoro
Kerja fokus 25 menit, istirahat 5 menit, ulangi. Setelah 4 sesi, istirahat panjang 15-30 menit. Metode ini mencegah kelelahan mental dan meningkatkan produktivitas.

### 4. Gerak Fisik di Sela Kerja
Setiap 1-2 jam, berdiri dan bergerak 5-10 menit. Stretching sederhana, jalan ke pantri, atau naik-turun tangga. Gerakan fisik melepaskan ketegangan otot dan mereset pikiran.

### 5. Batasi Multitasking
Multitasking meningkatkan kortisol (hormon stres) dan mengurangi produktivitas hingga 40%. Fokus satu pekerjaan dalam satu waktu.

### 6. Digital Detox Setelah Jam Kerja
Notifikasi email dan pesan kerja di luar jam kerja membuat otak tidak pernah benar-benar istirahat. Tetapkan "jam bebas kerja" dan matikan notifikasi.

### 7. Bangun Koneksi Positif di Tempat Kerja
Hubungan sosial yang baik adalah buffer kuat terhadap stres. Luangkan waktu mengobrol santai dengan rekan kerja, bukan hanya bicara soal pekerjaan.

### 8. Journaling Sebelum Tidur
Tuliskan 3 hal yang berjalan baik hari ini (gratitude) dan 1 hal yang ingin diperbaiki esok. Journaling membantu memproses emosi dan "menutup" hari kerja secara mental.

## Kapan Harus ke Profesional?

Segera cari bantuan psikolog atau psikiater jika:
- Stres sudah berlangsung lebih dari 2 minggu tanpa membaik
- Mengganggu tidur, makan, atau hubungan personal
- Ada pikiran untuk menyakiti diri sendiri

Ingat: mencari bantuan profesional adalah tanda kekuatan, bukan kelemahan.
    `,
    category: "mental",
    tags: ["stres", "kesehatan mental", "produktivitas", "kerja"],
    author: "Psikolog Dewi Rahayu",
    date: "2026-05-08",
    readTime: "7 menit",
    image: "/images/stres-kerja.jpg",
  },
  {
    slug: "mpasi-bayi-6-bulan-panduan-lengkap",
    title: "Panduan Lengkap MPASI untuk Bayi 6 Bulan: Makanan, Jadwal, dan Tips",
    excerpt: "MPASI yang tepat di 6 bulan pertama menentukan tumbuh kembang bayi. Panduan lengkap dari dokter anak untuk orang tua baru.",
    content: `
Makanan Pendamping ASI (MPASI) adalah momen penting dalam tumbuh kembang bayi. Dimulai tepat di usia 6 bulan, MPASI yang benar memberikan nutrisi penting yang tidak bisa lagi dipenuhi ASI seorang diri.

## Mengapa MPASI Dimulai di Usia 6 Bulan?

WHO dan IDAI merekomendasikan MPASI eksklusif dimulai di usia tepat 6 bulan karena:
- Sistem pencernaan bayi sudah cukup matang
- Risiko alergi lebih rendah
- Refleks ekstrusi (mendorong makanan keluar) sudah berkurang
- Bayi sudah bisa duduk dengan sedikit bantuan

## Tanda Bayi Siap MPASI

✅ Bisa duduk dengan sedikit bantuan dan menegakkan kepala
✅ Menunjukkan ketertarikan pada makanan orang dewasa
✅ Membuka mulut saat melihat sendok
✅ Refleks ekstrusi sudah berkurang

## Makanan Pertama yang Direkomendasikan

### Tekstur: Puree Halus
Semua makanan harus dihaluskan hingga tekstur puree di bulan pertama MPASI.

### Pilihan Makanan Awal:
1. **Bubur beras putih/merah** — mudah dicerna, sumber karbohidrat
2. **Pure labu kuning** — kaya vitamin A dan mudah disukai bayi
3. **Pure pisang** — manis alami, kaya kalium
4. **Pure kentang** — karbohidrat dan mudah dihaluskan
5. **Pure wortel** — kaya beta-karoten

### Protein Hewani (Penting dari Awal!)
IDAI 2020 merekomendasikan protein hewani diberikan sejak MPASI pertama:
- Hati ayam (kaya zat besi dan zinc)
- Daging ayam halus
- Ikan laut tanpa tulang
- Telur kuning

## Jadwal MPASI Usia 6-8 Bulan

| Waktu | Menu |
|---|---|
| 07.00 | ASI/sufor |
| 09.00 | MPASI utama (2-3 sdm) |
| 11.00 | ASI/sufor |
| 13.00 | MPASI utama (2-3 sdm) |
| 15.00 | ASI/sufor |
| 19.00 | ASI/sufor sebelum tidur |

## Aturan 3 Hari Pengenalan Makanan Baru

Perkenalkan satu jenis makanan baru dan tunggu 3 hari sebelum menambahkan yang baru. Ini membantu identifikasi reaksi alergi.

## Yang Harus Dihindari Sebelum Usia 1 Tahun

🚫 Madu (risiko botulisme)
🚫 Garam dan gula tambahan
🚫 Susu sapi sebagai minuman utama
🚫 Makanan berpotensi tersedak (kacang utuh, anggur utuh)
🚫 Teh dan kopi

Konsultasikan selalu dengan dokter spesialis anak untuk panduan MPASI yang sesuai kondisi spesifik bayimu.
    `,
    category: "ibu-anak",
    tags: ["MPASI", "bayi", "nutrisi anak", "ibu menyusui"],
    author: "dr. Lina Kusuma, Sp.A",
    date: "2026-05-05",
    readTime: "8 menit",
    image: "/images/mpasi.jpg",
  },
  {
    slug: "tekanan-darah-tinggi-gejala-dan-cara-menurunkan",
    title: "Hipertensi: Gejala, Penyebab, dan 7 Cara Alami Menurunkan Tekanan Darah",
    excerpt: "Hipertensi dijuluki 'silent killer' karena sering tanpa gejala. Kenali risikonya dan cara alami mengontrol tekanan darah.",
    content: `
Hipertensi atau tekanan darah tinggi adalah kondisi di mana tekanan darah secara konsisten di atas 130/80 mmHg. Di Indonesia, diperkirakan 1 dari 3 orang dewasa mengalami hipertensi, dan lebih dari setengahnya tidak menyadarinya.

## Klasifikasi Tekanan Darah

| Kategori | Sistolik | Diastolik |
|---|---|---|
| Normal | < 120 | < 80 |
| Elevated | 120-129 | < 80 |
| Hipertensi Stage 1 | 130-139 | 80-89 |
| Hipertensi Stage 2 | ≥ 140 | ≥ 90 |
| Krisis Hipertensi | > 180 | > 120 |

## Mengapa Hipertensi Disebut "Silent Killer"?

Kebanyakan penderita hipertensi tidak merasakan gejala apapun, bahkan saat tekanan darah sudah sangat tinggi. Gejala yang mungkin muncul (biasanya saat sudah parah):
- Sakit kepala hebat terutama di pagi hari
- Pandangan kabur atau berdenyut
- Nyeri dada
- Sesak napas
- Mimisan berulang

## 7 Cara Alami Menurunkan Tekanan Darah

### 1. Diet DASH (Dietary Approaches to Stop Hypertension)
Perbanyak: buah, sayuran, produk susu rendah lemak, biji-bijian utuh.
Kurangi: garam, lemak jenuh, makanan olahan.
Penelitian menunjukkan diet DASH menurunkan tekanan darah 8-14 mmHg.

### 2. Kurangi Konsumsi Garam
Batasi sodium maksimal 2.300 mg per hari (sekitar 1 sendok teh garam). Baca label makanan — banyak makanan kemasan mengandung sodium tinggi yang tersembunyi.

### 3. Olahraga Aerobik Teratur
30 menit olahraga aerobik sedang (jalan cepat, berenang, bersepeda) 5 hari seminggu dapat menurunkan tekanan darah 5-8 mmHg.

### 4. Turunkan Berat Badan
Setiap penurunan 1 kg berat badan dapat menurunkan tekanan darah 1 mmHg. Target lingkar pinggang: < 90 cm (pria), < 80 cm (wanita).

### 5. Batasi Alkohol dan Berhenti Merokok
Alkohol berlebih dan rokok secara langsung meningkatkan tekanan darah dan merusak pembuluh darah.

### 6. Kelola Stres
Meditasi, yoga, dan teknik relaksasi terbukti menurunkan tekanan darah secara bermakna. Stres kronis memicu pelepasan hormon yang menyempitkan pembuluh darah.

### 7. Konsumsi Makanan Kaya Kalium
Kalium membantu tubuh membuang sodium dan mengendurkan pembuluh darah. Sumber terbaik: pisang, alpukat, kentang, bayam, tomat.

## Kapan Harus ke Dokter?

Segera ke dokter atau UGD jika tekanan darah > 180/120 mmHg disertai:
- Nyeri dada
- Sesak napas
- Gangguan penglihatan
- Lemah atau mati rasa mendadak

Pantau tekanan darah secara rutin — minimal sekali sebulan jika sudah terdiagnosis hipertensi.
    `,
    category: "penyakit",
    tags: ["hipertensi", "tekanan darah", "jantung", "penyakit"],
    author: "dr. Rizky Pratama, Sp.JP",
    date: "2026-05-03",
    readTime: "7 menit",
    image: "/images/hipertensi.jpg",
  },
  {
    slug: "vitamin-c-manfaat-dan-sumber-terbaik",
    title: "Vitamin C: Manfaat Lengkap dan Sumber Terbaik Selain Jeruk",
    excerpt: "Vitamin C lebih dari sekadar vitamin untuk flu. Temukan manfaat lengkapnya dan sumber makanan yang mungkin belum kamu tahu.",
    content: `
Vitamin C (asam askorbat) adalah vitamin esensial yang tidak bisa diproduksi sendiri oleh tubuh manusia — harus didapat dari makanan. Ini menjadikannya salah satu nutrisi yang paling perlu diperhatikan asupannya setiap hari.

## Berapa Kebutuhan Vitamin C Harian?

- **Pria dewasa:** 90 mg/hari
- **Wanita dewasa:** 75 mg/hari
- **Ibu hamil:** 85-120 mg/hari
- **Perokok:** +35 mg lebih tinggi
- **Batas aman:** 2.000 mg/hari

## 8 Manfaat Vitamin C yang Terbukti

### 1. Antioksidan Kuat
Vitamin C menetralisir radikal bebas yang merusak sel dan berkontribusi pada penuaan serta penyakit kronis.

### 2. Meningkatkan Imunitas
Vitamin C mendorong produksi sel darah putih, meningkatkan fungsinya, dan melindungi sel imun dari kerusakan.

### 3. Membantu Penyerapan Zat Besi
Konsumsi vitamin C bersamaan dengan makanan kaya zat besi non-heme (dari tumbuhan) meningkatkan penyerapannya hingga 67%.

### 4. Sintesis Kolagen
Kolagen membutuhkan vitamin C untuk terbentuk. Kolagen adalah protein struktur untuk kulit, tulang, otot, dan pembuluh darah.

### 5. Menurunkan Risiko Penyakit Kronis
Asupan vitamin C tinggi dikaitkan dengan risiko penyakit jantung, diabetes tipe 2, dan beberapa kanker yang lebih rendah.

### 6. Melindungi Memori
Stres oksidatif berperan dalam perkembangan demensia. Kadar vitamin C tinggi dikaitkan dengan perlindungan terhadap gangguan memori.

### 7. Mempercepat Penyembuhan Luka
Vitamin C diperlukan dalam setiap tahap penyembuhan luka — dari pembekuan darah hingga pembentukan jaringan baru.

### 8. Menurunkan Tekanan Darah
Meta-analisis menunjukkan suplementasi vitamin C menurunkan tekanan darah sistolik rata-rata 3.84 mmHg.

## Sumber Vitamin C Terbaik (Bukan Cuma Jeruk!)

| Makanan | Vitamin C per 100g |
|---|---|
| Jambu biji merah | 228 mg |
| Paprika merah | 190 mg |
| Kiwi | 93 mg |
| Stroberi | 59 mg |
| Pepaya | 62 mg |
| Jeruk | 53 mg |
| Brokoli (rebus) | 65 mg |
| Tomat | 23 mg |

**Tip:** Vitamin C mudah rusak oleh panas. Konsumsi buah segar atau sayuran yang dimasak minimal untuk mempertahankan kandungannya.

## Tanda Kekurangan Vitamin C

- Gusi mudah berdarah
- Luka lambat sembuh
- Mudah memar
- Kelelahan dan kelemahan
- Sendi nyeri dan bengkak
- Kulit kering dan rambut kusam
    `,
    category: "gizi",
    tags: ["vitamin C", "imunitas", "nutrisi", "antioksidan"],
    author: "Nurul Fitria, S.Gz",
    date: "2026-04-28",
    readTime: "6 menit",
    image: "/images/vitamin-c.jpg",
  },
  {
    slug: "diabetes-tanda-awal-yang-sering-diabaikan",
    title: "10 Tanda Awal Diabetes yang Sering Diabaikan — Kenali Sebelum Terlambat",
    excerpt: "Diabetes tipe 2 berkembang perlahan dan gejalanya mudah diabaikan. Kenali tanda-tanda awal sebelum kondisi semakin parah.",
    content: `
Indonesia adalah negara dengan jumlah penderita diabetes ke-5 terbanyak di dunia, dengan lebih dari 19 juta penderita. Yang mengkhawatirkan, hampir separuhnya tidak menyadari kondisinya.

## Memahami Diabetes

Diabetes adalah kondisi kronis di mana tubuh tidak bisa menggunakan glukosa (gula darah) dengan baik, menyebabkan kadar gula dalam darah terlalu tinggi.

**Tiga jenis utama:**
- **Diabetes Tipe 1:** Sistem imun menyerang sel penghasil insulin
- **Diabetes Tipe 2:** Sel tubuh resisten terhadap insulin (paling umum, 90%)
- **Diabetes Gestasional:** Terjadi selama kehamilan

## 10 Tanda Awal Diabetes yang Sering Diabaikan

### 1. Sering Buang Air Kecil (Poliuria)
Ginjal bekerja keras menyaring glukosa berlebih, menarik air bersamanya. Ini menyebabkan produksi urine berlebih, sering bahkan di malam hari.

### 2. Rasa Haus Berlebihan (Polidipsia)
Akibat sering buang air kecil, tubuh mengalami dehidrasi dan otak memicu rasa haus yang intens.

### 3. Rasa Lapar Terus-menerus (Polifagia)
Meski makan banyak, sel tubuh tidak bisa menyerap glukosa dengan baik, sehingga otak terus mengirim sinyal lapar.

### 4. Penurunan Berat Badan Tanpa Sebab
Saat glukosa tidak bisa digunakan, tubuh mulai membakar lemak dan otot sebagai energi, menyebabkan penurunan berat badan.

### 5. Kelelahan Ekstrem
Sel-sel tubuh kekurangan energi karena tidak bisa menggunakan glukosa. Hasilnya, kelelahan yang tidak hilang walau sudah cukup istirahat.

### 6. Penglihatan Kabur
Kadar gula tinggi mengubah cairan dalam lensa mata, menyebabkan pembengkakan dan penglihatan kabur yang berfluktuasi.

### 7. Luka Lambat Sembuh
Gula darah tinggi mengganggu sirkulasi darah dan respons imun, menyebabkan luka — bahkan yang kecil — membutuhkan waktu lama untuk sembuh.

### 8. Infeksi Berulang
Terutama infeksi saluran kemih, infeksi jamur (kandidiasis), dan infeksi kulit yang terus berulang karena bakteri "menyukai" lingkungan gula tinggi.

### 9. Kesemutan atau Mati Rasa di Tangan/Kaki
Kadar gula tinggi dalam jangka panjang merusak saraf (neuropati diabetik), menyebabkan sensasi kesemutan, terbakar, atau mati rasa.

### 10. Kulit Gelap di Lipatan Tubuh
Area di leher, ketiak, atau selangkangan yang menjadi lebih gelap dan bertekstur beludru (acanthosis nigricans) adalah tanda resistensi insulin.

## Faktor Risiko Diabetes Tipe 2

- Kelebihan berat badan atau obesitas
- Riwayat keluarga diabetes
- Usia > 45 tahun
- Kurang aktif bergerak
- Tekanan darah tinggi
- Kolesterol abnormal
- Riwayat diabetes gestasional

## Apa yang Harus Dilakukan?

Jika mengalami beberapa gejala di atas, segera periksa kadar gula darah ke dokter atau klinik terdekat. Deteksi dini adalah kunci — diabetes yang terdiagnosis lebih awal jauh lebih mudah dikelola.

**Target gula darah normal:**
- Puasa: 70-99 mg/dL
- 2 jam setelah makan: < 140 mg/dL
- HbA1c: < 5,7%
    `,
    category: "penyakit",
    tags: ["diabetes", "gula darah", "penyakit", "pencegahan"],
    author: "dr. Rizky Pratama, Sp.JP",
    date: "2026-04-25",
    readTime: "7 menit",
    image: "/images/diabetes.jpg",
  },
  {
    slug: "pentingnya-postur-tubuh-yang-baik",
    title: "Pentingnya Postur Tubuh yang Baik: Panduan Lengkap untuk Punggung Sehat",
    excerpt: "Postur tubuh yang buruk bukan hanya soal penampilan — ini mempengaruhi kesehatan tulang belakang, pernapasan, suasana hati, dan produktivitas harianmu. Pelajari cara duduk, berdiri, dan bergerak dengan benar.",
    content: `
Pernahkah kamu merasakan nyeri punggung setelah duduk lama, atau leher kaku setelah bekerja di depan layar? Itu bukan kebetulan. Postur tubuh yang salah adalah penyebab utama berbagai masalah kesehatan yang seringkali dianggap sepele.

## Apa Itu Postur Tubuh?

Postur tubuh adalah posisi dan keselarasan bagian-bagian tubuh kita saat berdiri, duduk, atau bergerak. Postur yang baik berarti tulang, otot, dan sendi berada dalam keseimbangan yang optimal sehingga tidak ada tekanan berlebihan pada satu bagian tubuh.

## Mengenal Anatomi Tulang Belakang

Memahami struktur tulang belakang membantu kita mengerti mengapa postur itu penting.

### Struktur Tulang Belakang (Vertebra)

Tulang belakang manusia terdiri dari beberapa segmen:

- **Cervical (leher)** — 7 ruas, menopang kepala dan memungkinkan gerak leher
- **Thoracic (dada & punggung atas)** — 12 ruas, berhubungan dengan tulang rusuk
- **Lumbal (punggung bawah)** — 5 ruas, menanggung beban terbesar tubuh
- **Sacrum & Coccyx (tulang ekor)** — menjadi dasar tulang belakang

**Tekanan terbesar pada tulang belakang terjadi di area lumbal**, terutama saat duduk dalam posisi yang salah.

### Diskus Intervertebralis: Bantalan Sendi Tulang Belakang

Di antara setiap ruas tulang belakang terdapat **diskus intervertebralis** — "bantal" yang berfungsi meredam benturan dan memberikan fleksibilitas. Struktur ini terdiri dari:

- **Nucleus pulposus** — bagian dalam yang lunak seperti gel
- **Annulus fibrosus** — cincin luar yang keras dan berserat

Postur yang buruk secara konsisten dapat meningkatkan tekanan pada diskus, menyebabkan kerusakan dan nyeri jangka panjang, bahkan hernia nukleus pulposus (saraf terjepit).

## Dampak Postur yang Baik

Manfaat menjaga postur tubuh jauh lebih luas dari sekadar penampilan:

### Manfaat Fisik
- Mencegah nyeri punggung, leher, dan otot
- Meningkatkan fungsi pernapasan (dada tidak tertekan)
- Melancarkan sistem pencernaan
- Meningkatkan kelenturan dan mobilitas tubuh

### Manfaat Mental
- Meningkatkan rasa percaya diri
- Mengurangi stres dan ketegangan
- Suasana hati lebih stabil dan positif

### Manfaat Produktivitas
- Meningkatkan fokus dan konsentrasi
- Tidak mudah lelah saat beraktivitas
- Stamina lebih terjaga sepanjang hari

### Manfaat Penampilan
- Badan terlihat lebih tegak dan tinggi
- Mencerminkan kepribadian yang positif dan percaya diri

## Postur Berdiri yang Benar

Saat berdiri, perhatikan hal-hal berikut:

- **Kepala:** Tegak, dagu sejajar dengan lantai — jangan menunduk atau mendongak
- **Bahu:** Rileks dan sedikit ke belakang, tidak membungkuk ke depan
- **Punggung:** Lurus dengan sedikit lengkungan alami di bagian lumbar
- **Lutut:** Tidak terkunci, sedikit fleksibel untuk mencegah tekanan berlebih
- **Kaki:** Berjarak selebar pinggul, berat badan dibagi merata di kedua kaki

## Postur Duduk di Kursi (Bekerja/Sekolah)

Duduk adalah postur yang paling banyak dilakukan — dan paling sering salah. Berikut panduan duduk yang benar di meja kerja:

- **Leher dan punggung lurus**, bersandar ke sandaran kursi
- Gunakan **bantal kecil di area lumbar** jika sandaran tidak cukup menopang
- **Bagian atas monitor sejajar dengan mata** — monitor terlalu rendah memaksa leher menunduk
- **Jarak mata ke monitor** sekitar 40–75 cm
- **Pantat berada di pojok kursi**, bukan melorot ke depan
- **Ketinggian meja** sejajar dengan lengan dan siku saat mengetik
- **Ketinggian kursi** disesuaikan dengan tinggi kaki agar paha sejajar lantai

## Postur Saat Duduk di Lantai

Di Indonesia, duduk di lantai sangat umum — saat pengajian, makan bersama, atau aktivitas keluarga. Ini tips aman:

- Gunakan **alas/spon setebal ±5 cm** dengan bahan tidak terlalu empuk (agak kaku lebih baik)
- Usahakan **posisi sandaran tegak** — jangan membungkuk ke depan dalam waktu lama
- Hindari duduk **bersila terlalu lama** tanpa jeda karena meningkatkan tekanan tidak merata pada tulang rawan lutut

## Postur Saat Menulis

Posisi menulis yang sering salah:

- **Kurang benar:** Badan terlalu membungkuk, meja datar sehingga mata harus menunduk jauh
- **Lebih benar:** Badan sedikit condong (tidak kaku lurus 90°), gunakan **meja miring** agar pandangan lebih rileks — ini juga lebih nyaman untuk tangan, lengan, dan bahu

## Postur Aktivitas Sehari-hari Lainnya

### Mengangkat Barang Berat
- Jangan membungkuk dari pinggang
- Tekuk **lutut**, punggung tetap lurus
- Angkat dengan kekuatan kaki, bukan punggung

### Posisi Tidur
- Gunakan alas tidur (kasur) yang tidak terlalu empuk dan tidak terlalu keras
- Pilih bantal dengan ketinggian yang pas — sejajar dengan lebar bahu saat miring

## Kesimpulan

Postur tubuh yang baik adalah investasi kesehatan jangka panjang. Mulai dari cara duduk, berdiri, mengangkat barang, hingga tidur — semua mempengaruhi kondisi tulang belakang, otot, dan kesehatan secara keseluruhan.

**Tiga langkah mulai sekarang:**
1. Setiap 30–60 menit duduk, berdiri dan lakukan peregangan ringan
2. Atur ketinggian kursi dan monitor agar ergonomis
3. Latih kesadaran postur setiap hari — lama-lama akan menjadi kebiasaan otomatis

Ingat, perubahan kecil yang konsisten lebih berdampak daripada perubahan besar yang hanya sesekali.
    `.trim(),
    category: "olahraga",
    tags: ["postur", "tulang belakang", "ergonomis", "punggung", "duduk", "nyeri"],
    author: "Tim Medis TipsSehatku",
    date: "2026-05-29",
    readTime: "8 menit",
    image: "/images/postur.jpg",
    featured: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(a => a.featured);
}

export function getRecentArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter(a => a.slug !== slug && (a.category === current.category || a.tags.some(t => current.tags.includes(t))))
    .slice(0, limit);
}
