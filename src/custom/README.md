# Your changes

This folder is yours: the weekly template update (`.github/workflows/template-update.yml`)
never touches it, nor `site.config.mjs`, `src/content/articles/`, `public/images/`
and `public/brand/`.

| File | What it does |
|---|---|
| `custom.css` | Your styles, loaded after the theme's. CSS variables: `--accent`, `--bg`, `--ink`, `--heading`, `--body`… |
| `Head.astro` | Added inside `<head>` on every page. |
| `Header.astro` | If you create it, it replaces the site's header. Props: `lang`, and `alternates` (the same page in the other languages, by language). |
| `Footer.astro` | If you create it, it replaces the site's footer. Props: `lang`. |
| `ArticleEnd.astro` | If you create it, it is shown under every article, before "More articles": a newsletter, an offer, an invitation. Props: `lang`, `article`. |

Put your logo and other pictures in `public/brand/` and use them as `/brand/logo.svg`.
