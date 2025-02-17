import 'animate.css';
import { useEffect, useState } from 'react';
import WOW from 'wowjs';

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#00939A] font-sans">
      <div className="inset-0 mx-auto px-4 h-screen lg:max-w-lg 2xl:max-w-2xl mt-24">
        <div className="flex flex-col lg:flex-row items-start justify-start h-full">
          {/* 왼쪽 텍스트 영역 */}
          <div
            className={`lg:w-1/2 text-white space-y-6 text-left flex flex-col justify-start h-full mb-[5%] mt-[10%] transition-all duration-700 transform
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h1 className="text-3xl lg:text-7xl font-bold  text-left text-[#b9f0ea]">
              <span className="block">가치란,</span>
              <span className="block">이해와 공감에서</span>
              <span className="block">시작합니다.</span>
            </h1>
            <div className=" text-left text-2xl lg:text-xl">
              <p className=" font-light  text-[#b9f0ea]">
                간결하면서도 섬세한 UX, 고객과 함께 성장합니다.
              </p>
              <p className=" font-light  text-[#b9f0ea]">
                웹앱개발에 필요한 콘텐츠 제작
              </p>
            </div>
            <h2 className=" text-4xl font-light leading-[40px] text-left text-[#043937] mt-8">
              비즈니스를 위한 선택, 인터코어!
            </h2>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div
            className={`lg:w-1/2 lg:mt-16 flex justify-center items-start transition-all duration-700 transform
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="relative">
              <img
                src="/images/mainContent/image.png"
                alt="Phone 1"
                className="transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
