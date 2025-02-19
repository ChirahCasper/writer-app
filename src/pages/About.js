// About.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'; // Custom CSS for additional styling
import Footer from "../components/Footer"; // Import your footer component

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About MLN Writers</h1>
        <p className="lead">Empowering writers and researchers with high-quality insights, apps, and resources.</p>
      </header>

      <section className="about-story">
        <div className="about-card">
          <h2>📖 Our Story</h2>
          <p>
            MLN Writers was founded with a vision to inspire and educate individuals who are eager to master the art of academic writing, research efficiency, and effective communication. Our team comprises seasoned writers, editors, and content creators who believe in sharing their knowledge to uplift the writing community.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-card">
          <h3>🔍 Integrity</h3>
          <p>We adhere to the highest standards of integrity and honesty, ensuring that all content shared is accurate.</p>
        </div>
        <div className="about-card">
          <h3>🏆 Excellence</h3>
          <p>We strive for excellence in every article and resource, aiming to equip writers and researchers with the best tools to succeed.</p>
        </div>
        <div className="about-card">
          <h3>🤝 Community</h3>
          <p>At MLN Writers, we foster a supportive community where writers can grow, learn, and inspire each other.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            Our mission is to provide high-quality content and resources that simplify the writing process, enhance research skills, and support individuals in achieving their academic and professional goals.
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2>👥 Our Team</h2>
        <div className="team-members">
          <div className="about-card">
            <h4>Jane Doe</h4>
            <p className="role">Chief Editor</p>
            <p>Jane brings over a decade of experience in academic writing and editing.</p>
          </div>
          <div className="about-card">
            <h4>John Smith</h4>
            <p className="role">Content Strategist</p>
            <p>John is the mastermind behind our content strategy, always looking to inspire our readers.</p>
          </div>
          <div className="about-card">
            <h4>Sarah Lee</h4>
            <p className="role">Community Manager</p>
            <p>Sarah fosters connections with our community, bringing people together and amplifying diverse voices.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;