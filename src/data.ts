export const hero = "안될 이유보다, 될 방법을 먼저 찾는 개발자 박범민입니다.<br/>효율적인 구조와 소통으로 문제를 함께 해결합니다."

export const about = `안녕하세요, 될 방법을 먼저 고민하는 웹 개발자 박범민입니다.<br/><br/>

안드로이드 앱 개발로 커리어를 시작해 사용자 흐름과 UI/UX에 대한 고민을 이어오다,<br/>
더 넓은 환경과 구조적 사고가 필요한 웹 프론트엔드로 전향하게 되었습니다.<br/><br/>

빠르게 변화하는 요구사항 속에서도 ‘될 방법’을 먼저 고민하며,<br/>
더 효율적인 구조와 흐름을 설계하는 개발자로 성장하고 있습니다.<br/><br/>

프론트엔드 개발을 주력으로 하고 있지만,<br/>
서비스 운영 과정에서 백엔드 영역까지 자연스럽게 확장하며<br/>
하나의 기능이나 모듈에 머물지 않고 서비스 전반을 바라보는 시야를 갖게 되었습니다.<br/><br/>

저는 지금 주어진 조건 안에서 최선의 해결책을 찾고,<br/>
구조적 개선과 코드 효율화를 통해 더 나은 방향으로 발전시키는 것에 보람을 느낍니다.<br/><br/>

데이터 흐름, 상태 관리, 성능 최적화, 리팩토링에 관심이 많으며,<br/>
장기적으로는 팀 전체의 생산성을 높이는 개발 문화와 DX(Developer Experience)에도 기여하고자 합니다.<br/><br/>

<b>“정해진 틀을 넘어, 필요한 역할을 주도적으로 해내는 개발자”</b><br/>
그것이 제가 지향하는 개발자의 모습입니다.`


