/**
 * Teaching data (English and Korean).
 *
 * Only courses with `published: true` appear on the site. While no course is
 * published, the Teaching page is left out of the navigation and the sitemap
 * (see `isPagePublic` in site.ts). Do not list private or copyrighted material.
 */
import type { L } from '../i18n/ui';

export interface Course {
  title: L;
  /** Course code, if one should be shown. */
  code?: string;
  level: 'undergraduate' | 'graduate';
  /** Terms taught, e.g. [{ en: 'Fall 2026', ko: '2026년 2학기' }]. */
  terms?: L[];
  description?: L;
  published: boolean;
}

export const teachingIntro: L = {
  en: 'Courses taught in aerospace propulsion and related fields will be listed here once the course information is confirmed.',
  ko: '담당 교과목은 정보 확인 후 게시할 예정입니다.',
};

export const courses: Course[] = [];

export const publishedCourses = courses.filter((c) => c.published);
