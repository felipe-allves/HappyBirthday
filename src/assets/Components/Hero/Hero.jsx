import React from "react";
import './Hero.css';

function Hero() {
  const age = 25;
  const birthday = new Date();
  birthday.setFullYear(birthday.getFullYear() + 1);

  return (
    <main className="container">
      <div className="bg-gradient"></div>
      <div className="floating-elements"></div>

      <section className="hero-section">
        <h1 className="age-display">
          <span className="age-number">{age}</span>
          <span className="age-label">anos</span>
        </h1>
        <p className="hero-subtitle">de muita luz, amor e alegria!</p>
      </section>
    </main>
  );
}

export default Hero;
