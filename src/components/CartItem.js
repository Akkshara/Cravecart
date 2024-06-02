import React from 'react';
import { useCart } from '../CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const price = item.size === 'Half' ? item.options[0].half : item.options[0].full;

  return (
    <div className="cart-item-strip d-flex justify-content-between align-items-center p-2 my-2 border">
      <div className="d-flex align-items-center">
        <img src={item.img} alt={item.name} className="img-thumbnail me-2" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <div>
          <div>{item.name}</div>
          <div className="text-muted" style={{ fontSize: '0.9em' }}>{item.size} - ₹{price}</div>
          <div className="text-muted" style={{ fontSize: '0.9em' }}>Qty: {item.quantity}</div>
        </div>
      </div>
      <div>
        <button className="btn btn-danger btn-sm" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
