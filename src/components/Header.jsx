import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { toggleCart, cartCount } = useCart();

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

    useEffect(() => {
        const sections = ['home', 'about', 'menu', 'reservation', 'gallery', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section center crosses viewport center
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Menu', href: '#menu', id: 'menu' },
        { name: 'Gallery', href: '#gallery', id: 'gallery' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <h1>North King</h1>
                </div>

                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={link.href} 
                                    className={activeSection === link.id ? 'active' : ''}
                                    onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="cart-icon-btn" onClick={toggleCart}>
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                    <a href="#reservation" className="btn header-btn">Book a Table</a>
                    
                    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
