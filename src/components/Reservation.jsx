import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        request: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                phone: '',
                date: '',
                time: '',
                guests: '2',
                request: ''
            });
        }, 2000);
    };

    // Animation variants for staggered reveal
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.165, 0.84, 0.44, 1]
            }
        }
    };

    return (
        <section id="reservation" className="reservation">
            <div className="container reservation-container">
                <motion.div
                    className="reservation-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span variants={itemVariants} className="section-subtitle">
                        Reservation
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">
                        Secure your table <br /> at North King
                    </motion.h2>
                    <motion.p variants={itemVariants} className="section-desc">
                        Each evening at North King is a carefully curated journey. 
                        Whether it is a quiet anniversary or a grand celebration, 
                        we ensure every detail is etched in gold.
                    </motion.p>

                    <motion.div variants={itemVariants} className="reservation-info">
                        <div className="info-item">
                            <div className="info-icon">
                                <FiClock />
                            </div>
                            <div className="info-text">
                                <h4>Opening Hours</h4>
                                <p>Daily: 10:00 AM — 11:00 PM</p>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <div className="info-icon">
                                <FiPhone />
                            </div>
                            <div className="info-text">
                                <h4>Contact Us</h4>
                                <p>+880 1700-000000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FiMail />
                            </div>
                            <div className="info-text">
                                <h4>Inquiries</h4>
                                <p>hospitality@northking.com</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="reservation-form-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                    viewport={{ once: true }}
                >
                    {status === 'success' ? (
                        <div className="success-message">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Reservation Placed
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                A confirmation has been sent. We look forward to hosting you in our sanctuary of taste.
                            </motion.p>
                            <motion.button 
                                onClick={() => setStatus('')} 
                                className="btn-text"
                                whileHover={{ scale: 1.05 }}
                            >
                                Make Another Reservation
                            </motion.button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="reservation-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <select name="guests" value={formData.guests} onChange={handleChange}>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                    <option value="5">5 People</option>
                                    <option value="6">6+ People</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="request"
                                    placeholder="Special Requests or Occasions"
                                    value={formData.request}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-block" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Confirming...' : 'Request Table'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Reservation;
