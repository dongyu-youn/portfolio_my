import React, { useState } from 'react';

function OrganizationChart({ projectTitle }) {
  // 프로젝트 타이틀이 '울산 신장장애인 협회'가 아니면 null 반환
  if (projectTitle !== '울산 신장장애인 협회') {
    return null;
  }

  const [modal, setModal] = useState({
    visible: false,
    content: '',
    title: '',
  });

  const handleClick = (e, name, description) => {
    // 이벤트 전파 중단
    e.stopPropagation();

    setModal({
      visible: true,
      title: name,
      content: description,
    });
    // 모달이 열릴 때 스크롤 방지
    document.body.style.overflow = 'hidden';
  };

  const nodeDescriptions = {
    보안성: '서버 측 저장 경로 은닉',
    성능: '시스템 속도와 효율성',
    사용자경험: '사용자 인터페이스와 접근성',
    유지보수성: '코드 관리와 업데이트 용이성',
    보안정책: '보안 규정 및 정책 수립',
    취약점분석: '안전한 다운로드 처리',
    성능최적화: '시스템 성능 개선',
    부하테스트: '시스템 부하 테스트',
    UI디자인: 'UI/UX 디자인',
    사용성테스트: '사용자 테스트',
    코드품질: '코드 품질 관리',
    문서화: '시스템 문서화',
  };

  return (
    <div className="hidden lg:block" onClick={(e) => e.stopPropagation()}>
      <div className="relative flex justify-between w-full max-w-[1200px] mt-12">
        {/* 메인 노드들 */}
        {['보안성', '성능', '사용자경험', '유지보수성'].map((name, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-40 h-40 bg-[#1a365d] hover:bg-[#2c5282] transition-colors duration-200 rounded-full flex items-center justify-center mb-8 p-6 cursor-pointer"
              onClick={(e) => handleClick(e, name, nodeDescriptions[name])}
            >
              <div className="text-white text-xl font-extrabold font-notoSans text-center">
                {name}
              </div>
            </div>

            {/* 서브 노드들 */}
            <div className="flex flex-col gap-8">
              {name === '보안성' &&
                ['서버 측 저장 경로 은닉', '안전한 다운로드 처리'].map(
                  (subName, i) => (
                    <div key={i} className="relative">
                      <div className="absolute w-[2px] h-8 bg-[#2c5282] -top-8 left-1/2"></div>
                      <div
                        className="w-52 h-14 bg-[#2b4c7e] hover:bg-[#3a6098] transition-colors duration-200 rounded-lg flex items-center justify-center p-4 cursor-pointer"
                        onClick={(e) =>
                          handleClick(e, subName, nodeDescriptions[subName])
                        }
                      >
                        <div className="text-white text-lg font-medium font-notoSans">
                          {subName}
                        </div>
                      </div>
                    </div>
                  )
                )}
              {name === '성능' &&
                ['이미지 최적화 처리', '비동기 파일 업로드'].map(
                  (subName, i) => (
                    <div key={i} className="relative">
                      <div className="absolute w-[2px] h-8 bg-[#2c5282] -top-8 left-1/2"></div>
                      <div
                        className="w-52 h-14 bg-[#2b4c7e] hover:bg-[#3a6098] transition-colors duration-200 rounded-lg flex items-center justify-center p-4 cursor-pointer"
                        onClick={(e) =>
                          handleClick(e, subName, nodeDescriptions[subName])
                        }
                      >
                        <div className="text-white text-lg font-medium font-notoSans">
                          {subName}
                        </div>
                      </div>
                    </div>
                  )
                )}
              {name === '사용자경험' &&
                ['파일 타입별 차별화된 UI', '직관적인 드래그 앤 드롭'].map(
                  (subName, i) => (
                    <div key={i} className="relative">
                      <div className="absolute w-[2px] h-8 bg-[#2c5282] -top-8 left-1/2"></div>
                      <div
                        className="w-52 h-14 bg-[#2b4c7e] hover:bg-[#3a6098] transition-colors duration-200 rounded-lg flex items-center justify-center p-4 cursor-pointer"
                        onClick={(e) =>
                          handleClick(e, subName, nodeDescriptions[subName])
                        }
                      >
                        <div className="text-white text-lg font-medium font-notoSans">
                          {subName}
                        </div>
                      </div>
                    </div>
                  )
                )}
              {name === '유지보수성' &&
                ['재사용 가능한 로직 분리'].map((subName, i) => (
                  <div key={i} className="relative">
                    <div className="absolute w-[2px] h-8 bg-[#2c5282] -top-8 left-1/2"></div>
                    <div
                      className="w-52 h-14 bg-[#2b4c7e] hover:bg-[#3a6098] transition-colors duration-200 rounded-lg flex items-center justify-center p-4 cursor-pointer"
                      onClick={(e) =>
                        handleClick(e, subName, nodeDescriptions[subName])
                      }
                    >
                      <div className="text-white text-lg font-medium font-notoSans">
                        {subName}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* 모달 */}
      {modal.visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => {
            setModal({ ...modal, visible: false });
            // 모달이 닫힐 때 스크롤 복원
            document.body.style.overflow = 'unset';
          }}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold font-notoSans">
                {modal.title}
              </h2>
              <button
                onClick={() => {
                  setModal({ ...modal, visible: false });
                  document.body.style.overflow = 'unset';
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="font-notoSans">{modal.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrganizationChart;
