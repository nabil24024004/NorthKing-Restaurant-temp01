import React from 'react';
import './Gallery.css';

const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/hero.jpg',
    '/images/about.jpg'
];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <span className="section-subtitle">Photos</span>
                <h2 className="section-title">A Glimpse of North King</h2>
                <div className="gallery-grid">
                    {images.slice(0, 5).map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
