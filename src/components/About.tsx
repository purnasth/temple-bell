import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main>
      <div className="">
        <div className="absolute left-0 top-0">
          <img
            src="https://mayurstay.com/aaryahotel/assets/images/pillar.png"
            alt=""
            className="h-[500px] w-full object-contain"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-4 pl-52">
          {/* <span className="text-lg font-medium">Welcome to</span> */}
          <h4 className="caps text-2xl font-semibold md:text-6xl md:leading-snug">
            Experience serenity and elegance at Temple Bell Boutique Hotel &
            SPA, your newest sanctuary in Lakeside, Pokhara.
          </h4>
          <p className="max-w-md text-sm md:text-base">
            Nestled in the heart of nature, our boutique hotel offers a
            harmonious blend of modern comfort and traditional charm. Our rooms
            are designed to provide you with a peaceful retreat after a day of
            exploring the city.
          </p>
          <Link
            to="#"
            className="group relative mt-5 flex items-center gap-2 text-base"
            aria-label="Explore More"
            title="Explore"
          >
            <span className="ease-linea absolute -right-0 bottom-0 h-px w-[76%] origin-left scale-x-0 bg-dark transition-all duration-300 group-hover:scale-x-100"></span>
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
      </div>
    </main>
  );
};

export default About;
