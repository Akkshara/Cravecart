import React, { useState } from "react";
import { useCart } from "../CartContext";

const Card = ({ data }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Half');

  if (!data) return <div>Loading...</div>;

  const handleAddToCart = () => {
    const itemWithId = {
      ...data,
      id: data.id || new Date().getTime(),
      quantity: quantity,
      size: size
    };
    addToCart(itemWithId);
    setAdded(true);
  };

  return (
    <div className="col mb-4">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img src={data.img} className="card-img-top" alt={data.name} style={{ maxHeight: "150px" }} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <select 
                className="form-select w-40 m-1" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                disabled={added}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select 
                className="form-select w-40 m-1" 
                value={size} 
                onChange={(e) => setSize(e.target.value)}
                disabled={added}
              >
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
            </div>
            <div className="mt-1">
              Total Price:
              {size === 'Half' ? `₹${data.options[0].half * quantity}` : `₹${data.options[0].full * quantity}`}
            </div>
            <hr />
            <button 
              className="btn btn-success justify-center ms-1"
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
