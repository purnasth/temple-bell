import React, { useState, useEffect } from 'react';

interface Location {
  name: string;
  distance: string;
  map: string;
}

const nearbyLocations: Location[] = [
  {
    name: 'Temple Bell Boutique Hotel & Spa',
    distance: '25 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d903462.4909670039!2d83.99916147673562!3d27.805142436871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x3995954c7f508235%3A0x4f8bb68a403453d8!2sTemple%20Bell%20Boutique%20Hotel%20and%20Spa%2C%20Lakeside%20Rd%2017%2C%20Pokhara%2033700!3m2!1d28.2119254!2d83.96052809999999!5e0!3m2!1sen!2snp!4v1731671691599!5m2!1sen!2snp',
  },
  {
    name: 'Temple Bell Boutique Hotel & Spa',
    distance: '28 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d903462.4909670039!2d83.99916147673562!3d27.805142436871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x3995954c7f508235%3A0x4f8bb68a403453d8!2sTemple%20Bell%20Boutique%20Hotel%20and%20Spa%2C%20Lakeside%20Rd%2017%2C%20Pokhara%2033700!3m2!1d28.2119254!2d83.96052809999999!5e0!3m2!1sen!2snp!4v1731671691599!5m2!1sen!2snp',
  },
  {
    name: 'Temple Bell Boutique Hotel & Spa',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d903462.4909670039!2d83.99916147673562!3d27.805142436871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x3995954c7f508235%3A0x4f8bb68a403453d8!2sTemple%20Bell%20Boutique%20Hotel%20and%20Spa%2C%20Lakeside%20Rd%2017%2C%20Pokhara%2033700!3m2!1d28.2119254!2d83.96052809999999!5e0!3m2!1sen!2snp!4v1731671691599!5m2!1sen!2snp',
  },
  {
    name: 'Temple Bell Boutique Hotel & Spa',
    distance: '6 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d903462.4909670039!2d83.99916147673562!3d27.805142436871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x3995954c7f508235%3A0x4f8bb68a403453d8!2sTemple%20Bell%20Boutique%20Hotel%20and%20Spa%2C%20Lakeside%20Rd%2017%2C%20Pokhara%2033700!3m2!1d28.2119254!2d83.96052809999999!5e0!3m2!1sen!2snp!4v1731671691599!5m2!1sen!2snp',
  },
  {
    name: 'Temple Bell Boutique Hotel & Spa',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d903462.4909670039!2d83.99916147673562!3d27.805142436871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x3995954c7f508235%3A0x4f8bb68a403453d8!2sTemple%20Bell%20Boutique%20Hotel%20and%20Spa%2C%20Lakeside%20Rd%2017%2C%20Pokhara%2033700!3m2!1d28.2119254!2d83.96052809999999!5e0!3m2!1sen!2snp!4v1731671691599!5m2!1sen!2snp',
  },
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
            className={`my-2 min-w-64 cursor-pointer rounded-lg border border-light px-2 py-1 shadow backdrop-blur transition-all duration-300 ease-linear hover:bg-light/50 hover:text-dark sm:px-4 sm:py-3 ${
              selectedLocation === location
                ? 'bg-light text-dark'
                : 'bg-dark/20 text-light'
            }`}
            onClick={() => handleLocationClick(location)}
            aria-label={location.name}
            title="Get Direction"
          >
            <span className="text-xs font-medium md:text-sm">
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
