import { IconButton } from '@material-tailwind/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

function MobileNav({ isDrawerOpen, toggleDrawer, menuItems, scrollToTop }) {
  const { setAdmin } = useAdminAuth();
  const adminToken = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAdmin(null);
    toggleDrawer();
  };

  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <div className="md:hidden w-full flex justify-end z-[9999] font-sans">
        <IconButton
          variant="text"
          className="text-3xl text-black"
          onClick={toggleDrawer}
        >
          <FaBars />
        </IconButton>
      </div>

      {/* 모바일 Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 z-[9999] ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <IconButton
            variant="text"
            className="text-2xl text-black"
            onClick={toggleDrawer}
          >
            <FaTimes />
          </IconButton>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {menuItems.map((item, idx) => (
            <div key={idx} className="border-b">
              <Link
                to={item.path}
                className="block py-2 text-black hover:text-[#00939A]"
                onClick={() => {
                  toggleDrawer();
                  scrollToTop();
                }}
              >
                {item.text}
              </Link>
            </div>
          ))}

          <div className="border-b">
            {adminToken ? (
              <button
                onClick={handleLogout}
                className="block w-full py-2 text-red-500 hover:text-red-600"
              >
                관리자 로그아웃
              </button>
            ) : (
              <Link
                to="/project-inquiry"
                className="block py-2 text-black hover:text-[#00939A]"
                onClick={() => {
                  toggleDrawer();
                  scrollToTop();
                }}
              >
                프로젝트 문의
              </Link>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <IconButton
              variant="text"
              className="bg-black text-white text-2xl rounded-full w-10 h-10"
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              variant="text"
              className="bg-black text-white text-2xl rounded-full w-10 h-10"
            >
              <FaInstagram />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed h-screen inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
}

export default MobileNav;
