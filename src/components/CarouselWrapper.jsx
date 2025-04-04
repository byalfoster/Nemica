import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";
import Card from "./Card";

// Importación de imágenes para las cards
import bio1A from "../assets/images/cards/Bio1A.jpg";
import histograma1A from "../assets/images/cards/histograma1A.webp";
import clip2 from "../assets/images/cards/Clip2.webp";
import genealogia1A from "../assets/images/cards/Genealogia1A.webp";
import testimonios from "../assets/images/cards/Testimonios.webp";
import relaciones from "../assets/images/cards/Relaciones.webp";
import genetica1A from "../assets/images/cards/genetica1A.webp";
import Museum1B from "../assets/images/cards/Museum1B.webp";

const carousel = (slider) => {
  const z = 500;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const CarouselWrapper = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  // Referencia para almacenar el intervalo de autoplay
  const intervalRef = useRef(null);

  // Función para iniciar el autoplay
  const startAutoplay = () => {
    if (instanceRef.current) {
      intervalRef.current = setInterval(() => {
        instanceRef.current.next();
      }, 1000); // Cambia de slide cada 1 segundo
    }
  };

  // Función para detener el autoplay
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [instanceRef]);

  // Estos handlers se usan tanto para desktop como para mobile
  const handlePause = () => {
    stopAutoplay();
  };

  const handleResume = () => {
    startAutoplay();
  };

  return (
    <div className="wrapper overflow-x-visible">
      <div className="scene">
        {/* Para escritorio: se detiene al pasar el mouse sobre el carrusel */}
        <div
          className="carousel keen-slider"
          ref={sliderRef}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {/* Contenedor 1 */}
          <div
            className="carousel__cell number-slide6"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="RESUMEN BIOGRÁFICO"
              imgSrc={bio1A}
              h1="¡El pergamino de vida!"
              description="Recorré, describí y sintetizá la trayectoria, expresando el significado que tuvo para que nuevas y futuras generaciones tengan algo valioso guardado para siempre."
            />
          </div>
          {/* Contenedor 2 */}
          <div
            className="carousel__cell number-slide2"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="HISTOGRAMA"
              imgSrc={histograma1A}
              h1="¡Los hechos más significativos!"
              description="Destacá los hitos más importantes que marcaron el camino construido, y mirá cronológicamente esos logros y eventos del proyecto de vida que fueron únicos."
            />
          </div>
          {/* Contenedor 3 */}
          <div
            className="carousel__cell number-slide3"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="CLIP DE VIDA"
              imgSrc={clip2}
              h1="¡Esos buenos momentos vividos!"
              description="Transmití esas experiencias que llenaron el corazón, que son vivencias que emocionan y que reviven momentos que entusiasman."
            />
          </div>
          {/* Contenedor 4 */}
          <div
            className="carousel__cell number-slide4"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="ÁRBOL GENEALÓGICO"
              imgSrc={genealogia1A}
              h1="¡De generación en generación!"
              description="Armá la línea familiar, para conocer los protagonistas de una generación a otra y descubrir en la transmisión de esa herencia del pasado, tradiciones arraigadas que dan muchas veces sentido al hoy y al mañana."
            />
          </div>
          {/* Contenedor 5 */}
          <div
            className="carousel__cell number-slide5"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="TESTIMONIOS"
              imgSrc={testimonios}
              h1="¡Esos relatos que nos pintan tal cual somos!"
              description="Recreá y captá desde la mirada y experiencia del círculo íntimo esa esencia personal, generando un retrato con los rasgos característicos."
            />
          </div>
          {/* Contenedor 6 */}
          <div
            className="carousel__cell number-slide6"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="CÍRCULO DE RELACIONES"
              imgSrc={relaciones}
              h1="¡Esos vínculos construidos!"
              description="Mostrá las relaciones con familiares y amigos que marcaron e influenciaron el desarrollo y crecimiento personal."
            />
          </div>
          {/* Contenedor 7 */}
          <div
            className="carousel__cell number-slide6"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="SÍNTESIS GENÉTICA"
              imgSrc={genetica1A}
              h1="¡De tal palo tal astilla!"
              description="Dejá claro esos rasgos tradicionales que inevitablemente se heredan, que son parte de la identidad y que seguramente se transmitan a las siguientes generaciones."
            />
          </div>
          {/* Contenedor 8 */}
          <div
            className="carousel__cell number-slide6"
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <Card
              title="MUSEUM"
              imgSrc={Museum1B}
              h1="¡Olvidate del altillo!"
              description="Que mejor que tener ese espacio propio donde encontrar todo de forma rápida y ágil, y mediante una experiencia visual increíble que se puede disfrutar a cada momento."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWrapper;
