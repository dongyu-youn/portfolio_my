import React from 'react';
import { motion } from 'framer-motion';

const HistoryPage = () => {
  const timelineData = {
    2024: [
      {
        date: '04월',
        content:
          '우리 숲 더하기(한국임업진흥원) 홍보를 위한 단양, 산림경영체험 프로그램 기획 운영',
      },
      {
        date: '05월',
        content: '한국디지털혁신얼라이언스 KODIA 홈페이지 구축',
      },
      {
        date: '08월',
        content:
          '한국언론진흥재단 업체등록(등록 매체 : 광대대행, 온라인광고, 옥외광고, 언론 보도 등)',
      },
      {
        date: '09월',
        content:
          '국가유산 미디어아트 공주 공산성 홍보용 홈페이지구축(공주문화관광재단)',
      },
      {
        date: '09월',
        content: '야간관광 특화도시전용 홈페이지구축(공주문화관광재단)',
      },
      {
        date: '10월',
        content: '오르빛 회암사:re (경기콘텐츠진흥원) 온, 오프라인 홍보마케팅',
      },
      {
        date: '12월~01월',
        content: '한국신장장애인 울산협회 홍보 및 홈페이지구축',
      },
    ],
    2025: [
      {
        date: '01월',
        content:
          'ZWICK(독일) 한국총판 엠티엠코퍼레이션 만능재료시험기 온,오프라인 홍보마케팅 및 홈페이지 유지보수',
      },
    ],
  };

  return (
    <div className="lg:py-16 sm:py-16 lg:max-w-[75rem] 2xl:max-w-layout mx-auto lg:mt-[5rem] sm:px-8 lg:p-0 font-sans  lg:my-16">
      <div className="mt-12 max-w-4xl mx-auto">
        {Object.entries(timelineData).map(([year, events], yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + yearIndex * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">{year}</h2>
            <div className="relative border-l-2 border-gray-200 pl-8 ml-2">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="mb-8 relative before:content-[''] before:w-3 before:h-3 before:bg-[#00939A] before:absolute before:left-[-2.1rem] before:top-2 before:rounded-full"
                >
                  <p className="text-gray-600 mb-1">{event.date}</p>
                  <p className="text-lg">{event.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
