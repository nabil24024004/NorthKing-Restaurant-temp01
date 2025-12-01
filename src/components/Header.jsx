import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <h1>North King</h1>
                </div>

                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
                        <li><a href="#menu" onClick={toggleMobileMenu}>Menu</a></li>
                        <li><a href="#gallery" onClick={toggleMobileMenu}>Gallery</a></li>
                        <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
                    </ul>
                </nav>

                <a href="#contact" className="btn header-btn">Book a Table</a>

                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
