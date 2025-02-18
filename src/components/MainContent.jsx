import 'animate.css';
import { useEffect, useState } from 'react';

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-brand-green font-sans w-full ">
      <div className="container mx-auto px-2 lg:h-[500px] sm:h-[300px] sm:mt-20 lg:mt-24 max-w-2xl">
        <div className="flex flex-row lg:flex-row items-center justify-start h-full">
          {/* 왼쪽 텍스트 영역 */}
          <div
            className={`w-1/2 lg:w-1/2 text-white space-y-4 sm:space-y-2 lg:space-y-6 text-center lg:text-left flex flex-col justify-start h-full mb-[5%] sm:mt-[25%] lg:mt-[20%] transition-all duration-700 transform sm:pt-4 lg:pt-0
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h1 className="text-xl sm:text-lg lg:text-5xl font-bold text-[#b9f0ea] text-center sm:text-left">
              <span className="block">가치란,</span>
              <span className="block sm:block lg:block">이해와 공감에서</span>
              <span className="block sm:block lg:inline">시작합니다.</span>
            </h1>
            <div className="text-base sm:text-sm lg:text-xl text-center sm:text-left">
              <p className="font-light text-[#b9f0ea]">
                간결하면서도 섬세한 UX, 고객과 함께 성장합니다.
              </p>
              <p className="font-light text-[#b9f0ea]">
                웹앱개발에 필요한 콘텐츠 제작
              </p>
            </div>
            <h2 className="text-lg sm:text-lg lg:text-4xl font-light leading-relaxed lg:leading-[40px] text-[#b9f0ea] lg:mt-8 text-center sm:text-left">
              비즈니스를 위한 선택, 인터코어!
            </h2>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div
            className={`w-1/2 lg:w-1/2 lg:mt-12 flex justify-center items-center transition-all duration-2500 transform lg:pl-[12%] lg:pb-[3%]
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '2s' }}
          >
            <div className="relative flex justify-center items-center">
              <img
                src="/images/mainIcons/mainIcon.jpeg"
                alt="Phone 1"
                className={`transform h-[200px] sm:w-[250px] sm:h-[180px] lg:w-[400px] lg:h-[400px] hover:rotate-0 transition-transform duration-3000 mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal rounded-full object-cover
                  ${isVisible ? 'animate-bulb-glow' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
