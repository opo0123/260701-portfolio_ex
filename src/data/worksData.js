const worksData = [
  {
    id: 1,
    title: "UIUX 디자인",
    category: "Figma / Notion / HTML / CSS / JS",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    desc: "사용자 경험을 고려한 앱·웹 서비스 디자인",
    overview:
      "사용자 리서치부터 와이어프레임, 프로토타입, UI 시스템까지 전 과정을 수행한 UI/UX 디자인 프로젝트입니다. 실제 사용 시나리오를 기반으로 문제를 정의하고, 데이터와 피드백을 반영해 개선했습니다.",
    role: "UI/UX Designer · 기획 협업",
    period: "2024.03 – 2024.11",
    tools: ["Figma", "Notion", "Miro", "FigJam"],
    skills: [
      "사용자 인터뷰",
      "와이어프레임",
      "프로토타이핑",
      "디자인 시스템",
      "사용성 테스트",
    ],
    detailItems: [
      {
        id: 1,
        title: "모바일 앱 온보딩 플로우",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        problem:
          "신규 사용자의 68%가 첫 가입 후 3단계 안에 이탈했습니다. 복잡한 회원가입과 불명확한 가치 전달이 원인이었습니다.",
        solution:
          "3단계 이내 온보딩으로 축소하고, 각 화면마다 서비스 핵심 가치를 시각적으로 전달했습니다. 소셜 로그인과 게스트 체험 경로를 추가했습니다.",
        skills: ["정보 구조 설계", "마이크로 인터랙션", "전환율 최적화"],
        result: "가입 완료율 42% → 71%로 개선, 첫 세션 이탈률 28% 감소",
      },
      {
        id: 2,
        title: "대시보드 정보 아키텍처",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        problem:
          "관리자가 필요한 데이터를 찾기 위해 평균 5번 이상의 클릭이 필요했고, 핵심 KPI가 화면 하단에 묻혀 있었습니다.",
        solution:
          "사용자 업무 흐름을 분석해 KPI를 상단 고정하고, 카드 기반 모듈형 레이아웃으로 재구성했습니다. 필터와 검색을 글로벌 영역에 배치했습니다.",
        skills: ["IA 설계", "데이터 시각화", "관리자 UX"],
        result: "핵심 데이터 접근 클릭 수 5회 → 1회, 업무 처리 시간 35% 단축",
      },
      {
        id: 3,
        title: "컴포넌트 디자인 시스템",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
        problem:
          "프로젝트마다 버튼·입력 필드 스타일이 달라 개발-디자인 간 핸드오프 비용이 컸습니다.",
        solution:
          "Atomic Design 원칙으로 컴ponent 라이브러리를 구축하고, Figma Variables로 컬러·타이포 토큰을 통일했습니다. 개발팀과 Storybook 연동 가이드를 작성했습니다.",
        skills: ["디자인 시스템", "토큰 설계", "협업 문서화"],
        result: "신규 화면 제작 시간 40% 단축, 디자인 QA 이슈 60% 감소",
      },
      {
        id: 4,
        title: "이커머스 결제 UX 개선",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        problem:
          "장바구니 → 결제 전환율이 업계 평균 대비 23% 낮았고, 결제 단계에서 입력 필드 오류가 빈번했습니다.",
        solution:
          "원클릭 결제와 자동 입력, 실시간 유효성 검사 UI를 적용했습니다. 진행 단계 표시와 신뢰 배지를 추가해 불안감을 줄였습니다.",
        skills: ["전환 퍼널 분석", "폼 UX", "접근성(AA)"],
        result: "결제 완료율 18% 상승, 결제 단계 이탈률 31% 감소",
      },
      {
        id: 5,
        title: "다크모드 & 반응형 UI",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
        problem:
          "모바일·태블릿·데스크톱 간 레이아웃 불일치와 다크모드 미지원으로 야간 사용성과 브랜드 일관성이 떨어졌습니다.",
        solution:
          "Mobile-first 브레이크포인트와 fluid typography를 적용하고, 시맨틱 컬러 토큰으로 라이트/다크 테마를 동시 설계했습니다.",
        skills: ["반응형 설계", "컬러 시스템", "접근성 대비"],
        result: "모바일 세션 체류 시간 22% 증가, 다크모드 사용자 만족도 4.6/5",
      },
    ],
  },
  {
    id: 2,
    title: "웹 퍼블리싱",
    category: "HTML / CSS / JavaScript",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    desc: "시맨틱 마크업과 반응형 레이아웃 구현",
    overview:
      "Figma 시안을 기반으로 웹 표준과 접근성을 준수하는 퍼블리싱을 수행했습니다. CSS Grid/Flexbox와 인터랙션 스크립트를 활용해 크로스 브라우저 대응을 완료했습니다.",
    role: "Front-end Publisher",
    period: "2024.01 – 2024.06",
    tools: ["HTML5", "CSS3", "JavaScript", "Git"],
    skills: ["시맨틱 마크업", "반응형 CSS", "크로스 브라우징", "접근성"],
    detailItems: [
      {
        id: 1,
        title: "랜딩 페이지 퍼블리싱",
        image:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        problem: "디자인 시안과 실제 구현물 간 간격·폰트 불일치가 발생했습니다.",
        solution:
          "8px 그리드 시스템과 rem 단위를 적용해 시안과 1:1 매칭했습니다. CSS 변수로 테마를 관리했습니다.",
        skills: ["CSS Grid", "타이포그래피", "픽셀 퍼펙트"],
        result: "디자인 QA 통과율 100%, Lighthouse 접근성 95점",
      },
      {
        id: 2,
        title: "반응형 네비게이션",
        image:
          "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
        problem: "모바일에서 햄버거 메뉴 전환 시 레이아웃 깨짐과 스크롤 잠금 이슈가 있었습니다.",
        solution:
          "CSS-only 토글과 focus trap을 적용한 JS 메뉴를 구현했습니다. 터치 영역 44px 이상을 확보했습니다.",
        skills: ["미디어 쿼리", "접근성", "인터랙션"],
        result: "모바일 사용성 테스트 통과, iOS/Android 동일 UX 제공",
      },
      {
        id: 3,
        title: "스크롤 애니메이션 섹션",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        problem: "정적인 페이지로 인해 콘텐츠 몰입도가 낮았습니다.",
        solution:
          "Intersection Observer로 스크롤 진입 시 fade-up 애니메이션을 적용했습니다. prefers-reduced-motion을 존중했습니다.",
        skills: ["Intersection Observer", "CSS Animation", "성능 최적화"],
        result: "페이지 체류 시간 15% 증가, CLS 0.05 이하 유지",
      },
    ],
  },
  {
    id: 3,
    title: "React 프로젝트",
    category: "React / Vite",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    desc: "컴포넌트 기반 SPA 개발",
    overview:
      "React와 Vite를 활용해 재사용 가능한 컴포넌트 구조로 SPA를 개발했습니다. 상태 관리와 라우팅을 적용해 실무형 프로젝트 경험을 쌓았습니다.",
    role: "Front-end Developer",
    period: "2024.07 – 2025.01",
    tools: ["React", "Vite", "React Router", "CSS Modules"],
    skills: ["컴포넌트 설계", "상태 관리", "라우팅", "API 연동"],
    detailItems: [
      {
        id: 1,
        title: "포트폴리오 SPA",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        problem: "단일 페이지로 작업물 상세를 보여주기 어려웠습니다.",
        solution:
          "React Router로 목록-상세 페이지를 분리하고, 데이터 기반 카드 렌더링을 구현했습니다.",
        skills: ["React Router", "컴포넌트 분리", "데이터 구조화"],
        result: "작업물 탐색 UX 개선, 코드 재사용성 향상",
      },
      {
        id: 2,
        title: "재사용 UI 컴포넌트",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        problem: "버튼·카드·모달이 페이지마다 중복 구현되었습니다.",
        solution:
          "props 기반 공통 컴포넌트를 설계하고, 일관된 스타일 가이드를 적용했습니다.",
        skills: ["Props 설계", "컴포넌트 추상화", "CSS 모듈"],
        result: "코드 중복 50% 감소, UI 일관성 확보",
      },
    ],
  },
  {
    id: 4,
    title: "클론 코딩",
    category: "Clone Coding",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    desc: "실서비스 UI/UX 분석 및 구현",
    overview:
      "Netflix, Airbnb 등 실서비스를 분석해 레이아웃·인터랙션·반응형 패턴을 학습하고 클론 구현했습니다.",
    role: "Front-end Learner",
    period: "2023.09 – 2024.02",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    skills: ["UI 분석", "레이아웃 복제", "호버/트랜지션", "반응형"],
    detailItems: [
      {
        id: 1,
        title: "스트리밍 서비스 메인 UI",
        image:
          "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
        problem: "카드 슬라이더와 호버 프리뷰 구현 난이도가 높았습니다.",
        solution:
          "CSS transform과 overflow hidden으로 가로 스크롤 캐러셀을 구현했습니다.",
        skills: ["Flexbox", "Transform", "오버플로우 처리"],
        result: "원본과 유사한 인터랙션 재현, 스크롤 성능 최적화",
      },
      {
        id: 2,
        title: "예약 플랫폼 검색 UI",
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
        problem: "복잡한 필터 UI와 날짜 선택 UX를 구현하기 어려웠습니다.",
        solution:
          "단계별 필터 패널과 커스텀 date picker UI를 HTML/CSS로 구현했습니다.",
        skills: ["폼 UI", "레이어드 레이아웃", "z-index 관리"],
        result: "모바일·데스크톱 반응형 필터 UI 완성",
      },
    ],
  },
];

export default worksData;
