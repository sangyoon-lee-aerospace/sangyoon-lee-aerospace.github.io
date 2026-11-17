/**
 * Research areas and topics (English and Korean).
 *
 * Four areas, each split into topics; only topics with an image are listed.
 * The Home page shows one card per area (`short` + `cover`); the Research page
 * shows every topic with its images and their source credits.
 */
import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

import epTiltingPropeller from '../assets/research/ep-tilting-propeller.jpg';
import epTurbogenerator from '../assets/research/ep-turbogenerator.png';
import epTurbogeneratorCover from '../assets/research/ep-turbogenerator-cover.png';
import epHeatExchanger from '../assets/research/ep-heat-exchanger.png';
import hrShadowgraph from '../assets/research/hr-h2-shadowgraph.png';
import hrIgnition from '../assets/research/hr-h2-ignition.png';
import hrMicrochannel from '../assets/research/hr-microchannel-dns.png';
import hrFluidic3d from '../assets/research/hr-fluidic-oscillator-3d.png';
import hrFuelDistribution from '../assets/research/hr-fuel-distribution.png';
import aoRamp from '../assets/research/ao-ramp-visualization.png';
import aoWavefront from '../assets/research/ao-wavefront.png';
import aoWavefrontCover from '../assets/research/ao-wavefront-cover.png';
import aoBos from '../assets/research/ao-bos-density.png';
import hsWedge from '../assets/research/hs-wedge-shadowgraph.png';
import hsWedgeCover from '../assets/research/hs-wedge-cover.png';

export interface ResearchImage {
  src: ImageMetadata;
  alt: L;
  caption: L;
  /** Publication id in `publications.ts` the figure is taken from, if any. */
  source?: string;
  /** Licence note required by the source, e.g. 'CC BY 4.0'. */
  licence?: string;
  /** Source shown when the figure is not from a listed publication, e.g. the dissertation. */
  sourceNote?: L;
}

export interface ResearchTopic {
  /** Stable id, used as the URL fragment on the Research page. */
  id: string;
  title: L;
  summary: L;
  images: ResearchImage[];
}

export interface ResearchArea {
  /** Stable id, used as the URL fragment on the Research page and in publication `areas`. */
  id: string;
  title: L;
  /** One sentence for the Home page card. */
  short: L;
  summary: L;
  /** Image on the Home page card (cropped to 3:2); a blank panel is shown until set. */
  cover?: ResearchImage;
  /** CSS object-position for the card crop; default 'center'. */
  coverPosition?: string;
  topics: ResearchTopic[];
}

// ---- Images ----------------------------------------------------------------

const tiltingPropeller: ResearchImage = {
  src: epTiltingPropeller,
  alt: { en: 'Tilting propeller test rig inside a wind tunnel test section', ko: '풍동 시험부 안의 틸팅 프로펠러 시험 장치' },
  caption: { en: 'Tilting propeller test in a wind tunnel', ko: '풍동 내 틸팅 프로펠러 시험' },
};

const turbogenerator: ResearchImage = {
  src: epTurbogenerator,
  alt: { en: 'Concept design of a turbogenerator: core engine, power turbine, gearbox and generator', ko: '터보제너레이터 개념 설계: 코어 엔진, 동력터빈, 감속기, 발전기' },
  caption: { en: 'Concept design of a turbogenerator', ko: '터보제너레이터 개념 설계' },
  source: 'kim2026power',
};

const heatExchanger: ResearchImage = {
  src: epHeatExchanger,
  alt: { en: 'Heat exchanger, inverter and fan arranged inside the nacelle of an eVTOL hybrid-electric propulsion unit', ko: 'eVTOL 하이브리드 전기추진 나셀 내부의 열교환기·인버터·팬 배치' },
  caption: { en: 'Heat exchanger installed in a hybrid-electric propulsion nacelle', ko: '하이브리드 전기추진 나셀의 열교환기 배치' },
  source: 'lee2024inclined',
  licence: 'CC BY 4.0',
};

