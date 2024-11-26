import React from 'react';
import wellness from '../assets/images/wellness.png';

const WellnessSpa: React.FC = () => {
  return (
    <main className="items-m relative flex size-full h-[110vh] justify-center">
      {/* <img
        src="https://cdn.prod.website-files.com/60b0c490c031f80841d793e5/60b0c490c031f82db9d79587_hotel-kaskady-wellness-spa-bg__1920px-14.jpg"
        className="absolute inset-0 -z-10 size-full object-cover"
      /> */}

      <img
        src={wellness}
        className="pointer-events-none absolute inset-0 z-10 size-full select-none object-cover"
        draggable={false}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#82fcf1] to-transparent"></div>
      <div className="overlay absolute inset-0 -z-10 bg-dark/10"></div>

      <div className="flex w-full flex-col items-start gap-4 text-dark">
        <h4 className="max-w-lg text-2xl md:text-6xl md:leading-tight">
          Relax under the gentle hands of our beauticians
        </h4>
        <p className="max-w-md text-sm md:text-base">
          The Wellness Spa at Temple Bell Boutique Hotel offers a range of spa
          treatments and therapies to help you relax and rejuvenate.
        </p>
      </div>

      <aside className="z-20">
        <blockquote cite="#" className="max-w-xl bg-light/30 p-8 backdrop-blur">
          <p className="mb-4">
            "The spa treatments at Temple Bell are a must-try. I felt so relaxed
            and rejuvenated after my session."
          </p>
          <cite className="font-medium not-italic">Purna Shrestha</cite>
        </blockquote>
      </aside>
    </main>
  );
};

export default WellnessSpa;
