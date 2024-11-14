import React from 'react';
import { Link } from 'react-router-dom';
import bellGraphics from '../assets/images/bell.png';
import offers from '../assets/images/offers.jpg';

const OffersSlider: React.FC = () => {
  return (
    <main className="px-6">
      <div className="absolute left-0 top-0 -translate-x-44">
        <img
          src="https://mayurstay.com/aaryahotel/assets/images/pillar.png"
          alt="Icon"
          className="pointer-events-none -z-10 h-[500px] w-full object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-[28rem] bg-cover bg-top bg-repeat-x opacity-5 mix-blend-multiply contrast-150"
        style={{ backgroundImage: `url(${bellGraphics})` }}
      ></div>

      <div className="">
        <div className="grid grid-cols-3 gap-6">
          <div className="flex w-full flex-col items-start gap-4 pl-16">
            <h4 className="text-2xl md:text-6xl md:leading-snug">
              Temple Bell Packages
            </h4>
            <p className="max-w-md text-sm md:text-base">
              Enjoy your stay at Temple Bell with our exclusive packages &
              offers that are designed to make your stay memorable.
            </p>
            <Link
              to="#"
              className="group relative mt-5 flex items-center gap-2 text-base"
              aria-label="Explore More"
              title="Explore"
            >
              <span className="absolute -right-0 bottom-0 h-px w-[76%] origin-left scale-x-0 bg-dark transition-all duration-300 ease-linear group-hover:scale-x-100"></span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="text-2xl transition-all duration-300 ease-linear group-hover:translate-x-1"
              >
                <path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
                <path d="M17 16l4 -4l-4 -4" />
              </svg>
              Explore More
            </Link>
          </div>
          <div>
            <div className="overflow-hidden shadow-md">
              <img
                src={offers}
                alt="Offers"
                className="aspect-square size-full overflow-hidden object-cover"
                loading="lazy"
                draggable="false"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-work-sans text-xl font-medium">
                2 nights or more - save over 15%
              </h3>
            </div>
          </div>
          <div>
            <div className="overflow-hidden shadow-md">
              <img
                src={offers}
                alt="Offers"
                className="aspect-square size-full overflow-hidden object-cover"
                loading="lazy"
                draggable="false"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="font-work-sans text-xl font-medium">
                SPA & Wellness Package - 20% off
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="size-full h-[75vh] bg-[url('https://dayatra.purnashrestha.com.np/assets/img/patterns/mountains.webp')] bg-contain bg-top bg-repeat-x opacity-20 mix-blend-multiply"></div> */}
    </main>
  );
};

export default OffersSlider;
