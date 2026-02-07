import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
    {
        id: 1,
        name: 'Rahim Ahmed',
        role: 'Food Blogger',
        rating: 5,
        text: 'The Royal Chicken Biryani is absolutely divine! The best I have had in Lalmonirhat. Highly recommended for food lovers.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 2,
        name: 'Sadia Islam',
        role: 'Regular Customer',
        rating: 5,
        text: 'Great ambiance and amazing service. The Sizzling Beef Steak was cooked to perfection. A perfect place for family dinner.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 3,
        name: 'Tanvir Hasan',
        role: 'Local Guide',
        rating: 4,
        text: 'North King never disappoints. The Thai Soup is spicy and authentic. Love the new premium look of the restaurant!',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <span className="section-subtitle">Testimonials</span>
                <h2 className="section-title">What Our Customers Say</h2>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <div className="reviewer-info">
                                <img src={review.image} alt={review.name} />
                                <div>
                                    <h4>{review.name}</h4>
                                    <span>{review.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
