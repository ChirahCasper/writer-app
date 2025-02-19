import React, { useState } from "react";
import "../styles/QuickQuote.css"; // Ensure you have this file

const QuickQuote = () => {
  const [academicLevel, setAcademicLevel] = useState("highschool");
  const [pages, setPages] = useState(1);
  const prices = {
    highschool: 3,
    postgraduate: 5,
    masters: 7,
    phd: 10,
  };

  const calculatePrice = () => pages * prices[academicLevel];

  return (
    <div className="quick-quote card shadow-lg p-4">
      <h4 className="fw-bold text-center">📚 QUICK QUOTE</h4>
      
      {/* Academic Level Selection */}
      <div className="mb-3">
        <label className="form-label">Academic Level</label>
        <select
          className="form-select"
          value={academicLevel}
          onChange={(e) => setAcademicLevel(e.target.value)}
        >
          <option value="highschool">High School</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="masters">Master's</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      {/* Paper Type */}
      <div className="mb-3">
        <label className="form-label">Type of Paper</label>
        <select className="form-select">
          <option>Essay (Any Type)</option>
          <option>Research Paper</option>
          <option>Dissertation</option>
        </select>
      </div>

      {/* Page Selector */}
      <div className="mb-3">
        <label className="form-label">Number of Pages</label>
        <div className="input-group">
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => setPages(Math.max(1, pages - 1))}
          >-</button>
          <input type="text" className="form-control text-center" value={pages} readOnly />
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => setPages(pages + 1)}
          >+</button>
        </div>
        <small className="text-muted">Approx. 250 words per page</small>
      </div>

      {/* Urgency */}
      <div className="mb-3">
        <label className="form-label">Urgency</label>
        <select className="form-select">
          <option>12 Hours</option>
          <option>24 Hours</option>
          <option>3 Days</option>
          <option>7 Days</option>
        </select>
      </div>

      {/* Price Display */}
      <div className="price-display text-center mt-3">
        <h3 className="fw-bold">${calculatePrice()}</h3>
      </div>

      {/* Order Button */}
      <button className="btn btn-primary w-100 fw-bold">ORDER NOW</button>
    </div>
  );
};

export default QuickQuote;
