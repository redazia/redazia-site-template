export type Lang = 'it' | 'en' | 'de' | 'fr' | 'es';

export interface SectionConfig {
  /** How Redazia files the article: the `section` of its front matter. */
  name: string;
  it?: SectionText;
  en?: SectionText;
  de?: SectionText;
  fr?: SectionText;
  es?: SectionText;
}

export interface SectionText {
  slug: string;
  label: string;
  /** A sentence or two under the section's title: what readers find there. */
  intro?: string;
}

export interface Paths {
  article: string;
  section: string;
  about: string;
  numbers: string;
}

export interface SiteConfig {
  name: string;
  tagline: Partial<Record<Lang, string>>;
  url: string;
  base?: string;
  languages: Lang[];
  theme: string;
  accent?: string;
  sections: SectionConfig[];
  ai: 'automatic' | 'assisted';
  credit?: boolean;
  publisher: { name: string; address?: string; vat?: string; url?: string };
  contact: string;
  demo?: boolean;
  timezone?: string;
  paths?: Partial<Record<Lang, Partial<Paths>>>;
  analytics?: { matomo?: { url: string; siteId: string } } | null;
}
