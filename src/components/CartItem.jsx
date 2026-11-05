import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericCost = parseFloat(item.cost.replace('$', ''));
      return total + numericCost * item.quantity;
    }, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future checkout execution.');
  };

  return (
    <div style={{ padding: '30px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '30px' }}>Total Shopping Cart Amount: ${calculateTotalAmount()}</h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          <p style={{ fontSize: '1.2rem' }}>Your cart is empty.</p>
          <button onClick={onContinueShopping} style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => {
            const itemSubtotal = (parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2);
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} />
                <div style={{ flex: '1', marginLeft: '20px' }}>
                  <h3 style={{ margin: '0 0 5px', fontSize: '1.1rem' }}>{item.name}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>Price: {item.cost}</p>
                  <p style={{ margin: '5px 0 0', fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${itemSubtotal}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => handleDecrement(item)} style={{ padding: '5px 12px', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                  <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)} style={{ padding: '5px 12px', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
                </div>
                <button onClick={() => handleRemove(item)} style={{ backgroundColor: '#d32f2f', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '4px', marginLeft: '25px', cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            );
          })}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <button onClick={onContinueShopping} style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Continue Shopping
            </button>
            <button onClick={handleCheckoutShopping} style={{ backgroundColor: '#ff9800', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;