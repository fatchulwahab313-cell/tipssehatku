import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "TipsSehatku - Tips Kesehatan Terpercaya untuk Indonesia", template: "%s | TipsSehatku" },
  description: "Temukan tips kesehatan terpercaya, informasi gizi, obat herbal, dan panduan hidup sehat untuk keluarga Indonesia.",
  keywords: ["tips kesehatan", "kesehatan indonesia", "gizi", "herbal", "penyakit", "olahraga", "sehat"],
  authors: [{ name: "TipsSehatku" }],
  openGraph: { siteName: "TipsSehatku", type: "website", locale: "id_ID" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
