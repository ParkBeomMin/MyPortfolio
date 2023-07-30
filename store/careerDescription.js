export const state = () => ({
  name: "박범민",
  email: "club20608@gmail.com",
  intro: `안녕하세요, <b>소통형</b> 웹 개발자 박범민입니다.
  <br>안드로이드 앱 개발로 시작한 개발자의 꿈이 웹 개발로 이어지며 많은 변화가 있었지만, <b>유저가 만족할 수 있는 서비스</b>를 만들고자 하는 마음은 언제나 동일합니다. 고객 중심의 기획자, 퍼블리셔 분들과 같은 마음으로 프로젝트에 임하며 소통형 웹 개발자라고 불리고 있습니다.
  <br><br>저는 기존 구조를 다양한 방법으로 활용하며 <b>문제를 해결하는 것</b>을 좋아합니다.
  <br>안될 이유보다 될 이유를 찾는 자세로 보다 <b>효율적인 방법</b>을 찾아 코드와 구조를 설계하고 있습니다.
  <br><br>데이터 흐름과 상태 관리, 성능 최적화, 디자인 패턴, 그리고 리팩토링에 관심이 있으며 팀 내 DX(Developer Experience) 향상을 위해 노력합니다.
  <br><br>함께 일하는 동료와 유저 모두를 아우를 수 있는 개발자가 되기 위해 오늘도 어디선가 최선을 다하고 있습니다`,
  skills: [
    {
      name: "Javascript",
      description: [
        "<b>ES6+ 문법</b>을 활용하여 효율적인 코드를 작성합니다.",
        "Promise와 async/await를 활용해 <b>간결하고 가독성이 좋은</b> 비동기 로직을 만듭니다.",
        "<b>VanillaJS</b>로 웹 서비스를 구현할 수 있습니다.",
      ],
    },
    {
      name: "Typescript",
      description: [
        "타입을 명시하여 <b>가독성 좋은 코드</b>를 작성하며 오류를 방지합니다.",
      ],
    },
    {
      name: "MSSQL",
      description: [
        "실행계획을 참고하여 쿼리 튜닝을 하여 <b>성능을 개선</b>합니다.",
      ],
    },
    {
      name: "Vue",
      description: [
        "<b>SPA 구조</b>를 이해하고 구현할 수 있습니다.",
        "Vuex 활용하여 유연하고 <b>효율적인 상태 관리</b>를 합니다.",
        "Vue <b>LifeCycle을 이해</b>하여 각 Life Hook에 맞춰 데이터 처리 및 로직 처리를 합니다.",
        "Component와 Mixin, Composition API를 적극 활용하여 <b>코드의 재사용성</b>을 높이고 가독성을 향상시킵니다.",
      ],
    },
    {
      name: "Nuxt",
      description: [
        "사용자 경험 개선과 SEO 최적화를 위해 <b>SSR를 활용</b>한 웹 개발을 할 수 있습니다.",
      ],
    },
    {
      name: "Node",
      description: [
        "<b>RESTful</b>한 API 서버를 구현할 수 있습니다.",
        "변동성이 적은 결과값은 서버 캐싱을 통해 <b>성능을 향상</b>시킵니다.",
        "<b>MVC 디자인패턴</b>으로 유지보수와 가독성 좋은 코드 구조를 만듭니다.",
      ],
    },
  ],
  careers: [
    {
      company: "진학사",
      department: "캐치본부 개발팀",
      workDate: "2020.9.29 ~ 재직중",
      description: "캐치 웹 서비스 유지보수 및 신규 기능 개발",
    },
    {
      company: "진학사",
      department: "신사업본부",
      workDate: "2019.12.02 ~ 2020.9.28",
      description: "신규 사업 탐색 및 아이디에이션",
    },
  ],
  description: [
    {
      company: "진학사",
      summary: `<b>Vue, Nuxt, Node</b> 기술 스택으로 캐치 웹 서비스를 유지보수하고 신규 기능을 구현하는 업무를 했습니다. 
      <br>기존 프로젝트 구조에 맞춰 적응을 한 이후, 개선이 필요한 부분들을 파악하여 좀 더 <b>효율적인 구조로 적용</b>을 해나가고 있습니다. 기존 구조는 반복적인 코드도 많고, 코드가 단순히 나열되어 짜여진 구조였습니다. 그래서 공통으로 사용될 수 있는 로직 또는 컴포넌트 구조를 찾아 컴포넌트를 만들고 함수를 만들어 <b>재사용가능하게</b> 했습니다.
      <br>비즈니스 로직을 <b>컨트롤러로 분리</b>시켜 가독성 및 유지보수에 더 용이하도록 개선했습니다.
      <br><br><b>유지보수성을 고려</b>해 JQuery로 구현되어 있던 코드들을 Vue라이브러리 또는 JS로 리팩토링하고 있으며, <b>ES6+ 문법</b>을 적극 활용하여 보다 간결하고 가독성 좋은 코드로 바꿔나가고 있습니다.
      <br>도메인에 종속적인지 공통적으로 사용가능한지를 고려하여 <b>효율적인 Component 분리</b>를 해나가고 있습니다. 
      <br><br><b>DX를 중요</b>하게 생각하여 팀원들의 불편함을 개선하고자 노력합니다.
      <br>서비스 배포 시 만들어 둔 스크립트를 실행하여 pull, build 및 배포까지 되는데 PC와 M이 둘 다 같이 진행이 되었습니다. 하지만 수정 사항이 한 부분만 있는 경우에도 둘 다 실행이 되었고, PC 다음 M이 되도록 순차적으로 실행이 되었습니다. 좀 더 <b>효율적으로 배포</b>될 수 있도록 pull 이 후 커밋 내용에 변화가 있으면 빌드가 되도록 하였으면 백그라운드로 실행될 수 있도록하여 병렬 빌드가 되도록 했습니다.
      <br>서비스 에러 발생 시, 서버 로그를 모니터링하지 않으면 즉각적으로 알아차릴 수 없었고, 오류 내용을 찾는 것도 직접 서버 로그 파일을 봐야했기에 불편함이 많았습니다. 협업툴인 팀즈 웹훅을 연결시켜 서버 에러 발생 시 바로 팀즈로 각 담당자가 멘션될 수 있도록 했습니다.
      <br><br>API 문서화 툴인 Swagger를 활용하여 테스터의 DB 수정 및 조회가 가능하게 하여 부서 내 <b>테스트 업무의 효율성</b>을 높였습니다.`,
      projects: [
        {
          title: "[CATCH] 기업분석리포트개편",
          date: "2023.06.26 ~ 2023.07.17",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "기업분석 리포트 열람 제한 정책을 강화하는 프로젝트입니다.",
            "블라인드 처리가 되어야할 데이터들을 <b>보안성 강화 및 프론트엔드 성능</b>을 고려해 서버단에서 처리해서 데이터를 가져오도록 했습니다.",
            "블라인드 처리될 데이터들의 정책 변경을 고려해 블라인드 처리 함수를 만들어 <b>유지보수 및 재사용성</b>을 높였습니다.",
          ],
        },
        {
          title: "[CATCH] 채용상세개편",
          date: "2023.06.20 ~ 06.30",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "채용 상세 페이지 내 이동 편의성을 위해 GNB 추가와 페이지 전환을 변경하는 프로젝트입니다.",
            "채용 상세 페이지로 이동하는 모든 부분을 변경하기 위해 <b>Vue Mixin</b>을 통해 mounted 훅에서 특정 url이 포함된 태그의 target을 바꿔주도록 설정한 뒤, nuxt plugin으로 등록하여 처리하는 시도를 했습니다. 개발 편의성을 고려하였지만, 추후 예외처리 가능성과 예기치 못한 오류가 발생할 가능성이 크다는 의견이 있어서 각 태그의 값을 변경해주도록 처리했습니다.",
            "Vuex로 관리되는 필터 값들이 상세 페이지 전환 후 재진입했을 때는 유지되도록 처리하기 위해 asyncData 훅에서 from 데이터를 받아와서 특정 url에서 왔을 때는 Vuex값이 초기화되지 않도록 처리했습니다.",
            "기존 코드에서 switch문으로 값이 변경되는 부분들을 Vue의 computed로 선언되도록 <b>리팩토링하여 코드의 가독성</b>을 향상시켰습니다.",
            "컴포넌트 내 데이터 호출이 mounted 훅에서 되고 있던 부분을 fetch 훅에서 실행되도록 하여 <b>성능을 개선</b>하였습니다.",
          ],
        },
        {
          title: "[CATCH] 건강보험공단 경력 연동 서비스",
          date: "2023.05.17 ~ 06.19",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "외부 API를 활용해 건강보험공단에서 데이터를 가져와 경력과 추정연봉 데이터를 보여주는 서비스입니다.",
            "API의 구조상 총 11번의 API를 호출해야 헸습니다. 첫번째 호출에 대해 간편인증에 대한 응답 값을 받으며 나머지 10개는 pending상태가 됩니다. 이후 간편인증이 완료되면 모든 API의 응답값을 받아온 후, 건강보험료를 토대로 예상 연봉값을 계산하여 데이터를 만들어냈습니다. 하지만 IOS환경에서 pending된 API가 있을 경우 서비스가 백그라운드 상태에 진입 후 다시 포그라운드 상태로 될 경우 이전 호출을 재호출하게 되어 외부API에는 중복 요청이 가게되며 기존 pending된 요청에 대한 응답도 받지 못하는 문제가 발생하였습니다. pending되는 10개의 호출에 대해 자사 서비스에서는 pending이 발생하지 않도록 바로 응답을 보내고 서버단에서 pending을 유지하고 응답값은 DB로 저장되도록 처리한 후, DB를 읽어오는 API를 초단위로 호출하여 응답을 받아올 수 있도록 처리하였습니다. 외부API에 의존적인 서비스를 구현함에 있어서 <b>상황에 맞게 구현해낼 수 있는 능력</b>이 있습니다.",
          ],
        },
        {
          title: "[CATCH] 면접AI튜터서비스",
          date: "2023.04.18 ~ 05.16",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "openai의 gpt api를 활용해 예상 면접 질문을 만들어주고, 꼬리질문도 만들어주는 서비스입니다.",
            "gpt api에 의존적인 기능이다보니 응답 속도 이슈를 기술적으로 해결할 수 없었습니다. 기획자분들과의 <b>적극적인 소통</b>을 통해 기존 프롬프트를 개선하였고 로딩 화면을 추가하는 방향으로 풀어냈습니다. 그리고 api timeout이 나지 않도록 nginx에서 해당 api에 대한 설정을 변경하였습니다.",
            "기획자분들의 gpt 프롬프트 테스트를 원활하게 하기 위해 테스트용 페이지를 만들었으며 잦은 코드 수정을 고려해 <b>함수형 프로그래밍 패러다임</b>을 적용하여 코드를 구현하였습니다. '하나의 함수는 한가지 역할만 해야한다', '함수를 통해 변수가 변질되면 안된다'를 지키며 구현을 하여 <b>효율적으로 업무</b>를 진행할 수 있었습니다.",
          ],
        },
        {
          title: "[CATCH] 채용유지보수",
          date: "2023.04.18 ~ 05.16",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "개인 맞춤화된 공고 카테고리를 추천하는 서비스가 추가되었습니다.",
            "초기 기획에 맞춰 개발을 진행하다보니 개인화의 특성상 결과값이 보장되지 않는 경우가 있었습니다. <b>기획자분과 소통</b>을 통해 로직을 다시 만들어서 우선적으로 개인화 DB를 활용하고 후순위들로 값을 가져와서 채울 수 있도록 결정했습니다.",
            "이미 진행된 개발 구조에서 변경된 로직을 반영시키기에는 코드가 더 복잡해질 가능성이 커서 과감하게 새로 구현을 하여 <b>간결하게 코드</b>를 작성했습니다.",
          ],
        },
        {
          title: "[CATCH] 즉시지원레이어유지보수",
          date: "2023.01.30 ~ 02.03",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "즉시지원 프로세스를 개선하기 위한 작업입니다.",
            "ReturnURL에 대해 처리가 되어 있던 작성페이지의 <b>기존 기능을 활용</b>해 쿼리스트링을 추가하여 판단을 할 수 있게 했습니다.",
            "<b>사용자 편의성을 고려</b>하여 BroadCast Channel API를 활용해 탭간 이벤트 호출 기능에 대해 기획자분께 설명드리고 구현했습니다.",
          ],
        },
        {
          title: "[CATCH APPLY] 공고지원자관리개편",
          date: "2022.12.02 ~ 12.26",
          skill: "Vue Node Javascript",
          content: [
            "지원자 관리 메일 발송 기능 개선과 채용보고서에 일일 단위 조회수와 지원자수 그래프 기능이 추가되는 작업입니다.",
            "메일 발송 레이어 내 탭으로 기능이 구분되어 있는데, 하나의 컴포넌트 안에 모든 로직이 작성되어 있어 가독성이 좋지 않았습니다. <b>기능별로 컴포넌트를 분리</b>시키고 로직도 분리하였습니다. 레이어에 공통적으로 쓰일 수 있는 부분은 Mixin으로 분리시켜 <b>재사용성</b>을 높였습니다.",
            "기존 데이터 구조에서 일일 단위로 데이터를 조합해서 가져오게 되면 계산하는 로직이 필요해 <b>성능과 업무 효율성</b>인 측면에서 좋지 않다고 생각했습니다. Airflow를 활용해 매 자정마다 모든 공고 데이터의 하루 단위 데이터를 만들도록 하였고 만들어진 데이터를 호출하도록 하여 <b>간결한 서비스 로직</b>을 구현했습니다.",
          ],
        },
        {
          title: "[CATCH] 기업개편",
          date: "2022.09.01 ~ 09.15",
          skill: "Vue Nuxt Javascript Typescript",
          content: [
            "사용자의 이력서 DB를 활용해 기업을 추천해주는 서비스입니다.",
            "기능은 같지만 UI적인 요소가 다른 컴포넌트를 적용함에 있어서 예외적인 요소들이 많아지다보니 <b>코드의 가독성과 유지보수를 고려</b>해 컴포넌트를 분리하고 기능은 <b>재사용성을 고려</b>해 Mixin으로 분리했습니다.",
            "어드민은 Vue3와 Typescript로 구성된 프로젝트여서 <b>각 특징들을 활용</b>했습니다. Mixin보다 <b>가독성이 좋은 composition api를 활용</b>해 기능을 분리하여 재사용성을 높였고 interface로 타입을 선언하여 <b>타입을 명시</b>할 수 있도록 하여 가독성을 높이고 오류 가능성을 낮췄습니다.",
          ],
        },
        {
          title: "[CATCH] 관심기업서비스",
          date: "2021.12.23 ~ 2022.01.14",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "관심기업DB 기반 사용자 맞춤 공고를 추천해주는 알림 발송 서비스입니다.",
            "추천 데이터를 만들어내는 쿼리가 운영환경 DB에서는 속도 이슈가 발생했습니다. <b>TL(Technical Leader)님의 조언</b>을 받아 WITH절로 만든 테이블들을 모두 임시테이블로 변경하였고 실행계획을 참고해 쿼리 튜닝을 진행하여 평균 10분정도 소요되던 쿼리문을 5분 내외로 개선했습니다.",
            "앱 푸쉬 클릭 로그 기능을 구현함에 있어 <b>확장성과 재사용성을 고려</b>해 특정 페이지에서 기능을 구현하지 않고 middleware로 구현해 서비스에 접근 시 쿼리스트링을 판단해 로그가 쌓이도록 구현했습니다.",
          ],
        },
        {
          title: "[CATCH] 이력서자격증네이버연동",
          date: "2021.10.25 ~ 11.05",
          skill: "Vue Nuxt Javascript MSSQL JAVA",
          content: [
            "네이버 자격증 API 연동을 통해 자격증 데이터를 불러오는 서비스입니다.",
            "모바일 웹에서는 콜백 API를 받아 새탭으로 열린 네이버 인증 API를 닫고 기존 화면으로 돌아오도록 처리하였는데 <b>웹뷰 형태로 구현된 앱</b>에서는 동작이 달랐습니다. 네이티브 코드를 수정해 외부 브라우저를 호출되지 않도록하고 콜백 페이지로 리턴되도록 한 후, 쿠키와 쿼리스트링을 활용해 기능을 이어갈 수 있도록 하여 <b>문제를 해결</b>하였습니다.",
          ],
        },
        {
          title: "[CATCH] 이력서소분류보유기술추가",
          date: "2021.07.26 ~ 08.09",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "기존 직무 분류 체계에 소분류 체계가 추가되었고 보유기술 항목이 추가되는 작업입니다.",
            "직무 데이터가 콤마스트링으로 관리가 되고 있는 상황에서 콤마 스트링 데이터를 그대로 받아와 코드 체계 데이터와 매칭시키는 작업이 프론트에서 이중 for문 형태로 이뤄졌습니다. <b>성능 및 가독성을 고려</b>해 DB단에서 해당 작업이 이뤄진 후 키밸류 리스트 형태로 리턴되도록 수정했습니다.",
            "<b>재사용성을 고려</b>해 공통적으로 사용될 수 있도록 직무 선택 레이어를 컴포넌트로 따로 분리하였으며 props로 데이터를 받아서 사용할 수 있도록 구현하였습니다.",
            "보유기술 컴포넌트는 특정 도메인에 종속된 컴포넌트로 Vuex로 값을 바인딩해 <b>가독성과 유지보수성을 고려</b>ß하여 구현했습니다.",
          ],
        },
        {
          title: "[CATCH] 마이페이지개편",
          date: "2021.04.19 ~ 06.09",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "마이페이지 UI/UX를 개선하고 사용자 활동 앱 푸쉬 발송 기능이 추가되는 작업입니다.",
            "컴포넌트로 분리되어 있지만 비슷한 기능으로 인해 반복된 코드가 많이 있었습니다. <b>유지보수를 고려해 Mixin으로 분리</b>하여 반복된 코드를 줄였습니다.",
            "Firebase Messaging을 활용해 앱 푸쉬 기능을 구현하였으며 푸쉬 서버와 웹 서버가 분리되어 있어서 푸쉬 데이터를 만들어 놓은 뒤 Airflow를 활용해 매 분마다 DB를 탐색하여 앱 푸쉬를 발송할 수 있도록 하여 <b>주어진 구조에서 문제를 해결</b>했습니다.",
          ],
        },
        {
          title: "[CATCH] 이력서유도레이어서비스",
          date: "2021.01.22 ~ 02.08",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "사용자의 이력서 작성 상태에 따라 이력서 필수값을 입력할 수 있도록 유도하는 서비스입니다.",
            "초기 설계 시 이력서 작성 상태 판단을 위해 모든 데이터를 가져온 후 프론트에서 계산하여 보여주도록 설계했습니다. 이 후 <b>가독성과 성능적인 측면을 고려</b>해 쿼리단에서 계산된 값을 리턴받을 수 있도록 수정했습니다.",
            "사이트 곳곳에서 쓰일 가능성이 높은 서비스이기에 nuxt의 이벤트버스에 호출 함수를 등록하였고 공통 레이아웃 또는 컴포넌트에 유도레이어 컴포넌트를 등록하여 <b>공통적으로 손쉽게 사용</b>할 수 있도록 했습니다.",
            "<b>보다 더 나은 사용성을 고려</b>해 레이어 종료 시 callback함수가 호출될 수 있도록 했습니다.",
          ],
        },
        {
          title: "[CATCH] 최종합격꿀팁개편",
          date: "2020.12.01 ~ 12.08",
          skill: "Vue Nuxt Javascript MSSQL",
          content: [
            "합격 후기 작성 페이지에 항목이 변경되고 추가되는 작업입니다.",
            "기존 데이터 구조와 신규 데이터 구조 모두 화면에 보여줘야했기에 vue의 computed를 활용해 값을 검증하여 보여질 수 있도록 하여 <b>코드를 간결하게 하여 가독성</b>을 높였습니다.",
            "반복되는 데이터를 insert하는 구조로 forEach문으로 처리가 되었는데 forEach문에서는 async/await문의 제어가 불가했기에 비동기 처리로 인해 데이터가 누락되는 문제가 발생했습니다. 반복적인 DB호출이 <b>성능적인 측면</b>에서 좋지 않다고 생각하여 OpenJson 구문을 활용하여 개선했습니다.",
          ],
        },
      ],
    },
  ],
});

export const getters = {
  getCareerDescription: (state) => {
    return state;
  },
};
