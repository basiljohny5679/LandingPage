import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

import './CTA.css';

const XLogo = ({ size = 22 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const CTA: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/enito_english?igsh=MWJ4NHRnOGZuamE4cA==",
      icon: <Instagram size={22} />,
      class: "instagram"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1FiFHKe1E2/",
      icon: <Facebook size={22} />,
      class: "facebook"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/EnitoEnglish",
      icon: <XLogo size={22} />,
      class: "twitter"
    }
  ];

  const phoneNumber = "+919496687327";
  const whatsappNumber = "919496687327";

  return (
    <section className="cta-section">
      <div className="wave8-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-filed"></path>
        </svg>
      </div>
      
      <div className="container">
        <h2 className="cta-title">Start Your English Journey Today</h2>
        
        {/* Three sections wrapper */}
        <div className="three-sections-wrapper">
          {/* Section 1: Contact Us */}
          <div className="section section-left">
            <div className="company-info">
              <span className="company-name">Contact Us</span>
              <div className="contact-methods">
                <a href={`tel:${phoneNumber}`} className="contact-method">
                  <Phone size={16} />
                  +91 9496687327
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20English`} 
                  className="contact-method whatsapp-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Section 2: Social Media */}
          <div className="section section-center">
            <div className="social-section">
              <h3 className="social-heading">Follow Us</h3>
              <div className="contact-icons">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className={`contact-icon ${social.class}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Section 3: Terms & Conditions Links */}
          <div className="section section-right">
            <div className="footer-links">
              <a href="/terms" className="footer-link">Terms & Conditions</a>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/faq" className="footer-link">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;