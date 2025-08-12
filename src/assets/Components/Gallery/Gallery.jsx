import React from "react";
import './Gallery.css'

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function Gallery () {
    return(
        <main className="container">
            <section className="gallery-section">
                <h2>Momentos Especiais</h2>
                <div className="carousel-container">
                    <button className="carousel-btn prev" onClick="prevSlide">
                        <FaChevronCircleLeft/>
                    </button>
                     <div className="carousel-track" id="carouselTrack">
                    <div className="carousel-slide active">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" alt="Foto 1"/>
                    </div>
                    <div className="carousel-slide">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" alt="Foto 2"/>
                    </div>
                    <div className="carousel-slide">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" alt="Foto 3"/>
                    </div>
                </div>
                <button className="carousel-btn next" onClick="nextSlide()">
                    <FaChevronCircleRight/>
                </button>
                </div>
            </section>
        </main>
    )
}

export default Gallery