import PageLayout from '../components/layout/PageLayout';
import { useState, useEffect } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { getAllNews, deleteNews } from '../api/news';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

function News() {
  const [newsItems, setNewsItems] = useState([]);
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const data = await getAllNews();
      setNewsItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('뉴스를 불러오는데 실패했습니다:', error);
      setNewsItems([]);
    }
  };

  const handleEdit = async (id) => {
    console.log('Edit ID:', id, typeof id);
    if (typeof id === 'object') {
      id = id.id;
    }
    navigate(`/news/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteNews(id);
      alert('삭제되었습니다.');
      fetchNews();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const handleCreate = () => {
    navigate('/news/create');
  };

  const handleCardClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 font-sans">
        {adminToken && (
          <div className="flex justify-end mb-4">
            <Button className="bg-[#00939A]" onClick={handleCreate}>
              새 뉴스 작성
            </Button>
          </div>
        )}
        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex justify-between items-center h-40 px-6 border-t border-b border-gray-200 cursor-pointer hover:bg-gray-50 relative"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="space-y-2">
                <span className="text-sm text-gray-600">{item.category}</span>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <HiChevronRight className="text-gray-400 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-xl" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{item.date}</span>
                {adminToken && (
                  <div
                    className="flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      size="sm"
                      className="bg-[#00939A]"
                      onClick={() => {
                        console.log('Item ID:', item.id, typeof item.id);
                        handleEdit(item.id);
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      size="sm"
                      color="red"
                      onClick={() => handleDelete(item.id)}
                    >
                      삭제
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default News;
