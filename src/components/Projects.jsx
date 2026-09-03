import React from 'react';
import RevealOnScroll from './RevealOnScroll';

import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <RevealOnScroll key={index}>
                            <div className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a href={project.githubLink} className="btn secondary" target="_blank" rel="noopener noreferrer">View Code</a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} className="btn primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    )}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
