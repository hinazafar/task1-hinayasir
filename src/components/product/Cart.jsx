import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateProductQuantity } from "../../store/cartSlice";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const [totalBill, setBill] = useState(0);

  const dispatch = useDispatch();
  console.log(products);

  const handleUpdate = (itemId, newQuantity) => {
    dispatch(updateProductQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemove = (itemId) => {
    dispatch(removeProduct({ id: itemId }));
  };
  const calculateTotalBill = (products) => {
    return products.reduce((total, product) => {
      return total + product.price * product.orderedQuantity;
    }, 0);
  };
  //setBill(calculateTotalBill(products));
  return (
    <>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="cartDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <div className="cart-icon-container">
          <BsCart3 size={23} />
          {products.length > 0 && (
            <span className="cart-badge">{products.length}</span>
          )}
        </div>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="cartDropdown"
        style={{
          minWidth: "300px",
          border: "2px solid #9732a8 ",
        }}
      >
        <div className="p-2 cart-container">
          {products.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <hr />
        <div className="d-flex justify-content-end px-3">
          <strong className="mx-3">Total: </strong>
          Rs.{calculateTotalBill(products)}
        </div>
      </div>
    </>
  );
};

export default Cart;
