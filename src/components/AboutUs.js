import React from 'react';
import './AboutUs.css'; // ✅ LINKING CSS FILE

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Us</h1>

        <section className="about-content">
          <p>
            Welcome to <strong>AI-Enhanced Travel Planner</strong>, your ultimate travel companion in discovering the beauty of India.
            We are a team of passionate travel enthusiasts and tech experts dedicated to helping you explore India's diverse culture, landscapes, and hidden gems.
            Our mission is to provide personalized travel recommendations that make your journey smoother and more memorable.
          </p>

          <p>
            At <strong>AI-Enhanced Travel Planner</strong>, we leverage cutting-edge artificial intelligence to craft personalized travel plans based on your preferences.
            Whether you're looking for serene beaches, historical landmarks, or bustling cities, our platform curates the best recommendations tailored just for you.
            We provide comprehensive details including tourist spots, hotels, transportation options, and even booking services, to make your travel planning hassle-free.
          </p>

          <p>
            We are committed to helping travelers make the most out of their trips, ensuring they experience India in a unique, unforgettable way.
          </p>
        </section>

        <div className="contact-section">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-details">
            <p>We would love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.</p>
            <p><strong>Email:</strong> <a href="mailto:contact@ai-enhancedtravel.com">contact@ai-enhancedtravel.com</a></p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p>For inquiries or support, our team is always available to assist you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
