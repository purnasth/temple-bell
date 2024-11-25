import React from 'react';
import OffersHome from '../components/ui/OffersHome';
import About from '../components/About';
import Stay from '../components/Stay';
import OffersSlider from '../components/OffersSlider';

import heroImage from '../assets/images/test.png';
import ServicesHome from '../components/ServicesHome';
// import Nearby from '../components/ui/Nearby';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import EmbedAttractions from '../components/EmbedAttractions';

const Home: React.FC = () => {
  return (
    <>
      <main className="relative flex h-screen w-full items-end bg-gradient-to-b from-[#82fcf1] to-transparent p-0">
        <img
          src={heroImage}
          alt="Temple Bell"
          className="absolute inset-0 h-screen w-full object-contain"
          draggable={false}
        />
        <div className="absolute inset-0 size-full bg-gradient-to-b from-transparent via-transparent to-light" />
        <div className="z-20 max-w-3xl space-y-3 p-6">
          <span className="uppercase">
            blend of modern comfort & traditional charm.
          </span>
          <h1 className="text-5xl capitalize leading-tight">
            Your newest sanctuary
          </h1>
          {/* <h2 className="text-7xl">Boutique Hotel & SPA</h2>
          <p className="max-w-3xl">
            Experience serenity and elegance at Temple Bell Boutique Hotel, your
            newest sanctuary in Lakeside, Pokhara. Nestled in the heart of
            nature, our boutique hotel offers a harmonious blend of modern
            comfort and traditional charm.
          </p> */}
        </div>
        <OffersHome />
      </main>
      <About />
      <Stay />
      <TestimonialSlider />
      <OffersSlider />
      <section className="relative mix-blend-difference">
        <div className="h-[120vh] w-full bg-[url('https://cdn.prod.website-files.com/60b0c490c031f80841d793e5/60b0c490c031f82db9d79587_hotel-kaskady-wellness-spa-bg__1920px-14.jpg')] bg-cover bg-fixed"></div>
        <div className="pointer-events-none absolute inset-0 bg-dark/60"></div>

        <h3 className="container absolute inset-0 flex items-center justify-center px-12 py-24 text-center text-8xl leading-tight text-light [text-shadow:_0_1px_5px_#ffeac7]">
          Relax under the gentle hands of our beauticians
        </h3>
      </section>
      <ServicesHome />
      <EmbedAttractions />
      {/* <Nearby /> */}
    </>
  );
};

export default Home;
