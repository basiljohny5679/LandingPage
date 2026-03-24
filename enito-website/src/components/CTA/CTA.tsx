import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/919544830199?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20English",
      icon: <MessageCircle size={22} />,
      class: "whatsapp"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/enito",
      icon: <Instagram size={22} />,
      class: "instagram"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/enito",
      icon: <Facebook size={22} />,
      class: "facebook"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/enito",
      icon: <Twitter size={22} />,
      class: "twitter"
    }
  ];

  return (
    <section className="cta-section">
       <div className="wave8-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-filed"></path>
          </svg>
        </div>
      <div className="container">
        <h2 className="cta-title">Start Your English Journey Today</h2>
        
        <div className="contact-social-wrapper">
          <div className="company-info">
            <span className="company-name">ENITO</span>
            <span className="mobile-number">
              <Phone size={16} />
              +91 9544830199
            </span>
          </div>
          
          <div className="contact-icons">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className={`contact-icon ${social.class}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contact via ${social.name}`}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;