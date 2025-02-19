import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setHoverItem(null);
  }, [location.pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { path: '/', text: 'Home' },
    { path: '/news', text: '소식' },
    { path: '/history', text: '연혁' },
    { path: '/recruit', text: '채용정보' },
    { path: '/portfolio', text: '제작사례' },
  ];

  const isActive = (path) => {
    if (path === '/') return false;
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 p-[20px] ">
      <nav className="navbar lg:max-w-lg 2xl:max-w-2xl mx-auto">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Logo scrollToTop={scrollToTop} />
            <DesktopNav
              menuItems={menuItems}
              isActive={isActive}
              hoverItem={hoverItem}
              setHoverItem={setHoverItem}
              scrollToTop={scrollToTop}
            />
            <MobileNav
              isDrawerOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
              menuItems={menuItems}
              scrollToTop={scrollToTop}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
