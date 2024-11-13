import React from 'react';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';

interface SliderNavigationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrev: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  currentIndex,
  totalItems,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button onClick={onPrev} aria-label="Previous" className="text-3xl">
        <TbArrowNarrowLeft />
      </button>
      <span className="text-sm">
        {currentIndex + 1} / {totalItems}
      </span>
      <button onClick={onNext} aria-label="Next" className="text-3xl">
        <TbArrowNarrowRight />
      </button>
    </div>
  );
};

export default SliderNavigation;