const shadowgraph: ResearchImage = {
  src: hrShadowgraph,
  alt: { en: 'Shadowgraph sequence of the shock wave and hydrogen jet during a high-pressure hydrogen release', ko: '고압 수소 방출 시 충격파와 수소 제트의 섀도그래프 연속 사진' },
  caption: { en: 'Shadowgraph of a high-pressure hydrogen release', ko: '고압 수소 방출 섀도그래프' },
  source: 'lee2026effect',
};

const ignition: ResearchImage = {
  src: hrIgnition,
  alt: { en: 'Direct images of hydrogen self-ignition and flame development', ko: '수소 자발화와 화염 발달 직접 촬영 사진' },
  caption: { en: 'Hydrogen self-ignition and flame development', ko: '수소 자발화와 화염 발달' },
  source: 'lee2026effect',
};

const fluidic3d: ResearchImage = {
  src: hrFluidic3d,
  alt: { en: 'Hydrogen mass fraction downstream of a fluidic-oscillator injector in supersonic crossflow', ko: '초음속 유동 속 유체진동기 분사기 하류의 수소 질량분율' },
  caption: { en: 'Fluidic-oscillator hydrogen injection in supersonic flow', ko: '초음속 유동 속 유체진동기 수소 분사' },
  source: 'lee2023influence',
};

const fuelDistribution: ResearchImage = {
  src: hrFuelDistribution,
  alt: { en: 'Fuel mass fraction over one oscillation cycle at x/D = 8', ko: 'x/D = 8에서 한 주기 동안의 연료 질량분율' },
  caption: { en: 'Fuel distribution over one oscillation cycle', ko: '한 주기 동안의 연료 분포' },
  source: 'lee2023influence',
};

const microchannel: ResearchImage = {
  src: hrMicrochannel,
  alt: { en: 'Heat release rate of a premixed hydrogen–air flame in a square microchannel', ko: '사각 미세채널 내 수소-공기 예혼합 화염의 열방출률' },
  caption: { en: 'Hydrogen–air flame dynamics (simulation)', ko: '수소-공기 화염 거동 (수치해석)' },
  source: 'lee2021dynamics',
  licence: 'CC BY-NC-ND 4.0',
};

const ramp: ResearchImage = {
  src: aoRamp,
  alt: { en: 'Flow visualization of shock waves over a compression ramp in a supersonic wind tunnel', ko: '초음속 풍동에서 압축 램프 주위 충격파 가시화' },
  caption: { en: 'Supersonic flow over a compression ramp (wind tunnel)', ko: '초음속 압축 램프 유동 가시화 (풍동 실험)' },
  source: 'lee2021wavefront',
};

const wavefront: ResearchImage = {
  src: aoWavefront,
  alt: { en: 'Transient optical path difference maps measured with a Shack–Hartmann sensor during the wind tunnel run', ko: '풍동 운전 중 Shack–Hartmann 센서로 측정한 시간별 광경로차 맵' },
  caption: { en: 'Wavefront distortion measured during the wind tunnel run', ko: '풍동 운전 중 측정한 파면 왜곡' },
  source: 'lee2021wavefront',
};

const DISSERTATION: L = {
  en: 'Ph.D. dissertation, Seoul National University, 2020',
  ko: '박사학위논문, 서울대학교, 2020',
};

const wedge: ResearchImage = {
  src: hsWedge,
  alt: { en: 'Shadowgraph sequence from 0 to 244.6 microseconds of an oblique shock wave forming over a 10-degree wedge in Mach 7 flow', ko: '마하 7 유동에서 10° 쐐기 주위 경사 충격파가 형성되는 0–244.6 µs 섀도그래프 연속 사진' },
  caption: { en: 'Transient oblique shock wave over a wedge in a shock tunnel (shadowgraph)', ko: '충격파 터널에서 쐐기 주위 경사 충격파의 발달 (섀도그래프)' },
  sourceNote: DISSERTATION,
};

const wedgeCover: ResearchImage = { ...wedge, src: hsWedgeCover };

const bos: ResearchImage = {
  src: aoBos,
  alt: { en: 'Density fields of a hot jet obtained from BOS images', ko: 'BOS 영상으로 얻은 고온 제트의 밀도장' },
  caption: { en: 'Density field of a hot jet from BOS', ko: 'BOS로 얻은 고온 제트 밀도장' },
  source: 'lee2018density',
};

