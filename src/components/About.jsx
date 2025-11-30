import React from 'react';
import Typewriter from './Typewriter';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Hello! I'm <strong>Le Quoc Dat</strong>, a passionate <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                            <Typewriter words={['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']} />
                        </span> based in Vietnam.
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        My goal is to always build products that provide pixel-perfect, performant experiences.
                        I am a quick learner and always looking to expand my knowledge and skill set.
                        I thrive in collaborative environments and enjoy solving complex problems with clean, efficient code.
                    </p>
                    <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Off the clock, I am a <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Petrolhead & Supercar Lover', 'Embedded Systems Tinkerer', 'Tech Gadget Collector', 'Solo Traveler']}
                                speed={80}
                                deleteSpeed={40}
                            />
                        </span>
                    </div>

                    <div style={{ fontSize: '1.1rem', minHeight: '30px', marginBottom: '1rem' }}>
                        <span style={{ color: 'var(--text-color)' }}>
                            <Typewriter
                                words={[
                                    "I have an unyielding passion for the roar of engines and the precision of high-performance machines.",
                                    "My world revolves around dissecting the latest technology, from smart devices to complex embedded circuits.",
                                    "My workspace is a blend of a high-end tech collection and a maker's lab, where I not only admire premium gadgets but also engineer my own custom devices."
                                ]}
                                speed={80}
                                deleteSpeed={20}
                                delay={7000}
                            />
                        </span>
                    </div>

                    <p style={{ fontSize: '1.1rem' }}>
                        And when the screen turns off, I ignite my engine to explore the world, finding freedom and fresh inspiration on every mile of the open road.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
