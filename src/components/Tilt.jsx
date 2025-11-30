import React, { useRef, useEffect } from 'react';

const Tilt = ({ children, className }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        const element = tiltRef.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const tiltX = (0.5 - y) * 20; // Max tilt 20 degrees
            const tiltY = (x - 0.5) * 20;

            element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={tiltRef}
            className={className}
            style={{ transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export default Tilt;
