import PageLayout from '../components/layout/PageLayout';
import { useState, useEffect } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { getAllRecruits, deleteRecruit } from '../api/recruit';
import { useAuth } from '../context/AuthContext';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

function Recruit() {
  const [recruitItems, setRecruitItems] = useState([]);
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecruits();
  }, []);

  const fetchRecruits = async () => {
    try {
      const data = await getAllRecruits();
      setRecruitItems(data);
    } catch (error) {
      console.error('채용공고를 불러오는데 실패했습니다:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/recruit/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteRecruit(id);
      alert('삭제되었습니다.');
      fetchRecruits();
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const handleCreate = () => {
    navigate('/recruit/create');
  };

  return (
    <PageLayout className="bg-white">
      <div className="lg:max-w-lg 2xl:max-w-2xl mx-auto lg:my-16 font-sans">
        {auth.accessToken && (
          <div className="flex justify-end mb-4">
            <Button onClick={handleCreate}>새 채용공고 작성</Button>
          </div>
        )}
        <div className="space-y-0">
          {recruitItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                {auth.accessToken && (
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleEdit(item.id)}>
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

export default Recruit;
