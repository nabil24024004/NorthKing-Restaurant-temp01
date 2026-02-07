import React from 'react';
import './SignatureDishes.css';

const dishes = [
    {
        id: 1,
        name: 'Royal Chicken Biryani',
        price: 'Tk 450',
        desc: 'Aromatic basmati rice cooked with tender chicken, saffron, and exotic spices.',
        image: '/images/biryani.png'
    },
    {
        id: 2,
        name: 'Sizzling Beef Steak',
        price: 'Tk 850',
        desc: 'Premium cut beef steak served sizzling hot with sautéed vegetables and fries.',
        image: '/images/steak.png'
    },
    {
        id: 3,
        name: 'Special Thai Soup',
        price: 'Tk 320',
        desc: 'A rich and spicy thick soup loaded with prawns, chicken, and lemongrass.',
        image: '/images/thaisoup.png'
    },
    {
        id: 4,
        name: 'Butter Garlic Naan',
        price: 'Tk 80',
        desc: 'Soft, fluffy oven-baked bread brushed with garlic butter and herbs.',
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
