/**
 * CV data (English and Korean). Sections with no entries are not rendered.
 * Add entries only when they are confirmed.
 */
import type { L } from '../i18n/ui';

export interface CvEntry {
  /** Free-form period, e.g. { en: '2025 – present', ko: '2025 – 현재' }. */
  period: L;
  title: L;
  organization: L;
  location?: L;
  details?: L[];
}

export interface CvSection {
  id: string;
  title: L;
  entries: CvEntry[];
}

export const cvSections: CvSection[] = [
  {
    id: 'experience',
    title: { en: 'Professional Experience', ko: '경력' },
    entries: [
      {
        period: { en: '2025 – present', ko: '2025 – 현재' },
        title: { en: 'Assistant Professor', ko: '조교수' },
        organization: {
          en: 'Department of Aerospace Engineering, Inha University',
          ko: '인하대학교 항공우주공학과',
        },
      },
      {
        period: { en: '2021 – 2025', ko: '2021 – 2025' },
        title: { en: 'Senior Researcher', ko: '선임연구원' },
        organization: {
          en: 'Korea Aerospace Research Institute (KARI)',
          ko: '한국항공우주연구원',
        },
      },
    ],
  },
  { id: 'education', title: { en: 'Education', ko: '학력' }, entries: [] },
  { id: 'awards', title: { en: 'Selected Awards & Honors', ko: '주요 수상' }, entries: [] },
  { id: 'service', title: { en: 'Academic Service', ko: '학술 활동' }, entries: [] },
  { id: 'memberships', title: { en: 'Professional Memberships', ko: '학회 회원' }, entries: [] },
];

export const visibleCvSections = cvSections.filter((s) => s.entries.length > 0);
