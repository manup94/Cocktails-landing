'use client'
import { useState, useEffect } from 'react';

const images = [
    '/images/carrousel-1.jpg',
    '/images/carrousel-2.jpg',
    '/images/carrousel-3.jpg'
];

console.log('Desarrollado a modo demostración para Welkhomeclub por Manuel Pérez Prado');


function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex bg-black items-center justify-center">
            <div className="relative w-full max-w-md">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className="w-full h-auto"
                                src={image}
                                alt={`img ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
