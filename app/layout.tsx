import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShare from "@/components/FloatingShare";

export const metadata: Metadata = {
  title: { default: "TipsSehatku - Informasi Kesehatan Terpercaya", template: "%s | TipsSehatku" },
  description: "Temukan tips kesehatan terpercaya, informasi gizi, obat herbal, dan panduan hidup sehat untuk keluarga Indonesia. Ditinjau oleh tenaga medis berpengalaman.",
  keywords: ["tips kesehatan", "kesehatan indonesia", "gizi", "herbal", "penyakit", "olahraga", "sehat", "ibu hamil", "mental health", "hipertensi", "diabetes"],
  authors: [{ name: "TipsSehatku" }],
  creator: "TipsSehatku",
  publisher: "TipsSehatku",
  metadataBase: new URL("https://tipssehatku.com"),
  alternates: { canonical: "https://tipssehatku.com" },
  openGraph: {
    siteName: "TipsSehatku",
    type: "website",
    locale: "id_ID",
    url: "https://tipssehatku.com",
    title: "TipsSehatku - Informasi Kesehatan Terpercaya",
    description: "Portal kesehatan terpercaya untuk keluarga Indonesia. 17 artikel berbasis riset ditinjau oleh tenaga medis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TipsSehatku - Informasi Kesehatan Terpercaya",
    description: "Portal kesehatan terpercaya untuk keluarga Indonesia.",
  },
  verification: {
    google: "google5585f65d852afe31",
  },
  other: {
    "google-adsense-account": "ca-pub-1505871499689560",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-1505871499689560" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingShare />

        {/* Google AdSense — Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1505871499689560"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
