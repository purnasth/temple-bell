import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';
import type { Swiper as SwiperInstance } from 'swiper/types';

import mountainPattern from '../../assets/patterns/logo-artifacts.svg';

interface Testimonial {
  author: string;
  source: string;
  review: string;
  sourceImage: string;
  link: string;
}

interface TestimonialSliderProps {
  autoplay?: boolean;
  effect?: 'fade' | 'slide';
  speed?: number;
  delay?: number;
  navigation?: boolean;
}

const testimonialsContent: Testimonial[] = [
  {
    author: 'Purna Shrestha',
    source: 'via Tripadvisor',
    review:
      'My stay at Temple Bell Boutique Hotel was amazing. The staff was very friendly and helpful. The rooms were clean and comfortable. The food was delicious. I would definitely recommend this hotel to anyone visiting Pokhara and will recommend it to my friends and family. Thank you for a wonderful stay!',
    sourceImage:
      'https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-circle-owl-icon-black-green-858x858.png',
    link: '#',
  },
  {
    author: 'Purna Shrestha',
    source: 'via Booking.com',
    review:
      'I stayed at Temple Bell Boutique Hotel for 3 nights and it was a great experience. The staff was very friendly and helpful. The rooms were clean and comfortable. The food was delicious. I would definitely recommend this hotel to anyone visiting Pokhara and will recommend it to my friends and family. Thank you for a wonderful stay!',
    sourceImage:
      'https://th.bing.com/th/id/OIP.bwfmvpI-LZQz-lN751ZrNgHaHa?rs=1&pid=ImgDetMain',
    link: '#',
  },
];

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  autoplay = true,
  effect = 'fade',
  speed = 2000,
  delay = 2000,
  navigation = true,
}) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <main className="relative bg-logo-dark">
      <div className="pointer-events-none absolute inset-0 size-full -z-30 mix-blend-multiply opacity-5">
        <img
          src={mountainPattern}
          alt="Mountain Pattern"
          className="size-full object-contain pointer-events-none select-none"
          draggable="false"
        />
      </div>
      <h3 className="mb-12 text-center text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug xl:text-6xl 2xl:leading-normal">
        Guest Book
      </h3>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={autoplay ? { delay } : false}
        effect={effect}
        fadeEffect={effect === 'fade' ? { crossFade: true } : undefined}
        loop
        speed={speed}
        className="container h-full max-w-2xl"
      >
        {testimonialsContent.map((content, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <em className="pointer-events-none -ml-8 size-16 w-full object-contain text-left text-9xl not-italic opacity-5">
              &ldquo;
            </em>
            <p className="p-2 text-justify text-sm sm:text-xl md:text-pretty">
              {content.review}
            </p>
            <em className="pointer-events-none -mr-8 -mt-8 size-16 w-full object-contain text-right text-9xl not-italic opacity-5">
              &rdquo;
            </em>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={content.sourceImage}
                alt={content.author}
                className="h-12 w-12 rounded-full border object-cover shadow"
              />
              <div className="text-left">
                <p className="text-base font-semibold">{content.author}</p>
                <p className="text-xs">{content.source}</p>
              </div>
            </div>
            {navigation && (
              <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-between">
                <button
                  className="swiper-button-prev text-dark"
                  onClick={handlePrev}
                  aria-label="Previous"
                  title="Previous"
                >
                  <TbArrowNarrowLeft />
                </button>
                <button
                  className="swiper-button-next text-dark"
                  onClick={handleNext}
                  aria-label="Next"
                  title="Next"
                >
                  <TbArrowNarrowRight />
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default TestimonialSlider;
