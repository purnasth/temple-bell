import React from 'react';
import { getIconComponent } from '../utils/iconMap';

interface UseIconOrImageProps {
  icon?: string;
  image?: string;
  title?: string;
  className?: string;
}

const useIconOrImage: React.FC<UseIconOrImageProps> = ({
  icon,
  image,
  title,
  className,
}) => {
  if (icon) {
    const IconComponent = getIconComponent(icon) as React.ComponentType<{
      className?: string;
    }>;
    return IconComponent ? (
      <IconComponent className={className || 'text-2xl'} />
    ) : null;
  }
  if (image) {
    return (
      <img
        src={image}
        alt={title || 'icon'}
        className={className || 'size-6 object-contain'}
      />
    );
  }
  return null;
};

export default useIconOrImage;
