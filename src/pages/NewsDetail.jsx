import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { Button } from '@material-tailwind/react';
import { newsData } from '../data/newsData';

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');
  const [showScript, setShowScript] = useState(false);
  const [showReflection, setShowReflection] = useState(false);

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

          {news.script && (
            <div className="mt-8">
              <button
                onClick={() => setShowScript(!showScript)}
                className="flex items-center gap-2 text-gray-700 font-medium mb-2"
              >
                <span>{showScript ? '▼' : '▶'} 발표 대본</span>
              </button>
              {showScript && (
                <div className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg">
                  <div className="prose max-w-none">
                    {news.script.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 text-gray-800 leading-relaxed"
                        style={{
                          fontSize: '1.05rem',
                          lineHeight: '1.8',
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {news.reflection && (
            <div className="mt-8">
              <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {news.reflection}
              </div>
            </div>
          )}
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
