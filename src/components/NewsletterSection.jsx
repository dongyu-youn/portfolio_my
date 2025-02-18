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
      title: '인터코어, 신규 서비스 출시 예정',
      date: '2024.03.15',
      content:
        '인터코어가 혁신적인 새로운 서비스를 출시할 예정입니다. 자세한 내용은 곧 공개됩니다.',
      tag: '새소식',
    },
    {
      id: 2,
      title: '2024년 상반기 실적 발표',
      date: '2024.03.10',
      content: '인터코어의 2024년 상반기 실적이 전년 대비 30% 성장했습니다.',
      tag: '실적',
    },
    {
      id: 3,
      title: '신규 파트너십 체결',
      date: '2024.03.05',
      content:
        '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
      tag: '파트너십',
    },
  ];

  const handleNewsClick = (id) => {
    setActiveNews(activeNews === id ? null : id);
  };

  return (
    <section className="bg-white sm:py-10 lg:py-20 font-sans newsletter-section">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div
          className={`text-left mb-16 transition-all duration-700 transform
          ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            인터코어 소식
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            최신 소식과 업데이트를 확인하세요
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
                className={`bg-gray-50 rounded-lg p-6 cursor-pointer
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
