import React from 'react';
import RoomSlider from './ui/RoomSlider';

// const stayContent = [
//   {
//     title: 'Deluxe Room',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
//     image:
//       'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
//     highlightedFeatures: ['Mountain View', '75 sqm', 'King Size Bed'],
//   },
//   {
//     title: 'Premium Suite',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
//     image:
//       'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
//     highlightedFeatures: ['Mountain View', '100 sqm', 'King Size Bed'],
//   },
//   {
//     title: 'Temple Villa',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
//     image:
//       'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
//     highlightedFeatures: ['Mountain View', '150 sqm', 'King Size Bed'],
//   },
// ];

const stayContent = [
  {
    id: 'accommodation',
    title: 'Temple Bell Services',
    subheading:
      "Stay in elegant simplicity with all the luxuries that matter, & none that don't.",
    description:
      "Experience high end services at Temple Bell Boutique Hotel & SPA. We've got a range of services to make your stay memorable.",
    router: '#',
    roomsCategories: [
      {
        id: 'temple-villa',
        title: 'Temple Villa',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
        bannerImage:
          'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
        router: '#',
        booking: '#',
        sliderImages: [
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Temple Villa',
          },
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Temple Villa',
          },
        ],
        amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
      },
      {
        id: 'premium-suite',
        title: 'Premium Suite',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
        bannerImage:
          'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
        router: '#',
        booking: '#',
        sliderImages: [
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Premium Suite',
          },
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Premium Suite',
          },
        ],
        amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
      },
      {
        id: 'deluxe-room',
        title: 'Deluxe Room',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
        bannerImage:
          'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
        router: '#',
        booking: '#',
        sliderImages: [
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Deluxe Room',
          },
          {
            src: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
            alt: 'Deluxe Room',
          },
        ],
        amenities: [{ icon: 'TbWifi', image: null, title: 'Free Wifi' }],
      },
    ],
  },
];

const Stay: React.FC = () => {
  const firstImages = stayContent[0].roomsCategories.map((service) => ({
    image: service.sliderImages[0].src,
    title: service.sliderImages[0].alt,
  }));
  return (
    <main className="px-0 pt-0">
      <div className="container mb-24">
        <div className="flex w-full flex-col items-start gap-4">
          <h4 className="text-2xl md:text-7xl md:leading-snug">
            Stay in elegant simplicity with all the luxuries that matter, & none
            that don't.
          </h4>
        </div>
      </div>

      <RoomSlider
        slides={firstImages}
        hasContent={true}
        sizeClassName="size-full"
        imagesClassName="h-[75vh] w-full object-cover"
        slidesPerView={1.5}
      />
    </main>
  );
};

export default Stay;
