import { useState, useEffect, useRef } from 'react';

export default function Slider({ images, autoplay = true, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(autoplay);
    const touchStartRef = useRef(0);
    const touchEndRef = useRef(0);
    const isSwipingRef = useRef(false);
    const autoplayRef = useRef(isAutoplay);

    useEffect(() => {
        autoplayRef.current = isAutoplay;
    }, [isAutoplay]);

    const nextSlide = (e) => {
        if (e) stopAutoplay();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = (e) => {
        if (e) stopAutoplay();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const stopAutoplay = () => {
        setIsAutoplay(false);
    };

    useEffect(() => {
        if (isAutoplay) {
            const intervalId = setInterval(nextSlide, interval);
            return () => clearInterval(intervalId);
        }
    }, [isAutoplay, interval]);

    const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
        isSwipingRef.current = true;
    };

    const handleTouchEnd = (e) => {
        if (!isSwipingRef.current) return;
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStartRef.current - touchEnd > 50) {
            nextSlide();
        } else if (touchEnd - touchStartRef.current > 50) {
            prevSlide();
        }
        isSwipingRef.current = false;
    };

    const handleMouseDown = (e) => {
        touchStartRef.current = e.clientX;
        isSwipingRef.current = true;
    };

    const handleMouseUp = (e) => {
        if (!isSwipingRef.current) return;
        const mouseEnd = e.clientX;
        if (touchStartRef.current - mouseEnd > 50) {
            nextSlide();
        } else if (mouseEnd - touchStartRef.current > 50) {
            prevSlide();
        }
        isSwipingRef.current = false;
    };

    return (
        <div
            className="slider"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="slider-wrapper">
                <button onClick={prevSlide} className="prev-button">{"<"}</button>
                <div className="image-wrapper">
                    <img
                        src={images[currentIndex]}
                        alt="slider"
                        className="slider-image"
                    />
                </div>
                <button onClick={nextSlide} className="next-button">{">"}</button>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={currentIndex === index ? "activeDot" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}