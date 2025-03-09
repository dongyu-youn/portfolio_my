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
      title: 'React & React Native',
      description: [
        '컴포넌트 기반 개발',
        'SSR/CSR 하이브리드 렌더링',
        '최적화된 성능 구현',
      ],
      icon: <FaCode className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'UI/UX 디자인',
      description: [
        '반응형 웹 디자인',
        '사용자 중심 인터페이스',
        '모던 UI 컴포넌트',
      ],
      icon: <FaMobile className="w-12 h-12 text-purple-500" />,
    },
    {
      title: 'JavaScript/TypeScript',
      description: [
        '최신 ES6+ 문법 활용',
        '타입 안정성 확보',
        '클린 코드 작성',
      ],
      icon: <FaCode className="w-12 h-12 text-green-500" />,
    },
  ];

  const marketingData = [
    {
      title: 'Node.js',
      description: [
        'Express 프레임워크',
        'RESTful API 설계',
        '비동기 처리 최적화',
      ],
      icon: <FaCode className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Spring Boot',
      description: [
        'JPA/Hibernate ORM',
        '마이크로서비스 아키텍처',
        '보안 및 인증 구현',
      ],
      icon: <FaCode className="w-12 h-12 text-green-500" />,
    },
    {
      title: 'Django',
      description: [
        'Python 기반 백엔드',
        'ORM 데이터 모델링',
        'Admin 패널 활용',
      ],
      icon: <FaCode className="w-12 h-12 text-red-500" />,
    },
  ];

  const services = [
    {
      icon: '/images/mainIcons/icon_marketing.gif',
      title: '프론트엔드 ',
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
                  <h3 className="text-xl font-semibold text-purple-600 my-4 whitespace-nowrap">
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
      title: '백엔드',
      description: (
        <section className="">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
      title: '인프라',
      description: (
        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaCode className="w-12 h-12 text-blue-500" />
              <h3 className="text-xl font-semibold text-purple-600 my-4">
                AWS
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>EC2 서버 운영
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>S3 스토리지
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>RDS 데이터베이스
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaCode className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-semibold text-purple-600 my-4">
                Gabia
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>도메인 관리
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>메일 서버
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>호스팅 서비스
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaCode className="w-12 h-12 text-red-500" />
              <h3 className="text-xl font-semibold text-purple-600 my-4">
                Docker
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>컨테이너화
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>CI/CD 파이프라인
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✔</span>마이크로서비스
                </li>
              </ul>
            </div>
          </div>
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
      id="section3"
      className={`sm:pt-8 lg:pt-12 font-sans bg-[#f8f9fa] ${
        activeService !== null && !isMobile ? 'lg:pb-[400px]' : 'lg:pb-20'
      }`}
      onClick={handleBackgroundClick}
    >
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left sm:mb-8 lg:mb-16">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            Stack
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            기술스택을 소개합니다
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
