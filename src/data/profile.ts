/**
 * Personal profile data (English and Korean side by side).
 *
 * Everything shown about the person comes from this file. When the affiliation
 * changes, edit `position`, `affiliation`, `lab` and `contact` here only.
 */
import type { ImageMetadata } from 'astro';
import type { L, Lang } from '../i18n/ui';
import { t } from '../i18n/ui';
import portrait from '../assets/profile.png';

export interface Link {
  label: L;
  url: string;
}

export interface Profile {
  name: L;
  position: L;
  affiliation: {
    department: L;
    institution: L;
  };
  /** Research group the person belongs to (linked externally, never mirrored). */
  lab?: {
    name: L;
    shortName: string;
    url: string;
  };
  /** Portrait photo; omit to use the layout without a photo. */
  photo?: ImageMetadata;
  /** Short introduction of research interests, shown under "About" on the home page. */
  bio: L[];
  contact: {
    email?: string;
    /** Office address. */
    address?: L;
  };
  /**
   * Academic profiles, e.g.
   * { label: { en: 'ORCID', ko: 'ORCID' }, url: 'https://orcid.org/…' }.
   */
  profiles: Link[];
  /** Path under /public to a CV PDF. Leave undefined until a real PDF exists. */
  cvPdf?: string;
}

export const profile: Profile = {
  name: { en: 'Sangyoon Lee', ko: '이상윤' },
  position: { en: 'Assistant Professor', ko: '조교수' },
  affiliation: {
    department: { en: 'Department of Aerospace Engineering', ko: '항공우주공학과' },
    institution: { en: 'Inha University', ko: '인하대학교' },
  },
  lab: {
    name: { en: 'Inha Jet Propulsion Laboratory', ko: '인하대학교 제트추진연구실' },
    shortName: 'IJPL',
    url: 'https://jpl.inha.ac.kr/',
  },
  photo: portrait,
  bio: [
    {
      en: 'My research concerns aerospace propulsion and power systems. My main interests range from hybrid-electric propulsion and aircraft gas turbines to high-speed propulsion.',
      ko: '항공우주 추진·동력 시스템을 연구합니다. 하이브리드 전기추진과 항공기용 가스터빈부터 고속 추진까지가 주요 관심 분야입니다.',
    },
    {
      en: 'I combine experiments, including optical flow diagnostics, with numerical simulation to analyse combustion, high-speed flow, and thermal behaviour in these systems.',
      ko: '광학 유동 진단을 포함한 시험과 수치해석을 함께 활용하여 이들 시스템의 연소, 고속 유동, 열 거동을 분석합니다.',
    },
  ],
  contact: {
    email: 'sangyoon.lee@inha.ac.kr',
    address: {
      en: 'Room 411, Inha University Aerospace Convergence Campus, 36 Gaetbeol-ro, Yeonsu-gu, Incheon, Republic of Korea',
      ko: '인천광역시 연수구 갯벌로 36 인하대학교 항공우주융합캠퍼스 411호',
    },
  },
  profiles: [],
  cvPdf: undefined,
};

/** "Department of Aerospace Engineering, Inha University" / "인하대학교 항공우주공학과" */
export function affiliationLine(lang: Lang): string {
  const dept = t(profile.affiliation.department, lang);
  const inst = t(profile.affiliation.institution, lang);
  return lang === 'ko' ? `${inst} ${dept}` : `${dept}, ${inst}`;
}

/** The name in the other script, shown next to the main name. */
export function secondaryName(lang: Lang): { text: string; lang: Lang } {
  return lang === 'ko' ? { text: profile.name.en, lang: 'en' } : { text: profile.name.ko, lang: 'ko' };
}
