import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-6">{/* 푸터 내용 */}</footer>
    </div>
  );
}

export default Layout;
