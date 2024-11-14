import React from 'react';
import RoomSlider from './ui/RoomSlider';

const servicesContent = {
  id: 'services',
  title: 'Temple Bell Services',
  subheading:
    "Stay in elegant simplicity with all the luxuries that matter, & none that don't.",
  description:
    "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
  router: '#',
  services: [
    {
      id: 'dine-service',
      title: 'Temple Bell Dine',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Dine',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Dine',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'hall-service',
      title: 'Temple Bell Hall',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Hall',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Hall',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'spa-service',
      title: 'Temple Bell SPA',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell SPA',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell SPA',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'pool-service',
      title: 'Temple Bell Pool',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Pool',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Pool',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'gym-service',
      title: 'Temple Bell Gym',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Gym',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Temple Bell Gym',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
  ],
};

const { subheading } = servicesContent;

const ServicesHome: React.FC = () => {
  const firstImages = servicesContent.services.map((service) => ({
    image: service.sliderImages[0].src,
    title: service.sliderImages[0].alt,
  }));

  return (
    <main className="px-0">
      <div className="container mb-24">
        <div className="flex w-full flex-col items-start gap-4">
          <h4 className="text-2xl md:text-7xl md:leading-snug">{subheading}</h4>
        </div>
      </div>

      <RoomSlider
        slides={firstImages}
        hasContent={true}
        sizeClassName="size-full"
        imagesClassName="h-[75vh] w-full object-cover"
        slidesPerView={2.5}
      />
    </main>
  );
};

export default ServicesHome;
