import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuickQuote from "../components/QuickQuote";
import RatingsCarousel from "../components/RatingsCarousel";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">MNL Writers</Link>
          <div className="d-flex align-items-center">
            <Link to="/login" className="btn btn-primary me-3">Login</Link>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </div>
        </div>
      </nav>

      <div className="home-container">
        <div className="overlay"></div>

        <motion.div
          className="content text-white text-start position-relative d-flex flex-column align-items-start justify-content-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="title" whileHover={{ scale: 1.1 }}>
            MNL Writers
          </motion.h1>
          <motion.p className="subtitle" whileHover={{ scale: 1.05 }}>
            ACADEMIC ASSIGNMENT WRITERS
          </motion.p>
          <motion.h2 className="welcome-text" whileHover={{ x: 10 }}>
            WELCOME TO MNL WRITERS
          </motion.h2>
          <motion.p className="description" whileHover={{ y: -5 }}>
            Best Online Academic Assignment Expertise
          </motion.p>
          <motion.p className="quote" whileHover={{ opacity: 0.8 }}>
            "Making every challenge a breeze for you!"
          </motion.p>

          <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
            <Link to="/order" className="btn btn-success btn-lg mt-4 fw-bold px-4 shadow-lg">
              Create Your Order Now
            </Link>
          </motion.div>
        </motion.div>

        <div className="quick-quote-container">
          <QuickQuote />
        </div>
      </div>

      <div className="ratings-section">
        <RatingsCarousel />
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} MNL Writers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
