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
                            <h4>University Name (FPT Aptech)</h4>
                            <span className="date">2024 - Present (Expected Graduation: 2026)</span>
                            <p>
                                Focusing on Software Engineering and Web Development.
                                Built strong foundation in algorithms, data structures, and database management.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="timeline-item">
                        <div className="timeline-content">
                            <h3>Academic Projects</h3>
                            <h4>University Coursework</h4>
                            <span className="date">2024 - Present</span>
                            <p>
                                Developed various full-stack applications including e-commerce sites and management systems using React, Node.js, and SQL.
                                Collaborated in agile teams to deliver projects on time.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll className="timeline-item highlight">
                        <div className="timeline-content">
                            <h3>Open to Work / Internship</h3>
                            <h4>Ready for New Opportunities</h4>
                            <span className="date">Available Now</span>
                            <p>
                                Eager to apply academic knowledge in a real-world setting.
                                Passionate about learning new technologies and contributing to professional development teams.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Experience;
