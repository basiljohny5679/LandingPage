import React, { useState, useEffect } from 'react';
import './CoreValues.css';

interface ValueContent {
  title: string;
  description: string;
}

const CoreValues: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [fadeState, setFadeState] = useState("fade-enter-active");
  
  const values = [
    {
      icon: "💬",
      iconClass: "icon-orange",
      title: "Speak with Confidence",
      contents: [
        { title: "Speak with Confidence", description: "Practical speaking skills" },
        { title: "Speak with Confidence", description: "We help learners express themselves clearly and confidently in English. Through real conversations, encouragement, and practical learning, you gain the courage to speak with confidence & clarity." },
       
      ]
    },
    {
      icon: "❤️",
      iconClass: "icon-blue",
      title: "Learn with Trust",
      contents: [
        { title: "Learn with Trust", description: "Honest and safe guidance" },
        { title: "Learn with Trust", description: "At ENITO, learning happens in a safe and respectful space. With honest guidance and support, every learner feels comfortable asking questions, making mistakes, and improving step by step." },
        
      ]
    },
    {
      icon: "👥",
      iconClass: "icon-teal",
      title: "Lets Grow Together",
      contents: [
        { title: "Lets Grow Together", description: "Supportive community" },
        { title: "Lets  Grow Together", description: "We are more than a classroom—we are a supportive learning community. Here, learners practice together, encourage one another, and grow in confidence as a team." },
      
      ]
    }
  ];

  useEffect(() => {
  const interval = setInterval(() => {
    // start fade OUT
    setFadeState("fade-exit-active");

    setTimeout(() => {
      // change content
      setCurrentIndex((prev) => (prev + 1) % 2);

      // fade IN
      setFadeState("fade-enter-active");
    }, 400); // match CSS transition
}, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="core-values-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title">Our Core Values</h2>
        
        <div className="values-grid">
          {values.map((value, idx) => (
            <div key={idx} className="value-card">
              <div className={`icon-box ${value.iconClass}`}>{value.icon}</div>
              <h3 className={`value-title ${fadeState}`}>
  {value.contents[currentIndex].title}
</h3>

<p className={`value-desc ${fadeState}`}>
  {value.contents[currentIndex].description}
</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="wave2-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fillss"></path>
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;