import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SideNavigation() {
  const [activeSection, setActiveSection] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;

      // 스크롤 위치에 따라 섹션 번호 결정
      if (scrollPercentage < 15) {
        setActiveSection(1); // Main
      } else if (scrollPercentage < 35) {
        setActiveSection(2); // Portfolio
      } else if (scrollPercentage < 55) {
        setActiveSection(3); // Stack
      } else if (scrollPercentage < 75) {
        setActiveSection(4); // Awards & Presentations
      } else if (scrollPercentage < 90) {
        setActiveSection(5); // Study
      } else {
        setActiveSection(6); // Strength
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 실행

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const navigationItems = [
    { id: 1, label: 'Main' },
    { id: 2, label: 'Portfolio' },
    { id: 3, label: 'Stack' },
    { id: 4, label: 'Awards & Presentations' },
    { id: 5, label: 'Study' },
    { id: 6, label: 'Strength' },
  ];

  const scrollToSection = (index) => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    // 각 섹션의 상대적 위치 계산
    let targetPosition;
    switch (index) {
      case 1: // Main
        targetPosition = 0;
        break;
      case 2: // Portfolio
        targetPosition = scrollableHeight * 0.2;
        break;
      case 3: // Stack
        targetPosition = scrollableHeight * 0.4;
        break;
      case 4: // Awards & Presentations
        targetPosition = scrollableHeight * 0.6;
        break;
      case 5: // Study
        targetPosition = scrollableHeight * 0.8;
        break;
      case 6: // Strength
        targetPosition = scrollableHeight;
        break;
      default:
        targetPosition = 0;
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    setActiveSection(index);
  };

  return (
    <div
      className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 font-sans hidden ${
        location.pathname === '/' ? 'lg:block' : 'hidden'
      }`}
    >
      <div className="flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative w-8 h-8 flex items-center justify-center transition-all duration-300 group`}
          >
            <img
              src="/images/moon.png"
              alt="seed"
              className={`absolute w-full h-full transition-all duration-300
                ${
                  activeSection === item.id
                    ? 'opacity-100 scale-110'
                    : 'opacity-40 hover:opacity-75 hover:scale-105'
                }`}
            />
            <span className="relative z-10 text-sm font-medium text-gray-600">
              {item.id}
            </span>
            <span
              className={`absolute right-full mr-4 transition-all duration-300 whitespace-nowrap text-sm
                ${
                  activeSection === item.id
                    ? 'text-gray-800 opacity-100 translate-x-0'
                    : 'text-gray-600 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNavigation;
