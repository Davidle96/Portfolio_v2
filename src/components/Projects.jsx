import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>E-Commerce Platform</h3>
                            <p>
                                A full-stack online store built with React and Node.js.
                                Features include user authentication, product search, shopping cart, and payment integration.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>Express</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn secondary">View Code</a>
                                <a href="#" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 2 */}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>Employee Management System</h3>
                            <p>
                                A comprehensive dashboard for HR management.
                                Allows CRUD operations for employee records, attendance tracking, and payroll processing.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Spring Boot</span>
                                <span>MySQL</span>
                                <span>Docker</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn secondary">View Code</a>
                                <a href="#" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 3 */}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>Weather Dashboard</h3>
                            <p>
                                A real-time weather application using external APIs.
                                Displays current conditions and 5-day forecast with dynamic background changes.
                            </p>
                            <div className="tech-stack">
                                <span>JavaScript</span>
                                <span>HTML/CSS</span>
                                <span>OpenWeather API</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn secondary">View Code</a>
                                <a href="#" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 4 */}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>Portfolio Website</h3>
                            <p>
                                A modern, responsive personal portfolio website (this site).
                                Built with React and Vite, featuring smooth animations and dark mode aesthetics.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Vite</span>
                                <span>CSS3</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn secondary">View Code</a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Projects;
