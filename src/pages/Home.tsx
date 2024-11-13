import React from 'react';
import OffersHome from '../components/ui/OffersHome';
import About from '../components/About';
import Stay from '../components/Stay';
import OffersSlider from '../components/OffersSlider';

import heroImage from '../assets/images/test.png';

const Home: React.FC = () => {
  return (
    <>
      <main className="relative h-screen w-full bg-gradient-to-b from-[#82fcf1] to-transparent p-0">
        <img
          src={heroImage}
          alt="Temple Bell"
          className="h-screen w-full object-contain contrast-125"
          draggable={false}
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-transparent via-transparent to-light" />
        {/* <h1 className="text-8xl">Temple Bell</h1>
          <h2 className="text-7xl">Boutique Hotel & SPA</h2> */}
        {/* <p className="max-w-3xl">
          Experience serenity and elegance at Temple Bell Boutique Hotel, your
          newest sanctuary in Lakeside, Pokhara. Nestled in the heart of nature,
          our boutique hotel offers a harmonious blend of modern comfort and
          traditional charm.
        </p> */}
        <OffersHome />
      </main>
      <About />
      <Stay />
      <OffersSlider />
    </>
  );
};

export default Home;
