import React, { useState, useEffect } from 'react';

interface Location {
  name: string;
  distance: string;
  map: string;
}

const nearbyLocations: Location[] = [
  {
    name: 'Victoria International Airport',
    distance: '25 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d170716.1919266166!2d-123.55978290987224!3d48.572676657235576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f7f0d91c3e081%3A0x16fbfa658fb16904!2sVictoria%20International%20Airport%2C%20Victoria%2C%20BC%2C%20Canada!3m2!1d48.6478883!2d-123.4261464!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731481100000!5m2!1sen!2snp',
  },
  {
    name: 'Swartz Bay Ferry Terminal',
    distance: '28 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d170716.1919266166!2d-123.55978290987224!3d48.572676657235576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f678a57d92d81%3A0x8262a6eb617bbc4b!2sSwartz%20Bay%20Ferry%20Terminal%20Bay%20B%2C%20Swartz%20Bay%2C%20BC%2C%20Canada!3m2!1d48.687991!2d-123.41226999999999!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731478305513!5m2!1sen!2snp',
  },
  {
    name: 'Downtown, Victoria, BC',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d35979.80571068568!2d-123.38661904282327!3d48.44413683093008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f7485365d4cc9%3A0x1ed8d37dd7f1b902!2sDowntown%2C%20Victoria%2C%20BC%2C%20Canada!3m2!1d48.4272275!2d-123.3646912!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731478430615!5m2!1sen!2snp',
  },
  {
    name: 'Beacon Hill Park',
    distance: '6 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d17990.56165843827!2d-123.37243500235843!3d48.41152403618005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f74bb4eced76f%3A0x3e93eb383fa9efb8!2sBeacon%20Hill%20Park%2C%20Victoria%2C%20BC%2C%20Canada!3m2!1d48.4096895!2d-123.3650327!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731480800000!5m2!1sen!2snp',
  },
  {
    name: 'University of Victoria',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d17990.56165843827!2d-123.32510205235843!3d48.46152403618005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f74bb4eced76f%3A0x3e93eb383fa9efb8!2sUniversity%20of%20Victoria%2C%20Victoria%2C%20BC%2C%20Canada!3m2!1d48.4632015!2d-123.3144819!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731480900000!5m2!1sen!2snp',
  },
  // {
  //   name: 'Mayfair Shopping Centre',
  //   distance: '2 km',
  //   map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d17990.56165843827!2d-123.35510205235843!3d48.45152403618005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x548f74bb4eced76f%3A0x3e93eb383fa9efb8!2sMayfair%20Shopping%20Centre%2C%20Victoria%2C%20BC%2C%20Canada!3m2!1d48.4573445!2d-123.3659992!4m5!1s0x548f73fa81b074ff%3A0x6a66914643d8d2!2sHimalayan%20Flavours%20Restaurant%2C%203945%20Quadra%20St%2C%20Victoria%2C%20BC%20V8X%201J5%2C%20Canada!3m2!1d48.4657653!2d-123.3609321!5e1!3m2!1sen!2snp!4v1731481000000!5m2!1sen!2snp',
  // },
];

const Nearby: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  useEffect(() => {
    if (nearbyLocations.length > 0) {
      setSelectedLocation(nearbyLocations[0]);
      setMapUrl(nearbyLocations[0].map);
      setIsMapOpen(true);
    }
  }, []);

  const openMapModal = (url: string, location: Location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    setTimeout(() => {
      const mapSection = document.getElementById('mapSection');
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 0);
  };

  const handleLocationClick = (location: Location) => {
    openMapModal(location.map, location);
  };

  return (
    <div className="relative size-full">
      <div className="size-full">
        {isMapOpen && (
          <div id="mapSection" className="relative w-full rounded-lg">
            <iframe
              title="Map"
              src={mapUrl}
              className="h-64 w-full md:h-96 lg:h-screen"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <ul className="nearby-scroll absolute right-0 top-1/2 -translate-y-1/2">
        {nearbyLocations.map((location) => (
          <li
            key={location.name}
            className={`my-2 min-w-64 cursor-pointer rounded-lg border border-light px-2 py-1 shadow backdrop-blur transition-all duration-300 ease-linear hover:bg-light/50 sm:px-4 sm:py-3 ${
              selectedLocation === location
                ? 'bg-light text-dark'
                : 'bg-light/40 text-light'
            }`}
            onClick={() => handleLocationClick(location)}
            aria-label={location.name}
            title="Get Direction"
          >
            <span className="text-xs font-semibold md:text-sm">
              {location.name}
            </span>
            <br />
            <button
              className="text-sm font-semibold text-logo-maroon"
              onClick={(e) => {
                e.stopPropagation();
                handleLocationClick(location);
              }}
              title="Get Direction"
              aria-label={location.name}
            >
              Get Direction
            </button>
            <span className="ml-2 text-xs font-medium md:text-sm">
              - {location.distance}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nearby;
