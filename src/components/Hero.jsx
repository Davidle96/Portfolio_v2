import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import Tilt from './Tilt';
import avatarImg from '../assets/avarta.png';

const Hero = () => {
    return (
        <section id="hero" className="hero-section" style={{ backgroundImage: `url(${avatarImg})` }}>
            <div className="container">
                <Tilt>
                    <h1>
                        Hi, I'm <span className="highlight">Le Quoc Dat</span>
                    </h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        I build accessible, pixel-perfect, performant, and web experiences.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn primary">View My Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default Hero;
