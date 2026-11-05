import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div>
      {currentView === 'landing' ? (
        <div style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://cdn.pixabay.com/photo/2016/11/29/05/07/bread-1867459_1280.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Welcome To Paradise Nursery</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
            Where Green Meets Serenity. Explore our collection of premium houseplants to refresh your space.
          </p>
          <button 
            onClick={() => setCurrentView('products')} 
            style={{
              backgroundColor: '#2e7d32',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.2rem',
              borderRadius: '30px',
              cursor: 'pointer'
            }}>
            Get Started
          </button>
          <div style={{ marginTop: '40px', backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '10px', color: '#333', width: '100%', maxWidth: '700px' }}>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div>
          <Navbar onNavigate={setCurrentView} currentView={currentView} />
          {currentView === 'products' && <ProductList />}
          {currentView === 'cart' && <CartItem onContinueShopping={() => setCurrentView('products')} />}
        </div>
      )}
    </div>
  );
}

export default App;