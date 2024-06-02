import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.size === 'Half' ? item.options[0].half : item.options[0].full;
      return total + price * item.quantity;
    }, 0);
  };

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toISOString(),
      status: 'In Progress',
      ...orderDetails
    };
    setOrders([...orders, newOrder]);
    setCart([]); // Clear cart after placing order
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart , getTotalPrice ,orders, placeOrder, updateOrderStatus }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
