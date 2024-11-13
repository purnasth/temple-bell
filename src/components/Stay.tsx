import React from 'react';
import RoomSlider from './ui/RoomSlider';

const cuisineSection = [
  {
    title: 'Deluxe Room',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
    highlightedFeatures: ['Mountain View', '75 sqm', 'King Size Bed'],
  },
  {
    title: 'Premium Suite',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
    highlightedFeatures: ['Mountain View', '100 sqm', 'King Size Bed'],
  },
  {
    title: 'Temple Villa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus vero. Similique magni nihil, quia provident soluta illo harum ',
    image: 'https://www.sripanwa.com/images/page/best-luxury-hotel-in-phuket-luxury-private-villa-one-bedroom.jpg',
    highlightedFeatures: ['Mountain View', '150 sqm', 'King Size Bed'],
  },
];

const Stay: React.FC = () => {
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
        slides={cuisineSection}
        hasContent={true}
        sizeClassName="relative flex size-full flex-col items-center justify-center"
      />
    </main>
  );
};

export default Stay;
