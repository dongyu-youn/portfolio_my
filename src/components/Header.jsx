import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#00939A] z-50 p-[20px] font-sans">
      <nav className="navbar">
        <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl font-bold text-white text-2xl"
                id="logo"
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
              className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent 
              ${isMenuOpen ? 'block' : 'hidden'} md:block`}
            >
              <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-black text-base hover:text-white hover:no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 text-black text-base hover:text-white hover:no-underline"
                  >
                    인터코어
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="block py-2 text-black text-base hover:text-white hover:no-underline"
                  >
                    제작사례
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block py-2 text-black text-base hover:text-white hover:no-underline"
                  >
                    우리가 하는 일
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:010-4089-7177"
                    className="block py-2 px-4 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 hover:no-underline"
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
