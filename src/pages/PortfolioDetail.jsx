import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import OrganizationChart from '../components/OrganizationChart';
import CategoryTag from '../components/portfolio/CategoryTag';
import ImageGrid from '../components/portfolio/ImageGrid';
import ProjectDescription from '../components/portfolio/ProjectDescription';

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

  const getOrganizationChart = () => {
    // 프로젝트 타이틀을 props로 전달
    return <OrganizationChart projectTitle={portfolio.title} />;
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

            <CategoryTag category={portfolio.category} />
            {portfolio.tags && portfolio.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 my-4">
                {portfolio.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <ImageGrid images={portfolio.detailImages} />
            {portfolio.title === '오름' && (
              <div className="mt-6 mb-6">
                <div className="mb-3 text-gray-600 text-sm">
                  * Adobe Premiere Pro를 활용하여 직접 편집한 홍보 영상입니다.
                </div>
                <video className="w-full rounded-lg shadow-lg" controls>
                  <source src="/images/mp4/movie.mp4" type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              </div>
            )}
            <ProjectDescription
              content={portfolio.content}
              role={portfolio.role}
            />

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

            {/* 주요 로직 섹션 */}
            {portfolio.mainLogic && (
              <div
                className={`mt-6 cursor-pointer transition-all duration-300 transform hover:scale-105`}
                onClick={() => handleSectionClick('logic')}
              >
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <h2 className="text-2xl font-semibold mb-2 text-blue-900 flex justify-between items-center">
                    해결했던 컴플레인
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
                          {showOrganization && getOrganizationChart()}
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
                        <div>
                          <button
                            onClick={handleDonationClick}
                            className="flex items-center gap-2 text-xl font-semibold mb-2"
                          >
                            <span>DNS(배포) 문제 해결</span>
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
                      <p className="text-gray-700 text-xl whitespace-pre-wrap">
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
                {Array.isArray(portfolio.githubUrl) ? (
                  portfolio.githubUrl.map((url, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300 hover:underline mb-2"
                    >
                      <span>{url}</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  ))
                ) : (
                  <a
                    href={portfolio.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300 hover:underline"
                  >
                    <span>{portfolio.githubUrl}</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
                {portfolio.commitHistory && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      커밋 히스토리 보기
                    </summary>
                    <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                      {portfolio.commitHistory
                        .split('\n')
                        .map((line, index) => {
                          // 커밋 해시 (a5847f2, e1b13b0 등) 스타일링
                          if (line.match(/^\* [a-f0-9]{7}/)) {
                            return (
                              <div
                                key={index}
                                className="font-mono text-purple-600 font-bold mt-4"
                              >
                                {line}
                              </div>
                            );
                          }
                          // 날짜 스타일링
                          else if (
                            line.match(/\d{4}[-/.]\d{1,2}[-/.]\d{1,2}/)
                          ) {
                            return (
                              <div
                                key={index}
                                className="text-blue-600 font-semibold"
                              >
                                {line}
                              </div>
                            );
                          }
                          // 수정된 파일 경로 스타일링
                          else if (
                            line.includes('src/') ||
                            line.includes('.jsx') ||
                            line.includes('.js')
                          ) {
                            return (
                              <div
                                key={index}
                                className="text-green-600 font-mono pl-4"
                              >
                                {line}
                              </div>
                            );
                          }
                          // 일반 설명 텍스트
                          else if (line.trim().startsWith('-')) {
                            return (
                              <div
                                key={index}
                                className="text-gray-700 pl-8 py-0.5"
                              >
                                {line}
                              </div>
                            );
                          }
                          // 기타 텍스트
                          return (
                            <div
                              key={index}
                              className="text-gray-600 pl-4 py-0.5"
                            >
                              {line}
                            </div>
                          );
                        })}
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

            {portfolio.title === '오름' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900">
                  <img
                    src="/images/notion.png"
                    alt="notion icon"
                    className="w-6 h-6"
                  />
                  Notion 문서
                </h2>
                <a
                  href="https://military-sceptre-b48.notion.site/18ac1628f36b4a31b2c076ae0f464b6d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors duration-300 hover:underline"
                >
                  <span>오름 프로젝트 문서</span>
                  <FaExternalLinkAlt className="text-sm" />
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
