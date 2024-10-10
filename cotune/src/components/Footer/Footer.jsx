import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="#about-us">About Us</a> {/* Updated for consistency */}
        </li>
        <li>
          <a href="#Help">Help</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>© 2024 Co Tune. All rights reserved.</p>{" "}
      {/* Moved outside of the <ul> for better semantics */}
    </footer>
  );
};

export default Footer;
