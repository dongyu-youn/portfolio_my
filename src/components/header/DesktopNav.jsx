import { Link } from 'react-router-dom';
import { IoIosWater } from 'react-icons/io';
import { useEffect, useState } from 'react';

function DesktopNav({
  menuItems,
  isActive,
  hoverItem,
  setHoverItem,
  scrollToTop,
}) {
  const adminToken = localStorage.getItem('adminToken');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    return () => setHoverItem(null);
  }, [menuItems, setHoverItem]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      console.log(`메뉴 ${menuItems[hoveredIndex].text}에 마우스 오버됨`);
    }
  }, [hoveredIndex, menuItems]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.reload();
  };

  return (
    <div className="hidden md:block font-sans">
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          console.log(`${item.text} 메뉴 hover 상태:`, isHovered);

          return (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className={`block py-2 text-black text-base relative hover:text-[#00939A] transition-colors duration-300
                  ${isActive(item.path) ? 'text-[#00939A]' : ''}`}
                onClick={scrollToTop}
                onMouseEnter={() => {
                  setHoverItem(index);
                  setHoveredIndex(index);
                  console.log(`${item.text} 메뉴에 마우스 진입`);
                }}
                onMouseLeave={() => {
                  setHoverItem(null);
                  setHoveredIndex(null);
                  console.log(`${item.text} 메뉴에서 마우스 이탈`);
                }}
              >
                {item.text}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
                  <IoIosWater
                    className={`text-[#00939A] transition-all duration-500
                      ${
                        isActive(item.path) || isHovered
                          ? 'opacity-100 translate-y-4'
                          : 'opacity-0 translate-y-0'
                      }`}
                    size={16}
                  />
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00939A] transform origin-left
                    ${
                      isActive(item.path) || isHovered
                        ? 'transition-transform duration-300 ease-out scale-x-100'
                        : 'transition-transform duration-300 ease-out scale-x-0'
                    }`}
                />
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2
                    w-8 h-8 bg-[#00939A]/20 rounded-full
                    ${
                      isActive(item.path)
                        ? 'animate-ripple opacity-100'
                        : isHovered
                        ? 'animate-rippleOnHover opacity-100'
                        : 'opacity-0'
                    }`}
                />
              </Link>
            </li>
          );
        })}
        <li>
          {adminToken ? (
            <button
              onClick={handleLogout}
              className="block py-2 px-4 bg-red-500 text-white rounded-full 
                hover:bg-red-600 hover:no-underline 
                transition-all duration-300 transform hover:scale-105"
            >
              관리자 로그아웃
            </button>
          ) : (
            <Link
              to="/project-inquiry"
              className="block py-2 px-4 bg-brand-green text-white rounded-full 
                hover:bg-brand-primary/90 hover:no-underline 
                transition-all duration-300 transform hover:scale-105"
            >
              프로젝트 문의
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DesktopNav;
