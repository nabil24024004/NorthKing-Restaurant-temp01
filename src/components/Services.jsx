import React from 'react';
import { FaShippingFast, FaShoppingBag, FaUtensils, FaWifi } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <span className="section-subtitle">Our Services</span>
                <h2 className="section-title">How We Serve You</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon"><FaShippingFast /></div>
                        <h3>Delivery</h3>
                        <p>Fast and reliable delivery to your doorstep.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><FaShoppingBag /></div>
                        <h3>Takeaway</h3>
                        <p>Order ahead and pick up your food hot & fresh.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><FaUtensils /></div>
                        <h3>Dine-in</h3>
                        <p>Enjoy a premium dining experience with us.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><FaWifi /></div>
                        <h3>Free Wifi</h3>
                        <p>Stay connected while you enjoy your meal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
