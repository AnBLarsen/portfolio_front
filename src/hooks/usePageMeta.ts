import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
}

export function usePageMeta({ title, description, canonical, jsonLd }: PageMetaOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.name = 'description';
      document.head.appendChild(descEl);
    }
    descEl.content = description;

    // Canonical
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonical;

    // JSON-LD
    const JSON_LD_ID = 'json-ld-schema';
    let scriptEl = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = JSON_LD_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonical, jsonLd]);
}
