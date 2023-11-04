// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/path-to-your-logo.png" alt="School Management System" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/price">Pricing</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="register-button">
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
