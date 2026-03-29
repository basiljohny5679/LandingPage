import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import './InterviewPreparation.css';
import { Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
const InterviewPreparation: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleBeginJourney = () => {
    // Add your begin journey logic here
    console.log('Begin Journey clicked');
  };

  return (
    <div className="interview-preparation-page">
      {/* Navigation Bar */}
      <nav className="course-navbar">
        <div className="nav-container">
          {/* Hamburger Menu Button - Shows on Mobile and iPad */}
          <button className="menu-toggle" onClick={toggleSideNav}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          
          <div className="logo">
            <img 
              src={Logo} 
              alt="ENITO Logo" 
              className="logo-img"
            />
            <span className="logo-text">ENITO</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <button className="nav-link-btn">Interview Cracker</button>
            <button className="nav-link-btn">10 Days</button>
            <button className="nav-link-begin" onClick={handleBeginJourney}>Begin Journey →</button>
          </div>
          
          {/* Mobile Begin Journey Button */}
          {isMobile && (
            <button className="mobile-begin-btn" onClick={handleBeginJourney}>
              Begin Journey →
            </button>
          )}
          
          {/* Home Button */}
          <button className="home-btn" onClick={handleHomeClick}>
            <span className="material-symbols-outlined">home</span>
          </button>
        </div>
      </nav>

      <div className="course-layout">
        {/* Side Navigation Overlay */}
        <div className={`side-nav-overlay ${isSideNavOpen ? 'active' : ''}`} onClick={closeSideNav}></div>
        
        {/* Side Navigation */}
        <aside className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
          <div className="side-nav-header">
            <div className="atelier-title">Professional Atelier</div>
            <div className="atelier-subtitle">Career Mastery</div>
          </div>
          <div className="nav-items">
            <Link to="/course/basic-english" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">menu_book</span>
              Basic English
            </Link>
            <Link to="/course/daily-communication" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">chat</span>
              Daily English
            </Link>
            <Link to="/course/interview-cracker" className="nav-item active" onClick={closeSideNav}>
              <span className="material-symbols-outlined">record_voice_over</span>
              Interview Cracker
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Hero Section: Asymmetric & Editorial */}
          <section className="hero-section">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="level-badge">Professional Excellence</span>
                <h1 className="course-title">
                  INTERVIEW <br />
                  <span className="highlight">CRACKER</span>
                </h1>
                <p className="course-description">
                  Build confidence for job interviews. Master the art of professional communication and navigate high-pressure HR rounds with poise.
                </p>
                <div className="training-badges">
                  <div className="badge-item">
                    <span className="material-symbols-outlined">person</span>
                    <span>One-to-One Training</span>
                  </div>
                  <div className="badge-item">
                    <span className="material-symbols-outlined">groups</span>
                    <span>Group Training</span>
                  </div>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <div className="hero-image-card">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKnTt7l85kDXhB3eduD5qDOMLrR-kd_rMhKRs5wVEOaQ66rri84nquiPq_85yaDtyiYuBfWSqUivLW3lhVpQfUyQlvBU1rGmXCAMn3Ikq2ni0ZIeOs14t0gLUmuw1UhQNiLGOlJoknB7K4HiMNFydJru5SYUXrCaFe_zfk4APfQCTT_10q2UOteV3LvNejSGNrgGYV0LqiVdeaHXiVR8n6BRy7SSNixiHjWKuTjV9jtxZw9krIlNd_yjuyClUXDjI9UfgpagU9hg0" 
                    alt="Professional woman in a confident interview setting" 
                    className="hero-image"
                  />
                  <div className="testimonial-card">
                    <p className="testimonial-text">"Confidence isn't just knowing the answer; it's knowing how to structure the silence."</p>
                    <p className="testimonial-author">— Curriculum Director</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Overview & Target Audience Bento Grid */}
          <section className="bento-section">
            <div className="overview-card">
              <h2 className="section-title">Course Overview</h2>
              <p className="overview-text">
                English to Crack Any Interview is an intensive one-to-one crash course designed for job seekers who struggle to perform confidently in interviews despite having the required skills.
