// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Ensure your styles are applied

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/Logo.png" className="logo" alt="Co Tune Logo" />
      </div>
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link> {/* Link to Home */}
          </li>
          <li>
            <Link to="/login">Login</Link> {/* Link to Login */}
          </li>
          {/* Add more links here if needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
