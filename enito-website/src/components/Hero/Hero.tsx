import React from 'react';
import './Hero.css';
import Logo from '../../assets/Logo1.png';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="logo">
            <img 
              src={Logo} 
              alt="ENITO Logo" 
              className="logo-img"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/40x40?text=ENITO';
              }}
            />
            <div className="logo-text">ENITO</div>
          </div>
          
          <h1 className="hero-title">
            Where English<br />Meets Confidence
          </h1>
          <p className="hero-subtitle">
            Learn to speak English fluently and confidently
          </p>
          
          <div className="button-group">
         <button 
  className="btn btn-outline"
  onClick={() => {
    const section = document.getElementById('courses');
    section?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  View Courses
</button>
          </div>
        </div>
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;