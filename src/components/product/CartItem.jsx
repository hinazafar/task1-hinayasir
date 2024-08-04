import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item, onUpdate, onRemove }) => {
  const [quantity, setQuantity] = useState(item.orderedQuantity);

  useEffect(() => {
    if (quantity !== item.orderedQuantity) {
      setQuantity(item.orderedQuantity);
    }
  }, [item.orderedQuantity]);

  const handleUpdate = () => {
    onUpdate(item.id, quantity);
  };
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= item.totalQuantity) {
      setQuantity(value);
    } else if (value > item.totalQuantity) {
      setQuantity(item.totalQuantity);
    } else if (value < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className="cart-item d-flex justify-content-between align-items-center mb-3">
      <img
        src={`http://localhost:3000/uploads/${item.picture}`}
        alt={item.name}
        className="cart-item-image"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">
          Rs. {quantity}x{item.price}
        </div>
      </div>
      <div className="cart-item-quantity d-flex align-items-center">
        <input
          type="number"
          className="form-control form-control-sm"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max={item.totalQuantity}
          style={{ width: "60px" }}
        />
        <button
          className="btn btn-outline-primary btn-sm ml-2"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
      <RiDeleteBin6Line
        style={{
          width: "20px",
          height: "20px",
          color: "red",
          marginLeft: "10px",
        }}
        onClick={() => onRemove(item.id)}
      />
    </div>
  );
};

export default CartItem;
