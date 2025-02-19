import PageLayout from '../components/layout/PageLayout';
import { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';

function Recruit() {
  const [recruitItems] = useState([
    {
      id: 1,
      title: '2025년 상반기 신입/경력 개발자 채용',
      date: '2025.01.22',
      category: '채용공고',
    },
    {
      id: 2,
      title: '2025년 상반기 신입/경력 디자이너 채용',
      date: '2025.01.07',
      category: '채용공고',
    },
    {
      id: 3,
      title: '2024년 하반기 신입/경력 마케터 채용',
      date: '2024.12.18',
      category: '채용공고',
    },
  ]);

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 font-sans">
        <h1 className="text-3xl font-bold mb-8">INTER RECRUIT</h1>
        <div className="space-y-0">
          {recruitItems.map((item) => (
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

export default Recruit;
