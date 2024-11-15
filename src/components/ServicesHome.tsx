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
      title: 'Dine',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://cdn.prod.website-files.com/60b0c490c031f80841d793e5/64df636afc3ee5b31aa65f39_Hotel%20%26%20Spa%20Resort%20Kaskady%20-%20-71-p-1600.jpg',
          alt: 'Dine',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Dine',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'hall-service',
      title: 'Hall',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://cdn.prod.website-files.com/60b0c490c031f80841d793e5/60b0c490c031f8eeaed79546_hotel-kaskady-interier-bg__1920px-16-p-1600.jpeg',
          alt: 'Hall',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Hall',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'spa-service',
      title: 'Spa',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://cdn.prod.website-files.com/60b0c490c031f80841d793e5/60b0c490c031f80224d797c8_kaskady-masaze-bg-4-p-1600.jpeg',
          alt: 'SPA',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'SPA',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'pool-service',
      title: 'Pool',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://www.thedamai.com/media/pages/stay/master-pool-villa/08ebd8724a-1703335774/masterpoolvillaext-1440x960-crop-q72.jpg',
          alt: 'Pool',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Pool',
        },
      ],
      amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
    },
    {
      id: 'gym-service',
      title: 'Gym',
      description:
        "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
      bannerImage:
        'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
      router: '#',
      booking: '#',
      sliderImages: [
        {
          src: 'https://images.squarespace-cdn.com/content/v1/5696733025981d28a35ef8ab/8a7c7340-9f83-4281-84e7-6e5773d8d97e/hotel+gym+design+ref+1.jpg',
          alt: 'Gym',
        },
        {
          src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
          alt: 'Gym',
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
