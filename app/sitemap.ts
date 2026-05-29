import type { MetadataRoute } from "next";
import { articles, categories } from "@/data/articles";

const BASE = "https://tipssehatku.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                          lastModified: now, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/cari?q=`,             lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE}/tentang-kami`,        lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/kebijakan-privasi`,   lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/disclaimer`,          lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${BASE}/kategori/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${BASE}/artikel/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: article.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
