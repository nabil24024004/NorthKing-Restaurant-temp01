import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <span className="hero-badge">Best in Town</span>
                <h2 className="hero-subtitle">Welcome to</h2>
                <h1 className="hero-title">North King</h1>
                <p className="hero-text">Experience the authentic taste of Lalmonirhat in a premium setting. Fine dining, BBQ, and more.</p>
                <div className="hero-buttons">
                    <a href="#menu" className="btn hero-btn">View Menu</a>
                    <a href="#contact" className="btn btn-outline hero-btn">Book a Table</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
