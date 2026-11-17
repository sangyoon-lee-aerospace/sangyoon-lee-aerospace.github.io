/**
 * Publication records.
 *
 * Source of the list: the publication list on the IJPL faculty profile page.
 * Bibliographic fields follow the publisher record registered with Crossref
 * (DOI adopted only on an exact title match).
 *
 * Field names follow BibTeX where possible (title, author, journal → venue,
 * year, volume, number → issue, pages, doi) so a BibTeX import can map onto them.
 */

import type { L } from '../i18n/ui';

export type PublicationType = 'journal' | 'conference' | 'patent';

const ADVANCE_ONLINE: L = { en: 'Advance online publication', ko: '온라인 선공개' };

export interface Publication {
  /** Stable key, e.g. first-author surname + year + first title word. */
  id: string;
  type: PublicationType;
  title: string;
  /** Title in the original language when the paper is not in English. */
  originalTitle?: { text: string; lang: string };
  /** Full author list in publication order. Empty when not yet verified. */
  authors: string[];
  venue: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  articleNumber?: string;
  doi?: string;
  url?: string;
  /** Language of the paper (ISO 639-1). Omit for English. */
  language?: string;
  /** e.g. "Advance online publication" when volume/pages are not assigned yet. */
  status?: L;
  /** Research area ids from `research.ts`. */
  areas?: string[];
}

/** Name variants that identify the site owner in author lists. */
export const SELF_NAMES = ['Sangyoon Lee'];

