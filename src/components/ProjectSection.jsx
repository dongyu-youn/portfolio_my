import { useState, useEffect } from 'react';
import {
  FaHandshake,
  FaTools,
  FaCogs,
  FaShareAlt,
  FaMapMarkerAlt,
  FaBullhorn,
} from 'react-icons/fa';

function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FaHandshake size={24} />,
      title: '안전한 다이렉트 거래',
      description: '소형건설기계를 소비자가 직접거래 할 수 있는 앱서비스',
    },
    {
      icon: <FaTools size={24} />,
      title: '건설기계 ASP',
      description:
        '신분증 관리기반 지도확인, AI분석 작성 안전하고 효율적 렌탈관리',
    },
    {
      icon: <FaCogs size={24} />,
      title: '소형건설기계 최적화',
      description:
        '소형건설기계의 중고매매, 렌탈을 위한 안전하고 합리적 거래 중개 법',
    },
    {
      icon: <FaShareAlt size={24} />,
      title: '건설기계 공유서비스',
      description:
        '정비와 기술자 시대창으로 고기의 정비 요유를 통해 공동 수익 창출',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'GPS기반 매칭서비스',
      description: '기술자와 현장 매칭과 경력증명, 시공치와 정비 매칭',
    },
    {
      icon: <FaBullhorn size={24} />,
      title: '마케팅',
      description: '블로그 등 SNS 정보를 앱에서 확인할 수 있습니다.',
    },
  ];

  return (
    <section className="bg-white sm:pt-10 lg:pt-12 font-sans sm:mb-12 lg:mb-8">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-left mb-16">
          <h2 className="sm:text-xl lg:text-3xl lg:text-4xl font-bold mb-4">
            대표작품
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            건설기계통합관리서비스
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* 왼쪽 기능 리스트 - 간격 조정 */}
          <div className="lg:w-1/3 space-y-16">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 transition-all duration-700 transform hover:scale-105
                  ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 text-right">
                  <h3 className="font-bold text-lg mb-2 hover:text-[#A87E6E] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="w-14 h-14 flex items-center justify-center bg-[#A87E6E] rounded-full transform rotate-45 flex-shrink-0 hover:bg-[#8B6B5A] transition-colors duration-300 hover:scale-110">
                  <div className="transform -rotate-45 text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 중앙 이미지 */}
          <div className="lg:w-1/3">
            <img
              src="/images/mainContent/image.png"
              alt="Project Preview"
              className={`w-full transition-all duration-300 transform hover:scale-110
                ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            />
          </div>

          {/* 오른쪽 기능 리스트 */}
          <div className="lg:w-1/3 space-y-16">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 transition-all duration-700 transform hover:scale-105
                  ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#A87E6E] rounded-full transform rotate-45 flex-shrink-0 hover:bg-[#8B6B5A] transition-colors duration-300 hover:scale-110">
                  <div className="transform -rotate-45 text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 hover:text-[#A87E6E] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
