import React, { useState } from "react";

const CartItem = ({ item, onUpdate, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleUpdate = () => {
    onUpdate(item.id, quantity);
  };

  return (
    <div className="cart-item d-flex justify-content-between align-items-center mb-3">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      <div className="cart-item-details">
        <div>{item.name}</div>
        <div>${item.price.toFixed(2)}</div>
      </div>
      <div className="cart-item-quantity d-flex align-items-center">
        <input
          type="number"
          className="form-control form-control-sm"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          style={{ width: "60px" }}
        />
        <button
          className="btn btn-outline-primary btn-sm ml-2"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