export const publications: Publication[] = [
  // ---- International journals -------------------------------------------
  {
    id: 'lee2026effect',
    type: 'journal',
    title:
      'Effect of initial sub-atmospheric extension-tube pressure on ignition and flame development during high-pressure hydrogen release',
    authors: ['Sangyoon Lee', 'Min Sik Yun', 'Hyoung Jin Lee'],
    venue: 'International Journal of Hydrogen Energy',
    year: 2026,
    volume: '280',
    articleNumber: '157848',
    doi: '10.1016/j.ijhydene.2026.157848',
    areas: ['injection-combustion'],
  },
  {
    id: 'jung2026numerical',
    type: 'journal',
    title:
      'Numerical investigation of film cooling hole design effects on the cooling performance of an expansion–deflection nozzle pintle',
    authors: ['Hyun Ji Jung', 'KyungHwan Han', 'Sangyoon Lee', 'Hyoung Jin Lee'],
    venue: 'Aerospace Science and Technology',
    year: 2026,
    volume: '176',
    articleNumber: '112120',
    doi: '10.1016/j.ast.2026.112120',
  },
  {
    id: 'jun2026hybrid',
    type: 'journal',
    title:
      'A Hybrid CFD–ε–NTU–Neural Network Framework for Installed Thermal Performance Evaluation of Nacelle-Integrated Compact Heat Exchangers',
    authors: ['Sangook Jun', 'Sangyoon Lee', 'Jae-Sung Huh', 'Poo Min Park', 'Byeung Jun Lim'],
    venue: 'Energies',
    year: 2026,
    volume: '19',
    issue: '17',
    articleNumber: '4182',
    doi: '10.3390/en19174182',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'kim2026offdesign',
    type: 'journal',
    title: 'Off-Design Performance of Wavecatcher Intakes Based on Intake Shapes',
    authors: ['Young Jin Kim', 'Sangyoon Lee', 'Hyoung Jin Lee'],
    venue: 'Journal of Aircraft',
    year: 2026,
    doi: '10.2514/1.C038855',
    status: ADVANCE_ONLINE,
  },
  {
    id: 'kim2025study',
    type: 'journal',
    title:
      'Study on the Performance Characteristics of Osculating Cone Waverider According to Shock Wave Angle',
    authors: ['Jong Bo Kim', 'Young Jin Kim', 'Sangyoon Lee', 'Hyoung Jin Lee'],
    venue: 'International Journal of Aeronautical and Space Sciences',
    year: 2025,
    volume: '27',
    issue: '4',
    pages: '2586–2605',
    doi: '10.1007/s42405-025-01106-2',
  },
  {
    id: 'lee2024inclined',
    type: 'journal',
    title:
      'Inclined Installation Effect on the Offset Strip Finned Heat Exchanger Designed for a Hybrid Electric Propulsion System in Electric Vertical Take-Off and Landing',
    authors: ['Sangyoon Lee', 'Sangook Jun', 'Jae-Sung Huh', 'Poomin Park', 'Byeung-Jun Lim'],
    venue: 'Energies',
    year: 2024,
    volume: '17',
    issue: '19',
    articleNumber: '4960',
    doi: '10.3390/en17194960',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'lee2023influence',
    type: 'journal',
    title:
      'Influence of jet parameters of fluidic oscillator-type fuel injector on the mixing performance in a supersonic flow field',
    authors: ['Sangyoon Lee', 'Tae-Seong Roh', 'Hyoung Jin Lee'],
    venue: 'Aerospace Science and Technology',
    year: 2023,
    volume: '134',
    articleNumber: '108154',
    doi: '10.1016/j.ast.2023.108154',
    areas: ['injection-combustion'],
  },
  {
    id: 'lee2021wavefront',
    type: 'journal',
    title:
      'Wavefront distortion due to the shock wave and boundary layer in the supersonic flow over a compression ramp',
    authors: ['Sangyoon Lee', 'Bok Jik Lee', 'In-Seuck Jeung'],
    venue: 'Aerospace Science and Technology',
    year: 2021,
    volume: '110',
    articleNumber: '106489',
    doi: '10.1016/j.ast.2021.106489',
    areas: ['aero-optics'],
  },
  {
    id: 'lee2021dynamics',
    type: 'journal',
    title:
      'Dynamics and stability of premixed hydrogen-air flames in square microchannels with wall temperature gradients',
    authors: ['Sangyoon Lee', 'Bok Jik Lee'],
    venue: 'Proceedings of the Combustion Institute',
    year: 2021,
    volume: '38',
    issue: '2',
    pages: '1933–1943',
    doi: '10.1016/j.proci.2020.06.014',
    areas: ['injection-combustion'],
  },
  {
    id: 'han2020numerical',
    type: 'journal',
    title: 'Numerical Analysis of Thermochemical Nonequilibrium Flows in a Model Scramjet Engine',
    authors: ['Seoeum Han', 'Sangyoon Lee', 'Bok Jik Lee'],
    venue: 'Energies',
    year: 2020,
    volume: '13',
    issue: '3',
    articleNumber: '606',
    doi: '10.3390/en13030606',
  },
  {
    id: 'lee2018density',
    type: 'journal',
    title: 'Density Acquisition and Aero-optics Measurement from BOS Images for a Hot Jet',
    authors: ['Sangyoon Lee', 'Sei Hwan Kim', 'Hyoung Jin Lee', 'In-Seuck Jeung'],
    venue: 'International Journal of Aeronautical and Space Sciences',
    year: 2018,
    volume: '19',
    issue: '3',
    pages: '563–574',
    doi: '10.1007/s42405-018-0073-8',
    areas: ['aero-optics'],
  },
  {
    id: 'muruganandan2017development',
    type: 'journal',
    title: 'Development of the Arcsecond Pico Star Tracker (APST)',
    authors: [
      'Vishnu Anand Muruganandan',
      'Ji Hyun Park',
      'Sangyoon Lee',
      'In-Seuck Jeung',
      'Sangkyun Kim',
      'Gwanghyeok Ju',
    ],
    venue: 'Transactions of the Japan Society for Aeronautical and Space Sciences',
    year: 2017,
    volume: '60',
    issue: '6',
    pages: '355–365',
    doi: '10.2322/tjsass.60.355',
  },

  // ---- Korean journals ----------------------------------------------------
  {
    id: 'baek2026study',
    type: 'journal',
    language: 'ko',
    title:
      'A Study on the Derivation of Performance Maps for Micro Gas Turbine Engine Components Based on Experimental Data',
    originalTitle: { text: '실험 데이터 기반 마이크로 가스터빈 엔진 구성품의 성능맵 도출 연구', lang: 'ko' },
    authors: ['Jaehyun Baek', 'Seungheon Lee', 'Sangyoon Lee', 'Hyoung Jin Lee'],
    venue: 'Journal of the Korean Society of Propulsion Engineers',
    year: 2026,
    volume: '30',
    issue: '4',
    pages: '32–41',
    doi: '10.6108/KSPE.2026.30.4.032',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'hwang2026measurement',
    type: 'journal',
    language: 'ko',
    title: 'Measurement of Surface Heat Flux on a Blunt Body in Hypersonic High-Enthalpy Flows',
    originalTitle: { text: '극초음속 고엔탈피 유동에서 반구형 무딘체의 표면 열유속 계측', lang: 'ko' },
    authors: ['Min-Su Hwang', 'Hyoung-Jin Lee', 'Sangyoon Lee'],
    venue: 'Journal of the Korean Society for Aeronautical & Space Sciences',
    year: 2026,
    volume: '54',
    issue: '7',
    pages: '701–709',
    doi: '10.5139/JKSAS.2026.54.7.701',
  },
  {
    id: 'cho2026experimental',
    type: 'journal',
    language: 'ko',
    title:
      'Experimental Investigation of Operating Characteristics of a Micro Gas Turbine Turbogenerator Hybrid Electric Propulsion System',
    originalTitle: {
      text: '마이크로 가스터빈 터보제너레이터 기반 하이브리드 전기추진 시스템의 운용 특성 평가 연구',
      lang: 'ko',
    },
    authors: ['Jaewhoon Cho', 'Dong-Eun Lee', 'Sangyoon Lee', 'Dong-Ho Rhee', 'Young-Seok Kang'],
    venue: 'The KSFM Journal of Fluid Machinery',
    year: 2026,
    volume: '29',
    issue: '3',
    pages: '54–65',
    doi: '10.5293/kfma.2026.29.3.054',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'kim2026power',
    type: 'journal',
    language: 'ko',
    title:
      'Power Turbine Design for a Unmanned Aerial Vehicles Turbogenerator Based on a 300-N-Class Micro Turbojet Core',
    originalTitle: {
      text: '무인기용 터보제너레이터를 위한 300 N급 마이크로 터보제트 코어 기반 동력터빈 설계',
      lang: 'ko',
    },
    authors: ['Sunwoo Kim', 'Jeonghyeok Lee', 'Gapwoo Moon', 'Seungheon Lee', 'Sangyoon Lee'],
    venue: 'The KSFM Journal of Fluid Machinery',
    year: 2026,
    volume: '29',
    issue: '3',
    pages: '35–43',
    doi: '10.5293/kfma.2026.29.3.035',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'jun2024numerical',
    type: 'journal',
    language: 'ko',
    title: 'A Numerical Approach to the Evaluation of Cooling Performance of Heat Exchanger Installed Inside Nacelle',
    originalTitle: { text: 'Nacelle 내부에 장착된 열교환기 냉각성능의 수치적 평가방법', lang: 'ko' },
    authors: ['Sangook Jun', 'Sangyoon Lee', 'Jae-Sung Huh', 'Poo-Min Park', 'Byeung-Jun Lim'],
    venue: 'The KSFM Journal of Fluid Machinery',
    year: 2024,
    volume: '27',
    issue: '6',
    pages: '79–86',
    doi: '10.5293/kfma.2024.27.6.079',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'kspe2024turboshaft',
    type: 'journal',
    language: 'ko',
    title: 'Research on Performance Test of Reverse Flow Annular Combustor of 1,000 shp-Class Turboshaft Engine',
    originalTitle: { text: '1,000마력급 터보샤프트엔진 역류형 환형 연소기 성능시험평가 연구', lang: 'ko' },
    authors: ['Jaiho Kim', 'Sangyoon Lee', 'Hyungmo Kim', 'Dong-ho Rhee', 'Donghyun Hwang', 'Jupyoung Kim', 'Chulju Ahn', 'Jung-bo Seo'],
    venue: 'Journal of the Korean Society of Propulsion Engineers',
    year: 2024,
    volume: '28',
    issue: '1',
    pages: '46–55',
    doi: '10.6108/KSPE.2024.28.1.046',
    areas: ['electrified-propulsion'],
  },
  {
    id: 'kspe2023swirl',
    type: 'journal',
    language: 'ko',
    title: 'Gas Turbine Combustor Performance Characteristics with Swirl Stabilized Flame and Coanda Stabilized Flame',
    originalTitle: {
      text: '스월 안정화/코안다 안정화 화염을 적용한 가스터빈 연소기 연소성능 특성에 대한 시험연구',
      lang: 'ko',
    },
    authors: ['Hyungmo Kim', 'Jaiho Kim', 'Sangyoon Lee', 'Dong-ho Rhee', 'Jupyoung Kim', 'Shaun Kim', 'Chulju Ahn', 'Heeho Park', 'Bokwon Lee'],
    venue: 'Journal of the Korean Society of Propulsion Engineers',
    year: 2023,
    volume: '27',
    issue: '2',
    pages: '10–19',
    doi: '10.6108/KSPE.2023.27.2.010',
    areas: ['electrified-propulsion'],
  },
];

