import { useState, useEffect } from 'react';
import {
  FaSeedling,
  FaLeaf,
  FaTree,
  FaSun,
  FaWater,
  FaRecycle,
} from 'react-icons/fa';

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaSeedling size={32} />,
      title: '새싹처럼 시작하는 블로그 마케팅',
      description:
        '작은 새싹처럼 시작해서 블로그와 SNS를 통해 고객과 함께 성장합니다. 인터코어는 신뢰의 씨앗을 심어 풍성한 결실을 맺습니다.',
      bgColor: 'bg-[#7FB069]',
    },
    {
      icon: <FaLeaf size={32} />,
      title: '성장하는 디지털 솔루션',
      description:
        '새로운 아이디어가 돋아나는 잎사귀처럼, 웹과 앱을 통해 고객의 비전을 실현합니다. 지속적인 관리로 더욱 튼튼하게 자라납니다.',
      bgColor: 'bg-[#98C9A3]',
    },
    {
      icon: <FaTree size={32} />,
      title: '데이터로 키우는 마케팅 전략',
      description:
        '단단한 나무처럼 견고한 데이터를 기반으로, 성장을 위한 최적의 마케팅 전략을 제시합니다.',
      bgColor: 'bg-[#77AB59]',
    },
    {
      icon: <FaSun size={32} />,
      title: '빛나는 오프라인 홍보물',
      description:
        '따스한 햇살처럼 고객의 브랜드를 밝게 비춰줄 인쇄물을 제작합니다.',
      bgColor: 'bg-[#C4D6B0]',
    },
    {
      icon: <FaWater size={32} />,
      title: '함께 자라나는 파트너십',
      description:
        '물과 영양분처럼 필수적인 파트너가 되어, 고객의 비즈니스가 더욱 건강하게 자랄 수 있도록 지원합니다.',
      bgColor: 'bg-[#A8E6CF]',
    },
    {
      icon: <FaRecycle size={32} />,
      title: '지속 가능한 성장',
      description:
        '자연의 순환처럼 끊임없이 혁신하고 발전하며, 고객과 함께 지속 가능한 미래를 만들어갑니다.',
      bgColor: 'bg-[#8ECF6F]',
    },
  ];

  return (
    <section className="bg-white sm:py-10 lg:py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left mb-16">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            OUR services
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            새싹처럼 자라나는 우리의 서비스
          </p>
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
