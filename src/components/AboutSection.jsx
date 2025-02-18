import { useState, useEffect } from 'react';
import React from 'react';
import {
  FaUsers,
  FaBullhorn,
  FaComments,
  FaClock,
  FaShieldAlt,
  FaCode,
  FaMobile,
  FaUserCog,
  FaChartLine,
} from 'react-icons/fa';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // 컴포넌트가 마운트되면 isVisible을 true로 설정
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const solutionData = [
    {
      title: '애자일 개발',
      description: [
        '2주 단위 스프린트 운영',
        '고객 피드백 신속 반영',
        '지속적인 개선과 업데이트',
      ],
      icon: <FaClock className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'UI/UX 최적화',
      description: [
        '사용자 중심 인터페이스',
        '4주 내 기본 구축 완료',
        '반응형 디자인 적용',
      ],
      icon: <FaMobile className="w-12 h-12 text-purple-500" />,
    },
    {
      title: '기술 스택',
      description: [
        'React, Next.js 프론트엔드 개발',
        'Node.js, Spring Boot 백엔드 구축',
        'AWS, Docker 클라우드 인프라 활용',
      ],
      icon: <FaCode className="w-12 h-12 text-green-500" />,
    },
    {
      title: '유지보수',
      description: [
        '48시간 내 업데이트',
        '실시간 모니터링',
        '2시간 내 긴급 조치',
      ],
      icon: <FaUserCog className="w-12 h-12 text-orange-500" />,
    },
    {
      title: '보안 관리',
      description: [
        '월 1회 정기 점검',
        '연 2회 보안 테스트',
        '데이터 암호화 적용',
      ],
      icon: <FaShieldAlt className="w-12 h-12 text-red-500" />,
    },
    {
      title: '성과 분석',
      description: ['트래픽 모니터링', '사용자 행동 분석', '개선점 도출'],
      icon: <FaChartLine className="w-12 h-12 text-indigo-500" />,
    },
  ];

  const marketingData = [
    {
      title: '고객 타겟팅',
      description: [
        '국민 여행자를 위한 홍보',
        '외국인 여행자',
        '고양시민',
        '박람회 인근 주민',
      ],
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
    },
    {
      title: '홍보메시지의 활용',
      description: [
        '콘텐츠에 따라 비주얼 응용 및 활용',
        '바이럴 마케팅 운영',
        '언론보도',
      ],
      icon: <FaBullhorn className="w-12 h-12 text-red-500" />,
    },
    {
      title: '양방향 소통',
      description: ['온라인 설문조사', '이벤트 진행', '고객 문의 및 제안'],
      icon: <FaComments className="w-12 h-12 text-green-500" />,
    },
  ];

  const services = [
    {
      icon: '/images/mainIcons/icon_marketing.gif',
      title: '맞춤형 웹 솔루션',
      description: (
        <section className="">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-purple-600 my-4">
                    {item.title}
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2 text-blue-500">✔</span> {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    {
      icon: '/images/mainIcons/icon_service.gif',
      title: '홍보/마케팅',
      description: (
        <section className="">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:h-[500px]">
              {marketingData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    {item.title}
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2 text-blue-500">✔</span> {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    {
      icon: '/images/mainIcons/icon_web.gif',
      title: '알림톡 서비스',
      description: (
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/images/alarm/image.png"
            alt="알림톡 서비스"
            className="w-[50%] h-auto object-contain rounded-lg mb-4"
          />
          <p className="text-gray-600 text-center">
            알림톡 여행은 고객의 여행 일정과 관련된 정보를 실시간으로 제공하며,
            맞춤형 알림 서비스를 제공합니다. 앱 스토어나 플레이 스토어에서 앱을
            다운로드 받은 후, 간단한 회원가입 절차를 통해 서비스를 이용하실 수
            있습니다.
          </p>
        </div>
      ),
    },
  ];

  const handleCardClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setActiveService(null);
    }
  };

  if (!isVisible) {
    return null; // 초기 로딩 시 빈 화면 반환
  }

  return (
    <section
      className={` sm:pt-8 lg:pt-12 font-sans bg-[#f8f9fa] ${
        activeService !== null && !isMobile ? 'lg:pb-[700px]' : 'lg:pb-20'
      }`}
      onClick={handleBackgroundClick}
    >
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left sm:mb-8 lg:mb-16">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            인터코어만의 솔루션!
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            인터코어만의 솔루션을 소개합니다
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div
                  className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer
                    ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    } 
                    ${
                      activeService === index
                        ? 'border-b-4 border-brand-green'
                        : ''
                    }
                    hover:border-b-4 hover:border-green`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(index);
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-20 h-20 mb-4 object-contain"
                    />
                    <h3 className="text-lg lg:text-xl font-bold mb-4">
                      {service.title}
                    </h3>
                  </div>
                </div>
                {/* 모바일용 설명 섹션 */}
                {isMobile && activeService === index && (
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 데스크톱용 설명 섹션 */}
          {!isMobile && activeService !== null && (
            <div
              className={`absolute left-0 right-0 mt-4 bg-gray-50 p-6 rounded-lg shadow transition-all duration-300
                ${
                  activeService !== null
                    ? 'opacity-100 max-h-[800px]'
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-gray-600 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                {services[activeService].description}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
