import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  canonical?: string;
}

const DEFAULT_TITLE = 'Anergina — Intelligent Automotive Service Operations';
const DEFAULT_DESCRIPTION =
  'Anergina connects insurers, surveyors and workshops through a unified platform for vehicle case management, repair operations, cost intelligence and environmental impact.';
const SITE_NAME = 'Anergina';
const SITE_URL = 'https://anergina.com';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEOHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogTitle,
  ogDescription,
  ogType = 'website',
  canonical,
}: SEOHeadProps) {
  const location = useLocation();

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    setMeta('description', description);

    // OG tags
    setMeta('og:title', ogTitle ?? title, true);
    setMeta('og:description', ogDescription ?? description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', SITE_NAME, true);

    // Canonical
    const canonicalUrl = canonical ?? `${SITE_URL}${location.pathname}`;
    setLink('canonical', canonicalUrl);
  }, [title, description, ogTitle, ogDescription, ogType, canonical, location.pathname]);

  return null;
}
