import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buddhatattz.com";
  const now = new Date();

  return [
    { url: base,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/gallery`,     lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/booking`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
