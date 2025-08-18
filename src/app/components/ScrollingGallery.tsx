"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { images } from '../data';

interface CarouselProps {
  autoplay?: boolean;
  delay?: number;
  images: ImageSlideData[];
}


interface ImageSlideData {
  src: string;
  alt?: string;
  name?: string;
}

/**
 * Creates SwiperSlide components from a list of ImageSlideData objects and shuffles the order
 * I am not proud to admit that this function was made with the slop machine
 * @param imagePaths - Array of image paths (strings) or objects with path/alt/title
 * @param options - Optional configuration for slides
 * @returns Array of randomized SwiperSlide components
 */
export function createSlides(
  imagePaths: (string | ImageSlideData)[],
  options: {
    showTitles?: boolean;
    imageClassName?: string;
    slideClassName?: string;
    priority?: boolean; // Priority loading for first image
  } = {}
): React.ReactElement[] {
  const {
    showTitles = false,
    imageClassName = "object-cover w-full h-full",
    slideClassName = "relative w-full h-96",
    priority = true
  } = options;

  // Normalize input to consistent format
  const normalizedSlides: ImageSlideData[] = imagePaths.map((item, index) => {
    if (typeof item === 'string') {
      return {
        src: item,
        alt: `Image ${index + 1}`,
        name: `Image ${index + 1}`
      };
    }
    return {
      alt: `Image ${index + 1}`,
      name: `Image ${index + 1}`,
      ...item
    };
  });


  // Create SwiperSlide components
  return normalizedSlides.map((slide, index) => (
    <SwiperSlide key={`slide-${slide.src}-${index}`}>
      <div className={slideClassName}>
        <Image
          src={slide.src}
          alt={slide.alt!}
          fill
          className={imageClassName}
          priority={priority && index === 0} // Priority for first randomized image
        />
        {showTitles && slide.name && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <h3 className="text-lg font-semibold">{slide.name}</h3>
          </div>
        )}
      </div>
    </SwiperSlide>
  ));
}

const ImageCarousel: React.FC<CarouselProps> = ({
  autoplay = true,
  delay = 1750,
}) => {
  const slides = createSlides(images);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay ? {
          delay: delay,
          disableOnInteraction: false,
        } : false}
        loop={true}
        className="rounded-lg shadow-lg"
        breakpoints={{
          620: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >

        {slides}

      </Swiper>
    </div >
  );
};

export default ImageCarousel;
