import { Link } from 'react-router-dom';

function Logo({ scrollToTop }) {
  return (
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
  );
}

export default Logo;
