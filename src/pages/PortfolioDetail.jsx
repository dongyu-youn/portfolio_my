import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPortfolioById } from '../api/portfolio';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';

function PortfolioDetail() {
  const [portfolio, setPortfolio] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        console.log('포트폴리오 ID:', id);
        const data = await getPortfolioById(id);
        console.log('받아온 포트폴리오 데이터:', data);
        setPortfolio(data);
      } catch (error) {
        console.error('포트폴리오를 불러오는데 실패했습니다:', error);
        navigate('/portfolio');
      }
    };

    fetchPortfolio();
  }, [id, navigate]);

  if (!portfolio) {
    return <div className="pt-36 min-h-screen">로딩중...</div>;
  }

  return (
    <div className="pt-36 min-h-screen bg-white font-sans">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold mb-4">{portfolio.title}</h1>
              <Button
                className="bg-gray-500"
                onClick={() => navigate('/portfolio')}
              >
                목록으로
              </Button>
            </div>
            <div className="flex gap-2 flex-wrap mb-4">
              {portfolio.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-2">프로젝트 설명</h2>
              <p className="text-gray-700 whitespace-pre-wrap">
                {portfolio.description}
              </p>
            </div>

            {portfolio.githubUrl && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">GitHub</h2>
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {portfolio.githubUrl}
                </a>
              </div>
            )}

            {portfolio.deployUrl && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">배포 URL</h2>
                <a
                  href={portfolio.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {portfolio.deployUrl}
                </a>
              </div>
            )}

            {adminToken && (
              <div className="flex gap-2 mt-8">
                <Button
                  className="bg-[#00939A]"
                  onClick={() => navigate(`/portfolio/${id}/edit`)}
                >
                  수정
                </Button>
                <Button color="red" onClick={() => navigate('/portfolio')}>
                  삭제
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
