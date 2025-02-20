import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/admin/Login';
import { AuthProvider } from './context/AuthContext';
import NewsEditPage from './pages/news/NewsEditPage';
import RecruitEditPage from './pages/recruit/RecruitEditPage';
import PortfolioEditPage from './pages/portfolio/PortfolioEditPage';

function App() {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <ScrollToTop />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/create" element={<NewsEditPage />} />
                <Route path="/news/:id/edit" element={<NewsEditPage />} />
                <Route path="/history" element={<History />} />
                <Route path="/recruit" element={<Recruit />} />
                <Route path="/recruit/create" element={<RecruitEditPage />} />
                <Route path="/recruit/:id/edit" element={<RecruitEditPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route
                  path="/portfolio/create"
                  element={<PortfolioEditPage />}
                />
                <Route
                  path="/portfolio/:id/edit"
                  element={<PortfolioEditPage />}
                />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/project-inquiry"
                  element={<ProjectInquiryForm />}
                />
                <Route path="/admin/login" element={<AdminLogin />} />
              </Routes>
            </main>
            <Footer />
            <SideNavigation />
          </div>
        </BrowserRouter>
      </AdminAuthProvider>
    </AuthProvider>
  );
}

export default App;
