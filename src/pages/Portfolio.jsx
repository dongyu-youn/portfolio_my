import { HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAllPortfolios, deletePortfolio } from '../api/portfolio';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const data = await getAllPortfolios();
      setPortfolioItems(data);
      console.log(data);
    } catch (error) {
      console.error('포트폴리오를 불러오는데 실패했습니다:', error);
    }
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();
    navigate(`/portfolio/${id}/edit`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deletePortfolio(id);
      alert('삭제되었습니다.');
      fetchPortfolios();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const handleCreate = () => {
    navigate('/portfolio/create');
  };

  const handleCardClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <div className="pt-36 min-h-screen bg-white font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        {adminToken && (
          <div className="flex justify-end mb-4">
            <Button className="bg-[#00939A]" onClick={handleCreate}>
              새 포트폴리오 작성
            </Button>
          </div>
        )}
        <div className="grid sm:gap-24 lg:gap-0">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex sm:flex-col lg:flex-row justify-between items-center h-[300px] px-6 border-t last:border-b border-gray-200 cursor-pointer hover:bg-gray-50 relative"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="flex-1 space-y-2 pr-8 my-4">
                <div className="flex gap-2 flex-wrap">
                  {item.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <HiChevronRight className="text-gray-600 hover:text-black transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-3xl" />
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
                {adminToken && (
                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      className="bg-[#00939A]"
                      onClick={(e) => handleEdit(e, item.id)}
                    >
                      수정
                    </Button>
                    <Button
                      size="sm"
                      color="red"
                      onClick={(e) => handleDelete(e, item.id)}
                    >
                      삭제
                    </Button>
                  </div>
                )}
              </div>
              <div className="w-56 h-56 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
