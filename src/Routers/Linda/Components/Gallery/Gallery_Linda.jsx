import React, { useState, useEffect } from "react";
import './Gallery_Linda.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import Linda1 from '../../images/Linda (1).JPG'
import Linda2 from '../../images/Linda (2).JPG'
import Linda3 from '../../images/Linda (3).JPG'
import Linda4 from '../../images/Linda (4).JPG'
import Linda5 from '../../images/Linda (5).JPG'
import Linda6 from '../../images/Linda (6).JPG'
import Linda7 from '../../images/Linda (7).JPG'
import Linda8 from '../../images/Linda (8).JPG'
import Linda9 from '../../images/Linda (9).JPG'
import Linda10 from '../../images/Linda (10).JPG'
import Linda11 from '../../images/Linda (11).JPG'
import Linda12 from '../../images/Linda (12).JPG'
import Linda13 from '../../images/Linda (13).JPG'

function Gallery() {
  const slides = [
    Linda1,
    Linda2,
    Linda3,
    Linda4,
    Linda5,
    Linda6,
    Linda7,
    Linda8,
    Linda9,
    Linda10,
    Linda11,
    Linda12,
    Linda13,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container">
      <section className="gallery-section">
        <h2>Momentos Especiais</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronCircleLeft />
          </button>

          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={src} alt={`Foto ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronCircleRight />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
