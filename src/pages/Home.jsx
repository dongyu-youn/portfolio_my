import MainContent from '../components/MainContent';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import FaqSection from '../components/FaqSection';
import PortfolioSection from '../components/PortfolioSection';
import ServicesSection from '../components/ServicesSection';
import NewsletterSection from '../components/NewsletterSection';

function Home() {
  return (
    <div>
      <MainContent />
      <PortfolioSection />
      <AboutSection />
      <ProjectSection />
      <NewsletterSection />
      <ServicesSection />
      {/* 추가 섹션 */}
    </div>
  );
}

export default Home;
