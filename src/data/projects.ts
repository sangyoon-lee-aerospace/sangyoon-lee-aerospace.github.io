/**
 * Research projects (English and Korean).
 *
 * Periods are participation periods. Projects appear on the Research page in
 * one list; `program`, `leadOrg` and `affiliation` are kept for reference only.
 */
import type { L } from '../i18n/ui';

export type ProjectRole = 'pi' | 'coi' | 'researcher';

export interface Project {
  title: L;
  /** Funding ministry or agency. */
  sponsor?: L;
  /** Funding programme (recorded for reference, not shown). */
  program?: L;
  /** Lead organisation (recorded for reference, not shown). */
  leadOrg?: string;
  /** Participation period, 'YYYY.MM'. `end` omitted for ongoing projects. */
  start: string;
  end?: string;
  /** Omitted until confirmed. */
  role?: ProjectRole;
  /** Affiliation while working on the project. */
  affiliation: 'inha' | 'kari';
}

export const roleLabels: Record<ProjectRole, L> = {
  pi: { en: 'Principal Investigator', ko: '연구책임자' },
  coi: { en: 'Co-Investigator', ko: '공동연구원' },
  researcher: { en: 'Researcher', ko: '참여연구원' },
};

const MOTIE: L = { en: 'Ministry of Trade, Industry and Energy', ko: '산업통상자원부' };
const MSIT: L = { en: 'Ministry of Science and ICT', ko: '과학기술정보통신부' };
const KASA: L = { en: 'Korea AeroSpace Administration', ko: '우주항공청' };
const KARI: L = { en: 'Korea Aerospace Research Institute', ko: '한국항공우주연구원' };

export const projects: Project[] = [
  {
    title: {
      en: 'Space Transportation Mission Center',
      ko: '우주 수송 임무 센터',
    },
    sponsor: KASA,
    start: '2025.06',
    end: '2029.12',
    role: 'coi',
    affiliation: 'inha',
  },
  {
    title: {
      en: 'Thermal management and electromagnetic resilience technologies for aircraft in extreme environments',
      ko: '극한 환경용 항공기 열관리 및 전자기 내성 기술개발 연구',
    },
    sponsor: KASA,
    start: '2025.06',
    end: '2026.06',
    role: 'pi',
    affiliation: 'inha',
  },
  {
    title: {
      en: 'Establishment of a test and evaluation infrastructure for electric propulsion systems of eco-friendly aircraft',
      ko: '친환경 항공기용 전기추진시스템 평가 기반구축',
    },
    sponsor: MOTIE,
    program: { en: 'Industrial Innovation Infrastructure Program', ko: '산업혁신기반구축사업' },
    leadOrg: '한국건설생활환경시험연구원',
    start: '2024.04',
    end: '2025.02',
    role: 'researcher',
    affiliation: 'kari',
  },
  {
    title: {
      en: 'Combustor modification for a laboratory-scale hydrogen turbogenerator based on a micro gas turbine',
      ko: '마이크로 가스터빈 기반 실험실적 규모 수소 터보제너레이터 개발을 위한 연소기 개조 기술 연구',
    },
    sponsor: KARI,
    program: { en: 'KARI internal research program', ko: '한국항공우주연구원 자체연구사업' },
    leadOrg: '한국항공우주연구원',
    start: '2024.04',
    end: '2024.12',
    role: 'pi',
    affiliation: 'kari',
  },
  {
    title: {
      en: 'Development of stratospheric drone air-vehicle technology',
      ko: '성층권 드론 비행체 기술 개발',
    },
    sponsor: MSIT,
    program: {
      en: 'Stratospheric Drone Technology for Persistent Disaster Monitoring (Innovative Challenge R&D)',
      ko: '(혁신도전형) 상시재난감시용 성층권드론기술개발사업',
    },
    leadOrg: '한국항공우주연구원',
    start: '2022.04',
    end: '2025.02',
    role: 'researcher',
    affiliation: 'kari',
  },
  {
    title: {
      en: 'Hybrid propulsion system technology for manned future mobility',
      ko: '유인 미래모빌리티 하이브리드 추진 시스템 기술 개발',
    },
    sponsor: MSIT,
    program: { en: 'KARI basic research program', ko: '한국항공우주연구원 기본사업' },
    leadOrg: '한국항공우주연구원',
    start: '2022.01',
    end: '2025.02',
    role: 'researcher',
    affiliation: 'kari',
  },
  {
    title: {
      en: 'Integrated design and test evaluation of a 150 kW-class powertrain',
      ko: '150kW급 파워트레인 통합설계 및 시험평가',
    },
    sponsor: MOTIE,
    program: { en: 'Materials and Components Technology Development Program', ko: '소재부품기술개발사업' },
    leadOrg: '한국항공기술케이에이티',
    start: '2022.01',
    end: '2023.12',
    role: 'researcher',
    affiliation: 'kari',
  },
];

const byStartDesc = (a: Project, b: Project) => b.start.localeCompare(a.start);

/** All projects in one list, newest start first. */
export const projectList = [...projects].sort(byStartDesc);

export function projectPeriod(p: Project): string {
  return `${p.start} – ${p.end ?? ''}`.trim();
}
