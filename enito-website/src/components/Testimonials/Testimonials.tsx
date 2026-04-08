import React from 'react';
import './Testimonials.css';

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Akhil S.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "ENITO boosted my speaking confidence. Great experience!",
      stars: 5
    },
    {
      name: "Vishnu R.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "The one-to-one coaching was exactly what I needed!",
      stars: 5
    },
    {
      name: "Jithin M.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "Finally confident in client meetings. Thank you ENITO!",
      stars: 5
    },
    {
      name: "Amal K.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "From shy to speaking fluently in just 3 months!",
      stars: 5
    },
    {
      name: "Mubashira N.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "The personalized sessions made all the difference!",
      stars: 5
    },
    {
      name: "Vignesh S.",
      avatar: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png",
      quote: "Cracked my job interview thanks to ENITO's training!",
      stars: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <div className="testimonials-carousel-container">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-stars">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;