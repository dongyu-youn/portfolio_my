import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolios = [
    {
      image: '/images/portofolio/app_01.gif',
      title: 'APP 1',
      category: 'APP',
      link: 'http://www.youthday.or.kr/',
    },
    {
      image: '/images/portofolio/app_02.gif',
      title: 'APP 2',
      category: 'APP',
      link: 'https://www.presi.co.kr/',
    },
    {
      image: '/images/portofolio/app_03.gif',
      title: 'APP 3',
      category: 'APP',
      link: 'https://www.walk4all.or.kr/index.html',
    },
    {
      image: '/images/portofolio/app_04.gif',
      title: 'APP 4',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_05.gif',
      title: 'APP 5',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_06.gif',
      title: 'APP 6',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_07.gif',
      title: 'APP 7',
      category: 'APP',
    },
    {
      image: '/images/portofolio/app_08.gif',
      title: 'APP 8',
      category: 'APP',
      link: 'https://web.wafflestay.kr/',
    },
    {
      image: '/images/portofolio/app_09.gif',
      title: 'APP 9',
      category: 'APP',
      link: 'http://m.yeinskin.com/',
    },
    {
      image: '/images/portofolio/app_10.gif',
      title: 'APP 10',
      category: 'APP',
      link: 'http://www.ddason.org',
    },
    {
      image: '/images/portofolio/app_11.gif',
      title: 'APP 11',
      category: 'APP',
      link: 'http://www.seohyuntech.com',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className={`w-3 h-3 mx-1 mt-8 rounded-full transition-all duration-300 
          ${
            i === activeIndex ? 'bg-[#00939A]' : 'bg-gray-300'
          } hover:bg-[#00939A]`}
      />
    ),
  };

  return (
    <section className="bg-[#f8f9fa] py-20 font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            기타 웹사이트 및 앱 작업 제작사례
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            WEBSITE / APP / PRINT / MARKERTING
          </p>
        </div>

        <div
          className={`transition-all duration-700 transform
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
        >
          <Slider {...settings}>
            {portfolios.map((portfolio, index) => (
              <div key={index} className="px-4">
                <div
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  style={{ width: '265px', height: '550px' }}
                >
                  <div className="relative w-full h-full">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
