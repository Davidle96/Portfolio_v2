import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header" style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1000, padding: '1rem 0', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
            <div className="container header-container">
                <div className="logo"><a href="#hero">MyPortfolio</a></div>

                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
