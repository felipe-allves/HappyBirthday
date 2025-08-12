import React, { useState, useEffect } from "react";
import './Countdown.css';

function Countdown() {
  const birthday = new Date("2025-08-13T00:00:00");
  birthday.setFullYear(birthday.getFullYear() + 1);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = birthday - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    // Atualiza a cada segundo
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Atualiza na primeira renderização

    return () => clearInterval(interval); // Limpa intervalo ao desmontar
  }, [birthday]);

  return (
    <main className="container">
      <section className="countdown-section">
        <h2>Próximo Aniversário</h2>
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Dias</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Segundos</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Countdown;
