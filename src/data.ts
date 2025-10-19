export const hero = "“정해진 틀에 갇히지 않고, 필요한 역할을 스스로 찾아 해내는 개발자” 박범민입니다.<br/>효율적인 구조와 소통으로 문제를 함께 해결합니다."

export const about = `안녕하세요, “정해진 틀에 갇히지 않고, 필요한 역할을 스스로 찾아 해내는 개발자” 박범민입니다.

빠르게 변화하는 요구사항 속에서  주어진 조건 안에서 최선의 해결책을 찾고,
더 효율적인 구조와 흐름을 설계하는 개발자로 성장하고 있습니다.

프론트엔드 뿐만 아니라 서비스 운영과 백엔드 영역까지 경험하며
하나의 기능이나 모듈에 머물지 않고 서비스 전반을 바라보는 시야를 갖게 되었습니다.

데이터 흐름, 상태 관리, 성능 최적화, 리팩토링에 관심이 많으며,
장기적으로는 팀 전체의 생산성을 높이는 개발 문화와 DX(Developer Experience)에도 기여하고자 합니다.`


import joinandjoinLogo from './assets/joinandjoin.webp';
import catchLogo from './assets/catch.svg';
import sbsiLogo from './assets/sbsi.png';
export const workExperience = [
  {
    logo: joinandjoinLogo,
    companyUrl: 'https://www.joinandjoin.com/',
    company: '조인앤조인',
    department: '스타트업',
    level: '공동창업자',
    startDate: '2017.11.02',
    endDate: '2019.03.28',
    description: ['신규 사업 탐색 및 아이디에이션'],
    skills: ['Android', 'Java', 'Angular', 'JavaScript', 'Firebase'],
    project: [
      {
        title: '사내 재고관리 어플리케이션',
        role: 'APP',
        description: `
        Firestore 기반 실시간 재고 관리 시스템 구축으로 배송 지연·중지율 감소에 기여
        MVVM 패턴 적용 및 빠른 피드백 반영으로 사용성 개선 주기 단축
        `,
        date: '2018.07 ~ 2018.08',
        skills: ['Android', 'JAVA', 'Firebase'],
      },
      {
        title: '브랜드 모아 웹사이트 구축',
        role: 'FE',
        description: `
        제품 출시 전 브랜드 홍보용 랜딩 페이지 제작
        TypeScript 도입으로 런타임 오류 예방
        CSS 애니메이션 적용으로 사용자 체류시간 향상
        `,
        date: '2018.02 ~ 2018.03',
        skills: ['Angular', 'TypeScript', 'Firebase'],
        link: 'https://m-o-a-5e4e9.firebaseapp.com/',
      },
      {
      title: '자사 소개 웹사이트 구축',
      role: 'FE',
      description: `
      Firebase를 활용해 배포 자동화 및 초기 출시 리드타임 단축
      이미지 최적화 및 로딩 성능 개선 경험을 통해 프론트엔드 성능 개선 역량 확보
      `,
      date: '2018.01 ~ 2018.03',
      skills: ['Angular', 'TypeScript', 'Firebase'],
      link: 'https://joinandjoin-69f3b.firebaseapp.com/',
    },
  ]
  },
  {
    logo: catchLogo,
    companyUrl: 'https://www.jinhaksa.co.kr/',
    company: '진학어플라이',
    department: '신사업본부/캐치본부 개발팀',
    level: 'PD(Program Developer)',
    startDate: '2019.12.02',
    endDate: '2023.10.11',
    description: ['신규 사업 탐색 및 아이디에이션', '캐치 웹 서비스 유지보수 및 신규 기능 개발'],
    skills: ['Vue.js', 'Nuxt.js', 'Node.js', 'MSSQL'],
    project: [
      {
        title: '캐치 사이트 유지보수 및 추가 기능 개발',
        role: 'FE, BE',
        description: `
        사용자 니즈에 맞춘 UX 개선 및 신규 비즈니스 로직 구현
        MSSQL 쿼리 튜닝으로 페이지 응답속도 개선
        Swagger 도입으로 API 명세 자동화 및 협업 효율 개선
        외부 API 연동을 통해 서비스 확장성 강화 ( openai gpt api, 건강보험공단 api, greeting api, naver license api )
        `,
        date: '2020.09 ~ 2023.10',
        skills: ['Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'Node.js', 'MSSQL', 'PostgreSQL'],
        link: 'https://catch.co.kr',
      },
      {
        title: '테스트 프로세스 개선',
        role: 'FE, BE',
        description: `
        Swagger를 활용하여 비개발자용 테스트 api 생성 및 공유
        테스트 플러그인을 구현하여 테스트 사용성 개선
        TestCafe를 활용해 테스트 자동화 코드 생성 프로세스 구축
        `,
        date: '2020.09 ~ 2023.10',
        skills: ['Vue.js', 'Nuxt.js', 'JavaScript'],
      },
      {
        title: '오류 모니터링 개선',
        role: '-',
        description: `
        서버 에러 발생 시 Teams 알림 자동화로 대응 속도 단축
        빠른 에러 파악과 대응으로 에러 발생률 감소
        `,
        date: '2020.09 ~ 2023.10',
        skills: ['Vue.js', 'Nuxt.js', 'JavaScript']
      },
      {
        title: '배포 프로세스 개선',
        role: '-',
        description: `
        Husky 도입으로 버전 충돌 제거
        병렬 빌드 적용으로 배포 시간 50% 단축
        `,
        date: '2020.09 ~ 2023.10',
        skills: ['Linux', 'Shell Script'],
      },
    ]
  },
  // {
  //   logo: catchLogo,
  //   companyUrl: 'https://catch.co.kr',
  //   company: '진학사',
  //   department: '캐치본부 개발팀',
  //   level: 'PD(Program Developer)',
  //   startDate: '2020.9.29',
  //   endDate: '2023.10.11',
  //   description: ['캐치 웹 서비스 유지보수 및 신규 기능 개발'],
  // },
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
      role: 'FE',
      description: `
      사내 CMS 도구인 CPS(Contents Publishing System)의 문법을 빠르게 습득하여 단기간 내 개발 투입
      기존 jQuery 기반 홈페이지를 Vanilla JS로 리뉴얼해 성능 및 유지보수성 향상
      Handlebars.js를 사용해 템플릿 기반 페이지 구조를 구현
      이미지 Lazy Loading 적용
      Gulp를 활용해 JS 파일 병합 및 분리, 업로드 자동화 프로세스를 구축

      - 주요 성과
      개편 후 PV 11배 성장
      `,
      date: '2023.10.10 ~ ',
      skills: ['Vanilla.js', 'AWS'],
      link: 'https://yna.co.kr',
    },{
      title: '연합뉴스 통합회원 서비스 신규 개발',
      role: 'FE, BE',
      description: `
      연합뉴스·헬로아카이브 회원을 통합한 단일 회원 시스템 구축
      OAuth 2.0 소셜 로그인 및 JWT 기반 인증 구현
      연합뉴스와 헬로아카이브 SSO 연동 기능 개발
      Pinia를 활용한 상태 일관성 확보
      AWS 환경에서 빌드·배포 파이프라인을 직접 구성(S3, EC2)

      * 주요 성과
      - 회원 가입자 수 8배 증가
      - 월평균 매출 2.3배 성장 (헬로아카이브 매출 기준)
      `,
      date: '2023.11.03 ~ 2025.02.22',
      skills: ['Vue.js', 'JavaScript', 'Pinia', 'Spring Boot', 'Oracle', 'AWS', 'Redis'],
      link: 'https://join.yna.co.kr',
    },{
      title: '연합뉴스 관리자 페이지 기능 개발 및 유지보수',
      role: 'FE, BE',
      description: `
      게시판 관리 메뉴 신규 개발(프론트)
      메뉴·권한 관리 메뉴 구조 설계 및 신규 개발(프론트, 백엔드)
      Ant Design 기반의 UI 컴포넌트를 활용해 관리자 페이지의 일관된 인터페이스를 구축
      Axios 인터셉터를 적용해 API 호출 구조 공통화
      Redux-Saga를 활용해 비동기 API 호출 로직을 구조화

      * 주요 성과
      - api 응답 일관성 확보
      - 중복 코드 감소로 유지보수성 향상`,
      date: '2024.03.13 ~ ',
      skills: ['React', 'TypeScript', 'Redux-toolkit', 'Redux Saga', 'Ant Design', 'Spring Boot', 'Oracle'],
    },{
      title: '헬로아카이브 모바일 웹서비스 신규 개발',
      role: 'FE',
      description: `
      React·Next.js 기반 모바일 웹 신규 개발 및 구조 안정화
      하이드레이션 오류 및 페이지 전환 성능 이슈 해결로 UX 개선
      공통 팝업 컴포넌트 구축

      * 주요 성과
      - 프로젝트 진행 속도 약 3배 향상
      - 페이지 전환 속도를 약 1.8배 향상
      - 중복 코드 감소로 유지보수성 향상
      
      `,
      date: '2025.04.03 ~ ',
      skills: ['React', 'Next.js', 'TypeScript', 'Redux-toolkit'],
      link: 'https://m.helloarchive.co.kr',
    }],
  },
]

