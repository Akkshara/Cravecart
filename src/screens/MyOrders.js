import React, { useEffect } from 'react';
import { useCart } from '../CartContext';
import NavTry from '../components/NavTry';
import OrderCard from '../components/OrderCard';
import './MyOrders.css';
import Footer from '../components/Footer';

const MyOrders = () => {
  const { orders, updateOrderStatus } = useCart();

  useEffect(() => {
    // Simulate order status update after some time
    const timers = orders.map(order => {
      if (order.status === 'In Progress') {
        return setTimeout(() => {
          updateOrderStatus(order.id, 'Delivered');
        }, 5000); // 5 seconds for demonstration, adjust as needed
      }
      return null;
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [orders, updateOrderStatus]);

  return (
    <div>
      <NavTry />
      <div className="container mt-5 orders-page">
        <h2>My Orders</h2>
        {orders.length === 0 ? (
          <p>You have no orders.</p>
        ) : (
          orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default MyOrders;
