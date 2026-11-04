import { BASE, absolute } from '../lib/site';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absolute(`${BASE}/sitemap-index.xml`)}\nSitemap: ${absolute(`${BASE}/sitemap-news.xml`)}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
