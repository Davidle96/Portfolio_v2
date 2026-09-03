import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2>Education & Academic Journey</h2>
                <div className="timeline">
                    <RevealOnScroll className="timeline-item">
                        <div className="timeline-content">
                            <h3>Bachelor of Information Technology</h3>
                            <h4>FPT Aptech</h4>
                            <span className="date">2024 - 2026 (Graduated)</span>
                            <p>
                                Completed studies in Software Engineering and Web Development, with foundational knowledge in Mobile App Development.
                                Built strong foundation in algorithms, data structures, and database management.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="timeline-item">
                        <div className="timeline-content">
                            <h3>Academic Projects</h3>
                            <h4>University Coursework</h4>
                            <span className="date">2024 - 2026</span>
                            <p>
                                Developed various full-stack web and mobile applications, including e-commerce sites and management systems using React, multiple backend languages, and SQL databases.
                                Collaborated in agile teams to deliver projects on time.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="timeline-item highlight">
                        <div className="timeline-content">
                            <h3>Actively Seeking Opportunities</h3>
                            <h4>Open to Full-time Roles & Internships</h4>
                            <span className="date">Available Now</span>
                            <p>
                                As a recent graduate, I am eager to apply my academic knowledge in a real-world professional setting.
                                Passionate about learning new technologies, contributing to development teams, and launching my career in tech.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Experience;
