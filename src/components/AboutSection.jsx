import { useState, useEffect } from 'react';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '/images/mainIcons/icon_marketing.gif',
      title: '홈페이지 제작',
      description:
        '반응형 홈페이지, 랜딩페이지, 웹앱제작, 기획부터 시작합니다. 고객의 작은 아이디어도 성실하게 반영합니다.',
    },
    {
      icon: '/images/mainIcons/icon_service.gif',
      title: '홍보/마케팅',
      description:
        '브랜드 홍보 및 마케팅을 위한 방향을 설정하고, 뿌요한 콘텐츠를 제작합니다. 인앱 카카로그, e-카탈로그, 네이버 마케팅 등',
    },
    {
      icon: '/images/mainIcons/icon_web.gif',
      title: '알림톡 서비스',
      description:
        '알림톡 여행은 고객의 여행 일정과 관련된 정보를 실시간으로 제공하며, 맞춤형 알림 서비스를 제공합니다. 앱 스토어나 플레이 스토어에서 앱을 다운로드 받은 후, 간단한 회원가입 절차를 통해 서비스를 이용하실 수 있습니다.',
    },
  ];

  const handleCardClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="bg-white sm:py-8 lg:py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left sm:mb-8 lg:mb-16">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            인터코어만의 솔루션!
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            인터코어만의 솔루션을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
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
                onClick={() => handleCardClick(index)}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20 mb-4"
                  />
                  <h3 className="text-lg lg:text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* 설명 박스 */}
              <div
                className={`mt-4 bg-gray-50 p-6 rounded-lg shadow transition-all duration-300
                  ${
                    activeService === index
                      ? 'opacity-100 max-h-96'
                      : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
              >
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
