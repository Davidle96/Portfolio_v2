import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [direction, setDirection] = useState('');
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // If element is below the top of viewport (positive y), it's entering from bottom (scroll down)
                // If element is near top or above (negative/small y), it's entering from top (scroll up)
                const isEnteringFromBottom = entry.boundingClientRect.y > 0;

                setDirection(isEnteringFromBottom ? 'visible-up' : 'visible-down');
                setIsVisible(true);
            } else {
                setIsVisible(false);
                // Optional: Reset direction or keep it? 
                // Resetting might be safer for next entry
                setDirection('');
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            scrollObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} ${direction} ${className}`}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
