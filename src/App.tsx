import React from 'react';
import logo from './assets/logo.svg';

const App: React.FC = () => {
  return (
    <>
      <main className="z-50 h-screen w-full bg-white">
        <div className="container flex size-full flex-col items-center justify-center text-center">
          <img
            src={logo}
            alt="Temple Bell"
            className="h-96 w-auto object-contain text-center"
          />
          {/* <h1 className="text-8xl">Temple Bell</h1>
          <h2 className="text-7xl">Boutique Hotel & SPA</h2> */}
          <p className="max-w-3xl">
            Experience serenity and elegance at Temple Bell Boutique Hotel, your
            newest sanctuary in Lakeside, Pokhara. Nestled in the heart of
            nature, our boutique hotel offers a harmonious blend of modern
            comfort and traditional charm.
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
