import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    console.log('portfolioData 전체:', portfolioData);
    console.log('첫 번째 포트폴리오 데이터:', portfolioData[0]);
    console.log('첫 번째 포트폴리오 content:', portfolioData[0]?.content);
  }, []);

  // portfolios가 비어있을 경우 처리
  if (!portfolioData || portfolioData.length === 0) {
    return (
      <section className="bg-white sm:py-8 lg:py-12 font-sans">
        <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
          <div className="text-center">
            <p>포트폴리오 데이터를 불러오는 중입니다...</p>
          </div>
        </div>
      </section>
    );
  }

  const chunks = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const portfolioChunks = chunks(portfolioData, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="bg-white sm:py-8 lg:py-12 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        {/* 제목 */}
        <div className="text-left mb-8">
          <h2 className="sm:text-xl 2xl:text-3xl lg:text-4xl font-bold mb-4">
            포트폴리오
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            WEBSITE / APP / UI & UX DESIGN
          </p>
        </div>

        {/* 모바일 슬라이더 뷰 */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {portfolioChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex}>
                <div className="grid grid-cols-2 gap-4">
                  {chunk.map((portfolio, index) => {
                    console.log('전달하는 포트폴리오 데이터:', portfolio);
                    return (
                      <div
                        key={index}
                        className={`flex justify-center transition-all duration-700 transform
                          ${
                            isVisible
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-10 opacity-0'
                          }
                          ${index % 2 !== 0 ? 'translate-y-4' : ''}`}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <div className="group relative overflow-hidde0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)n rounded-lg shadow-[0_5px_15px_rgba(0.2,0.2,0.2,0.2)] w-full h-[200px] bg-white">
                          <Link
                            to={`/portfolio/${portfolio.id}`}
                            state={{
                              portfolio: {
                                id: portfolio.id,
                                image: portfolio.image,
                                content: portfolio.content,
                                title: portfolio.title,
                                category: portfolio.category,
                                link: portfolio.link,
                                description: portfolio.description,
                                tags: portfolio.tags,
                                contribution: portfolio.contribution,
                                role: portfolio.role,
                                mainLogic: portfolio.mainLogic,
                                githubUrl: portfolio.githubUrl,
                                deployUrl: portfolio.deployUrl,
                                mainContribution: portfolio.mainContribution,
                              },
                            }}
                            className="block w-full h-full flex items-center justify-center"
                          >
                            <img
                              src={portfolio.image}
                              alt={portfolio.title}
                              className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                              <h3 className="text-base font-bold mb-1">
                                {portfolio.title}
                              </h3>
                              <p className="text-xs">{portfolio.category}</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* 데스크톱 그리드 뷰 */}
        <div className="hidden md:block">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 transform
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
          >
            {portfolioData.map((portfolio, index) => {
              console.log('데스크톱 뷰 포트폴리오 데이터:', portfolio);
              return (
                <div
                  key={index}
                  className={`flex justify-center transition-all duration-700 transform
                    ${
                      isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }
                    ${index % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-lg w-full h-[350px] bg-white">
                    <Link
                      to={`/portfolio/${portfolio.id}`}
                      state={{
                        portfolio: {
                          id: portfolio.id,
                          image: portfolio.image,
                          content: portfolio.content,
                          title: portfolio.title,
                          category: portfolio.category,
                          link: portfolio.link,
                          description: portfolio.description,
                          tags: portfolio.tags,
                          contribution: portfolio.contribution,
                          role: portfolio.role,
                          mainLogic: portfolio.mainLogic,
                          githubUrl: portfolio.githubUrl,
                          deployUrl: portfolio.deployUrl,
                          mainContribution: portfolio.mainContribution,
                        },
                      }}
                      className="block w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                        <h3 className="text-xl font-bold mb-2">
                          {portfolio.title}
                        </h3>
                        <p className="text-sm">{portfolio.category}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