// ---- Areas -----------------------------------------------------------------

export const researchAreas: ResearchArea[] = [
  {
    id: 'electrified-propulsion',
    title: { en: 'Electrified Aircraft Propulsion', ko: '전기항공추진' },
    short: {
      en: 'Turbogenerators, electric engines and thermal management for hybrid-electric aircraft.',
      ko: '하이브리드 전기추진 항공기의 터보제너레이터, 전기엔진, 열관리를 연구합니다.',
    },
    summary: {
      en: 'Turbogenerators and hybrid-electric propulsion systems for electrified aircraft, from power turbine design to electric engine testing and thermal management.',
      ko: '전동화 항공기를 위한 터보제너레이터와 하이브리드 전기추진 시스템을 연구합니다. 동력터빈 설계부터 전기엔진 시험과 열관리까지 다룹니다.',
    },
    cover: { ...turbogenerator, src: epTurbogeneratorCover },
    topics: [
      {
        id: 'turbogenerators',
        title: { en: 'Turbogenerators and Power Turbines', ko: '터보제너레이터·동력터빈' },
        summary: {
          en: 'We design power turbines for unmanned-aircraft turbogenerators built on a micro turbojet core, and evaluate the operating characteristics of a micro gas turbine turbogenerator hybrid-electric propulsion system by experiment.',
          ko: '마이크로 터보제트 코어를 기반으로 무인기용 터보제너레이터의 동력터빈을 설계합니다. 마이크로 가스터빈 터보제너레이터 기반 하이브리드 전기추진 시스템의 운용 특성을 시험으로 평가합니다.',
        },
        images: [turbogenerator],
      },
      {
        id: 'electric-engines',
        title: { en: 'Electric Engine Testing', ko: '전기엔진 시험' },
        summary: {
          en: 'We study the characteristics of electric engines, the motor and propeller units of electrified aircraft, and evaluate their thrust and performance by experiment over a range of operating conditions.',
          ko: '전기항공추진의 전기엔진(모터·프로펠러) 특성을 연구합니다. 다양한 운용 조건에서 시험으로 추력과 성능을 평가합니다.',
        },
        images: [tiltingPropeller],
      },
      {
        id: 'thermal-management',
        title: { en: 'Thermal Management', ko: '열관리' },
        summary: {
          en: 'We study thermal management systems for electrified aircraft propulsion. We design thermal management systems, including heat exchangers for eVTOL aircraft, and evaluate their performance through testing and analysis.',
          ko: '전기항공추진 시스템의 열관리 시스템을 연구합니다. eVTOL용 열교환기를 비롯한 열관리 시스템을 설계하고, 시험과 해석으로 성능을 평가합니다.',
        },
        images: [heatExchanger],
      },
    ],
  },
  {
    id: 'hypersonic',
    title: { en: 'Hypersonic Flows', ko: '극초음속 유동' },
    short: {
      en: 'Hypersonic flow in a shock tunnel and its shock structures.',
      ko: '충격파 터널의 극초음속 유동과 충격파 구조를 연구합니다.',
    },
    summary: {
      en: 'Structures and physics of compressible flow in hypersonic conditions. We generate hypersonic flow in a shock tunnel and observe shock structures with optical methods such as shadowgraph.',
      ko: '극초음속 환경에서 발생하는 압축성 유동의 구조와 물리 현상을 연구합니다. 충격파 터널로 극초음속 유동을 만들고, 섀도그래프 등 광학 기법으로 충격파 구조를 관찰합니다.',
    },
    cover: wedgeCover,
    topics: [
      {
        id: 'shock-tunnel',
        title: { en: 'Shock Tunnel Testing', ko: '충격파 터널 시험' },
        summary: {
          en: 'We generate hypersonic flow in a shock tunnel and use it for flow experiments. Optical methods such as shadowgraph are used to visualise shock waves and analyse hypersonic flow.',
          ko: '충격파 터널을 이용하여 극초음속 유동을 생성하고, 이를 활용한 유동 실험을 수행합니다. 섀도그래프 등 광학 기법으로 충격파를 가시화하고 극초음속 유동을 분석합니다.',
        },
        images: [wedge],
      },
    ],
  },
  {
    id: 'injection-combustion',
    title: { en: 'Fuel Injection & Combustion', ko: '연료 분사·연소' },
    short: {
      en: 'Fuel injection and mixing, ignition, and flames.',
      ko: '연료 분사·혼합, 점화, 화염을 연구합니다.',
    },
    summary: {
      en: 'From fuel injection and mixing to ignition and flames: fuel mixing in supersonic flow, the ignition and combustion characteristics of hydrogen, and reacting flow analysis.',
      ko: '연료의 분사·혼합부터 점화와 화염까지 연구합니다. 초음속 유동의 연료 혼합, 수소의 점화·연소 특성, 반응 유동 해석을 다룹니다.',
    },
    cover: fluidic3d,
    topics: [
      {
        id: 'supersonic-mixing',
        title: { en: 'Fuel Injection and Mixing in Supersonic Flow', ko: '초음속 연료 분사·혼합' },
        summary: {
          en: 'We study fuel injection and mixing characteristics in supersonic flow, such as those in scramjet combustors.',
          ko: '스크램제트 연소기와 같은 초음속 유동에서 연료의 분사·혼합 특성을 연구합니다.',
        },
        images: [fluidic3d, fuelDistribution],
      },
      {
        id: 'hydrogen-combustion',
        title: { en: 'Hydrogen Combustion', ko: '수소 연소 특성' },
        summary: {
          en: 'We study the combustion characteristics of hydrogen, a clean fuel for future aircraft. Our experiments examine ignition, including the self-ignition of hydrogen, and the development of hydrogen flames.',
          ko: '친환경 항공 연료인 수소의 연소 특성을 연구합니다. 수소의 자발화를 비롯한 점화 현상과 화염 발달 과정을 실험으로 분석합니다.',
        },
        images: [shadowgraph, ignition],
      },
      {
        id: 'flame-dynamics',
        title: { en: 'Flame Dynamics', ko: '화염 거동 특성' },
        summary: {
          en: 'We study the dynamics and stability of flames through numerical simulation of reacting flows.',
          ko: '반응 유동 수치해석으로 화염의 거동과 안정성 특성을 연구합니다.',
        },
        images: [microchannel],
      },
    ],
  },
  {
    id: 'aero-optics',
    title: { en: 'Aero-Optics & Optical Flow Diagnostics', ko: '공기광학·유동 계측' },
    short: {
      en: 'Optical distortion by high-speed flow and quantitative optical flow measurement.',
      ko: '고속 유동이 일으키는 광학 왜곡과 광학 기반 정량 유동 계측을 연구합니다.',
    },
    summary: {
      en: 'Optical measurement of compressible flows and the optical distortion they cause: wavefront measurement, quantitative flow measurement with optical methods such as BOS, and analysis of aero-optical effects.',
      ko: '압축성 유동의 광학 계측과 유동이 일으키는 광학 왜곡을 연구합니다. 파면 측정, BOS 등 광학 기법을 이용한 정량적 유동 계측, 공기광학 효과 해석을 다룹니다.',
    },
    cover: { ...wavefront, src: aoWavefrontCover },
    topics: [
      {
        id: 'wavefront-distortion',
        title: { en: 'Wavefront Distortion in High-Speed Flow', ko: '고속 유동의 파면 왜곡' },
        summary: {
          en: 'We study the optical distortion caused by high-speed flow structures such as shock waves and boundary layers, through experiment and analysis.',
          ko: '충격파와 경계층 등 고속 유동에 의한 광학적 왜곡을 시험과 해석으로 연구합니다.',
        },
        images: [ramp, wavefront],
      },
      {
        id: 'bos',
        title: { en: 'Quantitative Flow Measurement with BOS', ko: 'BOS 정량 유동 계측' },
        summary: {
          en: 'We use background-oriented schlieren (BOS) for quantitative flow measurement, such as obtaining density fields, and apply the results to evaluate aero-optical effects.',
          ko: '배경 기반 슐리렌(BOS)을 이용하여 밀도장 등 유동을 정량적으로 계측하고, 이를 공기광학 효과 평가에 활용합니다.',
        },
        images: [bos],
      },
    ],
  },
];
