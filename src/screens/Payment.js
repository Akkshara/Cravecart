import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import NavTry from '../components/NavTry';
import './Payment.css';

const Payment = () => {
  const { cart, getTotalPrice, placeOrder } = useCart();
  const totalPrice = getTotalPrice();
  const GST = totalPrice * 0.18;
  const deliveryCharges = 50;
  const totalAmount = totalPrice + GST + deliveryCharges;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handlePay = () => {
    if (!paymentMethod || !address || !phone || !city || !country) {
      alert("Please fill in all details.");
      return;
    }

    const orderDetails = {
      items: cart,
      totalAmount,
      paymentMethod,
      address,
      phone,
      city,
      country
    };
    placeOrder(orderDetails);
    alert('Payment Successful!');
    navigate('/myorders'); // Redirect to orders page after payment
  };

  return (
    <div>
      <NavTry />
      <div className="container mt-4 payment-page">
        <div className="row">
          <div className="col-md-6">
            <div className="card payment-details">
              <div className="card-body">
                <h5 className="card-title">Enter Your Payment Details</h5>
                <div className="form-group mt-3">
                  <label htmlFor="paymentMethod">Payment Method:</label>
                  <select 
                    className="form-control" 
                    id="paymentMethod" 
                    value={paymentMethod} 
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="" disabled>Select a payment method</option>
                    <option value="gpay">GPay</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="address">Address:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="Delivery Address" 
                    value={address} 
                    onChange={handleAddressChange} 
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="phone">Phone Number:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="phone" 
                    placeholder="Phone Number" 
                    value={phone} 
                    onChange={handlePhoneChange} 
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="city">City:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="city" 
                    placeholder="City" 
                    value={city} 
                    onChange={handleCityChange} 
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="country">Country:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="country" 
                    placeholder="Country" 
                    value={country} 
                    onChange={handleCountryChange} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
                <button 
                  className="btn btn-primary btn-block mt-2" 
                  onClick={handlePay}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
