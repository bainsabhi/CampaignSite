import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type MetaConfig = {
  title: string;
  description: string;
};

const META_BY_ROUTE: Record<string, MetaConfig> = {
  "/": {
    title: "Paul Singh for Ward 6 | Kitchener",
    description:
      "Updates, priorities, and ways to get involved with Paul Singh's Ward 6 campaign in Kitchener-Waterloo.",
  },
  "/news": {
    title: "Latest News | Paul Singh for Ward 6",
    description:
      "Read the latest Kitchener updates, announcements, and community stories from Paul Singh.",
  },
  "/blog": {
    title: "Blog & Monthly Notes | Paul Singh",
    description:
      "Long-form updates and monthly notes from Councillor Paul Singh on Ward 6 and KW priorities.",
  },
  "/bylaws": {
    title: "Bylaw Guide | Paul Singh for Ward 6",
    description:
      "A plain-language bylaw guide for Kitchener residents, including key rules and reporting contacts.",
  },
  "/budget": {
    title: "2026 Budget Highlights | Paul Singh",
    description:
      "A concise overview of Kitchener's 2026 budget impacts, priorities, and key affordability points.",
  },
  "/faq": {
    title: "FAQ | Paul Singh for Ward 6",
    description:
      "Common questions about Ward 6 services, city processes, and how to get support from Paul Singh's office.",
  },
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const fallback = META_BY_ROUTE["/"];
    const meta = META_BY_ROUTE[pathname] ?? fallback;
    const title = meta.title;
    const description = meta.description;
    const url = `${window.location.origin}${pathname}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
  }, [pathname]);

  return null;
}
