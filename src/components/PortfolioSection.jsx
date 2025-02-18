import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolios = [
    {
      image: '/images/portofolio/app_01.gif',
      title: '청년의날',
      category: 'WEBSITE',
      link: 'http://www.youthday.or.kr/',
    },
    {
      image: '/images/portofolio/app_04.gif',
      title: '함께하는 부산여행 NFT',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_02.gif',
      title: 'MTM',
      category: 'WEBSITE',
      link: 'https://www.presi.co.kr/',
    },
    {
      image: '/images/portofolio/app_05.gif',
      title: '청년의날 홍보',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_03.gif',
      title: '대한걷기협회',
      category: 'WEBSITE',
      link: 'https://www.walk4all.or.kr/index.html',
    },
    {
      image: '/images/portofolio/app_06.gif',
      title: 'APP 6',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_09.gif',
      title: '강남예인피부과',
      category: 'WEBSITE',
      link: 'http://m.yeinskin.com/',
    },
    {
      image: '/images/portofolio/app_07.gif',
      title: '탄소중립',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_10.gif',
      title: '따손',
      category: 'WEBSITE',
      link: 'http://www.ddason.org',
    },
    {
      image: '/images/portofolio/app_08.gif',
      title: 'WAFFLESTAY',
      category: 'APP',
      link: 'https://web.wafflestay.kr/',
    },
    {
      image: '/images/portofolio/app_11.gif',
      title: '서현 테크놀로지',
      category: 'WEBSITE',
      link: 'http://www.seohyuntech.com',
    },
    {
      image: '/images/portofolio/app_12.png',
      title: '울산 신장장애인 협회',
      category: 'WEBSITE',
      link: 'http://www.kidneyus.or.kr/',
    },
  ];

  const chunks = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const portfolioChunks = chunks(portfolios, 6);

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
            WEBSITE / APP / PRINT / MARKETING
          </p>
        </div>

        {/* 모바일 슬라이더 뷰 */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {portfolioChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex}>
                <div className="grid grid-cols-2 gap-4">
                  {chunk.map((portfolio, index) => (
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
                      <div className="group relative overflow-hidden rounded-lg shadow-lg w-full h-[200px]">
                        <a
                          href={portfolio.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={portfolio.image}
                            alt={portfolio.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                            <h3 className="text-base font-bold mb-1">
                              {portfolio.title}
                            </h3>
                            <p className="text-xs">{portfolio.category}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
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
            {portfolios.map((portfolio, index) => (
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
                <div className="group relative overflow-hidden rounded-lg shadow-lg w-full h-[450px]">
                  <a
                    href={portfolio.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {portfolio.title}
                      </h3>
                      <p className="text-sm">{portfolio.category}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
