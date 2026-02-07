import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <SignatureDishes />
        <Reservation />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
