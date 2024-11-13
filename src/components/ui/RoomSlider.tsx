import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SliderNavigation from './SliderNavigation';

interface Slide {
  image: string;
  title?: string;
  description?: string;
  highlightedFeatures?: string[];
}

interface RoomrProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  sizeClassName?: string;
}

const RoomSlider: React.FC<RoomrProps> = ({
  slides,
  hasContent = false,
  autoplay = true,
  speed = 2000,
  delay = 5000,
  sizeClassName = 'relative flex h-screen items-center justify-center',
}) => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setCurrentIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={autoplay ? { delay } : undefined}
        loop={true}
        speed={speed}
        slidesPerView={1.5}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={sizeClassName}>
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="h-[75vh] w-full object-cover"
            />
            {hasContent && (
              <div className="mt-8 w-full space-y-2 px-8 text-start">
                {slide.title && (
                  <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-5xl lg:leading-none">
                    {slide.title}
                  </h3>
                )}
                {/* {slide.description && (
                  <p className="text-center text-sm text-dark/60">
                    {slide.description}
                  </p>
                )} */}
                {slide.highlightedFeatures && (
                  <ul className="flex gap-2">
                    {slide.highlightedFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="rounded-md text-base text-dark/60"
                      >
                        {feature}
                        {slide.highlightedFeatures &&
                          index < slide.highlightedFeatures.length - 1 &&
                          ' | '}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 right-0 z-20 flex h-24 w-[70vh] items-center justify-end bg-light p-8">
          <SliderNavigation
            currentIndex={currentIndex}
            totalItems={slides.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </Swiper>
    </>
  );
};

export default RoomSlider;
