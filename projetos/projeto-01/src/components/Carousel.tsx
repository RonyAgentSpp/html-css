import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1605379399642-870262d3d051',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={`${image}?auto=format&fit=crop&w=1920&q=80`}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronLeft />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}