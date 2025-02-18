import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="mx-auto px-4 lg:max-w-lg 2xl:max-w-2xl">{children}</div>
    </div>
  );
}

export default PageLayout;
