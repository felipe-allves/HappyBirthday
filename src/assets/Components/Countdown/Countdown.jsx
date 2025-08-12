import React from "react";
import './Countdown.css'

function Countdown () {
    return(
        <main className="container">
            <section className="countdown-section">
            <h2>Próximo Aniversário</h2>
            <div className="countdown-container">
                <div className="countdown-item">
                    <span id="days" className="countdown-number">365</span>
                    <span className="countdown-label">Dias</span>
                </div>
                <div className="countdown-item">
                    <span id="hours" className="countdown-number">24</span>
                    <span className="countdown-label">Horas</span>
                </div>
                <div className="countdown-item">
                    <span id="minutes" className="countdown-number">60</span>
                    <span className="countdown-label">Minutos</span>
                </div>
                <div className="countdown-item">
                    <span id="seconds" className="countdown-number">60</span>
                    <span className="countdown-label">Segundos</span>
                </div>
            </div>
        </section>
        </main>
    )
}

export default Countdown