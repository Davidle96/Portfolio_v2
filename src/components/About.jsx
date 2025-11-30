import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Hello! I'm <strong>Le Quoc Dat</strong>, a passionate Full Stack Developer based in Vietnam.
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        My goal is to always build products that provide pixel-perfect, performant experiences.
                        I am a quick learner and always looking to expand my knowledge and skill set.
                        I thrive in collaborative environments and enjoy solving complex problems with clean, efficient code.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        When I'm not coding, you can find me exploring new technologies, reading about design trends, or enjoying a good cup of coffee.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
