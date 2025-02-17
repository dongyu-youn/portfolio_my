import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SideNavigation from './components/SideNavigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
        <SideNavigation />
      </div>
    </Router>
  );
}

export default App;
