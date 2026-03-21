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
      name: "Rahul S.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      quote: "ENITO boosted my speaking confidence. Great experience!",
      stars: 5
    },
    {
      name: "Ananya R.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      quote: "The one-to-one coaching was exactly what I needed!",
      stars: 5
    },
    {
      name: "Vikram M.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80",
      quote: "Finally confident in client meetings. Thank you ENITO!",
      stars: 5
    },
    {
      name: "Priya K.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
      quote: "From shy to speaking fluently in just 3 months!",
      stars: 5
    },
    {
      name: "Arjun N.",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80",
      quote: "The personalized sessions made all the difference!",
      stars: 5
    },
    {
      name: "Neha S.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
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