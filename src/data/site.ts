/**
 * Site-wide settings: description and navigation.
 * The site name is the person's name, never an institution.
 */
import type { L, Lang } from '../i18n/ui';
import { localePath, t, ui } from '../i18n/ui';
import { affiliationLine, profile } from './profile';
import { publishedCourses } from './teaching';

export interface NavItem {
  label: string;
  href: string;
  /** Language-neutral path, used to mark the current page. */
  path?: string;
  external?: boolean;
}

export function siteTitle(lang: Lang): string {
  return t(profile.name, lang);
}

export function siteDescription(lang: Lang): string {
  const desc: L = {
    en: `${profile.name.en} — ${profile.position.en}, ${affiliationLine('en')}. Research in aerospace propulsion and power systems, combustion, and high-speed flow.`,
    ko: `${profile.name.ko} — ${affiliationLine('ko')} ${profile.position.ko}. 항공우주 추진·동력 시스템, 연소, 고속 유동 연구.`,
  };
  return t(desc, lang);
}

/** Whether an internal page is listed in navigation and the sitemap. */
export function isPagePublic(path: string): boolean {
  if (path === '/teaching/') return publishedCourses.length > 0;
  return true;
}

const pages: { path: string; label: L }[] = [
  { path: '/', label: ui.navHome },
  { path: '/research/', label: ui.navResearch },
  { path: '/publications/', label: ui.navPublications },
  { path: '/teaching/', label: ui.navTeaching },
];

export function nav(lang: Lang): NavItem[] {
  return [
    ...pages
      .filter((p) => isPagePublic(p.path))
      .map((p) => ({ label: t(p.label, lang), href: localePath(p.path, lang), path: p.path })),
    ...(profile.lab ? [{ label: profile.lab.shortName, href: profile.lab.url, external: true }] : []),
  ];
}
