import { useState, useEffect } from 'react';
import {
  FaHandshake,
  FaTools,
  FaCogs,
  FaShareAlt,
  FaMapMarkerAlt,
  FaBullhorn,
  FaStar,
} from 'react-icons/fa';

function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState('2024');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = {
    2021: [
      { date: '2021.07.01', content: 'HTML/CSS 카카오톡 클론코딩' },
      { date: '2021.10.09', content: 'React 무비팝콘 클론코딩' },
      { date: '2021.10.14', content: '에어비앤비 클론코딩' },
    ],
    2022: [
      { date: '2022.06.10', content: '아이디어 구상' },
      { date: '2022.07.15', content: '시장성 검토' },
      { date: '2022.08.20', content: '기술 타당성 조사' },
      { date: '2022.12.25', content: '사업 모델 수립' },
    ],
    2023: [
      { date: '2023.09.10', content: '시장 조사 및 분석' },
      { date: '2023.10.05', content: '사업계획 수립' },
      { date: '2023.11.15', content: '초기 투자 유치' },
      { date: '2023.12.20', content: '개발팀 구성' },
    ],
    2024: [
      { date: '2024.04.06', content: 'LocalStorage 활용한 Todo앱' },
      { date: '2024.07.26', content: '리액트 카운팅앱' },
      { date: '2024.10.06', content: 'HTML/CSS 포트폴리오 사이트' },
      { date: '2024.10.06', content: '리액트/Firebase 유튜브 클론' },
    ],
  };

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

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <section className="bg-white py-20 font-sans lg:max-w-lg 2xl:max-w-2xl mx-auto">
      <div className=" px-4">
        {/* 제목 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
            스터디 기록
          </h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full mb-12"></div>
        </div>

        {/* 타임라인 섹션 */}
        <div className="flex justify-between w-full">
          {Object.entries(timelineData).map(([year, events]) => (
            <div
              key={year}
              className={`mb-16 cursor-pointer ${
                activeYear === year ? 'opacity-100' : 'opacity-70'
              }`}
              onClick={() => handleYearClick(year)}
            >
              <h3 className="text-3xl font-bold mb-8 text-left">{year}</h3>
              <div className="relative border-l-2 border-gray-200 pl-8 ml-2">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`mb-8 relative transition-all duration-200 hover:bg-gray-100 hover:scale-105 p-2 rounded ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    } ${selectedEvent === event ? 'bg-gray-200' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                  >
                    <FaStar
                      className="absolute -left-[2.1rem] top-2 text-yellow-400"
                      size={12}
                    />
                    <p className="text-gray-600 mb-1">{event.date}</p>
                    <p className="text-lg">{event.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 서비스 그리드 */}
      </div>
    </section>
  );
}

export default ProjectSection;
