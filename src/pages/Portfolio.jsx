import { HiChevronRight } from 'react-icons/hi';

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: '청년의날',
      tags: ['웹사이트'],
      description:
        '청년의날 공식 웹사이트 제작. 청년들을 위한 다양한 정보와 프로그램을 제공하는 플랫폼입니다.',
      image: '/images/portofolio/app_01.gif',
      link: 'http://www.youthday.or.kr/',
    },
    {
      id: 2,
      title: '함께하는 부산여행 NFT',
      tags: ['앱'],
      description:
        '부산의 관광 명소를 NFT로 만나보세요. 특별한 여행 경험을 제공하는 모바일 애플리케이션입니다.',
      image: '/images/portofolio/app_04.gif',
    },
    {
      id: 3,
      title: 'MTM',
      tags: ['웹사이트'],
      description:
        '프레시코리아의 공식 웹사이트. 혁신적인 디자인과 사용자 경험을 제공합니다.',
      image: '/images/portofolio/app_02.gif',
      link: 'https://www.presi.co.kr/',
    },
    {
      id: 4,
      title: '대한걷기협회',
      tags: ['웹사이트'],
      description:
        '대한걷기협회 공식 웹사이트. 건강한 걷기 문화를 선도하는 플랫폼입니다.',
      image: '/images/portofolio/app_03.gif',
      link: 'https://www.walk4all.or.kr/index.html',
    },
    {
      id: 5,
      title: '강남예인피부과',
      tags: ['웹사이트'],
      description:
        '강남예인피부과 공식 웹사이트. 전문적인 의료 서비스 정보를 제공합니다.',
      image: '/images/portofolio/app_09.gif',
      link: 'http://m.yeinskin.com/',
    },
    {
      id: 6,
      title: 'WAFFLESTAY',
      tags: ['앱', '웹사이트'],
      description:
        '와플스테이 공식 웹사이트 및 앱. 편리한 숙박 예약 서비스를 제공합니다.',
      image: '/images/portofolio/app_08.gif',
      link: 'https://web.wafflestay.kr/',
    },
  ];

  return (
    <div className="pt-36 min-h-screen bg-white font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">INTER PORTFOLIO</h1>
        <div className="space-y-0">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group flex justify-between items-center h-[300px] px-6 border-t border-b border-gray-200 cursor-pointer hover:bg-gray-50 relative"
            >
              <div className="flex-1 space-y-2 pr-8">
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <HiChevronRight className="text-gray-600 hover:text-black transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-3xl" />
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="w-56 h-56 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
