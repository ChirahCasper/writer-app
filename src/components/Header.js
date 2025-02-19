import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the CSS file

const Header = () => {
  // State for dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("navbar-dark", !isDarkMode);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isDarkMode ? 'navbar-dark' : ''}`}>
        <div className="container">
          {/* Logo and Brand */}
          <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
            <img src="/assets/logo.PNG" alt="Logo" className="logo me-2" />
            MNL Writers
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
            </ul>

            {/* Login/Signup Button */}
            <div className="ms-3">
              <Link to="/login" className="btn btn-primary">
                LOGIN/SIGNUP
              </Link>
            </div>
          </div>
          
          {/* Dark Mode Switcher */}
          <div className="switch-container">
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
          </div>
        </div>
      </nav>

     

      
    </>
  );
};

export default Header;
