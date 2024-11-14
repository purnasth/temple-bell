import React, { useState, useEffect } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
// import { PiChefHatBold } from 'react-icons/pi';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import ContactInfo from '../components/ui/ContactInfo';
// import { TbBellFilled } from 'react-icons/tb';
import close from '../assets/close.svg';
import DatePicker from '../components/ui/DatePicker';
// import { LuMoveRight } from "react-icons/lu";

const navLinks = [
  {
    id: 1,
    title: 'Temple Bell',
    url: '/',
  },
  {
    id: 2,
    title: 'Discover Bell',
    url: '/about',
  },
  {
    id: 3,
    title: 'Rooms & Suites',
    url: '/rooms',
  },
  {
    id: 4,
    title: 'Hotel Services',
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
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-40 flex w-full items-start justify-between p-4 transition-all duration-1000 ease-in-out`}
      >
        <Logo
          aprops={`transition-1000 pointer-events-auto object-contain origin-top-left ${
            visible ? 'scale-100' : 'scale-50'
          } ${window.scrollY > 0 ? 'bg-light scale-50' : ''}`}
          className="transition-1000 h-16 w-auto object-contain md:h-40"
        />
        <div className="pointer-events-auto flex gap-0">
          {/* <Link
            to="#"
            className={`transition-1000 flex items-center justify-center rounded-full bg-logo-maroon/75 px-8 font-medium text-light backdrop-blur-sm ${visible ? 'translate-y-0 scale-100' : '-translate-y-[200%] scale-0'}`}
            aria-label="Book Now"
            title="Book Now"
          >
            Book Now
          </Link> */}
          <DatePicker />
          <button
            onClick={toggleNav}
            className="transition-300 text-dark hover:text-logo-maroon"
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
        className={`transition-1000 fixed inset-0 z-40 h-screen w-full origin-top bg-light ${
          isOpen
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
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
          className="absolute right-4 top-4 flex items-center justify-center gap-2 text-6xl text-black"
          aria-label="Close"
          title="Close"
        >
          {/* &times; */}
          <img src={close} alt="Close" className="size-12 object-contain" />
        </button>

        <div className="grid size-full grid-cols-3 content-center gap-24 px-8 text-dark">
          <div className="flex size-full flex-col items-center justify-center">
            <Logo
              aprops={`transition-1000 pointer-events-auto object-contain`}
              className="transition-1000 h-16 w-auto object-contain md:h-56"
            />
          </div>
          <div className="w-full">
            <ul className="links boreder-logo-yellow flex flex-col items-center justify-center gap-0 overflow-hidden rounded-3xl border">
              {navLinks.map((link) => (
                <li className="group w-full">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink ${isActive ? 'bg-logo-maroon/30 text-logo-maroon' : ''}`
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                    {/* <i className='bg-light py-0 px-4 rounded-full'>→</i> */}
                    {/* <LuMoveRight className="w-10 h-5 bg-light group-hover:text-logo-maroon translate-x-4 rounded-full text-xl opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100" /> */}
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
