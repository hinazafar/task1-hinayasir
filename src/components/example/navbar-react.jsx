import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="cart.png" alt="Cart" style={{ width: "24px" }} />
            </a>
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

export default Navbar;
