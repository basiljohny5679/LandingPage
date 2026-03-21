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