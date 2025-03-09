import 'animate.css';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-brand-green font-ssukssuk w-full ">
      <div className="container px-2 lg:mx-auto lg:h-[500px] sm:h-[300px] sm:mt-20 lg:mt-20 sm:max-w-[400px] lg:max-w-lg 2xl:max-w-2xl">
        <div className="flex flex-row lg:flex-row items-center justify-start h-full">
          {/* 왼쪽 텍스트 영역 */}
          <div
            className={`w-full sm:w-1/2 lg:w-1/2 text-white space-y-4 sm:space-y-2 lg:space-y-6 text-center lg:text-left flex flex-col justify-center h-full transition-all duration-1000 transform
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-2xl sm:text-2xl lg:text-6xl font-light text-[#b9f0ea] text-center whitespace-normal sm:whitespace-normal lg:whitespace-nowrap">
              <TypeAnimation
                sequence={['풀스택 개발자 윤동규', 1000]}
                wrapper="span"
                speed={-5}
                style={{ display: 'inline-block' }}
                repeat={1}
              />
            </h2>
            <p className="text-lg sm:text-base lg:text-2xl font-light text-[#b9f0ea] text-center px-4">
              주변 사람들에게 직접적으로 도움이 될 만한 프로젝트를 고안하고
              공감하며 스스로 기획, 디자인, 코딩, 배포까지 도맡아 프로젝트를
              진행하였습니다
            </p>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div
            className={`w-full sm:w-1/2 lg:w-1/2 flex justify-center lg:ml-12 2xl:ml-36 items-center transition-all duration-1000 transform
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative flex justify-center items-center">
              <img
                src="/images/poket.jpg"
                alt="Phone 1"
                className={`transform h-[180px] sm:w-[220px] sm:h-[160px] lg:w-[380px] lg:h-[380px] hover:rotate-0 transition-all duration-1000 mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal rounded-full object-cover object-[center_10%]
                  `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
