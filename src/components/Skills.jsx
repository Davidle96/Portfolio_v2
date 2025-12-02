import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <RevealOnScroll className="skills-animated">
                        <div className="skill-category">
                            <h3>Frontend & Design</h3>
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript (ES6+)</li>
                                <li>HTML5 & CSS3</li>
                                <li>Bootstrap / Tailwind</li>
                                <li>UX/UI Design</li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="skills-animated">
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <ul>
                                <li>C# / .NET Core</li>
                                <li>Python</li>
                                <li>Node.js / Express</li>
                                <li>PHP/ Laravel</li>
                                <li>C / C++</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="skills-animated">
                        <div className="skill-category">
                            <h3>Database</h3>
                            <ul>
                                <li>SQL Server</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="skills-animated">
                        <div className="skill-category">
                            <h3>Tools & DevOps</h3>
                            <ul>
                                <li>Git / GitHub</li>
                                <li>VS Code / Visual Studio</li>
                                <li>Antigravity</li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll className="skills-animated">
                        <div className="skill-category">
                            <h3>Foreign Languages</h3>
                            <ul>
                                <li>Vietnamese (Native)</li>
                                <li>English (Basic)</li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Skills;
