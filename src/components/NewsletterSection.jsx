import { useState, useEffect } from 'react';
import { FaNewspaper, FaClock, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';

function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNews, setActiveNews] = useState(null);
  const navigate = useNavigate();
  const [news] = useState(newsData);

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

  const handleNewsClick = (newsItem) => {
    const fullNewsData = news.find((item) => item.id === newsItem.id);
    console.log('fullNewsData:', fullNewsData);

    setActiveNews(activeNews === newsItem.id ? null : newsItem.id);
    navigate(`/news/${newsItem.id}`, {
      state: {
        newsData: fullNewsData,
        allNews: news,
      },
    });
  };

  const handleEditClick = (newsItem) => {
    const fullNewsData = news.find((item) => item.id === newsItem.id);

    navigate(`/news/edit/${newsItem.id}`, {
      state: {
        newsData: fullNewsData,
        allNews: news,
      },
    });
  };

  return (
    <section
      id="section4"
      className="bg-white sm:py-10 lg:py-12 font-sans newsletter-section"
    >
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div
          className={`text-left mb-16 transition-all duration-700 transform
          ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            수상 및 발표
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            수상 및 발표 경력을 소개합니다
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
                onClick={() => handleNewsClick(item)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-brand-green text-white text-xs px-3 py-1 rounded-full">
                        {item.category || item.tag}
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
                      {item.script && (
                        <p className="text-gray-600 mt-2">
                          <strong>발표 대본:</strong> {item.script}
                        </p>
                      )}
                      {item.reflection && (
                        <p className="text-gray-600 mt-2">
                          <strong>느낀점:</strong> {item.reflection}
                        </p>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditClick(item);
                        }}
                        className="mt-4 text-brand-green hover:underline"
                      >
                        자세히 보기
                      </button>
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
