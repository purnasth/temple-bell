import React from 'react';
import offers from '../../assets/images/offers.jpg';

const OffersHome: React.FC = () => {
  return (
    <>
      <img
        src={offers}
        alt="Offers"
        className="absolute bottom-6 right-6 w-48 object-contain shadow"
      />
    </>
  );
};

export default OffersHome;
