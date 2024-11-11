import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <main className="z-50 h-screen w-full bg-gradient-to-b from-[#82fcf1] to-transparent p-0">
        <img
          src="https://cdn.dribbble.com/users/9317561/screenshots/16563702/media/44ebe8a4c218e67da126846a85462105.jpg"
          alt="Temple Bell"
          className="h-screen w-full object-scale-down"
        />
        {/* <h1 className="text-8xl">Temple Bell</h1>
          <h2 className="text-7xl">Boutique Hotel & SPA</h2> */}
        {/* <p className="max-w-3xl">
          Experience serenity and elegance at Temple Bell Boutique Hotel, your
          newest sanctuary in Lakeside, Pokhara. Nestled in the heart of nature,
          our boutique hotel offers a harmonious blend of modern comfort and
          traditional charm.
        </p> */}
      </main>
    </>
  );
};

export default Home;
