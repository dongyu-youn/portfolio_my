import { useState, useEffect } from 'react';
import {
  FaBlogger,
  FaMobileAlt,
  FaDatabase,
  FaPrint,
  FaHandshake,
  FaChartLine,
} from 'react-icons/fa';

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaBlogger size={32} />,
      title: '블로그 마케팅',
      description:
        '블로그와 SNS를 이용하여 고객과 소통하고 기업의 서비스를 설명합니다. 인터코어는 기업과 고객을 신뢰로 이어주는 역할을 합니다.',
      bgColor: 'bg-[#9BC53D]',
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: '앱과 웹을 기획 제작과 관리를 합니다',
      description:
        '기업의 사업내용이 잘 드러나도록 고객의 의견을 우리의 기술을 통해 충실히 실행하고 관리 웹의 유지 및 관리 서비스를 합니다.',
      bgColor: 'bg-[#5DA9E9]',
    },
    {
      icon: <FaDatabase size={32} />,
      title:
        '데이터를 수집하고 데이터를 기반으로 가업의 마케팅 방향을 제안합니다',
      description:
        '고객의 홈페이 사이트를 통해 수집된 데이터를 가공, 고객 마케팅을 위한 콘텐츠 제작합니다.',
      bgColor: 'bg-[#FF8C42]',
    },
    {
      icon: <FaPrint size={32} />,
      title: '오프라인 홍보를 위한 인쇄',
      description: '기업의 오프라인 홍보를 위한 인쇄, 출판물을 만듭니다.',
      bgColor: 'bg-[#9BC53D]',
    },
    {
      icon: <FaHandshake size={32} />,
      title: 'Partnership',
      description:
        '인터코어는 필요에 의한 업체를 입니다. 개발 진행, 사이트 관유 등 다양한 방법으로 진행할 수 있습니다.',
      bgColor: 'bg-[#5DA9E9]',
    },
    {
      icon: <FaChartLine size={32} />,
      title: '고객과 함께 성장합니다',
      description:
        '지속가능한 기업을 위해 인터코어는 고객과 함께 성장, 발전하는 방향을 찾아갑니다.',
      bgColor: 'bg-[#FF8C42]',
    },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">OUR services</h2>
          <p className="text-gray-600 text-lg">우리가 하는 일은?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 group">
                <div
                  className={`p-4 rounded-lg ${service.bgColor} transition-all duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 이미지 */}
      </div>
    </section>
  );
}

export default ServicesSection;
