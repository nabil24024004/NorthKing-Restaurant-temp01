import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { IoMdClose, IoMdAdd, IoMdRemove, IoMdTrash } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import './CartDrawer.css';

const CartDrawer = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

    const handleCheckout = () => {
        const message = cart.map(item =>
            `${item.name} x${item.quantity} - ${item.price}`
        ).join('%0a');
        const total = `Total: Tk ${cartTotal}`;
        const url = `https://wa.me/8801700000000?text=I%20would%20like%20to%20order:%0a${message}%0a%0a${total}`;
        window.open(url, '_blank');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="cart-overlay"
                        onClick={toggleCart}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="cart-drawer"
                    >
                        <div className="cart-header">
                            <h3>Your Order</h3>
                            <button onClick={toggleCart} className="close-btn">
                                <IoMdClose size={24} />
                            </button>
                        </div>

                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <div className="empty-cart">
                                    <p>Your cart is empty</p>
                                    <button onClick={toggleCart} className="btn-text">Browse Menu</button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p>{item.price}</p>
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, -1)}><IoMdRemove /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}><IoMdAdd /></button>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                            <IoMdTrash />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="cart-footer">
                                <div className="total-row">
                                    <span>Total:</span>
                                    <span>Tk {cartTotal}</span>
                                </div>
                                <button onClick={handleCheckout} className="btn checkout-btn">
                                    <FaWhatsapp className="icon" /> Checkout on WhatsApp
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
