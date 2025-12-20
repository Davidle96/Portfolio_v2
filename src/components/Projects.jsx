import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 MoonBay Hotel Booking*/}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>MoonBay Hotel Booking</h3>
                            <p>
                                A comprehensive hotel management and booking platform built as a final group project.
                                I was responsible for the core booking engine, authentication (Login/Register), and the administrative dashboard for hotel staff. Key features include online reservations and a detailed review system.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Laravel</span>
                                <span>MySQL</span>
                                <span>Blade</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dohung95/MoonBay" className="btn secondary">View Code</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 2 Online Health Consultation Portal*/}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>Online Health Consultation Portal</h3>
                            <p>
                                A telemedicine platform facilitating remote healthcare services.
                                I engineered the secure authentication system, real-time 1-on-1 video calls, and patient-doctor messaging. I also integrated an AI-powered chatbot to assist with preliminary health queries.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>.NET Core</span>
                                <span>MySQL</span>
                                <span>WebRTC</span>
                                <span>SignalR</span>
                                <span>API chatbotAI</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/dohung95/Online_Health_Consultation_Portal" className="btn secondary">View Code</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 3 Digital Confession*/}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>Digital Confession</h3>
                            <p>
                                An interactive 'Digital Love Letter' built to bridge the gap of shyness.
                                Using vanilla HTML, CSS, and JavaScript, I created this dynamic experience to express feelings I couldn't say face-to-face—turning my first lines of code into a language of connection.
                            </p>
                            <div className="tech-stack">
                                <span>JavaScript</span>
                                <span>HTML/CSS</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/Davidle96/flirting-with-crush" className="btn secondary">View Code</a>
                                <a href="https://davidle96.github.io/flirting-with-crush/" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 4 GAME*/}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>GAME</h3>
                            <p>
                                A web-based game built using React and TypeScript.
                                The game features a responsive design and smooth animations, providing an engaging experience for users.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>TypeScript</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/Davidle96/game.git" className="btn secondary">View Code</a>
                                <a href="https://game-sjqp.onrender.com" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 5 Portfolio Website*/}
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
                                <a href="https://github.com/Davidle96/Portfolio_v2" className="btn secondary">View Code</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 6 BioLink Website*/}
                    <RevealOnScroll>
                        <div className="project-card">
                            <h3>BioLink Website</h3>
                            <p>
                                A centralized personal hub featuring a dynamic 'Matrix-style' background and interactive link cards.
                                Built with React and Vite to aggregate social profiles and portfolio links in a sleek, dark-themed interface.
                            </p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Vite</span>
                                <span>CSS3</span>
                            </div>
                            <div className="project-links">
                                <a href="https://github.com/Davidle96/Bio_Link_v.2" className="btn secondary">View Code</a>
                                <a href="https://bio-link-v-2.onrender.com/" className="btn primary">Live Demo</a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div >
            </div >
        </section >
    );
};

export default Projects;
