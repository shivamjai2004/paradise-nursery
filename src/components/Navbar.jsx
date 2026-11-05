import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ onNavigate, currentView }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2e7d32',
      padding: '15px 30px',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold' }} onClick={() => onNavigate('landing')}>
        🌿 Paradise Nursery
      </div>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <button 
          onClick={() => onNavigate('products')} 
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.1rem', cursor: 'pointer', fontWeight: currentView === 'products' ? 'bold' : 'normal' }}>
          Plants
        </button>
        <button 
          onClick={() => onNavigate('cart')} 
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          🛒 Cart <span style={{
            backgroundColor: '#ff9800',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 8px',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>{totalQuantity}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;