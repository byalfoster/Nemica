import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t) => t };

export default function BackgroundWithIconsCarousel({ bgDesktopIcon, bgMobileIcon, icons, titles }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 5,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 0,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const handleIconClick = () => {
    const target = document.getElementById("servicios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-[140px] md:h-[150px] lg:h-[230px] flex justify-center items-center overflow-hidden">
      {/* 🎨 Imagen de fondo */}
      <picture className="absolute top-0 left-0 w-full h-full">
        <source srcSet={bgDesktopIcon} media="(min-width: 768px)" />
        <img src={bgMobileIcon} alt="Fondo" className="w-full h-full object-cover" />
      </picture>

      {/* 🚀 Carrusel de iconos con títulos */}
      <div ref={sliderRef} className="keen-slider absolute z-10 w-full px-4">
        {icons.map((icon, index) => (
          <div key={index} className="keen-slider__slide flex flex-col justify-center items-center">
            <img
              src={icon}
              alt={`Icono ${index}`}
              className="w-25 h-25 lg:w-40 lg:h-40 cursor-pointer"
              onClick={handleIconClick}
            />
            <h2 className="text-sn lg:text-xl mt-1">
              {titles && titles[index] ? titles[index] : `Título ${index + 1}`}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
