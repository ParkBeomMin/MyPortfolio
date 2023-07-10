import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "AboutMe",
      title: "About Me",
      category: "Personal",
      img: "images/personal/AboutMe.png",
      publishDate: "Jul 02, 2023",
      tag: "Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Challenge",
      projectImages: [
        {
          id: uuidv4(),
          title: "About Me",
          img: "../images/personal/AboutMe.png",
        },
        {
          id: uuidv4(),
          title: "About Me",
          img: "../images/personal/AboutMe.png",
        },
        {
          id: uuidv4(),
          title: "About Me",
          img: "../images/personal/AboutMe.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            친구들에게 공유하여 나에 대해 물어보고 그 관심들을 모아서 나의 새싹을 키우는 서비스입니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            vanilla js의 사용 경험을 위해 진행했던 프로젝트입니다. spa구조로 만들었으며 라우터를 직접 구현하여 window객체에 라우팅 함수를 등록시켜 사용했습니다.
            <br>firebase를 활용하여 호스팅과 데이터베이스를 연동시켰습니다. 그리고 webpack을 활용하여 배포용 파일을 번들링하여 효율적인 배포가 될 수 있도록 했습니다.
            <br>공유하기 기능은 url을 클립보드에 복사하는 기능인데 카카오 브라우저에서는 navigator.clipboard.writeText가 동작하지 않아 copy 관련 라이브러리를 활용했습니다.
          `,
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
      id: "건강보험공단 경력 연동 서비스",
      title: "건강보험공단 경력 연동 서비스",
      category: "Company",
      img: "images/company/건강보험공단경력연동서비스.png",
      publishDate: "Dec 26, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "간편하게 경력 정보를 볼러올 수 있어 사용자의 편의성 증대<br>건강보험공단에서 인증된 정보를 불러올 수 있어 신뢰도 있는 DB확보",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "건강보험공단경력연동서비스",
          img: "../images/company/건강보험공단경력연동서비스.png",
        },
        {
          id: uuidv4(),
          title: "건강보험공단경력연동서비스",
          img: "../images/company/건강보험공단경력연동서비스2.png",
        },
        {
          id: uuidv4(),
          title: "건강보험공단경력연동서비스",
          img: "../images/company/건강보험공단경력연동서비스3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            외부 API를 활용하여 건강보험공단의 자격득실데이터와 건강보험료데이터를 받아와서 경력 정보를 보여주는 방식입니다.
            <br>외부 API의 구현 방식에 의해 총 11번의 API를 호출헤애헸습니다. 같은 id값을 파라미터로 11번을 호출하고 첫번째 호출에 대해 간편인증에 대한 응답 값을 받으며 나머지 10개는 pending상태가 됩니다.
            <br>이후 간편인증이 완료되면 모든 API의 응답값을 받아온 후, 건강보험료를 토대로 예상 연봉값을 계산하여 사용했습니다.
            <br>하지만 IOS환경에서 pending된 API가 있을 경우 서비스가 백그라운드 상태에 진입 후 다시 포그라운드 상태로 될 경우 이전 호출을 재호출하게 되어 외부API에는 중복 요청이 가게되며 기존 pending된 요청에 대한 응답도 받지 못하는 문제가 발생하였습니다.
            <br>pending되는 10개의 호출에 대해 자사 서비스에서는 pending이 발생하지 않도록 바로 응답을 보내고 서버단에서 pending을 유지하고 응답값은 DB로 저장되도록 처리한 후, DB를 읽어오는 API를 초단위로 호출하여 응답을 받아올 수 있도록 처리하였습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            기존 프로젝트 구조상 코드의 분리 없이 router내에 모든 비즈니스 로직이 포함되어 있었는데, 모델과 컨트롤러를 분리하여 코드의 가독성을 높였고 재사용성을 높였습니다.
            <br>그리고 모델과 컨트롤러 구조로 만들어지다 보니 기존 구조에서는 잘 활용할 수 없었던 테스트 코드를 작성하여 프로젝트의 완성도를 높였습니다.
          `,
        },
      ],
    },
    {
      id: "면접AI튜터서비스",
      title: "면접AI 튜터 서비스",
      category: "Company",
      img: "images/company/면접AI튜터서비스.png",
      publishDate: "May 16, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "gpt api를 활용한 ai 면접 튜터 서비스로 사용자 유입 증대",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "면접AI튜터서비스",
          img: "../images/company/면접AI튜터서비스.png",
        },
        {
          id: uuidv4(),
          title: "면접AI튜터서비스",
          img: "../images/company/면접AI튜터서비스2.png",
        },
        {
          id: uuidv4(),
          title: "면접AI튜터서비스",
          img: "../images/company/면접AI튜터서비스3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            openai의 gpt api를 활용해 예상 면접 질문을 만들어주고, 꼬리질문도 만들어주는 서비스입니다.
            <br>자체 필터링 로직을 만들어, 면접 기출 DB를 뽑아온 후 해당 면접 질문들을 토대로 프롬프트를 만들어서 gpt api를 통해 예상 면접 질문 리스트를 가져왔습니다.
            <br>외부 api에 의존하다보니 api의 응답속도가 1분이 넘어가도 컨트롤을 할 수 없었습니다.
            <br>따라서 프롬프트를 최적화했고 로딩화면을 추가했습니다. 그리고 nginx 설정에서 해당 api만 90s 타임아웃 설정을 추가했습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            함수형 프로그래밍 패러다임 중 '하나의 함수는 한가지 역할만 해야한다', '함수를 통해 변수가 변질되면 안된다'를 지키며 구조를 잡아갔습니다.
            <br>이렇게 구조를 잡아가다보니 테스트 코드를 작성하여 실행시키며 수정하는 것에 장점이 있었고, 수정사항들을 반영하는데에도 사이드이펙트가 적어지는 장점이 있었습니다.
          `,
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
      img: "images/personal/조식봇.png",
      publishDate: "Feb 22, 2023",
      tag: "Vue Nuxt Node Javascript",
      link: "https://pf.kakao.com/_Qaxaxaxj",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Detail",
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
      id: "채용유지보수",
      title: "채용 유지보수",
      category: "Company",
      img: "images/company/채용유지보수.png",
      publishDate: "Feb 17, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "개인화 카테고리 기능 추가로 사용자 편의성 증대",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "채용유지보수",
          img: "../images/company/채용유지보수.png",
        },
        {
          id: uuidv4(),
          title: "채용유지보수",
          img: "../images/company/채용유지보수2.png",
        },
        {
          id: uuidv4(),
          title: "채용유지보수",
          img: "../images/company/채용유지보수3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            사용자 이력서 DB와 공고 DB를 활용해 개인화된 공고 카테고리를 추천해주는 서비스입니다.
            <br>기존 카테고리는 결과값이 보장되었지만 개인화된 카테고리는 결과값이 무조건 있을 것이라는 보장이 없었습니다.
            <br>따라서 사용자 이력서 DB를 활용하되 결과값이 없는 경우엔 그 후순위들로 값을 가져오도록 처리하기 위해 쿼리에서 반복문을 통해 결과값을 가져올 수 있도록 처리했습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            요구사항이 사이트 내 다른 서비스의 로직을 그대로 가져오는 것이어서 단순히 그렇게 구현을 시작했는데, 결과값이 없는 경우 등 이 서비스에서의 특성으로 인해 좀 더 논의되었어야할 부분들이 많이 있었습니다.
            <br>개발에 들어가기 전 충분하게 생각해보고 논의를 나눴었으면 좋았을 것이라는 아쉬움이 남았지만, 빠르게 의사결정을 하여 다시 로직을 수정하였고 이미 구현된 상태에서 수정하기엔 코드가 더 복잡해질 가능성이 있어서 과감하게 다시 처음부터 설계를 하고 구현했습니다.
          `,
        },
      ],
    },
    {
      id: "즉시지원레이어유지보수",
      title: "즉시지원 레이어 유지보수",
      category: "Company",
      img: "images/company/즉시지원레이어유지보수.png",
      publishDate: "Feb 03, 2023",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "단절된 즉시지원 고객 경험을 개선해 한 번에 즉시지원이 가능하도록 프로세스 개편",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "즉시지원레이어유지보수",
          img: "../images/company/즉시지원레이어유지보수.png",
        },
        {
          id: uuidv4(),
          title: "즉시지원레이어유지보수",
          img: "../images/company/즉시지원레이어유지보수2.png",
        },
        {
          id: uuidv4(),
          title: "즉시지원레이어유지보수",
          img: "../images/company/즉시지원레이어유지보수3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            즉시지원 레이어를 통해 이력서 및 자소서 수정을 하러 이동하였을 때 기존 즉시지원 화면으로 되돌아올 수 있게 사용성을 개선시키는 작업이었습니다.
            <br>페이지 전환이었으면 이전 페이지로 리턴이 되도록하면 되었지만, 요구사항은 새탭으로 전환이 되어야했습니다.
            <br>새탭으로 작성페이지를 띄울 때 쿼리스트링을 통해 즉시지원 레이어를 통해서 왔다는 값을 알려주고 그에 맞게 알럿을 띄워주고 탭이 닫히도록 처리했습니다.
            <br>기존 활성화되어 있던 즉시지원 레이어의 이력서와 자소서의 상태 값도 같이 업데이트가 되어야했기에 즉시지원 레이어에서 값을 불러오는 함수를 broadcast channel로 등록해놓은 뒤 작성페이지에서 해당 함수를 호출하게 하여 탭 간 이벤트 호출이 될 수 있도록 하였습니다.
          `,
        },
      ],
    },
    {
      id: "공고지원자관리개편",
      title: "공고/지원자 관리 개편",
      category: "Company",
      img: "images/company/공고지원자관리개편.png",
      publishDate: "Dec 26, 2022",
      tag: "Vue Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "사용자 증가를 대비하기 위한 사용성 개선",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "공고지원자관리개편",
          img: "../images/company/공고지원자관리개편.png",
        },
        {
          id: uuidv4(),
          title: "공고지원자관리개편",
          img: "../images/company/공고지원자관리개편2.png",
        },
        {
          id: uuidv4(),
          title: "공고지원자관리개편",
          img: "../images/company/공고지원자관리개편3.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            지원자 관리의 메일 발송 레이어에 알림톡 발송 관련 기능을 추가하는 작업을 했습니다.
            <br>기존 메일 발송 레이어 코드가 모두 한 군데에 모여있었고, 레이어의 크기 조절에 관한 코드는 각 레이어들에 반복되게 작성이 되어있었습니다.
            <br>레이어에 공통적으로 쓰이는 코드는 mixin으로 분리하여 재사용가능하게 하였고, 메일 발송 레이어의 코드들은 발송 내용 작성과 발송 내용 확인 컴포넌트로 분리하였습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            채용보고서에 일일 단위의 조회수와 지원자수를 그래프로 표현하는 기능을 추가했습니다.
            <br>vue-chartjs라이브러리의 Line차트를 활용했으며 일일단위 데이터는 모든 데이터를 가져와서 사용할 경우 성능 이슈가 발생함을 고려해 미리 만들어두고 만들어둔 데이터를 가져오도록 설계하였습니다.
            <br>Airflow로 스케쥴링 작업을 만들어서 매 자정마다 모든 공고에 대해 하루 단위의 조회수와 지원자수 데이터를 만들어두도록 했습니다.
          `,
        },
      ],
    },
    {
      id: "기업개편",
      title: "기업 개편",
      category: "Company",
      img: "images/company/기업개편.png",
      publishDate: "Sep 15, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "기업 전체 메뉴 중 활용도가 낮은 서비스의 전면적인 개편을 통한 UV/PV 증대<br/>가독성 및 사용성을 높일 수 있는 UI/UX 개선<br>변동성 있는 DB로 노출 콘텐츠 재구성",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "기업개편",
          img: "../images/company/기업개편.png",
        },
        {
          id: uuidv4(),
          title: "기업개편",
          img: "../images/company/기업개편.png",
        },
        {
          id: uuidv4(),
          title: "기업개편",
          img: "../images/company/기업개편.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            3명의 개발자가 참여해 추천기업,기업분석,연계 및 어드민으로 업무 분배를 하였고, 연계 및 어드민 작업을 했습니다.
            <br>연계 작업은 추천기업과 기업분석에서 새롭게 추가되는 기능들을 기업상세 또는 마이페이지에 적용시키는 작업이었습니다.
            <br>작업이 완료된 부분의 컴포넌트를 가져다가 쓰면서 필요한 예외처리들은 props로 값을 넘겨서 예외처리될 수 있도록 수정하여 사용하였습니다.
            <br>그 중 기능은 같지만 html구조가 다른 부분들도 있어서 기능은 mixin으로 분리하고 컴포넌트를 따로 만들어서 사용할 수 있게 만들었습니다.
            `,
        },
        {
          id: uuidv4(),
          details: `
            어드민은 기존 프로젝트와는 다르게 Vue3와 Typescript로 이루어진 프로젝트였고 추천기업 데이터를 관리하기 위한 페이지를 작업했습니다.
            <br>기존 코드들이 탭 변환을 하는 것이 각 페이지에서 독립적으로 구현이 되어있어서 탭 메뉴용 composition api를 만들어서 공통으로 쓸 수 있도록 했습니다.
            <br>각 기능들도 composition api로 구현했으며, 사용해보면서 기존 mixin과 유사하다는 생각이 들었고 코드를 파악하는데에 있어서 mixin보다는 훨씬 강점이 있다고 느껴졌습니다.
            <br>페이지 전환 후 다시 돌아왔을 때, 값이 유지되어야 하는 요구사항이 있었는데 composition api에서 전역으로 변수를 선언하여 처리하였습니다. 개별적인 페이지여서 변수가 겹치거나 하는 일은 없기에 큰 문제가 없지만, 상태관리를 활용했으면 더 좋은 코드가 되지 않았을까하는 아쉬움이 있습니다.
          `,
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
      id: "관심기업서비스",
      title: "관심기업 서비스",
      category: "Company",
      img: "images/company/관심기업서비스개편.png",
      publishDate: "Jan 14, 2022",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "관심기업 활용도를 높이고 추천/알림 로직을 활용하여 재방문 유도",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "관심기업서비스",
          img: "../images/company/관심기업서비스개편.png",
        },
        {
          id: uuidv4(),
          title: "관심기업서비스",
          img: "../images/company/관심기업서비스개편.png",
        },
        {
          id: uuidv4(),
          title: "관심기업서비스",
          img: "../images/company/관심기업서비스개편.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            관심기업 DB와 사용자 이력서 DB를 활용해 공고를 추천해주는 로직을 구현했습니다.
            <br>테스트 환경에서는 문제없었지만, 운영환경에서는 데이터의 양이 달라 속도 이슈가 생겼습니다. 백단에서 로직이 실행되고 푸쉬알림을 보내는 기능이었기에 사용자 환경에 영향은 없었지만 DB부하의 가능성이 있어서 개선을 해야했습니다.
            <br>기존 쿼리에서 with절로 만들어진 테이블들을 모두 임시테이블로 변경하여 평균 10분정도 소요되던 부분을 5분내외로 개선하였습니다.
          `,
        },
        {
          id: uuidv4(),
          details: `
            위 로직의 결과값들을 앱 푸쉬로 발송을 하며, 푸쉬를 클릭하여 들어왔을 때의 처리와 클릭 수 체크가 필요했습니다.
            <br>발송되는 푸쉬의 url데이터에 쿼리스트링을 붙였고, middleware를 만들어 웹 접근 시 해당 쿼리스트링이 있으면 체크해서 클릭 로그가 쌓이도록 구현하였습니다.
          `,
        },
      ],
    },
    {
      id: "이력서자격증네이버연동",
      title: "이력서 자격증 네이버연동",
      category: "Company",
      img: "images/company/이력서자격증네이버연동.png",
      publishDate: "Nov 05, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "편리한 연동 서비스 사용으로 인한 이력서 DB 질적 향상",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "이력서자격증네이버연동",
          img: "../images/company/이력서자격증네이버연동",
        },
        {
          id: uuidv4(),
          title: "이력서자격증네이버연동",
          img: "../images/company/이력서자격증네이버연동",
        },
        {
          id: uuidv4(),
          title: "이력서자격증네이버연동",
          img: "../images/company/이력서자격증네이버연동",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            네이버 자격증 API를 연동해 자격증 데이터를 불러오는 기능을 구현했습니다.
            <br>네이버 API를 호출하여 네이버 화면으로 넘어간 후, 로그인 및 인증을 진행하여 결과값을 받아 데이터를 뿌려주도록 했습니다.
            <br>웹 브라우저에서는 문제없이 잘 동작하였지만, 안드로이드 앱에서는 외부링크로 인식이 되어 앱을 이탈하여 기본 브라우저로 호출이 되어 응답 값을 받을 수가 없는 상황이 되어 네이티브 코드에서 해당 url은 앱 내의 웹뷰에서 동작할 수 있도록 처리했습니다.
            <br>그리고 브라우저 환경에서는 callback으로 api를 호출하게 해서 값을 받았지만 앱 환경에서는 제대로 동작이 되질 않아 callback 페이지를 만들고 callback 페이지에서 다시 기존 화면으로 라우팅되도록 구현하였습니다.
          `,
        },
      ],
    },
    {
      id: "이력서소분류보유기술추가",
      title: "이력서 소분류, 보유기술 항목 추가",
      category: "Company",
      img: "images/company/이력서소분류보유기술추가.png",
      publishDate: "Aug 09, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Detail",
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
      id: "마이페이지개편",
      title: "마이페이지 개편",
      category: "Company",
      img: "images/company/마이페이지개편.png",
      publishDate: "Jun 09, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "핵심 기능 중심의 메뉴 개편<br/>맞춤형 개인화 서비스 추가<br/>캐치카페 이용 회원 앱 사용성 증대 및 지속방문 유도",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "마이페이지개편",
          img: "../images/company/마이페이지개편.png",
        },
        {
          id: uuidv4(),
          title: "마이페이지개편",
          img: "../images/company/마이페이지개편2.png",
        },
        {
          id: uuidv4(),
          title: "마이페이지개편",
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
      id: "이력서유도레이어서비스",
      title: "이력서 유도레이어 서비스",
      category: "Company",
      img: "images/company/이력서유도레이어.png",
      publishDate: "Feb 08, 2021",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails:
        "이력서의 필수항목들을 입력할 수 있게 유도하여 이력서 DB 질적 향상",
      detailsTitle: "Detail",
      projectImages: [
        {
          id: uuidv4(),
          title: "이력서유도레이어",
          img: "../images/company/이력서유도레이어.png",
        },
        {
          id: uuidv4(),
          title: "이력서유도레이어",
          img: "../images/company/이력서유도레이어.png",
        },
        {
          id: uuidv4(),
          title: "이력서유도레이어",
          img: "../images/company/이력서유도레이어.png",
        },
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details: `
            사용자의 이력서 작성 상태를 파악하여 단계별로 이력서 필수값을 입력할 수 있도록 레이어를 노출시켜주는 서비스입니다.  
            <br>레이어 컴포넌트안에서 사용자의 작성 상태에 따라 컴포넌트를 다르게 보여주도록 구성했습니다. 작성 상태에 대한 값은 초기 개발때는 사용자의 모든 이력서 데이터를 가져와서 프론트단에서 계산을 해서 보여주는 방식이었는데 코드의 가독성과 성능적인 부분을 고려해 쿼리단에서 단계값만 리턴해줄 수 있도록 수정하였습니다.
            <br>유도레이어는 사이트 곳곳에서 사용되는 특성이 있어서 레이아웃 또는 푸터와 같이 공통적으로 쓰이는 곳에 컴포넌트를 등록시킨 뒤, nuxt 이벤트버스에 레이어 호출 함수를 등록시켜 어디서든 호출하기 쉽도록 했습니다.
            <br>사이트 곳곳에서 사용되다보니 유도레이어 이후 이벤트들이 각각 달라서 그에 따른 예외처리 코드들이 늘어나게 되었습니다. 이벤트버스로 등록시킨 유도레이어 호출 함수에 callback 변수를 추가하여 유도레이어가 완료되었거나 닫혔을 때에 대해 callback함수를 받을 수 있도록 수정하였습니다.
          `,
        },
      ],
    },
    {
      id: "최종합격꿀팁개편",
      title: "최종합격꿀팁 개편",
      category: "Company",
      img: "images/company/최종합격꿀팁개편.png",
      publishDate: "Dec 08, 2020",
      tag: "Vue Nuxt Node Javascript",
      objectivesTitle: "Objective",
      objectivesDetails: "합격꿀팁 작성 편의성 증대<br/>가독 편의성 향상",
      detailsTitle: "Detail",
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