The course focuses on interview-specific English, professional communication, and confident self-presentation.
Learners are guided through practical strategies to handle interview conversations, answer questions clearly, and manage pressure effectively.
This program is structured to deliver quick, visible improvement in confidence and interview communication within a short time.
              </p>
              <div className="stats-group">
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Practical Focus</span>
                </div>
                <div className="stat">
                  <span className="stat-number">HR</span>
                  <span className="stat-label">Round Mastery</span>
                </div>
              </div>
            </div>
            <div className="audience-card">
              <h3 className="audience-title">Who This Is For</h3>
              <ul className="audience-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Job seekers who feel nervous or underconfident during interviews
</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Candidates who struggle to express their skills and experience in English</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Freshers and working professionals preparing for interviews</span>
                </li>
                  <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Anyone who wants to improve interview communication in a short time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Topics Covered: Editorial List */}
          <section className="topics-editorial">
            <div className="topics-container">
              <h2 className="topics-main-title">Curriculum Architecture</h2>
              <div className="topics-grid-list">
                <div className="topic-item">
                  <span className="topic-letter">a)</span>
                  <p>How to Begin an Interview Conversation</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">b)</span>
                  <p>Creating a Positive Impression</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">c)</span>
                  <p>Answering Interview Questions Clearly and Confidently</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">d)</span>
                  <p>Handling Pressure and Interview Psychology</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">e)</span>
                  <p>Creating a Professional and Lasting Impression</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">f)</span>
                  <p>Articulating Questions and Responses</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">g)</span>
                  <p>Doubts and Clarifications</p>
                </div>
                <div className="topic-item">
                  <span className="topic-letter">h)</span>
                  <p>Final Mock Interview Session</p>
                </div>
              </div>
            </div>
          </section>

          {/* Course Outcome: Tonal Layering */}
          <section className="outcome-premium">
            <div className="outcome-premium-content">
              <div className="outcome-premium-text">
                <span className="outcome-premium-badge">The Final Goal</span>
                <h2 className="outcome-premium-title">Learners will be able to attend interviews with confidence and clarity.</h2>
                <p className="outcome-premium-description">
                 They will communicate their skills, experience, and strengths effectively while responding to questions with structure and precision.
Through personalised practice and a final mock interview, learners will reduce anxiety, handle pressure calmly, and present themselves professionally, significantly improving their chances of success in interviews.
                  {/* Communicate your skills, experience, and strengths effectively while responding to complex questions with structure and precision. Walk out of your next interview knowing you've represented your best self. */}
                </p>
              </div>
              <div className="certification-card">
                <span className="material-symbols-outlined certification-icon">verified</span>
                <h4 className="certification-title">Certification</h4>
                <p className="certification-text">Professional English Mastery Certificate awarded upon completion.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
     <footer className="course-footer">
  <div className="footer-content">

    {/* LEFT SIDE */}
    <div className="footer-left">
      <div className="footer-logo">Linguist Editorial</div>
      <p className="footer-copyright">
        © 2024 Linguist Editorial. Focus on Fluency.
      </p>

      {/* 📞 Phone */}
      <div className="footer-contact">
        <Phone size={16} />
        <span>+91 9544830199</span>
      </div>
    </div>

    {/* CENTER - SOCIAL */}
    <div className="footer-social">
      <a
        href="https://wa.me/919544830199"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
      >
        <MessageCircle size={18} />
      </a>

      <a
        href="https://instagram.com/enito"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <Instagram size={18} />
      </a>

      <a
        href="https://facebook.com/enito"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <Facebook size={18} />
      </a>

      <a
        href="https://twitter.com/enito"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
      >
        <Twitter size={18} />
      </a>
    </div>

    {/* RIGHT SIDE */}
    <div className="footer-links">
      <a href="#">Academic Integrity</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Excellence</a>
    </div>

  </div>
</footer>
    </div>
  );
};

export default InterviewPreparation;