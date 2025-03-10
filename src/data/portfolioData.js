export const portfolioData = [
  {
    id: 1,
    image: '/images/portofolio/icon.jpg',
    detailImages: ['/images/a.png', '/images/b.png', '/images/c.png'],
    content:
      '기존 울산 장애인 협회의 단일적이고 비효율적인 페이지를 사용자 친화적으로 재설계하여, 신청 과정을 더욱 간편하고 직관적으로 개선했습니다.',
    title: '울산 신장장애인 협회',
    category: 'WEBSITE',
    link: 'http://www.kidneyus.or.kr/',
    description: '',
    tags: ['React', 'Nest.js', 'MySQL'],
    contribution: '80%',
    role: '프론트엔드 개발, UI/UX 디자인, 백엔드 개발',
    githubUrl: [
      'https://github.com/Intercore998/kidneyulsan-frontend',
      'https://github.com/Intercore998/kidneyulsan-backend',
    ],
    mainLogic: '후원/기부 신청, 회원관리 api',
    mainContribution:
      '1. 사용자 친화적인 UI/UX 구현\n2. 장기기증 후원, 기부 신청 페이지\n3. 공지사항 등 게시글 관리\n4. 주간보호센터 프로그램 일정 관리\n5. 회원가입/로그인페이지 리뉴얼(주소, 메일인증)\n6. 신청정보를 관리자 메일/인쇄/pdf다운 기능 개선',
    commitHistory: `* a5847f2 - dongyu-youn, 2025-03-07 20:27:33 +0900 : 2025.3.7 HistoryPage.jsx 수정: 연혁 페이지의 타임라인 데이터 업데이트 및 UI 개선 authApi.jsx 수정: 사용자 인증 관련 API 메서드 추가 및 수정  SignupPage.jsx 수정: 회원가입 페이지 UI 개선 및 인증 로직 추가  SponsorshipPage.jsx 수정: 후원 페이지의 기능 개선 및 UI 업데이트
| 
* e1b13b0 - dongyu-youn, 2025-03-01 12:35:25 +0900 : 2025.3.1 style: 공지사항 첨부파일 다운로드 UI 개선
| - 첨부파일 다운로드 링크 우측 정렬로 변경
| - 파일명 표시 방식 개선
| - 다운로드 버튼 디자인 정리
| 
* d6a2c20 - dongyu-youn, 2025-02-19 14:55:34 +0900 : 2025.2.19 fix: 물품기부 신청 메일 전송 오류 수정
| - handleSubmit 함수 로직 개선
|   - 필수 입력값 검증 추가 (성명, 이메일, 후원물품, 신청날짜)
|   - 날짜 포맷 변환 로직 추가
|   - API 응답 체크 조건 수정
|   - 메일 전송 데이터 구조 개선
| 
| - 로깅 추가
|   - API 응답 로깅 강화
|   - 메일 데이터/응답 로깅 추가
|   - 에러 메시지 구체화
| 
| - 에러 처리 개선
|   - 옵셔널 체이닝 적용
|   - 안전한 데이터 접근
|   - 구체적인 에러 메시지 추가
| 
* 2a00038 - dongyu-youn, 2025-02-13 15:35:03 +0900 : 2025.2.13 fix: 물품기부 신청 메일 전송 오류 수정
| - handleSubmit 함수 로직 개선
|   - 필수 입력값 검증 추가 (성명, 이메일, 후원물품, 신청날짜)
|   - 날짜 포맷 변환 로직 추가
|   - API 응답 체크 조건 수정
|   - 메일 전송 데이터 구조 개선
| 
| - 로깅 추가
|   - API 응답 로깅 강화
|   - 메일 데이터/응답 로깅 추가
|   - 에러 메시지 구체화
| 
| - 에러 처리 개선
|   - 옵셔널 체이닝 적용
|   - 안전한 데이터 접근
|   - 구체적인 에러 메시지 추가
| 
* ac91333 - dongyu-youn, 2025-02-07 10:24:09 +0900 : 2025.2.7 fix: 메인 페이지 뉴스 섹션 데이터 순서 수정
| 1. AlertSection 컴포넌트 수정
| - 협회소식과 주간보호소식 데이터 순서 변경
| - contents 배열의 순서를 daycare(협회소식), community(주간보호소식) 순으로 변경
| - 각 섹션별 최신 4개 게시물 표시 유지
| 
| 2. 기타 개선사항
| - 불필요한 console.log 제거
| - 코드 가독성 개선
| 
* 2fef871 - dongyu-youn, 2025-02-04 21:45:14 +0900 : 2025.2.4 1. fix: 이미지 경로에 기본 API URL 추가
| - 이미지 src 속성에 IMG_URL 환경변수 추가
| - 이미지 로딩 실패 문제 해결
| - ScheduleCard 컴포넌트 이미지 경로 수정
| 
| 2. refactor: 상세 페이지 레이아웃 통일
| 
| - 모든 DetailPage에 일관된 여백(px-8) 적용
| - 뒤로가기 버튼 제거
| - 목록보기 버튼 위치를 하단 중앙으로 통일
| - 컨테이너 패딩 및 여백 스타일 일관성 유지
| 
| 3. feat: 조직도 컴포넌트 구조 개선
| 
| - Tree 컴포넌트 레이아웃 및 스타일 수정
| - 형제 노드 연결선 추가
| - 노드 크기 및 간격 조정
| - 조직도 데이터 구조 개선
| 
| 4. fix: 공지사항 수정 기능 버그 수정
| 
| - updateNotice API 함수 매개변수 구조 개선
| - 게시글 ID undefined 전달 문제 해결
| - handleUpdate 함수 데이터 전달 방식 수정
| 
* b6c0cc1 - dongyu-youn, 2025-02-04 11:03:01 +0900 : 2025.2.4 1. fix: 이미지 경로에 기본 API URL 추가
| - 이미지 src 속성에 IMG_URL 환경변수 추가
| - 이미지 로딩 실패 문제 해결
| - ScheduleCard 컴포넌트 이미지 경로 수정
| 
| 2. refactor: 상세 페이지 레이아웃 통일
| 
| - 모든 DetailPage에 일관된 여백(px-8) 적용
| - 뒤로가기 버튼 제거
| - 목록보기 버튼 위치를 하단 중앙으로 통일
| - 컨테이너 패딩 및 여백 스타일 일관성 유지
| 
| 변경된 파일:
| - src/pages/community/notice/NoticeDetailPage.jsx
| - src/pages/community/news/NewsDetailPage.jsx
| - src/pages/community/newsletter/NewsDetailPage.jsx
| - src/pages/daycare/news/NewsDetailPage.jsx
| 
* ff6066a - dongyu-youn, 2025-02-02 21:43:37 +0900 : 2022.2.2 refactor: 상세 페이지 레이아웃 통일
| - 모든 DetailPage에 일관된 여백(px-8) 적용
| - 뒤로가기 버튼 제거
| - 목록보기 버튼 위치를 하단 중앙으로 통일
| - 컨테이너 패딩 및 여백 스타일 일관성 유지
| 
| 변경된 파일:
| - src/pages/community/notice/NoticeDetailPage.jsx
| - src/pages/community/news/NewsDetailPage.jsx
| - src/pages/community/newsletter/NewsDetailPage.jsx
| - src/pages/daycare/news/NewsDetailPage.jsx
| 
* 3e955d7 - dongyu-youn, 2025-01-31 14:25:01 +0900 : 2025.1.31 fix: 뉴스 수정 페이지 라우팅 및 기능 개선
| [라우팅 수정]
| - community/news/edit/:id 라우팅 경로 추가
| - daycare/news/edit/:id 라우팅 경로 추가
| - 라우팅 우선순위 조정 (edit 경로를 :id 경로보다 앞에 배치)
| 
| [기능 개선]
| - 데이터 유효성 검사 로직 추가
| - 에러 처리 및 사용자 피드백 개선
| - 디버깅을 위한 로깅 추가
| 
| BREAKING CHANGE: 뉴스 수정 페이지 라우팅 구조 변경
| 
* 3b509c2 - dongyu-youn, 2025-01-27 20:03:29 +0900 : feat: 공지사항 데이터 로직을 커스텀 훅으로 분리
| - useNoticeData 커스텀 훅 생성
|   - 공지사항 데이터 fetch 로직
|   - 페이지네이션 상태 관리
|   - URL 파라미터 기반 페이지 동기화
| - NoticePage 컴포넌트에서 데이터 로직 제거 및 커스텀 훅 적용
| 
* e57f906 - dongyu-youn, 2025-01-24 18:03:10 +0900 : feat
| 
* 78d4e94 - dongyu-youn, 2025-01-24 17:31:57 +0900 : feat
| 
* fae6d8f - dongyu-youn, 2025-01-24 11:38:38 +0900 : 2025.1.24 refactor: 페이지 구조 개선 및 컴포넌트 정리
| 1. 페이지 구조 개선
| - TherapyPage에서 FacilitiesPage로 인공신장실 현황 섹션 이동
| - 각 페이지의 관심사 분리 및 응집도 향상
| - 중복 코드 제거 및 재사용성 개선
| 
| 2. 컴포넌트 정리
| - ScheduleCard 컴포넌트 분리 및 개선
|   - 이미지 처리 로직 추가
|   - Props 타입 정의 추가
|   - 레이아웃 및 스타일링 개선
| 
| 3. 환경 설정 업데이트
| - 프로덕션 환경 변수 설정 추가
| - API 엔드포인트 설정 업데이트
| - 카카오맵 API 키 설정 추가
| 
| 4. 기타 개선사항
| - 스크롤 관련 컴포넌트 로직 개선
| - 모달 컴포넌트 기능 개선
| - 테이블 페이징 로직 수정
| 
* 831c1a3 - dongyu-youn, 2025-01-24 11:37:40 +0900 : 2025.1.24 refactor: 페이지 구조 개선 및 컴포넌트 정리
  1. 페이지 구조 개선
  - TherapyPage에서 FacilitiesPage로 인공신장실 현황 섹션 이동
  - 각 페이지의 관심사 분리 및 응집도 향상
  - 중복 코드 제거 및 재사용성 개선
  
  2. 컴포넌트 정리
  - ScheduleCard 컴포넌트 분리 및 개선
    - 이미지 처리 로직 추가
    - Props 타입 정의 추가
    - 레이아웃 및 스타일링 개선
  
  3. 환경 설정 업데이트
  - 프로덕션 환경 변수 설정 추가
  - API 엔드포인트 설정 업데이트
  - 카카오맵 API 키 설정 추가
  
  4. 기타 개선사항
  - 스크롤 관련 컴포넌트 로직 개선
  - 모달 컴포넌트 기능 개선
  - 테이블 페이징 로직 수정
  
* b58eb46 - dongyu-youn, 2025-01-20 17:51:02 +0900 : 2025.1.20 fix(community): 행사 일정 페이지 구문 오류 수정
  - SchedulePage 컴포넌트 구조 재정리
  - Card 컴포넌트 추가 및 구현
  - import 문 정리 및 누락된 의존성 추가
  - 반응형 디자인 적용 (모바일/데스크톱)
  - 행사 목록 그리드 레이아웃 구현
  
  관련 파일:
  - src/pages/community/programs/SchedulePage.jsx
  
* 41cee56 - dongyu-youn, 2025-01-20 17:11:11 +0900 : 프로그램데이터
| 
* 539516b - dongyu-youn, 2025-01-20 16:32:39 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 39654f7 - dongyu-youn, 2025-01-20 16:31:51 +0900 : 비번변경 제출 안됨
  
* 6b48ab6 - dongyu-youn, 2025-01-20 14:39:17 +0900 : 2025.1.20 initalData 오류
  
* 283feb5 - dongyu-youn, 2025-01-20 13:03:18 +0900 : 2025.1.20 feat(daycare): 주간보호센터 프로그램 상세 페이지 구현
  - ProgramDetailPage 컴포넌트 생성 및 라우팅 연결
  - 프로그램 상세 정보 표시 (제목, 운영시간, 정원, 상태 등)
  - 이미지 및 상세 설명 표시 기능 추가
  - 목록/수정/삭제 버튼 기능 구현
  - 반응형 디자인 적용 (모바일/데스크톱)
  
  관련 파일:
  - src/pages/daycare/programs/ProgramDetailPage.jsx
  - src/router/daycareRouter.jsx
  
* e42b92d - dongyu-youn, 2025-01-19 18:34:06 +0900 : 배경 투명 문제 해결
| 
* e664e9d - dongyu-youn, 2025-01-19 18:26:37 +0900 : 2025.1.19 feat: 신장장애인 프로그램 일정 관리 기능 및 스크롤 기능 구현
| 1. 신장장애인 프로그램 일정 관리 기능
| - ScheduleEditPage 컴포넌트 구현
|   - 프로그램 일정 등록 및 수정 기능
|   - 시작일/종료일, 장소, 내용 입력 폼 구현
|   - 이미지 첨부 기능 (최대 5개)
|   - 반응형 레이아웃 적용
| 
| 2. 페이지 이동 시 스크롤 최상단 이동 기능
| - ScrollToTheTop 컴포넌트 추가
|   - 페이지 경로 변경 시 자동으로 스크롤을 최상단으로 이동
|   - React Router의 useLocation, useNavigationType 훅 활용
| - root.jsx 수정
|   - 루트 레이아웃에 ScrollToTheTop 컴포넌트 통합
| - App.jsx 정리
|   - RouterProvider 구조에 맞게 컴포넌트 구성 최적화
| 
| 개선사항:
| - 사용자 경험 향상을 위한 자동 스크롤 기능 추가
| - 프로그램 일정 관리 UI/UX 개선
| - 코드 구조 최적화
| 
* 597b8fe - dongyu-youn, 2025-01-18 22:00:13 +0900 : 2025.1.18 feat: 일정 관리 기능 개선 및 폼 입력 UX 향상
| 1. 일정 관리 기능 개선
| - SchedulePage에서 카드 컴포넌트 분리 (ScheduleCard)
| - 일정 상세보기 버튼 추가 및 상세 페이지 연결
| - 캘린더 토글 버튼 위치 및 스타일 개선
| 
| 2. 폼 입력 UX 개선
| - 모든 입력 폼에 placeholder 예시 추가
|   - 물품기부 신청서
|   - 재능기부 신청서
|   - 장기기증 등록 신청서
|   - 조직기증 등록 신청서
| 
| 3. 입력 필드 예시 추가
| - 성명: "예) 홍길동"
| - 생년월일: "예) 991104"
| - 주소: "예) 울산광역시 남구 중앙로 274"
| - 전화번호: "예) 052-123-4567"
| - 휴대전화: "예) 010-1234-5678"
| - 이메일: "예) example@email.com"
| - 직장명: "예) (주)울산기업"
| - 직장번호: "예) 052-987-6543"
| - 기타 각 폼별 특화 필드 예시 추가
| 
* cb241ad - dongyu-youn, 2025-01-17 22:17:35 +0900 : 2025.1.17 feat: 모바일 UI/UX 개선 및 API 연동 수정
| - 모바일 UI 개선
|   - TabSwiper 컴포넌트에 스와이프 애니메이션 추가
|   - 연혁 페이지에 모바일용 TabSwiper 적용
|   - 메인 섹션 모바일 여백 조정
| 
| - API 연동 수정
|   - 뉴스레터 API 경로 수정 (communityNewsApi → newsLetterApi)
|   - 후원 관리 페이지 API 호출 로직 개선
|   - 기부금/물품 기부 데이터 처리 방식 통일
| 
| - 네비게이션 개선
|   - 역대회장 메뉴 제거
|   - 운영/이용안내 메뉴 제거
|   - 회원 가입 및 지원 안내 메뉴 추가
| 
| - 기타 수정사항
|   - 메인 배너 이미지 확장자 변경 (jpg → png)
|   - 점심시간 표기 수정 (12:00-13:00 → 11:30-13:00)
|   - 관련사이트 바로가기 버튼 제거
| 
* 93ce624 - dongyu-youn, 2025-01-17 17:22:59 +0900 : fullWidth캐러셀
| 
* d8e7548 - dongyu-youn, 2025-01-17 17:08:25 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 5e374d5 - dongyu-youn, 2025-01-17 17:07:51 +0900 : 2025.1.17 feat: 기부/후원 신청 폼 UI 개선 및 상세페이지 레이아웃 통일
| - 기부/후원 신청 폼 UI 개선
|   - Material Tailwind Input 컴포넌트로 통일
|   - placeholder를 label로 변경
|   - 입력 필드 스타일 통일
|   - 모바일/데스크톱 레이아웃 최적화
| 
| - 상세페이지 레이아웃 개선
|   - 목록보기 버튼 추가 (커뮤니티/주간보호센터 소식/공지사항)
|   - 최대 너비 제한 (75rem/layout) 적용
|   - 여백 및 정렬 통일
| 
| - 텍스트 및 UI 개선
|   - 로그인/회원가입 페이지 문구 수정
|   - 체크마크 기호 통일 (√ → ✓)
|   - 관리자 테이블 정렬 및 컬럼 추가
| 
* 36eb698 - dongyu-youn, 2025-01-17 15:02:59 +0900 : 2025.1.17 feat: 주소 입력 기능 개선 및 환경 설정 업데이트
| - 다음(Daum) 우편번호 검색 기능 추가
|   - react-daum-postcode 패키지 설치
|   - DaumPostCodeInput 컴포넌트 구현
|   - 회원가입 페이지 주소 입력 UI 개선
| 
| - 회원가입 폼 개선
|   - 생년월일 입력 안내 텍스트 추가
|   - 인증번호 관련 변수명 정리
|   - 주소 입력 필드 DaumPostCode로 교체
| 
| - 개발 환경 설정 추가
|   - dev:prod 스크립트 추가 (프로덕션 모드로 개발 서버 실행)
| 
| - 사용자 상태 관리 개선
|   - useAuth hook에서 userState 리셋 로직 추가
| 
* c53008e - dongyu-youn, 2025-01-17 12:57:44 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 92c9a02 - dongyu-youn, 2025-01-17 12:56:46 +0900 : 2025.1.17 feat: UI/UX 개선 및 기능 업데이트
| - 로고 및 메인 배너 디자인 개선
| - 관리자 페이지 스타일 통일
| - 메일 전송 옵션 다양화
| - 기부/후원 신청 폼 UI 개선
| - 운영시간 및 라벨 텍스트 수정
| - 각종 레이아웃 버그 수정
| 
* 8dbad49 - dongyu-youn, 2025-01-17 09:48:19 +0900 : 2025.1.17 공지사항 테이블 꺠진거 수정
| 
* ac8af9c - dongyu-youn, 2025-01-16 21:34:19 +0900 : 2025.1.16 fix: 모바일 레이아웃 개선 및 테이블 반응형 구현
| 1. 모바일 레이아웃 패딩 수정
| - 모든 페이지의 sm:p-8을 sm:px-8로 변경하여 좌우 패딩만 적용
| - 불필요한 py-12 제거
| - 페이지 여백 일관성 개선
| 
| 2. 관리자 테이블 모바일 대응
| - AdminDonationTable, AdminSponsorTable 모바일 버전 추가
| - 테이블을 카드 형태의 UI로 변경
| - 반응형 디자인 적용 (md 브레이크포인트 기준)
| 
| 3. 기타 UI 개선
| - 버튼 아이콘 크기 조정
| - 그림자와 테두리 추가로 구분감 강화
| - 모바일에서의 가독성 개선
| 
* 55bb6bd - dongyu-youn, 2025-01-16 17:16:33 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 66fdb2d - dongyu-youn, 2025-01-16 17:16:09 +0900 : 2025.1.16 물품후원, 재능기부 registration 작성
| 
* c20e9e4 - dongyu-youn, 2025-01-16 16:31:30 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 18422ef - dongyu-youn, 2025-01-16 16:30:30 +0900 : 2025.1.16 feat: 뉴스 상세 페이지 구현 및 후원 관리 기능 개선
| 1. 뉴스 상세 페이지 구현
| - 주간이용시설 뉴스 상세 페이지 라우팅 추가
| - 뉴스 상세 페이지 레이아웃 및 디자인 개선
| - 로딩/에러 상태 처리 추가
| - 이전/다음 글 네비게이션 기능 구현
| 
| 2. 후원 관리 기능 개선
| - 기부금/물품 후원 현황 테이블 추가
| - 후원 유형별 데이터 조회 기능 구현
| - 후원 현황 실시간 조회 기능 추가
| - AdminSponsorTable 컴포넌트 불필요한 컬럼 제거
| 
| 3. 라우터 구조 개선
| - communityRouter에 뉴스 관련 라우트 추가
| - daycareRouter에 뉴스 상세 페이지 라우트 추가
| - 중복 코드 정리 및 import 구문 정리
| 
| 4. 기타 수정사항
| - 페이지 레이아웃 일관성 개선
| - 불필요한 코드 및 주석 제거
| - 에러 처리 로직 개선
| 
* c092b69 - dongyu-youn, 2025-01-16 11:45:11 +0900 : 2025.1.16 goods도 이름 바꾸고 비활성화
| 
* eb8d3be - dongyu-youn, 2025-01-16 11:40:34 +0900 : privacy 프론트로 로직 수정
  
* f699ca3 - dongyu-youn, 2025-01-16 11:19:25 +0900 : 필드명 수정
  
* 7b002a7 - dongyu-youn, 2025-01-16 10:48:32 +0900 : 2025.1.16 장기기증/후원 신청자현황 필터링 버튼
| 
* 0b07b6e - dongyu-youn, 2025-01-16 10:00:08 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 7dcf468 - dongyu-youn, 2025-01-16 09:59:34 +0900 : 2025.1.16 feat: 폼 개인정보 동의 섹션 추가 및 주간이용시설 메뉴 수정
| 1. 개인정보 수집/이용 동의 섹션 추가
| - 장기/조직/물품/재능기부 신청 폼에 개인정보 동의 섹션 추가
| - 각 폼의 특성에 맞는 수집 항목과 이용 목적 작성
| - 동의 체크박스 필수 입력으로 설정
| 
| 2. 주민등록번호 입력 필드를 생년월일로 변경
| - 모든 기부 신청 폼의 주민등록번호 입력을 생년월일(6자리)로 변경
| - 숫자만 입력 가능하도록 제한
| 
| 3. 주간이용시설 메뉴 구조 변경
| - nav.json에서 '주간이용시설 소개' 메뉴 제거
| - ProgramsPage 컴포넌트에서 ProgramProvider 제거
| 
| 4. 기타 수정사항
| - NewsPage의 배너 이미지 경로 수정 (banner5.png → banner4.png)
| 
* dfd3e99 - dongyu-youn, 2025-01-15 20:35:20 +0900 : 2025.1.15 refactor: 인증 관련 기능 개선 및 UI 수정
| - 회원가입/로그인 로직 개선
|   - 휴대폰 인증을 이메일 인증으로 변경
|   - 회원가입 완료 후 홈 화면으로 이동하도록 수정
|   - 로그인 성공 시 쿠키에 토큰 저장하도록 유지
| 
| - UI/UX 개선
|   - 기부/후원 신청 폼 모바일 대응 개선
|   - 법정대리인 동의 섹션 모바일 레이아웃 추가
|   - NoticeBoard 디자인 개선 (사이즈 및 간격 조정)
| 
| - 네비게이션 메뉴 구조 변경
|   - 운영/이용안내 임시 비활성화
|   - 회원가입 안내 메뉴 제거
| 
| Changes:
| - src/hook/useAuth.jsx: 인증 로직 개선
| - src/pages/admin/SignupPage.jsx: 회원가입 프로세스 수정
| - src/pages/form/*: 신청 폼 모바일 대응
| - src/assets/json/nav.json: 메뉴 구조 변경
| 
* 180eb3e - dongyu-youn, 2025-01-15 19:23:48 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 3011e85 - dongyu-youn, 2025-01-15 19:22:45 +0900 : 2025.1.15 feat: 후원 신청자 관리 기능 추가 및 UI 개선
  - 후원 페이지에 관리자용 신청자 현황 탭 추가
  - 후원 신청 목록을 볼 수 있는 AdminSponsorTable 컴포넌트 구현
  - 메인 페이지 NoticeBoard 디자인 개선 (사이즈 및 간격 조정)
  - 네비게이션 바 반응형 디자인 개선 (간격 및 최대 너비 조정)
  
  Changes:
  - src/pages/love/SponsorshipPage.jsx: 신청자 현황 탭 및 관련 기능 추가
  - src/components/donation/AdminSponsorTable.jsx: 신규 컴포넌트 생성
  - src/section/main/NoticeBoard.jsx: 디자인 개선
  - src/section/nav/DesktopHeaderNav.jsx: 반응형 디자인 개선
  
* 3e121f4 - dongyu-youn, 2025-01-15 12:30:30 +0900 : 2025.1.15 merge전으로 복귀
| 
* c806fa9 - dongyu-youn, 2025-01-15 12:25:24 +0900 : 2025.1.15 feat: 모바일 배너 이미지 대응 및 페이지 레이아웃 개선
| - 경로별 모바일 배너 이미지 추가
|   - association/*: main_02 1.jpg
|   - kidney/*: main_02 2.jpg
|   - daycare/*: main_02 4.jpg
|   - community/*: main_02 6.jpg
| 
| - PageHeader 컴포넌트 모바일 대응
|   - isMobile 상태 추가 (window.innerWidth <= 768)
|   - 모바일/데스크톱 조건부 배너 이미지 렌더링
| 
| - 페이지 레이아웃 개선
|   - 모바일 환경 최적화
|   - 반응형 디자인 적용
|   - 폰트 사이즈 및 여백 조정
| 
* 8096e2c - dongyu-youn, 2025-01-14 22:21:03 +0900 : 2025.1.14 모바일 이미지 수정
| 
* 7b4395a - dongyu-youn, 2025-01-14 21:07:58 +0900 : 2025.1.14 fix: 모바일 반응형 UI 개선 및 레이아웃 버그 수정
| - 모바일 환경에서 입력 폼 레이아웃 깨짐 현상 수정
|   - TalentDonationInput
|   - GoodsDonationInput
|   - OrganDonationRegistrationInput
| 
| - 탭 메뉴 텍스트 줄바꿈 방지
|   - SponsorshipPage 탭 버튼에 whitespace-nowrap 적용
| 
| - 테이블 레이아웃 모바일 대응
|   - 입력 폼 테이블 구조 개선
|   - sm 사이즈에서 flex/block 전환 구조 추가
| 
| - 불필요한 여백 및 스타일 정리
|   - 중복 공백 제거
|   - 불필요한 border 스타일 제거
| 
* a2461fa - dongyu-youn, 2025-01-14 21:07:25 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into feature/table
| 
* 7909302 - dongyu-youn, 2025-01-14 17:14:51 +0900 : 2025.1.14 운영시설 링크 연결
| 
* c5751d3 - dongyu-youn, 2025-01-14 17:01:58 +0900 : 2025.1.14 style: 레이아웃 및 UI 개선
| 1. 네비게이션 스타일 수정
| - DesktopSubNav 높이 값 고정 (h-[3.125rem])
| - FooterNav 패딩 값 조정
| 
| 2. 메인 배너 텍스트 스타일 개선
| - GradiantImageWithCenterText 컴포넌트 그림자 효과 제거
| - 텍스트 정렬 및 여백 조정
| 
| 3. 로고 컴포넌트 레이아웃 수정
| - 로고 텍스트 정렬 방식 개선 (flex-row)
| - 반응형 디자인 최적화
| - 텍스트 줄바꿈 방지 (whitespace-nowrap)
| 
| 4. 페이지 레이아웃 구조 개선
| - DonationPage 관리자 기능 분리
| - SponsorshipPage 탭 구조 개선
| - 여백 및 정렬 일관성 유지
| 
* 1c973c5 - dongyu-youn, 2025-01-14 15:24:47 +0900 : 2025.1.14 feat: CKEditor 스타일 개선 및 NewsEditPage 구현
| 1. CKEditor 스타일 수정
| - CKEditor 높이 400px로 통일
| - .ck-blurred, .ck-focused, .ck-editor__editable 높이 설정
| - CKEditor.css 파일 추가
| 
| 2. 주간보호센터 소식 작성 페이지 구현
| - NewsEditPage 컴포넌트 생성
| - 제목, 내용, 날짜, 유형 입력 필드 추가
| - 파일 첨부 기능 추가
| - CKEditor 통합
| 
| 3. 라우터 설정
| - daycareRouter에 news/write 경로 추가
| - NewsEditPage 컴포넌트 lazy loading 설정
| 
* b0db3ad - dongyu-youn, 2025-01-14 14:51:30 +0900 : feat
| 
* fcfbcf8 - dongyu-youn, 2025-01-14 14:47:30 +0900 : goods
| 
* a45f64c - dongyu-youn, 2025-01-14 14:39:56 +0900 : 2025.1.14 feat: 주간보호센터 소식 페이지 구현
| 1. NewsPage 컴포넌트 구현
| - AdminTableWithPaging 컴포넌트 통합
| - 테이블 기본 구조 설정 (번호, 제목, 작성자, 작성일, 조회수)
| - 페이지네이션 초기 설정 추가
| 
| 2. 테이블 구조 최적화
| - nameMap 객체를 통한 컬럼 헤더 정의
| - 초기 데이터 및 페이지 정보 구조화
| - 레이아웃 최대 너비 조정 (max-w-layout)
| 
| 3. 페이지 레이아웃 구성
| - PageHeader 컴포넌트 적용
| - 배너 이미지 및 아이콘 설정
| - 반응형 패딩 및 마진 조정
| 
* b86a43e - dongyu-youn, 2025-01-14 12:57:39 +0900 : 2025.1.14 feat: 회원 관리 기능 개선
| 1. 회원정보 수정 기능 추가
| - 회원정보 수정 페이지 구현
| - 기존 회원 정보 표시 및 수정 기능
| - 주소 입력 필드 추가 (우편번호, 주소, 상세주소)
| 
| 2. 회원가입 페이지 개선
| - 주소 입력 필드 추가
| - 입력 필드 순서 최적화
| - 사용자 경험 개선을 위한 UI 수정
| 
| 3. 비밀번호 변경 기능 추가
| - 비밀번호 변경 페이지 구현
| - 현재 비밀번호 확인 로직 추가
| - 새 비밀번호 유효성 검사 추가
| 
| 4. 헤더 네비게이션 개선
| - 회원정보 수정 버튼 추가
| - 로그인/로그아웃 상태에 따른 UI 분기 처리
| 
* ca1bcde - dongyu-youn, 2025-01-13 21:24:57 +0900 : 2025.1.13 feat: 공지사항 및 프로그램 관리 기능 개발
| 1. 공지사항 기능 개발
| - 공지사항/프로그램 타입 구분 추가
| - 프로그램 카테고리(오늘의 프로그램/생활체 인지력향상) 추가
| - 이미지 업로드 기능 추가
| - 공지사항 작성/수정 페이지 구현
| 
| 2. 페이지별 텍스트 강조
| - 공지사항 페이지: "공지사항" 타이틀 강조
| - 프로그램 페이지: "여가활동 지원", "교육훈련 지원", "일상생활 지원" 강조
| - 주간보호센터 페이지: "주간보호센터" 타이틀 강조
| - 스케줄 페이지: "1월 1주차 운영 프로그램 3개" 강조
| - 뉴스레터 페이지: "협회소식" 타이틀 강조
| 
| 3. 버그 수정
| - NoticeEditPage 렌더링 문제 해결
| - CKEditor 초기화 문제 해결
| - 라우팅 경로 수정
| 
| BREAKING CHANGE: 공지사항 데이터 구조가 변경되었습니다.
| - type 필드 추가 (NOTICE | PROGRAM)
| - category 필드 추가 (TODAY | LIFE)
| - images 필드 추가
| 
* 38dc32f - dongyu-youn, 2025-01-13 13:57:04 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 018a97e - dongyu-youn, 2025-01-13 13:54:34 +0900 : feat: 로그인/회원가입 기능 개선
| - 회원가입 후 자동 로그인 기능 추가
| - 로그인 상태에 따른 헤더 UI 변경
|   - 로그인 시: 로그아웃 버튼 표시
|   - 로그아웃 시: 로그인/회원가입 버튼 표시
| - 에러 처리 및 사용자 피드백 개선
| - 한글 메시지로 변경
| 
| BREAKING CHANGE: useAuth 훅의 useRegister 함수가 useSignup으로 변경되었습니다.
| 
* 397ddee - dongyu-youn, 2025-01-13 10:09:25 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* c6241e5 - dongyu-youn, 2025-01-13 10:08:52 +0900 : 2025.1.13 refactor: 병원이송센터 페이지 레이아웃 통일
| - HopeCenterPage와 동일한 레이아웃 구조로 변경
| - 불필요한 컴포넌트 및 스타일 제거 (StepFlow, ChevronRightIcon)
| - 반응형 디자인 개선 (모바일/데스크톱)
| - 이미지 갤러리 섹션 스타일링 통일
| - 기존 텍스트 콘텐츠 유지
| 
* 7373934 - dongyu-youn, 2025-01-12 18:59:19 +0900 : 2025.1.12 feat: 페이지 레이아웃 및 디자인 통일
| - 주간보호센터 프로그램 페이지 UI 개선
|   - 카드 디자인을 스케줄 페이지와 통일
|   - 반응형 레이아웃 적용
|   - 프로그램 정보 표시 방식 개선
| 
| - 공통 컴포넌트 스타일링 통일
|   - PageHeader 컴포넌트 스타일 일관성 유지
|   - 카드 컴포넌트 디자인 패턴 통일
|   - 반응형 그리드 시스템 적용
| 
| - 이미지 리소스 정리
|   - 프로그램 이미지 경로 수정
|   - 아이콘 SVG 파일 추가
| 
| - 라우터 구조 개선
|   - 중복 라우트 제거
|   - 컴포넌트 import 경로 정리
| 
* e2438c3 - dongyu-youn, 2025-01-12 18:40:10 +0900 : 2025.1.12 feat: 주간보호센터 프로그램 페이지 UI 개선
| - 프로그램 카드 디자인을 스케줄 페이지와 통일
| - 반응형 레이아웃 개선 (모바일/태블릿/데스크톱)
| - 프로그램 정보 표시 방식 개선 (요일, 운영시간, 정원)
| - 이미지 경로 수정 및 스타일링 통일
| 
* 28acc4e - dongyu-youn, 2025-01-12 16:52:08 +0900 : 2025.1.12 feat: 장기기증 페이지 개선
| - 장기기증 신청 방식 3가지로 확장 (출력/메일/온라인)
| - 각 신청 방식별 모달 구현
| - UI/UX 개선 및 반응형 디자인 적용
| 
| fix: 네비게이션 및 레이아웃 버그 수정
| 
| - 모바일 네비게이션 스타일 수정
| - 푸터 레이아웃 정렬 문제 해결
| - 텍스트 줄바꿈 이슈 수정 (whitespace-nowrap 적용)
| 
| feat: 공지사항 기능 개선
| 
| - 공지사항 작성/수정 페이지 라우팅 추가
| - 관리자 테이블 컴포넌트 개선
| 
* a4daefc - dongyu-youn, 2025-01-11 22:24:15 +0900 : 2025.1.11 feat: 로그인/회원가입 페이지 UI 개선
| - 서울시 통합회원 로그인 스타일 적용
| - 로그인/회원가입 탭 네비게이션 구현
| - 회원가입 폼에 이름, 휴대폰 번호 필드 추가
| - Input 컴포넌트 label과 placeholder 스타일 개선
| - 안내 메시지 텍스트 수정
| 
| fix: 네비게이션 메뉴 스타일 버그 수정
| 
| - DesktopSubNav 메인 메뉴 레이블 색상 고정 (검은색)
| - 서브메뉴 항목만 활성화 상태에 따라 색상 변경되도록 수정
| 
| style: 페이지 레이아웃 일관성 개선
| 
| - 모든 페이지 상단 여백 통일 (lg:mt-[4.5rem])
| - 로고 하단 border 스타일 추가
| - 모바일 breadcrumb 네비게이션 추가
| 
* d227b7b - dongyu-youn, 2025-01-10 21:40:35 +0900 : 2025.1.10 transport간격 수정
| 
* 5ecb4ab - dongyu-youn, 2025-01-10 21:38:31 +0900 : 2025.1.10 mt간격조정
| 
* 279a1f1 - dongyu-youn, 2025-01-10 21:32:09 +0900 : 2025.1.10 git add src/context/NavContext.jsx git commit -m "fix: 로그인/회원가입 페이지 SubNav 동작 수정
| - 로그인/회원가입 페이지 진입 시 고정된 SubNav 제거
| - 해당 페이지에서 hover 시에만 SubNav 표시되도록 수정
| - 페이지 이동 시 SubMenu 상태 초기화 로직 추가"
| 
* 40901a2 - dongyu-youn, 2025-01-10 21:25:04 +0900 : feat: 회원가입 페이지 구현 - 회원가입 폼 컴포넌트 생성 - 아이디, 이메일, 비밀번호, 비밀번호 확인 필드 추가 - 비밀번호 확인 검증 로직 구현 - 로그인 페이지 이동 버튼 추가
| 
* 2d8f057 - dongyu-youn, 2025-01-10 20:54:45 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 06684e3 - dongyu-youn, 2025-01-10 20:54:17 +0900 : feat(nav): 데스크톱 서브네비게이션 구현
| - 서브메뉴 애니메이션 및 트랜지션 효과 추가
| - 현재 경로 하이라이팅 기능 구현
| - 외부 링크 지원을 위한 migration 분기 처리
| - 반응형 디자인 적용 (lg, xl, 2xl 브레이크포인트)
| - NavContext를 활용한 상태 관리 구현
| 
* 11076cc - dongyu-youn, 2025-01-10 17:17:05 +0900 : feat: 네비게이션 메뉴 하이라이트 시스템 개선
| - 홈 외 경로에서 고정 메뉴 상태 추가
| - 현재 경로 기반 서브메뉴 하이라이트 구현
| - 메뉴 호버 인터랙션 동작 개선
| 
| 상세 내용:
| 1. NavContext에 fixedMenu 상태 추가하여 현재 메뉴 위치 유지
| 2. 현재 활성화된 경로의 서브메뉴 #EC008C 색상으로 하이라이트
| 3. 다른 메뉴 호버 시 임시 표시하면서 고정 위치 유지하도록 수정
| 4. 메인 메뉴와 서브메뉴 항목 모두에 조건부 스타일링 적용
| 5. 메뉴 상태 관리 코드 정리
| 
| 개선된 사항:
| - 현재 위치의 시각적 계층 구조 유지
| - 사용자의 현재 위치에 대한 명확한 피드백 제공
| - 모든 페이지에서 일관된 메뉴 동작 보장
| 
* 04cca09 - dongyu-youn, 2025-01-10 16:48:33 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 709785c - dongyu-youn, 2025-01-10 16:47:45 +0900 : 2025.1.10 홈화면 noticeboard 작업
| 
* e7733d0 - dongyu-youn, 2025-01-10 14:07:33 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 13ded9d - dongyu-youn, 2025-01-10 14:05:57 +0900 : 2025.1.10 페이지수정
| 
* 44f7b39 - dongyu-youn, 2025-01-08 22:02:04 +0900 : 2025.1.8 1. feat: 메인페이지 서브메뉴 hover 이벤트 수정 메인페이지에서만 hover 시 서브메뉴가 표시되도록 수정 다른 페이지에서는 현재 페이지의 서브메뉴 고정 표시 2. style: 메인페이지 섹션 높이 및 스타일 통일 DonateSection과 NotificationSection 높이 통일 (31.25rem) FacilityGuide, NoticeBoard, ConsultationGuide 높이 통일 (25rem) 폰트 스타일 font-notoSans로 통일 패딩, 마진, 글씨 크기 등 스타일 일관성 적용 feat: 메인 배너 슬라이더 텍스트 추가 및 정렬 banner8.jpg 이미지의 텍스트 추출하여 슬라이더 데이터 추가 GradiantImageWithCenterText 컴포넌트 텍스트 시작점 PCMainNav와 동일하게 정렬 max-w-layout 적용하여 레이아웃 일관성 유지
| 
* 7d310a9 - dongyu-youn, 2025-01-08 16:43:18 +0900 : header오류
| 
* 94a42d6 - dongyu-youn, 2025-01-08 13:48:21 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* b9ce7ed - dongyu-youn, 2025-01-08 13:47:27 +0900 : 2025.1.8 82rem => layout
| mt 조정
| 
* 3f21c9d - dongyu-youn, 2025-01-08 13:20:30 +0900 : 2025.1.8 subnav ml대신 max-w추가 tailwind공통 max-w 지정
| 
* ecf9d79 - dongyu-youn, 2025-01-08 12:36:20 +0900 : merge
| 
* ace6aa9 - dongyu-youn, 2025-01-08 12:34:48 +0900 : 2025.1.8 헤더 오류 작업
| 
* db6a5ef - dongyu-youn, 2025-01-08 11:17:05 +0900 : 2025.1.8 subnav 고정 및 화면 너비 조정
| 
* 442e6a7 - dongyu-youn, 2025-01-08 10:26:17 +0900 : merge
| 
* cba5291 - dongyu-youn, 2025-01-07 21:32:14 +0900 : 2025.1.7 feat: 기부 섹션 스크롤 애니메이션 추가 - 모바일에서 텍스트 자동 스크롤 기능 구현 - tailwind 애니메이션 설정 추가 - 반응형 동작 구현 (sm 브레이크포인트)
| style: DonateSection 스타일링 개선
| - 테이블 레이아웃 수정
| - 텍스트 오버플로우 처리
| - 반응형 디자인 적용
| 
| feat: PageHeader 컴포넌트 생성
| - 페이지 헤더 섹션을 재사용 가능한 컴포넌트로 분리
| - 아이콘, 제목, 배너 이미지를 props로 관리
| - 일관된 스타일링 적용
| 
| refactor: 페이지 레이아웃 구조 통일
| - TransportCenterPage 헤더 구조 개선
| - ProjectsPage 헤더 구조 개선
| - OverviewPage 헤더 구조 개선
| - 공통 스타일링 및 레이아웃 적용
| 
| style: 디자인 시스템 표준화
| - 헤더 섹션 높이 통일 (13.75rem)
| - 아이콘 크기 및 간격 표준화
| - 제목 스타일 통일
| 
* 9c9acb3 - dongyu-youn, 2025-01-07 21:31:04 +0900 : feat: PageHeader 컴포넌트 생성 - 페이지 헤더 섹션을 재사용 가능한 컴포넌트로 분리 - 아이콘, 제목, 배너 이미지를 props로 관리 - 일관된 스타일링 적용
| refactor: 페이지 레이아웃 구조 통일
| - TransportCenterPage 헤더 구조 개선
| - ProjectsPage 헤더 구조 개선
| - OverviewPage 헤더 구조 개선
| - 공통 스타일링 및 레이아웃 적용
| 
| style: 디자인 시스템 표준화
| - 헤더 섹션 높이 통일 (13.75rem)
| - 아이콘 크기 및 간격 표준화
| - 제목 스타일 통일
| 
* ca97efe - dongyu-youn, 2025-01-07 17:21:56 +0900 : 2025.1.7 figma px=> rem 단위 조정
| 
* 86b4218 - dongyu-youn, 2025-01-07 17:04:41 +0900 : merge
| 
* 4e0cc41 - dongyu-youn, 2025-01-07 15:05:45 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/kidneyulsan-frontend into dongyu
| 
* 9cdba2b - dongyu-youn, 2025-01-07 15:04:25 +0900 : 2025.1.7 헤더 및 정적페이지
  
* 6d614ca - dongyu-youn, 2025-01-06 16:46:02 +0900 : merge
| 
* aefdad3 - dongyu-youn, 2025-01-06 16:35:09 +0900 : 2025.1.6 병원이송 페이지 작성
  
* 1be98a9 - dongyu-youn, 2024-12-26 21:34:19 +0900 : 2024.12.26
| tabSwiper 슬라이드 모바일 버튼 생성
| 
* 66fc94a - dongyu-youn, 2024-12-26 19:18:32 +0900 : 2024.12.26 대표님 말씀한거 수정
| 
* 3bab79b - dongyu-youn, 2024-12-26 18:24:15 +0900 : 2024.12.26
| 
* 6537757 - dongyu-youn, 2024-12-26 18:17:57 +0900 : 2024.12.26 이벤트 포스터 데이터 수정
| 
* 042158f - dongyu-youn, 2024-12-26 17:34:02 +0900 : 2024.12.26
| 이벤트/포스터 프로그램 데이터로 변경
| 
* d898b13 - dongyu-youn, 2024-12-26 16:09:08 +0900 : 2024.12.26
| 이벤트/포스트 여행사진 페이지 완성
| 
* b251ae8 - dongyu-youn, 2024-12-26 14:20:16 +0900 : 2024.12.26
| infosection 라운드 수정
| 
| 유용한정보 링크 홈으로 수정
| 
* a70247d - dongyu-youn, 2024-12-26 13:01:49 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/gssmedia-frontend into feature/event
| 
* bab7501 - dongyu-youn, 2024-12-26 12:40:23 +0900 : 2024.12.26 이벤트 포스트 페이지 카드 생성
| 
* ee27d4a - dongyu-youn, 2024-12-26 10:46:45 +0900 : 2024.12.26 infosection, footernav 디자인 수정
| 
* 0135de5 - dongyu-youn, 2024-12-26 10:07:55 +0900 : 2024.12.26
| 탭스와이퍼 모바일 화살표 추가
| 
* cdd0833 - dongyu-youn, 2024-12-26 09:52:54 +0900 : 2024.12.26 프로그램 메인 카드 수정 공지사항 렌더링 에러 수정
| 
* e629564 - dongyu-youn, 2024-12-24 18:19:55 +0900 : 2024.12.24
| 공지사항 4칸 수정
| title 글자 크기 개선
| 
* 2c29d66 - dongyu-youn, 2024-12-24 17:45:29 +0900 : 2024.12.24
| 공지사항 모바일 정리
| 
* 21fa48b - dongyu-youn, 2024-12-24 17:19:07 +0900 : 2024.12.24
| 홈, 프로그램 sm 디자인 수정
| 
* 1f4e191 - dongyu-youn, 2024-12-24 10:33:10 +0900 : 2024.12.24
  footer link 및 footer 반응형
  
  홈화면 폰트 및 디자인 수정
  
* f88f3f3 - dongyu-youn, 2024-12-22 18:43:33 +0900 : 2024.12.22 mainpage 전체 padding 조정 모달 화살표 에러 개선 footer개선
  memo
  로딩화면 수정
  
* d983d1a - dongyu-youn, 2024-12-19 22:11:29 +0900 : 2024.12.19 메인페이지 디자인 변경
| 프로그램 페이지 mainTitle 및 슬라이드
| 
* 95b2d2d - dongyu-youn, 2024-12-19 14:23:09 +0900 : 2024.12.19 메인화면 이미지 변경
이게 3번 프로젝트 `,
  },
  {
    id: 2,
    image: '/images/gong1.png',
    detailImages: [
      '/images/gs/image.png',
      '/images/gs/image2.png',
      '/images/gs/image3.png',
    ],
    tags: ['React', 'Node.js', 'MySQL'],
    content:
      '공주 공산성 행사 및 관련 문화재를 알리기 위한 온라인 플랫폼입니다. 이 사이트는 방문객들에게 공산성의 역사적 가치와 행사 정보를 제공하며, 방문객들이 쉽게 정보를 찾고 예약할 수 있도록 도와줍니다.',
    title: '공주 공산성',

    category: 'WEBSITE',
    link: 'http://ggm-art.kr/',
    contribution: '60%',
    role: '풀스택 개발',
    githubUrl: 'https://github.com/Intercore998/gssmedia-frontend',
    mainLogic:
      '이벤트 및 여행 페이지 개선, 프로그램 페이지 및 다이얼로그 기능 개선, 네비게이션 및 경로 관리, 홈페이지 및 UI/UX 개선',
    mainContribution: '전체 시스템 설계 및 구현, AWS 인프라 구축, 성능 최적화',
    commitHistory: `* afc7338 - dongyu-youn, 2025-01-10 10:46:36 +0900 : 2025.1.10 travel 카드 간격 수정
| 
* 104c014 - dongyu-youn, 2025-01-10 10:18:21 +0900 : 2025.1.10 feat: 프로그램 페이지 및 다이얼로그 기능 개선
| - ProgramDialog에서 연도와 상관없이 음성 재생 기능 복원
| - ProgramsPage에서 연도별 데이터 필터링 로직 유지
| - TravelImageCard 컴포넌트 추가 및 TravelPage에 적용
| - NoticeEditPage에서 공지사항 생성 및 수정 후 이동 경로 수정
| - Event 페이지 및 API 관련 코드 정리 및 오류 수정
| - MainPage에서 데이터 로딩 및 파싱 로직 개선
| - 기타 스타일 및 UI 개선
| 
* 21733a0 - dongyu-youn, 2025-01-09 20:40:15 +0900 : 2025.1.8
| 
* 14ed15f - dongyu-youn, 2025-01-09 20:18:40 +0900 : 2025.1.9
| 
* fc1ef79 - dongyu-youn, 2025-01-09 18:05:00 +0900 : 2025.1.9 모바일 화면 수정
| 
* e2d663c - dongyu-youn, 2025-01-09 16:02:27 +0900 : 2025.1.9 feat: ProgramDialog에서 특정 연도에만 음성 재생 기능 추가
| - ProgramDialog 컴포넌트에서 2023년 데이터에만 음성 재생 기능 추가
| - ProgramsPage에서 연도별 데이터 필터링 로직 개선
| - TravelDetailPage 및 NoticeDetailPage의 스타일 수정
| - TravelImageCard의 반응형 이미지 크기 조정
| - 환경 설정 파일(.env.development)에서 API URL 수정
| 
* 179478f - dongyu-youn, 2025-01-07 10:19:43 +0900 : 2025.1.7 edit페이지 사진 크기 상세설명 추가
| 
* 73dfc0b - dongyu-youn, 2025-01-07 09:51:18 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/gssmedia-frontend into dongyu
| the commit.
| 
* 05d1baa - dongyu-youn, 2025-01-07 09:50:05 +0900 : 2025.1.7 오디어 플레이어 문제 개선
| 
* 23911e7 - dongyu-youn, 2025-01-06 16:44:33 +0900 : local
| 
* a0757e2 - dongyu-youn, 2025-01-06 16:12:05 +0900 : 2025.1.6 event카드 more추가
| 
* 828e0d8 - dongyu-youn, 2025-01-06 15:46:16 +0900 : 2025.1.6 feat: 이벤트 카드 컴포넌트 추가 및 애니메이션 설정
| - EventCard 컴포넌트 신규 생성
|   - 반응형 레이아웃 구현 (모바일/데스크톱)
|   - 이벤트 정보 표시 (제목, 날짜, 장소, 내용)
| 
| - Tailwind 애니메이션 설정 추가
|   - fadeInUp, bounce, pulse 등 다양한 애니메이션 효과 추가
|   - 키프레임 정의 및 duration 설정
| 
* 6db543f - dongyu-youn, 2025-01-06 13:47:31 +0900 : 2025.1.6 이미지 비율 조정
| 
* befea58 - dongyu-youn, 2025-01-06 11:36:34 +0900 : 2025.1.6 프로그램 edit 자동년도 설정
| 
* c3c1c6e - dongyu-youn, 2025-01-06 11:08:17 +0900 : 2025.1.6 dialog 위치 반응형 재조정
| 
* b50cb4b - dongyu-youn, 2025-01-06 11:07:56 +0900 : 2025.1.6 lg사이즈 px변경
| 
* 2f548fe - dongyu-youn, 2025-01-03 17:51:22 +0900 : 2024.1.3 공지사항 뒤로가기 pencil 추가
| 
* 2a12261 - dongyu-youn, 2025-01-03 17:32:23 +0900 : 2024.1.3 travel 간격수정
| 
* 101a338 - dongyu-youn, 2025-01-03 17:28:08 +0900 : 2025.1.3 대표님 요구사항 수정
| 
* c26f724 - dongyu-youn, 2025-01-03 12:46:35 +0900 : 2024.1.3 notice 페이지 글자 수정
| 
* 984286a - dongyu-youn, 2025-01-03 12:41:23 +0900 : 2024.1.3
| Merge branch 'dongyu' of https://github.com/Intercore998/gssmedia-frontend into dongyu
| 
* c08020c - dongyu-youn, 2025-01-03 12:38:32 +0900 : 2024.1.3 feature/trip과 merge
| 
* 81e72f5 - dongyu-youn, 2025-01-03 12:32:02 +0900 : 2025.1.3 1. 공지사항 생성 완료시 /notice로 안감 const handleCreate = () => {     createNotice({ title, content }).then((res) => {       if (res.status === 201) {         alert('Notice created');         moveTo('/notice');       } else {         console.log(res);       }     });   }; 3. 공지사항 paging문제  <CardFooter       className={flex items-center justify-between border-t border-blue-gray-50 p-4 rounded-b-3xl ${
      `엑세스토큰` ? 'lg:w-full' : 'lg:w-[150%]'
    }}     > 4. edit화면 제목 padding지우기 <Input             className="" 5. 여행사진 이벤트/포스트 mt-12로 조정  <h1 className="sm:mb-4 lg:mb-12 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-nanum text-center mt-12"> 6.program title 글씨 크기 수정
| 
* 1a6eb98 - dongyu-youn, 2025-01-03 09:28:13 +0900 : 2024.1.3 mediapage 정렬 수정 공지시항 adminpage수정
| 
* f05fd54 - dongyu-youn, 2025-01-02 21:52:22 +0900 : 2024.1.2 - 네비게이션 개선:   - DesktopHeaderNav에 hover 효과 및 cursor-pointer 추가   - 네비게이션 아이템 클릭 영역 최적화
| - Edit 페이지 반응형 레이아웃 구현:
|   - TravelEditPage, NoticeEditPage, NewsEditPage 반응형 디자인 적용
|   - 모바일부터 데스크톱까지 일관된 사용자 경험 제공
|   - 패딩, 마진, 간격 등 반응형으로 조정
|   - 입력 필드 및 버튼 레이아웃 최적화
| 
* 0189df9 - dongyu-youn, 2025-01-02 14:36:02 +0900 : 2024.1.2 공지사항 admin 테이블 수정 travel update delete
| 
* f5e4eef - dongyu-youn, 2025-01-02 10:14:25 +0900 : 2025.1.2
| 공지사항 테이블 수정
| footer 글자 간격조정
| dialog 배치
| 
* 3cf7a23 - dongyu-youn, 2024-12-28 15:33:49 +0900 : 2024.12.28
| 파일명 news> event 교체
| 홈화면 postandtable 높이 수정
| 
| 모달창 flex-col처리
| 
* 7116338 - dongyu-youn, 2024-12-27 13:57:12 +0900 : 2024.12.27
| 이벤트/포스트 여행사진 페이지 추가
| 
* ea59500 - dongyu-youn, 2024-12-26 21:43:50 +0900 : 2024.12.26
| 더보기, 공지사항 요구사항 수정
| 
* 1be98a9 - dongyu-youn, 2024-12-26 21:34:19 +0900 : 2024.12.26
| tabSwiper 슬라이드 모바일 버튼 생성
| 
* 66fc94a - dongyu-youn, 2024-12-26 19:18:32 +0900 : 2024.12.26 대표님 말씀한거 수정
| 
* 3bab79b - dongyu-youn, 2024-12-26 18:24:15 +0900 : 2024.12.26
| 
* 6537757 - dongyu-youn, 2024-12-26 18:17:57 +0900 : 2024.12.26 이벤트 포스터 데이터 수정
| 
* 042158f - dongyu-youn, 2024-12-26 17:34:02 +0900 : 2024.12.26
| 이벤트/포스터 프로그램 데이터로 변경
| 
* d898b13 - dongyu-youn, 2024-12-26 16:09:08 +0900 : 2024.12.26
| 이벤트/포스트 여행사진 페이지 완성
| 
* b251ae8 - dongyu-youn, 2024-12-26 14:20:16 +0900 : 2024.12.26
| infosection 라운드 수정
| 
| 유용한정보 링크 홈으로 수정
| 
* a70247d - dongyu-youn, 2024-12-26 13:01:49 +0900 : Merge branch 'dongyu' of https://github.com/Intercore998/gssmedia-frontend into feature/event
| 
* bab7501 - dongyu-youn, 2024-12-26 12:40:23 +0900 : 2024.12.26 이벤트 포스트 페이지 카드 생성
| 
* ee27d4a - dongyu-youn, 2024-12-26 10:46:45 +0900 : 2024.12.26 infosection, footernav 디자인 수정
| 
* 0135de5 - dongyu-youn, 2024-12-26 10:07:55 +0900 : 2024.12.26
| 탭스와이퍼 모바일 화살표 추가
| 
* cdd0833 - dongyu-youn, 2024-12-26 09:52:54 +0900 : 2024.12.26 프로그램 메인 카드 수정 공지사항 렌더링 에러 수정
| 
* e629564 - dongyu-youn, 2024-12-24 18:19:55 +0900 : 2024.12.24
| 공지사항 4칸 수정
| title 글자 크기 개선
| 
* 2c29d66 - dongyu-youn, 2024-12-24 17:45:29 +0900 : 2024.12.24
| 공지사항 모바일 정리
| 
* 21fa48b - dongyu-youn, 2024-12-24 17:19:07 +0900 : 2024.12.24
| 홈, 프로그램 sm 디자인 수정
| 
* 1f4e191 - dongyu-youn, 2024-12-24 10:33:10 +0900 : 2024.12.24
  footer link 및 footer 반응형
  
  홈화면 폰트 및 디자인 수정
  
* f88f3f3 - dongyu-youn, 2024-12-22 18:43:33 +0900 : 2024.12.22 mainpage 전체 padding 조정 모달 화살표 에러 개선 footer개선
  memo
  로딩화면 수정
  
* d983d1a - dongyu-youn, 2024-12-19 22:11:29 +0900 : 2024.12.19 메인페이지 디자인 변경
| 프로그램 페이지 mainTitle 및 슬라이드
| 
* 95b2d2d - dongyu-youn, 2024-12-19 14:23:09 +0900 : 2024.12.19 메인화면 이미지 변경
  
* a234bc6 - dongyu-youn, 2024-12-18 15:31:37 +0900 : feat: loop slide 변경 2024.12.18`,
  },
  {
    id: 3,
    image: '/images/mainIcons/image.png',
    content: '공주 온밤',
    detailImages: [
      '/images/gong/image.png',
      '/images/gong/image2.png',
      '/images/gong/image3.png',
    ],
    tags: ['React', 'Node.js', 'MySQL'],
    title: '공주 온밤',
    category: 'APP',
    link: 'http://gongjuonbam.kr/',
    contribution: '70%',
    role: '앱 개발, API 연동',
    githubUrl: 'https://github.com/Intercore998/gongjuon-frontend',
    mainContribution:
      '네비게이션 및 경로 관리, 예약관련 시스템 관리, Breadcrumb 도입',
    commitHistory: `* 37de917 - dongyu-youn, 2025-01-10 10:47:55 +0900 : develop
| 
* 9b81854 - dongyu-youn, 2025-01-10 10:17:35 +0900 : 2025.1.10 feat: Breadcrumb 컴포넌트 추가 및 적용
| - Breadcrumb 컴포넌트를 생성하여 경로 표시 기능 구현
| - ProgramDetailPage, NoticeDetailPage, NewsDetailPage에 Breadcrumb 추가
| - 경로에 따라 동적 링크 및 라벨 표시
| refactor: 코드 구조 개선 및 중복 제거
| - ProgramDetailPage, NoticeDetailPage, NewsDetailPage에서 중복 코드 제거
| - Breadcrumb 컴포넌트로 경로 표시 로직 통합
| - 코드 가독성 및 유지보수성 향상
| 이러한 변경사항들은 코드의 재사용성을 높이고, 사용자에게 더 나은 네비게이션 경험을 제공하기 위한 것입니다.
| 
* 16b5b2d - dongyu-youn, 2025-01-09 20:02:18 +0900 : 2025.1.9
| 
* 03441ce - dongyu-youn, 2025-01-09 19:59:27 +0900 : program 페이지 수정
| 
* 5f1c3c5 - dongyu-youn, 2025-01-09 18:06:25 +0900 : 2025.1.9 모바일 화면 수정
| 
* 9c1dc51 - dongyu-youn, 2025-01-09 17:26:50 +0900 : 2025.1.9 1. feat: ReviewComponent 추가 및 MainPage에 통합
| - ReviewComponent를 생성하여 리뷰 슬라이더 기능 구현
| - MainPage에 ReviewComponent를 추가하여 리뷰 데이터 표시
| - 가짜 리뷰 데이터 생성 및 적용
| 2. style: ReviewComponent 스타일 개선
| - 슬라이더를 사용하여 리뷰를 순차적으로 표시
| - 카드 디자인을 개선하여 더 나은 사용자 경험 제공
| - 반응형 디자인 적용으로 다양한 화면 크기 지원
| refactor: MainPage 코드 구조 개선
| - ReviewComponent import 및 사용 위치 조정
| - 불필요한 코드 제거 및 가독성 향상
| - 데이터 흐름을 명확하게 정리
| 
* 91491f1 - dongyu-youn, 2025-01-06 11:12:13 +0900 : 2025.1.6 subnav위치 재조정
| 
* 1e3818b - dongyu-youn, 2025-01-06 10:10:26 +0900 : 2025.1.6 1.feat: 공지사항/뉴스 상세 페이지 네비게이션 기능 추가
| - 뒤로가기 버튼 추가 (FaChevronLeft 아이콘)
| - 관리자용 편집 버튼 추가 (PencilIcon)
| - 반응형 디자인 적용 (sm/lg 브레이크포인트별 위치 조정)
| style: 예약 카드 UI 개선
| - 카드 레이아웃을 세로 형태로 변경
| - 이미지 크기 및 비율 조정
| - 버튼 위치 및 스타일 개선
| refactor: 관리자 기능 UI 개선
| - 수정/삭제 버튼을 드롭다운 메뉴로 변경
| - 메뉴 아이콘 위치 최적화
| - 관리자 권한 체크 로직 추가
| 4. style: 상세 페이지 반응형 디자인 개선
| - 모바일/데스크톱 화면에 따른 버튼 위치 조정
| - 컨텐츠 여백 및 정렬 개선
| - 이미지 크기 자동 조절 기능 추가
| 
* de264c5 - dongyu-youn, 2025-01-05 20:02:58 +0900 : 2025.1.5 1. feat: 예약 카드에 페이드인 애니메이션 추가
| - BookItem 컴포넌트에 아래에서 위로 올라오는 애니메이션 적용
| - tailwind.config.js에 fadeInUp 애니메이션 설정 추가
| - 애니메이션 타이밍과 이징 효과 조정
| style: 예약 카드 UI 디자인 개선
| - 카드 컨테이너에 둥근 모서리 적용
| - 버튼 스타일을 둥근 형태로 변경
| - 예약 확인 버튼을 테두리가 있는 스타일로 변경
| feat: 관리자 기능 드롭다운 메뉴로 변경
| - 수정/삭제 버튼을 드롭다운 메뉴로 대체
| - 메뉴 트리거용 더보기 아이콘 추가
| - 관리자 컨트롤을 우측 상단으로 이동
| refactor: BookItem 컴포넌트 구조 개선
| - 컴포넌트 레이아웃 및 간격 조정
| - className과 style prop 처리 방식 개선
| - 반응형 디자인 개선
| 
* 52c07e8 - dongyu-youn, 2025-01-04 17:47:56 +0900 : 2025.1.4 프로그램 notice detail 디자인 수정
| 
* be08a39 - dongyu-youn, 2025-01-03 09:33:26 +0900 : 2024.1.3 mainpae 오류 수정
| 
* 69578a1 - dongyu-youn, 2024-12-27 15:03:34 +0900 : 2024.12.27
| 팝업존 수정
| 
* b448367 - dongyu-youn, 2024-12-27 14:16:13 +0900 : 2024.12.27 탭스와이퍼 모바일 버튼 추가
| 
* 3950387 - dongyu-youn, 2024-12-27 13:59:35 +0900 : 2024.12.27
| 레이아웃 디테일 수정
| 
* e411fdd - dongyu-youn, 2024-12-23 21:15:38 +0900 : 2024.12.23
| reservation 배너 수정
| 
* ab866e1 - dongyu-youn, 2024-12-23 21:13:31 +0900 : 2024.12.23 program detail 글자크기 수정
| 
* d3dd9fa - dongyu-youn, 2024-12-23 19:53:11 +0900 : 2024.12.23 대표님말한거 모두 반영
| 
* 529e4d6 - dongyu-youn, 2024-12-23 18:03:52 +0900 : 2024.12.23
| 캐러셀 슬라이드 생성
| 모바일 메뉴수정
| 
* fdd1fd9 - dongyu-youn, 2024-12-23 17:22:34 +0900 : 2024.12.23
| notice, news detail 모바일 디자인 수정
| 로고 모바일 디자인 수정
| 
* d920125 - dongyu-youn, 2024-12-23 11:36:33 +0900 : 2024.12.23
| 프로그램 오류
| 
* 464a5e1 - dongyu-youn, 2024-12-23 10:57:13 +0900 : 2024.12.23
| 팝업슬라이드 버튼 삭제
| 
* d2cb6d0 - dongyu-youn, 2024-12-23 10:39:38 +0900 : 2024.12.23
| 팝업창 수정
| 
* 160a377 - dongyu-youn, 2024-12-23 10:27:16 +0900 : 2024.12.23 공주온 폰트 수정 팝업창 이미지 조정
| 
* 456c718 - dongyu-youn, 2024-12-22 19:46:46 +0900 : 2024.12.22 mainpage infosection 글자간격 개선
| 
* 8d7c70b - dongyu-youn, 2024-12-22 19:35:18 +0900 : 2024.12.22 main화면 간격조정
| 
* 7da06eb - dongyu-youn, 2024-12-21 21:05:11 +0900 : 2024.12.21
| 변경사항
| 폰트수정
| table수정
| footer, about페이지등 반응형 개선
| 
* f23c8aa - dongyu-youn, 2024-12-20 13:48:56 +0900 : 2024.12.20
| 어바웃페이지 패딩수정
| 
* ceac734 - dongyu-youn, 2024-12-20 13:37:54 +0900 : 2024.12.20
  memo
  색상 입히기
  이벤트 포스터 노트북 화면 수정
  
* d3b5ded - dongyu-youn, 2024-12-18 17:10:09 +0900 : 2024.12.18
| 
* 9a45175 - dongyu-youn, 2024-12-18 10:33:54 +0900 : feat: 배너 수정 2024.12.18
  
* 527a514 - dongyu-youn, 2024-12-19 10:15:03 +0900 : feat: 디자인 요청 수정 2024.12.19
| 
* 92b48fd - dongyu-youn, 2024-12-18 21:26:31 +0900 : feat: 헤더 호버 문제 해결 2024.12.18
  
* c78cfed - dongyu-youn, 2024-12-17 21:55:26 +0900 : feat: swiper => slick slide 모두 변경 2024.12.17
| 
* 8c9d8eb - dongyu-youn, 2024-12-17 21:34:35 +0900 : feat: 공지/뉴스 onClick 2024.12.17
| 
* 4a5d79a - dongyu-youn, 2024-12-17 19:09:54 +0900 : feat: grid 수정 2024.12.17
| 
* 0fbc6ba - dongyu-youn, 2024-12-17 18:21:48 +0900 : feat: sm 디자인 추가 2024.12.17
| 
* e16704c - dongyu-youn, 2024-12-17 15:53:32 +0900 : feat: 반응형 디자인 수정 2024.12.17
| 
* 682c62a - dongyu-youn, 2024-12-17 15:29:22 +0900 : feat: notice edit/delete 핸들러 구현 2024.12.17
| 
* 81f6726 - dongyu-youn, 2024-12-17 11:32:53 +0900 : feat: 프로그램 데이터 입력 2024.12.17
| 
* 4236eb7 - dongyu-youn, 2024-12-16 22:17:22 +0900 : feat: editor 사진 드래그 수정 2024.12.16
| 
* f919589 - dongyu-youn, 2024-12-16 21:02:00 +0900 : feat: editor 수정 2024.12.16
| 
* 3a3613a - dongyu-youn, 2024-12-16 18:00:41 +0900 : feat: notion 디자인 수정 2024.12.16
| 
* de2888e - dongyu-youn, 2024-12-16 16:56:07 +0900 : feat: 홈화면 디자인 수정
| 
* 8805246 - dongyu-youn, 2024-12-16 15:19:25 +0900 : feat: header 폰트 수정`,
  },
  {
    id: 4,
    image: '/images/about/tree/intercore.png',
    detailImages: [
      '/images/inter/image.png',
      '/images/inter/image2.png',
      '/images/inter/image3.png',
    ],
    content: '자사 홈페이지',
    title: '자사 홈페이지',
    category: 'WEBSITE',
    link: 'http://www.intercore.kr/',
    contribution: '100%',
    role: '웹사이트 개발, 서버 구축',
    githubUrl: [
      'https://github.com/intercore2025/hompage__frontend',
      'https://github.com/intercore2025/hompage__backend',
    ],
  },
  {
    id: 5,
    image: '/images/portofolio/conpower.png',
    content: '콘파워',
    title: '콘파워',
    category: 'APP',
    contribution: '75%',
    githubUrl: [
      'https://github.com/intercore2025/conpower_mobile',
      'https://github.com/dongyu-youn/conpower_backend',
    ],
    role: '앱 개발, 데이터베이스 설계',
  },
  {
    id: 6,
    image: '/images/portofolio/aurem.png',
    content:
      '“인프라가 좁은 지역의 대학생들을 보고 좋은 팀을 만들어 주고 싶어 진행한 프로젝트 팀에 적절한 팀원을 자동으로 배치해주고 특정 금액을 걸어 프로젝트 완성시에만 환급받도록 하여 완성된 프로젝트를 보장해준다”',
    title: '오름',
    category: 'WEBSITE',
    mainLogic:
      '팀매칭/팀원추가 로직, 인공지능 매칭 로직, 멘토 멘티 매칭 로직, 환급 시스템 로직',
    tags: ['React', 'Nest.js', 'MySQL'],
    link: 'http://43.201.57.22:3000',
    contribution: '85%',
    role: '기획 및 풀스택 개발',
    githubUrl: 'https://github.com/username/seohyun-tech',
  },
  {
    id: 7,
    image: '/images/portofolio/eniac.jpeg',
    content: '에니악 홈페이지',
    title: '에니악 홈페이지',
    category: 'WEBSITE',
    contribution: '60%',
    role: '반응형 웹사이트 개발',
  },
  {
    id: 8,
    image: '/images/portofolio/Daljak.png',
    content: '달작',
    title: '달작',
    category: 'WEBSITE',
    link: 'https://www.walk4all.or.kr/index.html',
    contribution: '95%',
    role: '웹사이트 개발, 유지보수',
  },
  {
    id: 9,
    image: '/images/portofolio/yong.png',
    content: '영체갤러리 외주',
    title: '영체갤러리 외주',
    category: 'APP',
    contribution: '70%',
    role: '앱 개발, 콘텐츠 관리',
  },
  {
    id: 10,
    image: '/images/portofolio/daljak2.png',
    content: 'Daljak',
    title: 'Daljak',
    category: 'WEBSITE',
    link: 'https://www.presi.co.kr/',
    contribution: '80%',
    role: '웹사이트 프론트엔드 개발',
  },
];
