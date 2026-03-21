import React from 'react';
import './BetterWay.css';

const BetterWay: React.FC = () => {
  return (
    <section className="better-way-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="two-col">
          <div className="content-col">
            <h2 className="section-heading">A Better Way to Learn English</h2>
            <p className="section-text">
              ENITO helps you speak English with ease in everyday situations. 
              Practical lessons, supportive guidance, and real confidence-building.
            </p>
          </div>
          <div className="image-col">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Professional learning"
              className="section-image"
            />
          </div>
        </div>
      </div>
      <div className="wave1-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fills"></path>
        </svg>
      </div>
    </section>
  );
};

export default BetterWay;