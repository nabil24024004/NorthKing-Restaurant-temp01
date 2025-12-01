import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-logo">
                            <h2>North King</h2>
                        </div>
                        <p className="footer-desc">
                            Experience the authentic taste of Lalmonirhat. We serve quality food with warm hospitality.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="footer-contact">
                            <li><FaMapMarkerAlt /> Lalmonirhat - Phulbari Rd, Lalmonirhat</li>
                            <li><FaPhone /> 01707-249363</li>
                            <li><FaEnvelope /> info@northking.com</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Opening Hours</h3>
                        <ul className="footer-hours">
                            <li><span>Mon - Sun:</span> 11:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} North King Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
