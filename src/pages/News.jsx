import PageLayout from '../components/layout/PageLayout';
import { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';

function News() {
  const [newsItems] = useState([
    {
      id: 1,
      title: '인터코어 2025년 설 연휴 단축근무 & 휴무안내',
      date: '2025.01.22',
      category: '공지사항',
    },
    {
      id: 2,
      title: '인터코어 디자인 무단 도용·복제 등 저작권 침해 안내',
      date: '2025.01.07',
      category: '공지사항',
    },
    {
      id: 3,
      title: '인터코어 2024년 가족친화인증기업 선정',
      date: '2024.12.18',
      category: '공지사항',
    },
    {
      id: 4,
      title: '인터코어 홈페이지 굿디자인 베스트 선정',
      date: '2024.10.25',
      category: '공지사항',
    },
  ]);

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16">
        <h1 className="text-3xl font-bold mb-8">INTER NEWS</h1>
        <div className="space-y-0">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group flex justify-between items-center h-40 px-6 border-t border-b border-gray-200 cursor-pointer hover:bg-gray-50 relative"
            >
              <div className="space-y-2">
                <span className="text-sm text-gray-600">{item.category}</span>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <HiChevronRight className="text-gray-600 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-3xl" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default News;
