import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { getNewsById } from '../api/news';
import { Button } from '@material-tailwind/react';

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsById(id);
        let image = data.image;
        try {
          if (typeof image === 'string') {
            image = JSON.parse(image);
          }
        } catch (e) {
          console.log('이미지 파싱 실패:', e);
          image = [data.image];
        }
        setNews({ ...data, image });
      } catch (error) {
        console.error('뉴스를 불러오는데 실패했습니다:', error);
        navigate('/news');
      }
    };
    fetchNews();
  }, [id, navigate]);

  if (!news) return null;

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 px-4 font-sans">
        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">{news.category}</div>
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <div className="text-gray-600 mb-6">{news.date}</div>
          {news.image && news.image.length > 0 && (
            <img
              src={news.image[0]}
              alt={news.title}
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />
          )}
        </div>

        <div className="prose max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: news.content }}
            className="whitespace-pre-wrap"
          />
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
