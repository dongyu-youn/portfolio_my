import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const TabSwiper = ({ tabs, vertical = false, activeTab, setActiveTab }) => {
  const swiperRef = React.useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
    console.log('Previous button clicked');
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
    console.log('Next button clicked');
  };

  return (
    <div className="w-full h-10 text-center relative">
      <div
        className="absolute left-0 top-0 h-full w-12 flex items-center justify-center text-black text-sm cursor-pointer z-10 swiper-button-prev"
        onClick={handlePrevClick}
      >
        <ArrowLeftIcon className="w-2 h-2" />
      </div>
      <div
        className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-black text-sm cursor-pointer z-10 swiper-button-next"
        onClick={handleNextClick}
      >
        <ArrowRightIcon className="w-3 h-3" />
      </div>

      <style jsx>{`
        @keyframes swipeHand {
          0% {
            transform: translateX(-1px);
          }
          50% {
            transform: translateX(1px);
          }
          100% {
            transform: translateX(-1px);
          }
        }
      `}</style>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        direction="horizontal"
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          console.log(`Slide changed to index: ${swiper.realIndex}`);
          setActiveTab(swiper.realIndex);
        }}
        initialSlide={activeTab}
        loop={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        className="h-full"
      >
        {tabs.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="relative text-center py-2 px-10">
              <span
                className={`${
                  activeTab === index
                    ? 'text-gray-800 font-semibold'
                    : 'text-gray-500'
                }`}
              >
                {text}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabSwiper;
