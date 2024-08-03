import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NavbarCartTest = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="logo.png" alt="Logo" style={{ width: "40px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Girls
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Boys
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ladies
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="cartDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="cart.png" alt="Cart" style={{ width: "24px" }} />{" "}
              {totalItems} items (${totalPrice})
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="cartDropdown"
              style={{ minWidth: "300px" }}
            >
              <div className="p-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>{item.name}</div>
                    <div>${item.price}</div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {totalItems === 0 && (
                  <div className="text-center">No items in cart</div>
                )}
                <div className="dropdown-divider"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>Total:</strong>
                  <strong>${totalPrice}</strong>
                </div>
                <button className="btn btn-primary btn-block mt-2">Buy</button>
              </div>
            </div>
          </li>
          {isLoggedIn ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="profile.png"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "24px" }}
                />{" "}
                User Name
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarCartTest;
