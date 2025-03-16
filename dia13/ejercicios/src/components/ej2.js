"use client";
import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ images, visibleSlides = 3 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const maxIndex = images.length - visibleSlides;


    const nextSlide = () => {
        if (currentIndex === maxIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setCurrentIndex(0);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setTimeout(() => {
                setCurrentIndex(maxIndex);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 0);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="carousel-image"
                        style={{ width: `calc(100% / ${visibleSlides})` }}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="carousel-button carousel-button-prev"
            >
                {"<"}
            </button>

            <button
                onClick={nextSlide}
                className="carousel-button carousel-button-next"
            >
                {">"}
            </button>
        </div>
    );
}
