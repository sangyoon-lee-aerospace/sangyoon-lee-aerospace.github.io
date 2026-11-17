/**
 * Language support: Korean (default, served at /) and English (served at /en/).
 *
 * Translatable data fields use the `L` type ({ en, ko }). Interface labels are in
 * `ui` below. To add a language, extend `languages`, `L`, and `ui`, and add a page
 * folder under src/pages/.
 */

export const languages = {
  ko: { label: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ko';

/** A localized string. */
export type L = Record<Lang, string>;

export function t(value: L, lang: Lang): string {
  return value[lang] ?? value[defaultLang];
}

/** Internal path for a language, e.g. ('/cv/', 'en') → '/en/cv/'. */
export function localePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path === '/' ? '/' : path}`;
}

/** Language of a URL path and the path without the language prefix. */
export function parsePath(pathname: string): { lang: Lang; path: string } {
  const match = pathname.match(/^\/(en)(\/.*)?$/);
  if (match) return { lang: match[1] as Lang, path: match[2] || '/' };
  return { lang: defaultLang, path: pathname || '/' };
}

export const ui = {
  skip: { en: 'Skip to content', ko: '본문 바로가기' },
  externalHint: { en: ' (external site, opens in a new tab)', ko: ' (외부 사이트, 새 탭에서 열림)' },
  newTabHint: { en: ' (opens in a new tab)', ko: ' (새 탭에서 열림)' },
  switchTo: { en: 'Read this page in Korean', ko: '이 페이지를 영어로 보기' },
  mainNav: { en: 'Main', ko: '주 메뉴' },

  navHome: { en: 'Home', ko: '홈' },
  navResearch: { en: 'Research', ko: '연구' },
  navPublications: { en: 'Publications', ko: '논문' },
  navTeaching: { en: 'Teaching', ko: '강의' },
  navCv: { en: 'CV', ko: '약력' },

  contact: { en: 'Contact', ko: '연락처' },
  contactProfiles: { en: 'Contact & Profiles', ko: '연락처 및 학술 프로필' },
  email: { en: 'Email', ko: '이메일' },
  office: { en: 'Address', ko: '주소' },
  laboratory: { en: 'Laboratory', ko: '연구실' },
  photoAlt: { en: 'Portrait of Sangyoon Lee', ko: '이상윤 교수 사진' },

  about: { en: 'About', ko: '소개' },
  researchAreas: { en: 'Research Areas', ko: '연구 분야' },
  moreResearch: { en: 'More on research', ko: '연구 자세히 보기' },
  allPublications: { en: 'All publications', ko: '전체 논문 보기' },
  academicBackground: { en: 'Academic Background', ko: '경력' },
  education: { en: 'Education', ko: '학력' },
  fullCv: { en: 'Full CV', ko: '전체 약력' },

  researchDescription: {
    en: 'Research areas of Sangyoon Lee: electrified aircraft propulsion, hypersonic flows, fuel injection and combustion, and aero-optics and flow diagnostics.',
    ko: '이상윤 교수의 연구 분야: 전기항공추진, 극초음속 유동, 연료 분사·연소, 공기광학·유동 계측.',
  },
  projects: { en: 'Research Projects', ko: '연구 과제' },

  publicationsDescription: {
    en: 'Journal publications of Sangyoon Lee in aerospace propulsion, combustion, and high-speed flow, with DOI links.',
    ko: '이상윤 교수의 항공우주 추진, 연소, 고속 유동 분야 학술지 논문 (DOI 링크 포함).',
  },
  sectionsNav: { en: 'Publication sections', ko: '논문 구분' },
  inKorean: { en: 'in Korean', ko: '국문' },
  article: { en: 'Article', ko: 'Article' },

  cvTitle: { en: 'Curriculum Vitae', ko: '약력' },
  cvDescription: {
    en: 'Curriculum vitae of Sangyoon Lee: professional experience and publications.',
    ko: '이상윤 교수의 약력: 경력과 논문.',
  },
  cvDownload: { en: 'Download CV (PDF)', ko: '약력 내려받기 (PDF)' },
  publications: { en: 'Publications', ko: '논문' },

  teachingDescription: { en: 'Courses taught by Sangyoon Lee.', ko: '이상윤 교수의 담당 교과목.' },
  undergraduate: { en: 'Undergraduate Courses', ko: '학부 과목' },
  graduate: { en: 'Graduate Courses', ko: '대학원 과목' },

  notFoundTitle: { en: 'Page not found', ko: '페이지를 찾을 수 없습니다' },
  notFoundText: {
    en: 'The page you are looking for does not exist or has moved.',
    ko: '요청한 페이지가 없거나 주소가 변경되었습니다.',
  },
  backHome: { en: 'Return to the home page', ko: '홈으로 돌아가기' },
} satisfies Record<string, L>;
