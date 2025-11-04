import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import solarPlant1 from "@/assets/Carrusel/carrusel_1.jpg";
import solarPlant2 from "@/assets/Carrusel/carrusel_2.jpg";
import solarPlant3 from "@/assets/Carrusel/carrusel_3.jpg";
import solarPlant4 from "@/assets/Carrusel/carrusel_4.jpg";
import solarPlant5 from "@/assets/Carrusel/carrusel_5.jpg";
import solarPlant6 from "@/assets/Carrusel/carrusel_6.jpg";
import solarPlant7 from "@/assets/Carrusel/carrusel_7.jpg";
import solarPlant8 from "@/assets/Carrusel/carrusel_8.jpg";
import solarPlant9 from "@/assets/Carrusel/carrusel_9.jpg";
import solarPlant10 from "@/assets/Carrusel/carrusel_10.jpg";
import {Lightning} from "@phosphor-icons/react";

interface Slide {
  id: number;
  image: string;
  capacity: string;
  savings: string;
}

export const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      image: solarPlant1,
      capacity: '92.5 KW',
      savings: '45%'
    },
    {
      id: 2,
      image: solarPlant2,
      capacity: '8.6 KW',
      savings: '88%'
    },
    {
      id: 3,
      image: solarPlant3,
      capacity: '8.1 KW',
      savings: '90%'
    },
    {
      id: 4,
      image: solarPlant4,
      capacity: '24.4 KW',
      savings: '90%'
    },
    {
      id: 5,
      image: solarPlant5,
      capacity: '9.09 KW',
      savings: '93%'
    },
    {
      id: 6,
      image: solarPlant6,
      capacity: '40.6 KW',
      savings: '91%'
    },
    {
      id: 7,
      image: solarPlant7,
      capacity: '9.28 KW',
      savings: '89%'
    },
    {
      id: 8,
      image: solarPlant8,
      capacity: '108.8 KW',
      savings: '50%'
    },
    {
      id: 9,
      image: solarPlant9,
      capacity: '12.4 KW',
      savings: '75%'
    },
    {
      id: 10,
      image: solarPlant10,
      capacity: '8.9 KW',
      savings: '90%'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay: cambiar de slide cada 4 segundos
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, isPaused]);

  const getSavingsColor = (savings: string): string => {
    const value = parseInt(savings);
    if (value >= 90) return 'bg-secondary';
    if (value >= 80) return 'bg-secondary';
    return 'bg-secondary';
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 mt-8">
      <div 
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carrusel de imágenes */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative">
                <img
                  src={slide.image}
                  alt={`Panel solar ${slide.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          {/* Tarjetas de información */}
          <div className="absolute bottom-10 md:bottom-8 left-4 sm:left-8 flex flex-col sm:flex-row gap-2 sm:gap-4  sm:w-auto">
            {/* Tarjeta de Capacidad */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl h-[60px] md:h-[90px] md:rounded-2xl px-4 py-3 sm:px-2 sm:py-2 shadow-xl flex items-center justify-start sm:justify-center">
              <div className=" flex items-center gap-2 sm:gap-1">
                <div className=" rounded-lg">
                  <Lightning weight="fill" className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Capacidad</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {slides[currentSlide].capacity}
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ahorro */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl h-[60px] md:h-[90px] sm:rounded-2xl px-4 py-3 sm:px-2 sm:py-2 shadow-xl flex items-center justify-center">
              <div className=" flex items-center gap-2 sm:gap-3">
                <div className=" rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Ahorro</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl sm:text-3xl font-bold text-gray-900">
                      {slides[currentSlide].savings}
                    </p>
                    <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getSavingsColor(slides[currentSlide].savings)} transition-all duration-500`}
                        style={{ width: slides[currentSlide].savings }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de puntos */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-green-500'
                  : 'w-2 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

