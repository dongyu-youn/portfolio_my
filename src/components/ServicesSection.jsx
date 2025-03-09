import { useState, useEffect } from 'react';
import {
  FaLightbulb,
  FaCode,
  FaUsers,
  FaRocket,
  FaHeart,
  FaStar,
} from 'react-icons/fa';

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaLightbulb size={32} />,
      title: '창의적인 문제 해결',
      description:
        '복잡한 문제도 창의적으로 해결합니다. 새로운 시각으로 접근하여 효율적인 솔루션을 제시하는 것이 제 장점입니다.',
      bgColor: 'bg-[#FFD700]',
    },
    {
      icon: <FaCode size={32} />,
      title: '빠른 학습 능력',
      description:
        '새로운 기술과 트렌드를 빠르게 습득합니다. 끊임없는 자기 개발로 최신 개발 동향을 놓치지 않습니다.',
      bgColor: 'bg-[#FFC72C]',
    },
    {
      icon: <FaUsers size={32} />,
      title: '뛰어난 팀워크',
      description:
        '원활한 의사소통과 협업 능력으로 팀 프로젝트에서 시너지를 만들어냅니다. 함께 일하는 즐거움을 아는 개발자입니다.',
      bgColor: 'bg-[#FFB81C]',
    },
    {
      icon: <FaRocket size={32} />,
      title: '도전을 즐기는 자세',
      description:
        '새로운 도전을 두려워하지 않습니다. 어려운 과제도 긍정적인 마인드로 해결해나갑니다.',
      bgColor: 'bg-[#FFAA1D]',
    },
    {
      icon: <FaHeart size={32} />,
      title: '책임감과 열정',
      description:
        '맡은 일에 대한 강한 책임감과 열정을 가지고 있습니다. 프로젝트가 성공적으로 완료될 때까지 최선을 다합니다.',
      bgColor: 'bg-[#FFA500]',
    },
    {
      icon: <FaStar size={32} />,
      title: '꼼꼼한 코드 관리',
      description:
        '깔끔하고 유지보수가 쉬운 코드 작성을 지향합니다. 문서화와 코드 리뷰에도 적극적으로 참여합니다.',
      bgColor: 'bg-[#FF9900]',
    },
  ];

  return (
    <section
      id="section6" // Strength 섹션은 6번
      className="bg-[#f8f9fa] sm:py-10 lg:py-12 font-sans"
    >
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left mb-16">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            MY STRENGTHS
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            저의 특별한 장점들을 소개합니다
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
      </div>
    </section>
  );
}

export default ServicesSection;
