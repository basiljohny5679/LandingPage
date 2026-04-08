import React from 'react';
import './WhyChoose.css';
import Photo from '../../assets/WhyChoose.jpeg';
const WhyChoose: React.FC = () => {
  const features = [
    { text: "Personalized Attention", color: "blue" },
    { text: " Easy for Beginners", color: "orange" },
    { text: "Confidence-Focused Learning", color: "blue" },
    { text: "Real-Life Conversation Practice", color: "orange" },
    { text: "Supportive Learning Environment", color: "blue" },
    { text: "Flexible Scheduling", color: "orange" }
  ];


  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="two-col-container">
          <div className="left-content">
            <h2 className="section-heading">Why Choose ENITO?</h2>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className={`check ${feature.color}`}>✔</span>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="right-image">
            <div className="image-card">
              <img 
                src={Photo}
                alt="ENITO learning"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wave3-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fils"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default WhyChoose;