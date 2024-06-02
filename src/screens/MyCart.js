import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import NavTry from '../components/NavTry';
import CartItem from '../components/CartItem';
import './MyCart.css';
import Footer from '../components/Footer';

const MyCart = () => {
  const { cart, getTotalPrice } = useCart(); // Get cart from context
  const [coupon, setCoupon] = useState('');
  const [address, setAddress] = useState('');
  const [cutlery, setCutlery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const totalPrice = getTotalPrice();
  const GST = totalPrice * 0.18; // Assuming 18% GST
  const deliveryCharges = 50; // Flat delivery charge, modify as per your logic
  const navigate = useNavigate();

  const handleCouponChange = (e) => setCoupon(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCutleryChange = () => setCutlery(!cutlery);
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

  const handlePlaceOrder = () => {
    // Add logic to process payment
    alert('Redirecting to payment gateway...');
    navigate('/payment'); // Assuming you have a route for payment processing
  };

  const totalAmount = totalPrice + GST + deliveryCharges;

  return (
    <>
    <div>
      <NavTry />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="list-group">
              {cart.length === 0 ? (
                <p className="list-group-item">Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <CartItem key={index} item={item} /> // Use the CartItem component
                ))
              )}
            </div>
          </div>
          {cart.length > 0 && (
            <div className="col-md-4">
              <div className="card bill-summary">
                <div className="card-body">
                  <h5 className="card-title">Bill Summary</h5>
                  <hr />
                  {cart.map((item, index) => (
                    <div className="d-flex justify-content-between" key={index}>
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{(item.size === 'Half' ? item.options[0].half : item.options[0].full) * item.quantity}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>GST (18%):</span>
                    <span>₹{GST.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Charges:</span>
                    <span>₹{deliveryCharges}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Total Amount:</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter coupon code" 
                      value={coupon} 
                      onChange={handleCouponChange} 
                    />
                    <button className="btn btn-primary">Apply</button>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                      Add More Items
                    </button>
                  </div>
                  <div className="form-check mt-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="cutleryCheck" 
                      checked={cutlery} 
                      onChange={handleCutleryChange} 
                    />
                    <label className="form-check-label" htmlFor="cutleryCheck">
                      Do not add cutlery
                    </label>
                  </div>
                  <div className="form-group mt-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Delivery Address" 
                      value={address} 
                      onChange={handleAddressChange} 
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select 
                      className="form-control" 
                      id="paymentMethod" 
                      value={paymentMethod} 
                      onChange={handlePaymentMethodChange}
                    >
                      <option value="" disabled>Select a payment method</option>
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                      <option value="cod">Cash on Delivery</option>
                    </select>
                  </div>
                  <button 
                    className="btn btn-primary btn-block mt-2" 
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
     
    </div>
    <div><Footer/></div>
     </>
  );
};

export default MyCart;
