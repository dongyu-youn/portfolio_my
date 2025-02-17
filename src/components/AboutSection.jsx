import { useState, useEffect } from 'react';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

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
      title: '서비스 기획',
      description:
        '플랫폼 제작에 필요한 처음 설계에서부터 서비스 기획까지 고객의 생각을 구현하는 든든한 파트너가 되겠습니다.',
    },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#00939A]">
            인터코어...
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            중소기업 비즈니스를 위한 파트너!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                } hover:border-b-4 hover:border-[#00939A]`}
              style={{ transitionDelay: `${index * 0.2}s` }}
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
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="w-full h-1 mt-4 bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
