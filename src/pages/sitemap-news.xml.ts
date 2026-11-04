import { LANGS, SITE, absolute, articleUrl, articles } from '../lib/site';

// The sitemap Google News reads: only the articles of the last two days, each
// with its publication, language, date and title. It is rebuilt with the site,
// so it follows every new article.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET() {
  const since = Date.now() - 2 * 24 * 3600 * 1000;
  const rows: { date: Date; xml: string }[] = [];
  for (const lang of LANGS) {
    const { list, demo } = await articles(lang);
    if (demo) continue;
    for (const a of list) {
      const date = new Date(a.data.date);
      if (!(date.getTime() >= since)) continue;
      rows.push({
        date,
        xml: `<url><loc>${esc(absolute(articleUrl(a)))}</loc><news:news><news:publication><news:name>${esc(SITE.name)}</news:name>` +
          `<news:language>${lang}</news:language></news:publication><news:publication_date>${date.toISOString()}</news:publication_date>` +
          `<news:title>${esc(a.data.title)}</news:title></news:news></url>`,
      });
    }
  }
  rows.sort((x, y) => y.date.getTime() - x.date.getTime());
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${rows.slice(0, 1000).map((r) => r.xml).join('')}</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