import duckmuImg1 from './assets/duckmu/duckmu1.png';
import duckmuImg2 from './assets/duckmu/duckmu2.png';
import beomjeonImg1 from './assets/beomjeon/beomjeon1.png';
import beomjeonImg2 from './assets/beomjeon/beomjeon2.png';
import whatIsMyTeamImg1 from './assets/whatismyteam/whatismyteam1.png';
import whatIsMyTeamImg2 from './assets/whatismyteam/whatismyteam2.png';
import aboutMeImg1 from './assets/aboutme/aboutme1.png';
import aboutMeImg2 from './assets/aboutme/aboutme2.png';
import josikbotImg1 from './assets/josik/조식봇1.png';
import josikbotImg2 from './assets/josik/조식봇2.png';

export const projects = [
  {
    title: '덕뮤',
    skills: ['Vue.js', 'Node.js', 'Firebase'],
    date: '2025.08.05 ~ 2025.09.22',
    description: `덕질 커뮤니티 서비스`,
    link: 'https://duckmu.com',
    images: [
      duckmuImg1,
      duckmuImg2,
    ]
  },
  {
    title: 'Beomjeon',
    skills: ['Next.js'],
    description: `개인 기록용 개발 지식 위키`,
    link: 'https://beomjeon-docs.vercel.app/',
    github: 'https://github.com/ParkBeomMin/beomjeon/tree/main/apps/docs',
    images: [
      beomjeonImg1,
      beomjeonImg2,
    ]
  },
  {
    title: 'About me',
    skills: ['Vanilla.js', 'Firebase Firestore'],
    date: '2023.06.19 ~ 2023.06.27',
    description: `친구들이 생각하는 나는 어떤 사람일까?
    
    - history api를 활용해 SPA 구조 직접 구현`,
    link: 'https://aboutme2.web.app/',
    github: 'https://github.com/ParkBeomMin/AboutMe-Nuxt',
    images: [
      aboutMeImg1,
      aboutMeImg2,
    ]
  },
  {
    title: '조식봇',
    skills: ['Node.js', 'JavaScript', 'Vision API', 'Firebase'],
    date: '2023.01.10 ~ 2023.02.22',
    description: `진학사의 조식 메뉴를 간편하게 알 수 있는 챗봇

    - google vision api를 통해 이미지에서 텍스트를 추출`,
    link: 'https://pf.kakao.com/_Qaxaxaxj',
    images: [
      josikbotImg1,
      josikbotImg2,
    ]
  },
  {
    title: 'What is my team?',
    skills: ['Vue.js', 'teachable machine'],
    date: '2022.12.04 ~ 2022.02.13',
    description: `인공지능 모델을 활용한 팀 추천 서비스
    
    - 팀별 선수들 사진 크롤링
    - teachablemachine 서비스를 이용해 학습된 모델 생성`,
    link: 'https://what-is-my-team.web.app/premier24-25',
    github: 'https://github.com/ParkBeomMin/WhatIsMyTeam',
    images: [
      whatIsMyTeamImg1,
      whatIsMyTeamImg2,
    ]
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
  'Firebase',
  'Spring Boot',
  
]