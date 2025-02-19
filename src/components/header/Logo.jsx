import { Link } from 'react-router-dom';

function Logo({ scrollToTop }) {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="text-4xl font-bold text-black  no-underline hover:no-underline hover:text-[#00939A] transition-colors duration-300 font-ssukssuk"
        id="logo"
        onClick={scrollToTop}
      >
        INTERCORE
      </Link>
    </div>
  );
}

export default Logo;
