import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: uuidv4(),
      title: "About Me",
      category: "Personal",
      img: "images/personal-project-3.png",
      publishDate: "Jul 02, 2023",
      tag: "Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: "채용상세개편",
      title: "채용 상세 개편",
      category: "Company",
      img: "images/company/채용상세개편.png",
      publishDate: "Jun 30, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "트래픽이 가장 많이 발생하는 페이지에서 브랜드 홍보 효과 증대<br>사이트 내 이동 편의성 증대",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "채용상세개편",
          img: "../images/company/채용상세개편.png",
        },
        {
          id: uuidv4(),
          title: "채용상세개편",
          img: "../images/company/채용상세개편2.png",
        },
        {
          id: uuidv4(),
          title: "채용상세개편",
          img: "../images/company/채용상세개편3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            기존 채용 상세 페이지에서는 사이트 내로 유입할 수 있는 경로가 부족하여, GNB를 노출할 수 있도록 추가하였습니다.
            <br>기존 GNB 컴포넌트를 재사용하여 유지보수의 편의성을 높였습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            채용 공고 하단에 위치한 커스텀 공고 배너는 랜덤하게 값을 가져오는 로직으로 구현되어 있었는데, 각 케이스에 맞게 값들을 셋팅해주도록 switch문으로 만들어져있었습니다.
            <br>가독성을 위해 computed로 변수를 선언하며 switch문에서 셋팅되던 값들을 각각으로 분리하였습니다.
            <br>그리고 mounted훅에서 네트워크 호출이 이루어졌던 부분도 fetch훅으로 이동시켜 서버사이드에서 네트워크 호출을 처리할 수 있도록 수정하였습니다.
          `,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "건강보험공단 경력 연동 서비스",
      category: "Company",
      img: "images/company-project-13.png",
      publishDate: "Dec 26, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "간편하게 경력 정보를 볼러올 수 있어 사용자의 편의성 증대<br>건강보험공단에서 인증된 정보를 불러올 수 있어 신뢰도 있는 DB확보",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "면접AI 튜터 서비스",
      category: "Company",
      img: "images/company-project-12.png",
      publishDate: "May 16, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "gpt api를 활용한 ai 면접 튜터 서비스로 사용자 유입 증대",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "What is my team?",
      category: "Personal",
      img: "images/personal-project-2.png",
      publishDate: "-",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "진학사 조식봇",
      category: "Personal",
      img: "images/personal/josikbot.png",
      publishDate: "Feb 22, 2023",
      tag: "Vue Nuxt Node Javascript",
      link: "https://pf.kakao.com/_Qaxaxaxj",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/personal/josikbot.png",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "채용 유지보수",
      category: "Company",
      img: "images/company-project-11.png",
      publishDate: "Feb 17, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "개인화 카테고리 기능 추가로 사용자 편의성 증대",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "즉시지원 레이어 유지보수",
      category: "Company",
      img: "images/company-project-10.png",
      publishDate: "Feb 03, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "단절된 즉시지원 고객 경험을 개선해 한 번에 즉시지원이 가능하도록 프로세스 개편",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "공고/지원자 관리 개편",
      category: "Company",
      img: "images/company-project-9.png",
      publishDate: "Dec 26, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "사용자 증가를 대비하기 위한 사용성 개선",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "기업 개편",
      category: "Company",
      img: "images/company-project-8.png",
      publishDate: "Sep 15, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "기업 전체 메뉴 중 활용도가 낮은 서비스의 전면적인 개편을 통한 UV/PV 증대<br/>가독성 및 사용성을 높일 수 있는 UI/UX 개선<br>변동성 있는 DB로 노출 콘텐츠 재구성",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: "7",
      title: "캐치 알바 연동",
      category: "Company",
      img: "images/company-project-7.png",
      publishDate: "Apr 16, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "관심기업 서비스",
      category: "Company",
      img: "images/company-project-6.png",
      publishDate: "Jan 14, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "관심기업 활용도를 높이고 추천/알림 로직을 활용하여 재방문 유도",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "네이버 자격증 서비스 연동",
      category: "Company",
      img: "images/company-project-5.png",
      publishDate: "Nov 05, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "편리한 연동 서비스 사용으로 인한 이력서 DB 질적 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: "4",
      title: "이력서 소분류, 보유기술 항목 추가",
      category: "Company",
      img: "images/company/이력서소분류보유기술추가.png",
      publishDate: "Aug 09, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "이력서소분류보유기술추가",
          img: "../images/company/이력서소분류보유기술추가.png",
        },
        {
          id: uuidv4(),
          title: "이력서소분류보유기술추가",
          img: "../images/company/이력서소분류보유기술추가2.png",
        },
        {
          id: uuidv4(),
          title: "이력서소분류보유기술추가",
          img: "../images/company/이력서소분류보유기술추가3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `기존 직무 분류 체계(대분류-중분류)에서 소분류 체계로 변경되며 이에 따른 소분류 선택 기능 구현이 필요했습니다. 직무 데이터는 여러개 선택이 가능한데 데이터가 한 칼럼에 콤마스트링으로 들어가고 있었습니다. 그래서 데이터를 불러온 뒤 프론트단에서 이중 for문을 돌며 다시 변환해주는 작업이 곳곳에 들어가있었습니다. 프론트에서 데이터를 읽고 보내는 작업에 모두 변환을 시켜줘야했기 때문에 유지보수에 좋지 않다고 판단이 되어 직무 데이터를 프론트에서 바로 쓸 수 있게 DB단에서 리턴될 수 있도록 수정하였습니다.`,
        },
      ],
    },
    {
      id: uuidv4(),
      title: "마이페이지 개편",
      category: "Company",
      img: "images/company/마이페이지개편.png",
      publishDate: "Jun 09, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "핵심 기능 중심의 메뉴 개편<br/>맞춤형 개인화 서비스 추가<br/>캐치카페 이용 회원 앱 사용성 증대 및 지속방문 유도",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/company/마이페이지개편.png",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/company/마이페이지개편2.png",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/company/마이페이지개편3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "UI/UX적으로 바뀌는 부분이 있어서 변경된 퍼블을 반영시키는 작업을 했습니다. 탭으로 나뉜 페이지였으며 쓰이는 데이터 구조가 비슷한 페이지였습니다. 비슷한 데이터 구조로 인해 데이터를 불러와서 가공하는 부분 코드가 반복되게 구현이 되어있었기에 mixin을 만들어 동일한 기능을 하는 함수가 한 곳에서 관리되도록 수정하였습니다.",
        },
        {
          id: uuidv4(),
          details:
            "MY알림이라는 기능이 새롭게 생겨남에 따라 데이터 구조를 만들어야했고, 앱 푸쉬 발송도 이뤄져야했습니다. 앱 푸쉬는 firebase messaging 서비스를 활용하며 웹 서버와 다른 별도의 서버에 등록이 되어있었습니다. 따라서 앱 푸쉬를 발송하는 서버에 발송시킬 운영서버의 데이터를 불러오도록 crontab을 활용해 배치작업을 만들었습니다.",
        },
      ],
    },
    {
      id: "2",
      title: "이력서 유도레이어 서비스",
      category: "Company",
      img: "images/company-project-2.png",
      publishDate: "Feb 08, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/ui-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "최종합격꿀팁 개편",
      category: "Company",
      img: "images/company/최종합격꿀팁개편.png",
      publishDate: "Dec 08, 2020",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "최종합격꿀팁개편",
          img: "../images/company/최종합격꿀팁개편.png",
        },
        {
          id: uuidv4(),
          title: "최종합격꿀팁개편",
          img: "../images/company/최종합격꿀팁개편2.png",
        },
        {
          id: uuidv4(),
          title: "최종합격꿀팁개편",
          img: "../images/company/최종합격꿀팁개편3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `합격 후기 작성 페이지 및 상세 페이지를 개편한 프로젝트입니다.
          <br>작성 페이지의 각 항목들이 변경됨에 따라 데이터 구조도 바뀌게 되어 이전 데이터들이 상세 페이지에 노출될 때 예외 처리가 필요했습니다.
          <br>합격후기데이터들을 가져와서 component에서 뿌려지기 전에 computed에서 값을 검증하여 NULL 또는 undefined가 되지 않도록 처리했습니다.`,
        },
        {
          id: uuidv4(),
          details: `이 프로젝트에서 바뀐 데이터 구조로 인해 반복적인 데이터 delete, insert가 발생하게 되었는데, forEach문으로 구현이 되어 비동기적으로 처리가 되며 데이터가 누락되는 문제 상황이 있었습니다.
            <br>forEach의 경우 async, await문으로 제어가 안되기때문에 발생하는 문제였습니다.
            <br>for문으로 처리하거나 쿼리문으로 처리하는 방법 중 통신 횟수를 줄이기 위해 쿼리문에서 OpenJson을 활용하여 해결했습니다.`,
        },
      ],
    },
    // {
    //   id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
    //   title: "Phoenix Digital Agency",
    //   category: "Mobile Application",
    //   img: "images/mobile-project-2.jpg",
    //   publishDate: "Nov 04, 2021",
    //   tag: "UI / Frontend",
    //   clientTitle: "About Client",
    //   objectivesTitle: "Objective",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Tools & Technologies",
    //   detailsTitle: "Challenge",
    //   socialTitle: "Share This",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Phoenix Digital Agency",
    //       img: "../images/mobile-project-1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phoenix Digital Agency",
    //       img: "../images/web-project-2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phoenix Digital Agency",
    //       img: "../images/mobile-project-2.jpg",
    //     },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Name",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Services",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },
    // {
    //   id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
    //   title: "Project Management UI",
    //   category: "UI/UX Design",
    //   img: "images/ui-project-1.jpg",
    //   publishDate: "Nov 04, 2021",
    //   tag: "UI / Frontend",
    //   clientTitle: "About Client",
    //   objectivesTitle: "Objective",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Tools & Technologies",
    //   detailsTitle: "Challenge",
    //   socialTitle: "Share This",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Project Management UI",
    //       img: "../images/mobile-project-1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Project Management UI",
    //       img: "../images/web-project-2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Project Management UI",
    //       img: "../images/mobile-project-2.jpg",
    //     },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Name",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Services",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },
    // {
    //   id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
    //   title: "Cloud Storage Platform",
    //   category: "UI/UX Design",
    //   img: "images/ui-project-2.jpg",
    //   publishDate: "Nov 04, 2021",
    //   tag: "Web / Frontend",
    //   clientTitle: "About Client",
    //   objectivesTitle: "Objective",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Tools & Technologies",
    //   detailsTitle: "Challenge",
    //   socialTitle: "Share This",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Cloud Storage Platform",
    //       img: "../images/web-project-1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Cloud Storage Platform",
    //       img: "../images/web-project-2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Cloud Storage Platform",
    //       img: "../images/mobile-project-2.jpg",
    //     },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Name",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Services",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },
    // {
    //   id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
    //   title: "Uber Social App",
    //   category: "Mobile Application",
    //   img: "images/mobile-project-1.jpg",
    //   publishDate: "Nov 04, 2021",
    //   tag: "UI / Mobile",
    //   clientTitle: "About Client",
    //   objectivesTitle: "Objective",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Tools & Technologies",
    //   detailsTitle: "Challenge",
    //   socialTitle: "Share This",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Uber Social App",
    //       img: "../images/web-project-1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Uber Social App",
    //       img: "../images/web-project-2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Uber Social App",
    //       img: "../images/mobile-project-2.jpg",
    //     },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Name",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Services",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },
    // {
    //   id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
    //   title: "Apple Design System",
    //   category: "Web Application",
    //   img: "images/web-project-1.jpg",
    //   publishDate: "Nov 04, 2021",
    //   tag: "UI / Mobile",
    //   clientTitle: "About Client",
    //   objectivesTitle: "Objective",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Tools & Technologies",
    //   detailsTitle: "Challenge",
    //   socialTitle: "Share This",
    //   projectImages: [
    //     {
    //       id: uuidv4(),
    //       title: "Apple Design System",
    //       img: "../images/web-project-1.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Apple Design System",
    //       img: "../images/web-project-2.jpg",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Apple Design System",
    //       img: "../images/mobile-project-2.jpg",
    //     },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Name",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Services",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/in/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com",
    //     },
    //   ],
    // },
  ],
  clientsHeading: "Worked At",
  clients: [
    {
      id: uuidv4(),
      title: "Catch",
      img: "../brands/catch.svg",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: `안녕하세요. 웹 엔지니어 박범민입니다.`,
    },
    {
      id: uuidv4(),
      bio: "",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/ParkBeomMin",
    },
    {
      id: uuidv4(),
      name: "blog",
      icon: "archive",
      url: "https://velog.io/@bmpark/series",
    },
    // {
    //   id: uuidv4(),
    //   name: "Linkedin",
    //   icon: "linkedin",
    //   url: "https://linkedin.com/in/realstoman",
    // },
    // {
    //   id: uuidv4(),
    //   name: "Youtube",
    //   icon: "youtube",
    //   url: "https://youtube.com/c/realstoman",
    // },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "company",
      name: "Company Project",
    },
    {
      id: uuidv4(),
      value: "personal",
      name: "Personal Project",
    },
    // {
    //   id: uuidv4(),
    //   value: "ui-ux",
    //   name: "UI/UX Design",
    // },
    // {
    //   id: uuidv4(),
    //   value: "branding",
    //   name: "Branding & Animations",
    // },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
  getAboutMeCounter: (state) => {
    const curDate = new Date();
    const startDate = new Date("2019-12-02");
    const year = curDate.getFullYear() - startDate.getFullYear();
    return {
      year,
      projectOfCompany: state.projects.filter((p) => p.category == "Company")
        .length,
      projectOfPersonal: state.projects.filter((p) => p.category == "Personal")
        .length,
    };
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
