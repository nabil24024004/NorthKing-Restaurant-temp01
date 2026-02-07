import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import './Location.css';

const Location = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.165, 0.84, 0.44, 1]
            }
        }
    };

    return (
        <section id="contact" className="location">
            <div className="container">
                <motion.div 
                    className="location-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="section-subtitle" style={{ color: 'var(--color-primary)', display: 'block', letterSpacing: '0.2em', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                        FIND US
                    </span>
                    <h2 className="section-title" style={{ fontSize: '3.5rem' }}>
                        Visit Our <em>Sanctuary</em>
                    </h2>
                </motion.div>

                <div className="location-content">
                    <motion.div 
                        className="location-info"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants} className="info-item">
                            <div className="info-icon">
                                <FiMapPin />
                            </div>
                            <div className="info-text">
                                <h4>Our Address</h4>
                                <p>Lalmonirhat - Phulbari Rd,<br />Lalmonirhat, Bangladesh</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="info-item">
                            <div className="info-icon">
                                <FiPhone />
                            </div>
                            <div className="info-text">
                                <h4>Direct Line</h4>
                                <p>+880 1707-249363</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="info-item">
                            <div className="info-icon">
                                <FiClock />
                            </div>
                            <div className="info-text">
                                <h4>The Table is Set</h4>
                                <p>Daily: 11:00 AM — 10:00 PM</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="map-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
