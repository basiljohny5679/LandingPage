import React from 'react';
import './HowItWorks.css';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: "1", title: "Join Our Community", description: "Schedule your free Webinar" },
    { number: "2", title: "Join Your Course", description: "Start learning today" },
    { number: "3", title: "Practice & Improve", description: "Regular speaking practice" },
    { number: "4", title: "Speak with Confidence", description: "Achieve your goals" }
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-item">
              <div className="step-number">{step.number}</div>
              {idx < steps.length - 1 && <div className="step-arrow"></div>}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="whatsapp-card">
  <div className="whatsapp-content">
    <h3>Join Our WhatsApp Community</h3>
    <p>Get updates, practice tips, and connect with learners daily.</p>

    <a
      href="https://wa.me/919544830199"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <span className="icon">💬</span>
      Join Now
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default HowItWorks;