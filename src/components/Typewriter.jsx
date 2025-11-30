import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, speed = 100, deleteSpeed = 50, delay = 1500 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index === words.length) {
            setIndex(0); // Loop back to the first word
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            // Finished typing word, wait before deleting
            const timeout = setTimeout(() => {
                setReverse(true);
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Finished deleting, move to next word
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, speed, deleteSpeed, delay]);

    return (
        <span className="typewriter">
            {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
        </span>
    );
};

export default Typewriter;
