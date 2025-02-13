import { Link, useLocation } from 'react-router-dom';
import { linksData } from '../data/linksData';
import { useRef } from 'react';

interface Props {
  isGeospatial?: boolean;
  isChart?: boolean;
}

const Navbar: React.FC<Props> = ({ isGeospatial, isChart }) => {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleButton = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('toggle');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center lg:bg-none ${isChart ? 'lg:flex lg:justify-center lg:bg-white' : ""} ${isGeospatial ? '!w-fit !mx-auto !inset-x-0 !bg-none' : ''}`}>
      <div className={`flex items-center justify-center lg:justify-start md:py-5 lg:px-6 bg-black bg-opacity-60 lg:bg-transparent ${isGeospatial ? '!bg-transparent' : ''}`}>
        <div ref={navRef} className="flex w-full md:w-fit text-center lg:text-left gap-x-8 lg:gap-x-4 text-white">
          {linksData.map(({ link, name }, index) => (
            <Link
              key={index}
              to={`/${link}`}
              onClick={toggleButton}
              className={`hover:underline hover:underline-offset-8 ${isChart ? 'lg:text-primary' : ''} ${
                pathname === `/${link}` ? `underline underline-offset-8 ${isGeospatial ? 'hover:text-primary': ''}` : ''
              } py-3 md:py-0 w-[90%] md:w-auto mx-auto`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
