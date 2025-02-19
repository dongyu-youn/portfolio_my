import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import History from './pages/History';
import Recruit from './pages/Recruit';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import SideNavigation from './components/SideNavigation';
import ScrollToTop from './components/ScrollToTop';
import ProjectInquiryForm from './components/ProjectInquiryForm';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/history" element={<History />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project-inquiry" element={<ProjectInquiryForm />} />
          </Routes>
        </main>
        <Footer />
        <SideNavigation />
      </div>
    </Router>
  );
}

export default App;
