import React from 'react';
import { FaUtensils, FaSmile, FaLeaf, FaFire } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <img src="/images/about.jpg" alt="Restaurant Interior" className="about-img-main" />
                        <div className="about-img-badge">
                            <span>Since</span>
                            <strong>2020</strong>
                        </div>
                    </div>
                    <div className="about-text">
                        <span className="section-subtitle">About Us</span>
                        <h2 className="section-title-left">A Taste of Excellence in Lalmonirhat</h2>
                        <p>
                            Located on the Lalmonirhat - Patgram Highway, North King Restaurant is a premier family restaurant dedicated to serving authentic and delicious cuisine. We pride ourselves on our warm hospitality and a menu that celebrates local flavors with a modern twist.
                        </p>
                        <p>
                            Whether you are looking for a quick bite or a lavish family dinner, our chefs prepare every dish with the freshest ingredients and utmost care.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon"><FaUtensils /></div>
                                <div>
                                    <h4>Quality Food</h4>
                                    <p>Fresh ingredients daily</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon"><FaSmile /></div>
                                <div>
                                    <h4>Friendly Service</h4>
                                    <p>Warm & welcoming staff</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon"><FaLeaf /></div>
                                <div>
                                    <h4>Fresh & Healthy</h4>
                                    <p>Nutritious options</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon"><FaFire /></div>
                                <div>
                                    <h4>Hot & Spicy</h4>
                                    <p>Authentic flavors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
