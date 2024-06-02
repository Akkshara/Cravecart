import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order }) => {
  const orderDate = new Date(order.date);

  return (
    <div className="order-card">
      <div className="order-card-header">
        <h5 className="order-id">Order #{order.id}</h5>
        <button className="track-order-btn">Track Order</button>
      </div>
      <div className="order-items">
        {order.items.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">₹{(item.size === 'Half' ? item.options[0].half : item.options[0].full) * item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <div className="order-summary-left">
          <p>Date: {orderDate.toLocaleDateString()}</p>
          <p>Time: {orderDate.toLocaleTimeString()}</p>
          <p>Status: {order.status}</p>
        </div>
        <div className="order-summary-right">
          <strong>Total Amount: ₹{order.totalAmount.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
