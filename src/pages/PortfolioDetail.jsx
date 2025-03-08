import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import { FaGithub } from 'react-icons/fa';

function PortfolioDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    console.log('Location State:', location.state);
    console.log('Portfolio Data:', location.state?.portfolio);

    if (location.state?.portfolio) {
      setPortfolio(location.state.portfolio);
      console.log('Set Portfolio:', location.state.portfolio);
    } else {
      navigate('/portfolio');
    }
  }, [location.state, navigate]);

  console.log('Current Portfolio State:', portfolio);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="aspect-square">
                <img
                  src="/images/a.png"
                  alt="이미지 1"
                  className="w-full h-full object-contain rounded-lg border border-gray-200"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="/images/b.png"
                  alt="이미지 2"
                  className="w-full h-full object-contain rounded-lg border border-gray-200"
                />
              </div>
              <div className="aspect-square">
                <img
                  src="/images/c.png"
                  alt="이미지 3"
                  className="w-full h-full object-contain rounded-lg border border-gray-200"
                />
              </div>
            </div>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-2">프로젝트 설명</h2>
              <p className="text-gray-700 whitespace-pre-wrap text-xl">
                {portfolio.content}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">기여도</h2>
              <p className="text-gray-700 text-xl">{portfolio.contribution}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">역할</h2>
              <p className="text-gray-700 text-xl">{portfolio.role}</p>
            </div>

            {portfolio.mainLogic && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2 ">주요 로직</h2>
                <p className="text-gray-700 text-xl">{portfolio.mainLogic}</p>
              </div>
            )}

            {portfolio.mainContribution && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-2">주요 기여</h2>
                <p className="text-gray-700 text-xl">
                  {portfolio.mainContribution}
                </p>
              </div>
            )}

            {portfolio.githubUrl && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <FaGithub className="text-2xl" />
                  GitHub
                </h2>
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300"
                >
                  <span>{portfolio.githubUrl}</span>
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
                  onClick={() => navigate(`/portfolio/${portfolio.id}/edit`)}
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
