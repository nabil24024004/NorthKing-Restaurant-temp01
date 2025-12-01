import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import './Location.css';

const Location = () => {
    return (
        <section id="contact" className="location">
            <div className="container">
                <h2 className="section-title">Visit Us</h2>
                <div className="location-content">
                    <div className="location-info">
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Address</h4>
                                <p>Lalmonirhat - Phulbari Rd, Lalmonirhat</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>01707-249363</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <div>
                                <h4>Opening Hours</h4>
                                <p>Daily: 11:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.686768345678!2d89.2833!3d25.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU1JzAwLjAiTiA4OcKwMTcnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        <div className="map-overlay">
                            <a href="https://maps.app.goo.gl/HZirvs1b3Hbbn9mL6" target="_blank" rel="noopener noreferrer" className="btn">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
