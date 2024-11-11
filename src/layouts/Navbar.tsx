import React, { useState, useEffect } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { PiChefHatBold } from 'react-icons/pi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import ContactInfo from '../components/ui/ContactInfo';
import { TbBellFilled } from 'react-icons/tb';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Rooms',
    url: '/rooms',
  },
  {
    id: 4,
    title: 'Services',
    url: '/services',
  },
  {
    id: 5,
    title: 'Gallery',
    url: '/gallery',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contact',
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-50 flex w-full items-start justify-between p-4 transition-all duration-1000 ease-in-out`}
      >
        <Logo
          aprops={`transition-1000 pointer-events-auto object-contain ${
            visible ? '-translate-y-0' : '-translate-y-full scale-0'
          } ${window.scrollY > 0 ? '-translate-y-full scale-0' : 'translate-y-0'}`}
          className="transition-1000 h-16 w-auto object-contain md:h-40"
        />
        <div className="pointer-events-auto flex gap-2">
          <Link
            to="#"
            className={`transition-1000 text-light bg-logo-maroon/75 flex items-center justify-center rounded-full px-8 font-medium backdrop-blur-sm ${visible ? 'translate-y-0 scale-100' : '-translate-y-[200%] scale-0'}`}
            aria-label="Book Now"
            title="Book Now"
          >
            Book Now
          </Link>
          <button
            onClick={toggleNav}
            className="transition-300 hover:text-logo-maroon text-dark"
            aria-label="Menu"
            title="Menu"
          >
            <CgMenuGridO className="text-5xl" />
          </button>
        </div>
      </header>

      {/* <div
        className={`transition-700 fixed inset-0 z-30 bg-black/50 backdrop-blur-sm ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsOpen(false)}
      /> */}

      <nav
        className={`transition-1000 bg-light fixed left-0 top-0 h-screen w-full overflow-y-auto ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-0 opacity-0'
        } z-50`}
      >
        <img
          // src="https://t4.ftcdn.net/jpg/09/05/32/71/360_F_905327166_ruIVTYRVJpHN8IEvn2diXAK0oQ2L3pSa.jpg"
          // src="https://img.freepik.com/premium-photo/modern-luxurious-red-gradient-background_1099171-5723.jpg"
          // src="https://static.vecteezy.com/system/resources/previews/030/669/819/non_2x/maroon-background-high-quality-free-photo.jpg"
          // src="https://pngmagic.com/product_images/high-resolution-maroon-background-hd-wallpaper-for-desktop-screens_edg.jpeg"
          // src="https://wallpapers.com/images/featured/maroon-0sk4wzl06shgikl4.jpg"
          src="https://img.freepik.com/premium-photo/maroon-minimalist-wallpaper-high-quality-4k-hdr_889056-27189.jpg"
          alt="Pattern"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-20 blur-[10px]"
        />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-4 flex items-center justify-center gap-2 text-4xl text-black"
          aria-label="Close"
          title="Close"
        >
          &times;
        </button>

        <div className="grid size-full grid-cols-3 content-center gap-24 px-8 text-dark">
          <div className="flex size-full flex-col items-center justify-center">
            <Logo
              aprops={`transition-1000 pointer-events-auto object-contain`}
              className="transition-1000 h-16 w-auto object-contain md:h-56"
            />
          </div>
          <div className="w-full">
            <ul className="links flex flex-col items-center justify-center gap-2 md:gap-4 border p-8 rounded-2xl">
              {navLinks.map((link) => (
                <li className="group w-full">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink ${isActive ? 'text-logo-yellow [text-shadow:_0_2px_20px_#FFCE35]' : ''}`
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                    {/* <TbBellFilled className="translate-x-4 rounded-full text-3xl opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100" /> */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex size-full flex-col items-center justify-center">
            <ContactInfo align="items-center justify-center" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
