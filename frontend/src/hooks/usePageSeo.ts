import { useEffect } from "react";

interface UsePageSeoProps {
  title: string;
  description: string;
  keywords: [];
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl: string;
  ogUrl?: string;
}
export const usePageSeo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImageUrl,
  ogUrl,
}: UsePageSeoProps) => {
  const setMetaTag = (attr: string, key: string, content: any) => {
    if (!content) return;
    let element = document.querySelector(`meta[${attr}="${key}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, key);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  useEffect(() => {
    // Og Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:image", ogImageUrl);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:url", ogUrl || window.location.href);

    // Twitter Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:domain", "localhost");
    setMetaTag("name", "twitter:url", ogUrl || window.location.href);
    setMetaTag("name", "twitter:title", ogTitle || title);
    setMetaTag("name", "twitter:description", ogDescription || description);
    setMetaTag("name", "twitter:image", ogImageUrl);

    return () => {
      // any clean up here
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImageUrl, ogUrl]);
};
