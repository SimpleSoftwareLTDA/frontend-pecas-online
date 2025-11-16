import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{ path: string; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number }> = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/signup", changeFrequency: "weekly", priority: 0.7 },
    { path: "/login", changeFrequency: "monthly", priority: 0.4 },
    { path: "/thanks", changeFrequency: "yearly", priority: 0.3 },
    { path: "/a-curve", changeFrequency: "yearly", priority: 0.2 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