// ---- Helpers ---------------------------------------------------------------

/** Newest first; ties keep the order of the data file. */
export function sortByYear(list: Publication[]): Publication[] {
  return list
    .map((p, i) => ({ p, i }))
    .sort((a, b) => b.p.year - a.p.year || a.i - b.i)
    .map(({ p }) => p);
}

export function groupByYear(list: Publication[]): [number, Publication[]][] {
  const groups = new Map<number, Publication[]>();
  for (const p of sortByYear(list)) {
    const g = groups.get(p.year) ?? [];
    g.push(p);
    groups.set(p.year, g);
  }
  return [...groups.entries()];
}

/** Publication sections shown on /publications/; empty sections are hidden. */
export const publicationSections: { id: string; title: L; items: Publication[] }[] = [
  {
    id: 'international-journals',
    title: { en: 'International Journal Articles', ko: '국제 학술지 논문' },
    items: publications.filter((p) => p.type === 'journal' && !p.language),
  },
  {
    id: 'korean-journals',
    title: { en: 'Korean Journal Articles', ko: '국내 학술지 논문' },
    items: publications.filter((p) => p.type === 'journal' && p.language === 'ko'),
  },
  {
    id: 'conference-papers',
    title: { en: 'Conference Papers', ko: '학술대회 논문' },
    items: publications.filter((p) => p.type === 'conference'),
  },
  {
    id: 'patents',
    title: { en: 'Patents', ko: '특허' },
    items: publications.filter((p) => p.type === 'patent'),
  },
];
