import { useState, useEffect } from 'react';
import { FaNewspaper, FaClock, FaArrowRight } from 'react-icons/fa';

function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNews, setActiveNews] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.newsletter-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const news = [
    {
      id: 1,
      title: '한국신장장애인 홈페이지 리뉴얼',
      date: '2024.03.15',
      content:
        '인터코어가 혁신적인 새로운 서비스를 출시할 예정입니다. 자세한 내용은 곧 공개됩니다.',
      tag: '협력',
    },
    {
      id: 2,
      title: '공주온밤/공주공산성 홈페이지 구축',
      date: '2024.03.10',
      content: '인터코어의 2024년 상반기 실적이 전년 대비 30% 성장했습니다.',
      tag: '협력',
    },
    {
      id: 3,
      title: '인터코어 홈페이지 구축',
      date: '2024.03.05',
      content:
        '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
      tag: '개인 ',
    },
    {
      id: 3,
      title: 'Conpower앱 개발',
      date: '2024.03.05',
      content:
        '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
      tag: '개인 ',
    },
    {
      id: 3,
      title: 'Aurem 홈페이지 구축',
      date: '2024.03.05',
      content:
        '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
      tag: '개인',
    },
  ];

  const handleNewsClick = (id) => {
    setActiveNews(activeNews === id ? null : id);
  };

  return (
    <section className="bg-white sm:py-10 lg:py-12 font-sans newsletter-section">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div
          className={`text-left mb-16 transition-all duration-700 transform
          ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            Project
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            작업했던 프로젝트를 소개합니다
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-500
                ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-20 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div
                className={` rounded-lg p-6 cursor-pointer
                  transition-all duration-300 hover:shadow-lg
                  ${
                    activeNews === item.id
                      ? 'border-l-4 border-brand-green'
                      : ''
                  }`}
                onClick={() => handleNewsClick(item.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-brand-green text-white text-xs px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <FaClock className="mr-2" size={14} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div
                      className={`overflow-hidden transition-all duration-300
                        ${activeNews === item.id ? 'max-h-40' : 'max-h-0'}`}
                    >
                      <p className="text-gray-600 mt-4">{item.content}</p>
                    </div>
                  </div>
                  <FaArrowRight
                    className={`transform transition-transform duration-300
                      ${activeNews === item.id ? 'rotate-90' : 'rotate-0'}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