import jinhakLogo from './assets/jinhak.svg';
import catchLogo from './assets/catch.svg';
import sbsiLogo from './assets/sbsi.svg';
export const workExperience = [
  {
    logo: jinhakLogo,
    companyUrl: 'https://www.jinhaksa.co.kr/',
    company: '조인앤조인',
    department: '스타트업',
    level: '공동창업자',
    startDate: '2017.11.02',
    endDate: '2019.3.28',
    description: ['신규 사업 탐색 및 아이디에이션'],
    skills: ['Android', 'Java', 'Angular', 'JavaScript', 'Firebase'],
  },
  {
    logo: jinhakLogo,
    companyUrl: 'https://www.jinhaksa.co.kr/',
    company: '진학사',
    department: '신사업본부',
    level: 'PD(Program Developer)',
    startDate: '2019.12.02',
    endDate: '2020.9.28',
    description: ['신규 사업 탐색 및 아이디에이션'],
  },
  {
    logo: catchLogo,
    companyUrl: 'https://catch.co.kr',
    company: '진학사',
    department: '캐치본부 개발팀',
    level: 'PD(Program Developer)',
    startDate: '2020.9.29',
    endDate: '2023.10.11',
    description: ['캐치 웹 서비스 유지보수 및 신규 기능 개발'],
    skills: ['Vue.js', 'Nuxt.js', 'Node.js', 'MSSQL'],
  },
  {
    logo: sbsiLogo,
    companyUrl: 'https://sbsi.co.kr',
    company: 'SBSi',
    department: '플랫폼개발팀',
    level: '대리',
    startDate: '2023.10.10',
    description: ['연합뉴스 플랫폼리포지션 사업 참여'],
    skills: ['Vue.js', 'React', 'Next.js', 'Vanilla.js', 'Node.js', 'Spring Boot', 'Oracle', 'AWS'],
    project: [{
      title: '연합뉴스 홈페이지 개편',
      description: `

      서울시스템에서 만든 CPS라는 프로그램에서 개발진행 
      기존 jQuery로 개발된 홈페이지를 Vanilla.js로 리뉴얼

      * 주요 성과
      - 개편 후 PV 11배 성장
      대규모 플랫폼 리포지션 사업에 PM으로 참여하여, 통합회원, 홈페이지, 관리자, 모바일 프로젝트를 기획/운영
      - 연합뉴스 통합회원 서비스 개발
      개편 전 (2017.03.15 ~ 2025.02.21, 약 8년간)
개인회원 총판매금액 합계: 498,216,000원

개편 후 (2025.02.22 ~ 2025.09.13, 약 7개월간)
개인회원 총판매금액 합계: 86,339,000원
      월평균 기준으로는 개편 이후 매출이 약 2.3배 성장

      개편 후 가입자 수 8배 증가 (기존 대비)
개인회원 전체 가입자 40300 2025.02.22 이후 가입 35578 2025.02.22 이전 가입 4722 이전 가입자 중 전환 가입자 158
기존 회원 전환율은 3.3%로 저조, 하지만 신규 유입 효과가 이를 상쇄하고도 남음
      - 연합뉴스 홈페이지 리뉴얼 프로젝트 참여
      개편 후 PV는 11배 성장,
      - 연합뉴스 관리자 페이지 개발
      
      - 헬로아카이브 모바일 서비스 개발`,
      date: '2023.10.10 ~ ',
      skills: ['Vanilla.js', 'AWS'],
      link: 'https://sbsi.co.kr',
      github: 'https://github.com/ParkBeomMin/sbsi',
    },{
      title: '연합뉴스 통합회원 서비스 개발',
      description: `
      기존 연합뉴스 회원과 헬로아카이브 회원을 통합하여 하나의 회원 시스템으로 구축
      OAuth 2.0 소셜 로그인 기능 개발
      JWT 토큰 기반 인증 및 권한 관리 기능 개발
      연합뉴스와 헬로아카이브 SSO 연동 기능 개발

      * 주요 성과
      - 회원 가입자 수 8배 증가 (기존 대비)
      개인회원 전체 가입자 40300 2025.02.22 이후 가입 35578 2025.02.22 이전 가입 4722 이전 가입자 중 전환 가입자 158
      기존 회원 전환율은 3.3%로 저조, 하지만 신규 유입 효과가 이를 상쇄하고도 남음
      - 월평균 매출 2.3배 성장 (헬로아카이브 매출 기준)
      `,
      date: '2023.11.03 ~ 2025.02.22',
      skills: ['Vue.js', 'JavaScript', 'Pinia', 'Spring Boot', 'Oracle', 'AWS', 'Redis'],
      link: 'https://join.yna.co.kr',
    },{
      title: '연합뉴스 관리자 페이지 기능 개발 및 유지보수',
      description: `
      연합뉴스 관리자 페이지 개발`,
      date: '2024.03.13 ~ ',
      skills: ['React', 'TypeScript', 'Redux-toolkit', 'Redux Saga', 'Ant Design', 'Spring Boot', 'Oracle'],
    },{
      title: '헬로아카이브 모바일 웹서비스 개발',
      description: `
      
      `,
      date: '2025.04.03 ~ ',
      skills: ['React', 'Next.js', 'TypeScript', 'Redux-toolkit', 'Spring Boot', 'Oracle'],
      link: 'https://m.helloarchive.co.kr',
    }],
  },
]

export const projects = [
  {
    title: 'What is my team?',
    skills: ['Vue.js', 'teachable machine'],
    description: '인공지능 모델을 활용한  팀 추천 서비스',
    link: 'https://what-is-my-team.web.app/premier24-25',
    github: 'https://github.com/ParkBeomMin/WhatIsMyTeam',
  },
  {
    title: 'About me',
    skills: ['Nuxt.js', 'Firebase Firestore'],
    description: '친구들이 생각하는 나는 어떤 사람일까?',
    link: 'https://aboutme2.web.app/',
    github: 'https://github.com/ParkBeomMin/AboutMe-Nuxt',
  },
  {
    title: 'Beomjeon',
    skills: ['Next.js'],
    description: '개발 지식 위키',
    link: 'https://beomjeon-docs.vercel.app/',
    github: 'https://github.com/ParkBeomMin/beomjeon/tree/main/apps/docs',
  },
]

export const skills = [
  'Vue.js',
  'Nuxt.js',
  'React',
  'Next.js',
  'Node.js',
  'AWS',
  'MSSQL',
  'Oracle',
  'Vanilla.js',
  
]