import React from 'react';
import { FaGithub, FaAddressCard } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Le Quoc Dat. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Davidle96" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://bio-link-v-2.onrender.com/" target="_blank" rel="noopener noreferrer"><FaAddressCard /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
