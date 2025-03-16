"use client";
import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ images, visibleSlides = 3 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragged, setDragged] = useState(0);
    const maxIndex = images.length - visibleSlides;

    useEffect(() => {
        if (images.length < visibleSlides) {
            console.error('El número de imágenes es menor que el número de slides visibles.');
        }
    }, [images.length, visibleSlides]);

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

    useEffect(() => {
        const autoplayInterval = setInterval(nextSlide, 3000);

        return () => clearInterval(autoplayInterval);
    }, [currentIndex]);

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        setDragged(startX - currentX);
    };

    const stopDrag = () => {
        if (isDragging) {
            setIsDragging(false);
            if (dragged > 50) {
                prevSlide();
            } else if (dragged < -50) {
                nextSlide();
            }
        }
        setDragged(0);
    };

    const translateXValue = (currentIndex % images.length) * (100 / visibleSlides);

    return (
        <div
            className="carousel-container"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onMouseMove={onDrag}
            onTouchMove={onDrag}
            onMouseUp={stopDrag}
            onTouchEnd={stopDrag}
            onMouseLeave={stopDrag}
        >
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${translateXValue}%)`,
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
                aria-label="Slide anterior"
                role="button"
            >
                {"<"}
            </button>

            <button
                onClick={nextSlide}
                className="carousel-button carousel-button-next"
                aria-label="Siguiente slide"
                role="button"
            >
                {">"}
            </button>
        </div>
    );
}
