import MainContent from '../components/MainContent';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import FaqSection from '../components/FaqSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';

function Home() {
  return (
    <div>
      <MainContent />
      <AboutSection />
      <ProjectSection />
      <FaqSection />
      <PortfolioSection />
      <ServicesSection />
      {/* 추가 섹션 */}
    </div>
  );
}

export default Home;
