import React from "react";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Home.css"; // Ensure you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-info">
          <h5>Contact Us</h5>
          <p>123 Writers Street, New York, NY 10001, USA</p>
          <p>Email: support@mlnwriters.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="WHATSAPP_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="TWITTER_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="INSTAGRAM_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="LINKEDIN_LINK_HERE" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MLN Writers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
