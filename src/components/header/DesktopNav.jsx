import { Link } from 'react-router-dom';
import { IoIosWater } from 'react-icons/io';
import { useEffect } from 'react';

function DesktopNav({
  menuItems,
  isActive,
  hoverItem,
  setHoverItem,
  scrollToTop,
}) {
  useEffect(() => {
    // 컴포넌트가 마운트되거나 menuItems가 변경될 때 실행
    return () => setHoverItem(null); // cleanup function
  }, [menuItems, setHoverItem]);

  return (
    <div className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.path}
              className={`block py-2 text-black text-base hover:text-[#00939A] hover:no-underline relative
                ${isActive(item.path) ? 'text-[#00939A]' : ''}`}
              onClick={scrollToTop}
              onMouseEnter={() => setHoverItem(index)}
              onMouseLeave={() => setHoverItem(null)}
            >
              {item.text}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
                <IoIosWater
                  className={`text-[#00939A] transition-all duration-500
                    ${
                      isActive(item.path) || hoverItem === index
                        ? 'opacity-100 translate-y-4'
                        : 'opacity-0 translate-y-0'
                    }`}
                  size={16}
                />
              </div>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00939A] transform origin-left
                  transition-all duration-300 ease-out
                  ${
                    isActive(item.path) || hoverItem === index
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNav;
