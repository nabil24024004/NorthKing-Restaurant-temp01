import React from 'react';
import './SignatureDishes.css';

const dishes = [
    {
        id: 1,
        name: 'BBQ Pizza',
        price: 'Tk 450',
        desc: 'Grilled chicken, onions, peppers, and BBQ sauce.',
        image: '/images/gallery1.jpg' // Reusing gallery images for now
    },
    {
        id: 2,
        name: 'Special Set Menu',
        price: 'Tk 350',
        desc: 'Fried rice, chicken fry, vegetables, and salad.',
        image: '/images/gallery2.jpg'
    },
    {
        id: 3,
        name: 'Thai Soup',
        price: 'Tk 220',
        desc: 'Authentic thick soup with chicken and prawns.',
        image: '/images/gallery3.jpg'
    },
    {
        id: 4,
        name: 'Garlic Naan',
        price: 'Tk 60',
        desc: 'Soft bread topped with garlic butter.',
        image: '/images/hero.jpg'
    }
];

const SignatureDishes = () => {
    return (
        <section id="menu" className="signature-dishes">
            <div className="container">
                <span className="section-subtitle">Our Menu</span>
                <h2 className="section-title">Discover Our Signature Dishes</h2>
                <p className="section-desc">From our oven to your table, experience the most loved dishes by our customers.</p>

                <div className="dishes-grid">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="dish-card">
                            <div className="dish-img-wrapper">
                                <img src={dish.image} alt={dish.name} />
                                <span className="dish-price">{dish.price}</span>
                            </div>
                            <div className="dish-info">
                                <h3>{dish.name}</h3>
                                <p>{dish.desc}</p>
                                <button className="btn-text">Order Now &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-all-container">
                    <a href="#" className="btn btn-outline">View Full Menu</a>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
