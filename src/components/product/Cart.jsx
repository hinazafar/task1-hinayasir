import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10.0,
      quantity: 1,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.0,
      quantity: 1,
      image: "path/to/image2.jpg",
    },
    // Add more items as needed
  ]);

  const handleUpdate = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="cartDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="cart-icon-container">
          <BsCart3 size={23} />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="cartDropdown"
        style={{ minWidth: "300px" }}
      >
        <div className="p-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
