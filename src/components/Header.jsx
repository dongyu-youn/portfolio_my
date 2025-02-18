import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoIosWater } from 'react-icons/io';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 p-[20px] font-sans">
      <nav className="navbar">
        <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl font-bold text-black text-2xl no-underline hover:no-underline hover:text-[#00939A] transition-colors duration-300"
                id="logo"
                onClick={scrollToTop}
              >
                INTERCORE
              </Link>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>

            {/* 네비게이션 메뉴 */}
            <div
              className={`absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent 
              ${isMenuOpen ? 'block' : 'hidden'} md:block`}
            >
              <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
                {[
                  { path: '/', text: 'Home' },
                  { path: '/about', text: '인터코어' },
                  { path: '/portfolio', text: '제작사례' },
                  { path: '/services', text: '우리가 하는 일' },
                ].map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      to={item.path}
                      className="block py-2 text-black text-base hover:text-[#00939A] hover:no-underline relative"
                      onClick={scrollToTop}
                      onMouseEnter={() => setActiveItem(index)}
                      onMouseLeave={() => setActiveItem(null)}
                    >
                      {item.text}
                      {/* 물방울 애니메이션 */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
                        <IoIosWater
                          className={`text-[#00939A] transition-all duration-500
                            ${
                              activeItem === index
                                ? 'opacity-100 translate-y-4'
                                : 'opacity-0 translate-y-0'
                            }`}
                          size={16}
                        />
                      </div>
                      {/* 물이 스며드는 효과 */}
                      <div
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00939A] transform origin-left
                        transition-all duration-300 ease-out
                        ${activeItem === index ? 'scale-x-100' : 'scale-x-0'}`}
                      />
                      {/* 물방울 퍼지는 효과 */}
                      <div
                        className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2
                        w-8 h-8 bg-[#00939A] rounded-full opacity-0 scale-0
                        transition-all duration-500 ease-out
                        ${activeItem === index ? 'animate-waterDrop' : ''}`}
                      />
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="tel:010-4089-7177"
                    className="block py-2 px-4 bg-brand-green text-white rounded-full 
                      hover:bg-brand-primary/90 hover:no-underline 
                      transition-all duration-300 transform hover:scale-105"
                  >
                    프로젝트 문의
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
