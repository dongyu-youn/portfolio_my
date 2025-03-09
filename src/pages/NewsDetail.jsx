import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { Button } from '@material-tailwind/react';

const newsData = [
  {
    id: 1,
    title: '임업진흥원 홈페이지 리뉴얼 기획 및 pm 발표',
    date: '2024-03-15',
    content:
      '인터코어가 혁신적인 새로운 서비스를 출시할 예정입니다. 자세한 내용은 곧 공개됩니다.',
    category: '발표',
  },
  {
    id: 2,
    title: '이북 5도 홈페이지 리뉴얼 기획 및 pm 발표',
    date: '2024.03.10',
    content: '인터코어의 2024년 상반기 실적이 전년 대비 30% 성장했습니다.',
    category: '발표',
  },
  {
    id: 3,
    title: '한국해양진흥원 홈페이지 리뉴얼 기획 및 pm 발표',
    date: '2024.03.05',
    content:
      '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
    category: '발표',
  },
  {
    id: 4,
    title: 'aws 활용 해커톤 대상 수상',
    date: '2024.03.05',
    content:
      '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
    category: '개인',
  },
  {
    id: 5,
    title: '교내 해커톤 대상 3개 수상',
    date: '2024.03.05',
    content:
      '글로벌 기업과의 전략적 파트너십 체결을 통해 사업 영역을 확장합니다.',
    category: '개인',
  },
];

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  // id를 사용하여 newsData 배열에서 해당 뉴스 찾기
  const news = newsData.find((item) => item.id === parseInt(id));

  if (!news) {
    navigate('/news');
    return null;
  }

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 px-4 font-sans">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">{news.category}</div>
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <div className="text-gray-600 mb-6">{news.date}</div>
          {news.image && news.image.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Array.isArray(news.image) ? (
                news.image.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-auto overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`${news.title} ${index + 1}`}
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))
              ) : (
                <div className="relative aspect-auto overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap">{news.content}</div>
        </div>

        <div className="mt-8 flex gap-4">
          <Button onClick={() => navigate('/news')} className="bg-gray-500">
            목록으로
          </Button>
          {adminToken && (
            <>
              <Button
                onClick={() => navigate(`/news/${id}/edit`)}
                className="bg-[#00939A]"
              >
                수정
              </Button>
              <Button
                onClick={() => {
                  if (window.confirm('정말 삭제하시겠습니까?')) {
                    // 삭제 로직
                    navigate('/news');
                  }
                }}
                color="red"
              >
                삭제
              </Button>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default NewsDetail;
