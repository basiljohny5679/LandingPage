import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import Interview from '../../assets/Interview.jpeg';  
import './InterviewPreparation.css';
import Logo2 from '../../assets/Interviewcracker.png';
import { Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const InterviewPreparation: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
//    const socialLinks = [
//     {
//       name: "WhatsApp",
//       url: "https://wa.me/919544830199?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20English",
//       icon: <MessageCircle size={22} />,
//       class: "whatsapp"
//     },
//     {
//       name: "Instagram",
//       url: "https://instagram.com/enito",
//       icon: <Instagram size={22} />,
//       class: "instagram"
//     },
//     {
//       name: "Facebook",
//       url: "https://facebook.com/enito",
//       icon: <Facebook size={22} />,
//       class: "facebook"
//     },
    
//     {
//       name: "X (Twitter)",
//       url: "https://twitter.com/enito",
//       icon: <FaXTwitter size={22} />, 
//       class: "twitter"
// }
//   ];

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
  const whatsappNumber = "919496687327";

  const handleBeginJourney = () => {
     const message = "Hello ENITO, I'm interested in learning Interview Cracker";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handlePhoneCall = () => {
    window.location.href = 'tel:+919496687327';
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
            <Link to="/course/daily-english" className="nav-item" onClick={closeSideNav}>
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
                    src={Logo2} 
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
               Interview Cracker is a focused spoken English course designed for job seekers who want to perform confidently in interviews. The course is available in both one to one and group sessions, offering flexibility based on your learning preference.
It focuses on interview specific English, professional communication, and confident self presentation. Through practical guidance and real interview practice, learners are trained to answer questions clearly, handle conversations smoothly, and manage pressure with confidence.
This program is designed to bring noticeable improvement in a short time, helping you approach interviews with clarity, confidence, and readiness.
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
              <h3 className="audience-title">Who Should Enroll</h3>
              <ul className="audience-list">
                  <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Freshers and working professionals preparing for interviews</span>
                </li>
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
                By the end of the course, you will be able to communicate your skills, experience, and strengths clearly and confidently. You will learn to answer interview questions in a structured and effective way, handle pressure calmly, and present yourself professionally. Through guided practice and mock interviews, you will build confidence and position yourself for success in interviews.
                  {/* Communicate your skills, experience, and strengths effectively while responding to complex questions with structure and precision. Walk out of your next interview knowing you've represented your best self. */}
                </p>
              </div>
              <div className="certification-card">
                {/* <span className="material-symbols-outlined certification-icon">verified</span>
                <h4 className="certification-title">Certification</h4>
                <p className="certification-text">Professional English Mastery Certificate awarded upon completion.</p> */}
                 <img 
              src={Interview} 
              alt="ENITO Logo" 
              className="Final-img"
            />
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
        © 2026 Linguist Editorial. Focus on Fluency.
      </p>

      {/* 📞 Phone */}
       <div className="footer-contact" onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>
              <Phone size={16} />
              <span>+91 9496687327</span>
            </div>
          </div>

    {/* CENTER - SOCIAL */}
    <div className="footer-social">
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20Interview%20Cracker`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
      >
        <MessageCircle size={18} />
      </a>

      <a
        href="https://www.instagram.com/enito_english?igsh=MWJ4NHRnOGZuamE4cA=="
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <Instagram size={18} />
      </a>

      <a
        href="https://www.facebook.com/share/1FiFHKe1E2/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <Facebook size={18} />
      </a>

      <a
        href="https://x.com/EnitoEnglish"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
      >
          <XLogo size={18} />
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