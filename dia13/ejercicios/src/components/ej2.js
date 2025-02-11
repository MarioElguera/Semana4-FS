import { useState, useEffect, useRef } from "react";

const Carousel = ({ images, visibleSlides = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = images.length;
    const autoplayRef = useRef(null);
    const transitionDuration = 500;
    const autoPlayInterval = 3000;

    useEffect(() => {
        const startAutoplay = () => {
            autoplayRef.current = setInterval(() => {
                nextSlide();
            }, autoPlayInterval);
        };

        startAutoplay();

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === maxIndex - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return maxIndex - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX - endX > 100) {
            nextSlide();
        } else if (endX - startX > 100) {
            prevSlide();
        }
    };

    const angle = 360 / visibleSlides;

    const getSlidePosition = () => {
        return (currentIndex * (100 / visibleSlides));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform ease-in-out"
                style={{
                    transform: `rotateY(${currentIndex * angle}deg) translateZ(250px)`,
                    transitionDuration: `${transitionDuration}ms`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-[calc(100%/3)] h-[200px] object-cover"
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
            >
                ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
            >
                →
            </button>
        </div>
    );
};

export default Carousel;
