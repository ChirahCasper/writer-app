// Services.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Services.css'; // Custom CSS for styling
import Footer from "../components/Footer"; // Import your footer component

const Services = () => {
  // List of courses categorized
  const courses = [
    {
      category: "Humanities",
      items: [
        "History & Archaeology",
        "Law",
        "Social Sciences",
        "Philosophy",
        "Literature",
        "Cultural Studies",
      ],
    },
    {
      category: "Business",
      items: [
        "Human Resources",
        "Marketing",
        "Management",
        "Business Administration",
        "Finance",
        "Entrepreneurship",
      ],
    },
    {
      category: "Creative Arts",
      items: [
        "Graphic Design",
        "Music Theory",
        "UI/UX Design",
        "Photography",
        "Creative Writing",
        "Film Studies",
      ],
    },
    {
      category: "Technology",
      items: [
        "Coding",
        "Computer Science",
        "Software Engineering",
        "Information Technology",
        "Data Science",
        "Artificial Intelligence",
      ],
    },
    {
      category: "Professional Skills",
      items: [
        "Accounting",
        "Excel",
        "Web Management",
        "Project Management",
        "Public Speaking",
        "Time Management",
      ],
    },
    {
      category: "Healthcare",
      items: [
        "Healthcare Systems",
        "Nursing",
        "Medical Research",
        "Public Health",
        "Pharmacy",
        "Mental Health",
      ],
    },
  ];

  return (
    <div className="services-container">
      {/* Community Section */}
      <section className="community-section">
        <div className="community-card">
          <h2>🌟 Join Our Community</h2>
          <p>
            Be a part of our journey! Connect with us and stay updated on the latest articles, tips, and resources from MLN Writers.
          </p>
          <button className="btn btn-primary">Join Now</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>📞 Contact Us</h2>
          <p>
            Whether you have non-technical or technical inquiries, we're here to help. Reach out to us for any questions or support.
          </p>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="courses-section">
        <h2>📚 Browse Our Online Courses</h2>
        <div className="course-grid">
          {courses.map((category, index) => (
            <div key={index} className="course-category-card">
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Include your footer component */}
    </div>
  );
};

export default Services;