import React, { useState } from "react";
import "../styles/OrderForm.css"; // Import custom styles

const OrderForm = () => {
  const [formData, setFormData] = useState({
    paperType: "Essay (Any)",
    academicLevel: "College",
    subject: "",
    title: "",
    instructions: "",
    file: null,
    paperFormat: "APA",
    pages: 1,
    currency: "USD",
    discountCode: "",
    sources: 0,
    slides: 0,
    charts: 0,
    deadline: "12 Hours",
    category: "Standard",
    additionalServices: [],
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // Handle Additional Services Checkbox
  const handleServiceChange = (service) => {
    const updatedServices = formData.additionalServices.includes(service)
      ? formData.additionalServices.filter((s) => s !== service)
      : [...formData.additionalServices, service];

    setFormData({ ...formData, additionalServices: updatedServices });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your order has been placed!");
  };

  return (
    <div className="order-form-container">
      <h2 className="text-center">Place an Order</h2>
      <form onSubmit={handleSubmit}>

        {/* Type of Paper */}
        <label>Type of Paper:</label>
        <select name="paperType" value={formData.paperType} onChange={handleChange}>
          <option>Essay (Any)</option>
          <option>Research Paper</option>
          <option>Case Study</option>
          <option>Thesis</option>
        </select>

        {/* Academic Level */}
        <label>Academic Level:</label>
        <div className="academic-levels">
          {["High School", "PhD", "College", "Masters"].map((level) => (
            <button
              key={level}
              type="button"
              className={formData.academicLevel === level ? "active" : ""}
              onClick={() => setFormData({ ...formData, academicLevel: level })}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Subject & Title */}
        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />

        {/* Instructions */}
        <label>Instructions:</label>
        <textarea name="instructions" value={formData.instructions} onChange={handleChange}></textarea>

        {/* File Upload */}
        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} />

        {/* Paper Format */}
        <label>Paper Format:</label>
        <div className="paper-formats">
          {["MLA", "APA", "Harvard", "Chicago", "Other"].map((format) => (
            <button
              key={format}
              type="button"
              className={formData.paperFormat === format ? "active" : ""}
              onClick={() => setFormData({ ...formData, paperFormat: format })}
            >
              {format}
            </button>
          ))}
        </div>

        {/* Number of Pages */}
        <label>Number of Pages:</label>
        <div className="counter">
          <button type="button" onClick={() => setFormData({ ...formData, pages: Math.max(1, formData.pages - 1) })}>-</button>
          <span>{formData.pages}</span>
          <button type="button" onClick={() => setFormData({ ...formData, pages: formData.pages + 1 })}>+</button>
        </div>

        {/* Currency Selection */}
        <label>Currency:</label>
        <div className="currency-options">
          {["USD", "GBP", "EUR", "AUD"].map((currency) => (
            <button
              key={currency}
              type="button"
              className={formData.currency === currency ? "active" : ""}
              onClick={() => setFormData({ ...formData, currency })}
            >
              {currency}
            </button>
          ))}
        </div>

        {/* Discount Code */}
        <label>Discount Code:</label>
        <input type="text" name="discountCode" value={formData.discountCode} onChange={handleChange} placeholder="Enter code" />
        <button type="button" className="apply-btn">Apply</button>

        {/* Number of Sources, Slides, Charts */}
        <label>Number of Sources:</label>
        <input type="number" name="sources" value={formData.sources} onChange={handleChange} min="0" />

        <label>PowerPoint Slides:</label>
        <input type="number" name="slides" value={formData.slides} onChange={handleChange} min="0" />

        <label>Charts:</label>
        <input type="number" name="charts" value={formData.charts} onChange={handleChange} min="0" />

        {/* Deadline */}
        <label>Deadline:</label>
        <div className="deadline-options">
          {["12 Hours", "1 Day", "2 Days", "3 Days", "5 Days"].map((time) => (
            <button
              key={time}
              type="button"
              className={formData.deadline === time ? "active" : ""}
              onClick={() => setFormData({ ...formData, deadline: time })}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Category */}
        <label>Category:</label>
        <div className="category-options">
          {["Standard", "Premium", "Platinum"].map((category) => (
            <button
              key={category}
              type="button"
              className={formData.category === category ? "active" : ""}
              onClick={() => setFormData({ ...formData, category })}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Additional Services */}
        <label>Additional Services:</label>
        <div className="additional-services">
          <label>
            <input type="checkbox" checked={formData.additionalServices.includes("VIP Support")} onChange={() => handleServiceChange("VIP Support")} />
            VIP Support ($5)
          </label>
          <label>
            <input type="checkbox" checked={formData.additionalServices.includes("Draft/Outline")} onChange={() => handleServiceChange("Draft/Outline")} />
            Draft/Outline ($15)
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
