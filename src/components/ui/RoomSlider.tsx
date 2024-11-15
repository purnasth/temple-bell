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

interface RoomSliderProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  sizeClassName?: string;
  imagesClassName?: string;
  slidesPerView?: number;
}

const RoomSlider: React.FC<RoomSliderProps> = ({
  slides,
  hasContent = false,
  autoplay = true,
  speed = 2000,
  delay = 5000,
  sizeClassName,
  slidesPerView = 1.5,
  imagesClassName,
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

  // Function to determine if the slide is fully visible
  const isSlideFullyVisible = (index: number) => {
    const itemsInView = Math.floor(slidesPerView);
    const endIndex = currentIndex + itemsInView - 1;

    // Adjust to handle the loop correctly
    return (
      (index >= currentIndex && index <= endIndex) ||
      (currentIndex + itemsInView > slides.length && index >= slides.length - itemsInView)
    );
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={autoplay ? { delay } : undefined}
        loop={true}  // Set loop to true
        speed={speed}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={sizeClassName}>
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className={` ${imagesClassName} object-cover`}
            />
            {hasContent && isSlideFullyVisible(index) && (
              <div className="mt-8 w-full space-y-2 px-8 text-start">
                {slide.title && (
                  <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-5xl lg:leading-none">
                    {slide.title}
                  </h3>
                )}
                {slide.highlightedFeatures && (
                  <ul className="flex gap-2">
                    {slide.highlightedFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="rounded-md text-base text-dark/60"
                      >
                        {feature}
                        {slide.highlightedFeatures && index < slide.highlightedFeatures.length - 1 && ' | '}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
        
        {/* Pagination and Navigation */}
        <div className="absolute bottom-0 right-0 z-10 flex h-auto w-auto items-center justify-end bg-light p-4">
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
