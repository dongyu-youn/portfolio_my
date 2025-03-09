import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import OrganizationChart from '../components/OrganizationChart';

// 카테고리별 스타일 설정
const categoryStyles = {
  WEBSITE: {
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
    titleColor: 'text-blue-900',
  },
  APP: {
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
    titleColor: 'text-green-900',
  },
};

function PortfolioDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');
  const [portfolio, setPortfolio] = useState(null);
  const [showOrganization, setShowOrganization] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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

  // 현재 포트폴리오의 카테고리에 따른 스타일 가져오기
  const currentStyle =
    categoryStyles[portfolio?.category] || categoryStyles.WEBSITE;

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleOrganizationClick = (e) => {
    e.stopPropagation();
    setShowOrganization(!showOrganization);
  };

  const handleDonationClick = (e) => {
    e.stopPropagation();
    setShowDonation(!showDonation);
  };

  const handleBackgroundClick = () => {
    // 배경 클릭 시 모든 팝업 닫기
    setShowOrganization(false);
    setShowDonation(false);
  };

  if (!portfolio) {
    return <div className="pt-36 min-h-screen">로딩중...</div>;
  }

  return (
    <div
      className="pt-36 min-h-screen bg-gray-50 font-sans pb-20"
      onClick={handleBackgroundClick}
    >
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <h1 className={`text-3xl font-bold mb-4 `}>{portfolio.title}</h1>
              <Button
                className="bg-gray-500"
                onClick={() => navigate('/portfolio')}
              >
                목록으로
              </Button>
            </div>

            {/* 카테고리 표시 */}
            <div className="mb-4">
              <span
                className={`inline-block px-4 py-1.5 ${currentStyle.tagBg} ${currentStyle.tagText} rounded-md font-medium`}
              >
                {portfolio.category}
              </span>
            </div>

            {/* 태그 */}
            <div className="flex gap-2 flex-wrap mb-4">
              {portfolio.tags?.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 ${currentStyle.tagBg} ${currentStyle.tagText} text-sm rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 이미지 그리드 섹션 업데이트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {portfolio.detailImages?.map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`프로젝트 이미지 ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg border border-gray-200"
                  />
                </div>
              ))}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-2">프로젝트 설명</h2>
              <p className="text-gray-700 whitespace-pre-wrap text-xl">
                {portfolio.content}
              </p>
            </div>

            {/* 기여도를 시각적으로 표현 */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">기여도</h2>
              <div className="relative w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="absolute h-full bg-blue-600 rounded-full"
                  style={{ width: portfolio.contribution }}
                ></div>
              </div>
              <p className="text-right mt-1 text-gray-600">
                {portfolio.contribution}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">역할</h2>
              <p className="text-gray-700 text-xl">{portfolio.role}</p>
            </div>

            {/* 주요 로직 섹션 */}
            {portfolio.mainLogic && (
              <div
                className={`mt-6 cursor-pointer transition-all duration-300 transform hover:scale-105`}
                onClick={() => handleSectionClick('logic')}
              >
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-900 flex justify-between items-center">
                    주요 로직
                    <span className="text-sm text-gray-600">
                      {activeSection === 'logic' ? '(접기)' : '(펼쳐보기)'}
                    </span>
                  </h2>
                  {activeSection === 'logic' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 text-xl">
                        {portfolio.mainLogic}
                      </p>
                      <div className="mt-6 flex flex-col gap-4">
                        {/* 조직도 섹션 */}
                        <div>
                          <button
                            onClick={handleOrganizationClick}
                            className="flex items-center gap-2 text-xl font-semibold mb-2"
                          >
                            <span>후원 로직</span>
                            <span className="text-sm">
                              {showOrganization ? '(접기)' : '(펼쳐보기)'}
                            </span>
                          </button>
                          {showOrganization && <OrganizationChart />}
                        </div>

                        {/* 후원/기부 섹션 */}
                        <div>
                          <button
                            onClick={handleDonationClick}
                            className="flex items-center gap-2 text-xl font-semibold mb-2"
                          >
                            <span>api 로직</span>
                            <span className="text-sm">
                              {showDonation ? '(접기)' : '(펼쳐보기)'}
                            </span>
                          </button>
                          {showDonation && (
                            <div className="mt-4">
                              {/* 여기에 후원/기부 관련 내용을 추가하세요 */}
                              <p className="text-gray-700 text-xl">
                                후원/기부 관련 내용이 들어갈 자리입니다.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* 조직도와 후원/기부 섹션 */}

            {/* 주요 기여 섹션 */}
            {portfolio.mainContribution && (
              <div
                className={`mt-6 cursor-pointer transition-all duration-300 transform hover:scale-105`}
                onClick={() => handleSectionClick('contribution')}
              >
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                  <h2 className="text-2xl font-semibold mb-2 text-green-900 flex justify-between items-center">
                    주요 기여
                    <span className="text-sm text-gray-600">
                      {activeSection === 'contribution'
                        ? '(접기)'
                        : '(펼쳐보기)'}
                    </span>
                  </h2>
                  {activeSection === 'contribution' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 text-xl">
                        {portfolio.mainContribution}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {/* GitHub 링크 스타일 개선 */}
            {portfolio.githubUrl && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900">
                  <FaGithub className="text-2xl" />
                  GitHub
                </h2>
                <a
                  href={portfolio.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300 hover:underline"
                >
                  <span>{portfolio.githubUrl}</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
                {portfolio.commitHistory && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300">
                      커밋 히스토리 보기
                    </summary>
                    <div className="mt-2 text-sm text-gray-600 whitespace-pre-wrap overflow-auto max-h-96">
                      {portfolio.commitHistory}
                    </div>
                  </details>
                )}
              </div>
            )}

            {portfolio.link && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900">
                  <img
                    src={portfolio.image}
                    alt="external link icon"
                    className="w-6 h-6"
                  />
                  배포 URL
                </h2>
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300 hover:underline"
                >
                  <span>{portfolio.link}</span>
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
