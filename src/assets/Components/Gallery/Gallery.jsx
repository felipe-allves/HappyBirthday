import React, { useState, useEffect } from "react";
import './Gallery.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Gallery() {
  const slides = [];

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
