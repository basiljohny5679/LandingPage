import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import './BasicEnglish.css';
import { Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const BasicEnglish: React.FC = () => {
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
    <div className="basic-english-page">
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
            <button className="nav-link-btn">Basic English</button>
            <button className="nav-link-btn">15 Days</button>
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
            <div className="atelier-title">Academic Atelier</div>
            <div className="atelier-subtitle">English Mastery</div>
          </div>
          <div className="nav-items">
           
            
            <Link to="/course/basic-english" className="nav-item active" onClick={closeSideNav}>
              <span className="material-symbols-outlined">menu_book</span>
              Basic English
            </Link>
            <Link to="/course/daily-communication" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">chat</span>
              Daily English
            </Link>
             <Link to="/course/interview-cracker" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">record_voice_over</span>
              Interview Cracker
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Course Header */}
          <header className="course-header">
            <div className="header-content">
              <div className="level-badge">Level 01 • Introductory</div>
              <h1 className="course-title">
                BASIC <br /> 
                <span className="highlight">ENGLISH</span>
              </h1>
              <p className="course-description">
              
              </p>
            </div>
            <div className="info-card">
              <div className="info-item">
                <div className="info-label">Duration</div>
                <div className="info-value">15 Days</div>
              </div>
              <div className="info-item">
                <div className="info-label">Format</div>
                <div className="info-value">Digital Atelier</div>
              </div>
              <div className="info-item">
                <div className="info-label">Prerequisites</div>
                <div className="info-value">None</div>
              </div>
              <button className="begin-btn" onClick={handleBeginJourney}>Begin Journey</button>
            </div>
          </header>

          {/* Overview Section */}
          <section className="overview-section">
            <div className="overview-text">
              <h2 className="section-title">Course Overview</h2>
              <p className="overview-description">
              Basic English is a dynamic spoken English course designed for beginners who are just starting their English-speaking journey. Offered in both one-to-one and group formats, the course provides the flexibility to learn in a way that best suits your comfort and learning style.
              </p>
                <p className="overview-description">
              Through carefully designed lessons, learners are introduced to essential vocabulary, everyday phrases, and simple sentence structures that can be used in real-life situations. The course goes beyond traditional learning by combining clear explanations, guided practice, and engaging interactive activities to make learning enjoyable and effective.
             </p>
              <p className="overview-description">
 Whether you prefer personalized attention or the energy of group learning, Basic English helps you build confidence, improve communication skills, and start speaking English from day one.
It provides a strong foundation for learners to develop confidence in spoken English.             </p>
            </div>
            <div className="who-for-card">
              <h3 className="who-for-title">Who Should Enroll</h3>
              <ul className="who-for-list">
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Perfect for absolute beginners ready to take their first step into the world of English.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Designed for learners who want simple, guided steps to build their English from the basics.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Ideal for those who want to quickly develop confidence in speaking English.</span>
                </li>
                  <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>A welcoming starting point for anyone new to spoken English.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Training Formats */}
          <section className="training-section">
            <h2 className="section-title">Training Formats</h2>
            <div className="training-grid">
              <div className="training-card">
                <div className="training-icon">
                  <span className="material-symbols-outlined">person_search</span>
                </div>
                <h3 className="training-title">One-to-One Training</h3>
                <p className="training-description">
             Personalized training focused on your pace and goals, with clear guidance to help you improve and build confidence.   </p>
                <div className="training-tag">
                  <span>Deep Focus</span>
                  <span className="tag-line"></span>
                </div>
              </div>
              <div className="training-card">
                <div className="training-icon">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="training-title">Group Training</h3>
                <p className="training-description">
             Learn in a small group through guided activities and discussions. Practice speaking, share ideas, and build confidence together.   </p>
                <div className="training-tag">
                  <span>Collaborative Atelier</span>
                  <span className="tag-line"></span>
                </div>
              </div>
            </div>
          </section>

          {/* Topics Covered */}
         <section className="topics-section">
  <h2 className="section-title">Topics Covered</h2>
  <div className="topics-grid">
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">abc</span>
      </div>
      <h4 className="topic-title">English Vocabularies</h4>
      <p className="topic-description">
        Build a strong foundation with essential everyday words to help you understand, speak, and communicate in English with confidence.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">sports_esports</span>
      </div>
      <h4 className="topic-title">Games on Grammar</h4>
      <p className="topic-description">
        Learn essential grammar through fun and interactive activities, helping you build simple sentences and improve your speaking confidence.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">auto_awesome</span>
      </div>
      <h4 className="topic-title">Expressions and Idioms</h4>
      <p className="topic-description">
        Enhance your speaking with simple expressions and idioms that make your English sound more fluent and engaging.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">forum</span>
      </div>
      <h4 className="topic-title">Conversational English</h4>
      <p className="topic-description">
        Develop the confidence to engage in daily conversations using clear and effective English.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">sports_esports</span>
      </div>
      <h4 className="topic-title">Games and Expressions</h4>
      <p className="topic-description">
        Practice useful expressions through interactive games to improve your speaking skill.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">record_voice_over</span>
      </div>
      <h4 className="topic-title">Communicative English</h4>
      <p className="topic-description">
        Strengthen your ability to express yourself clearly and comfortably in daily interactions.
      </p>
    </div>
  </div>
</section>

          {/* Course Outcome */}
          <section className="outcome-section">
            <div className="outcome-wrapper">
              <div className="outcome-content">
                <div className="outcome-text">
                  <h2 className="outcome-title">THE FINAL GOAL</h2>
                  <p className="outcome-description">
                   
By the end of the course, you will be able to use simple English in everyday situations and speak with greater ease and confidence.

                  </p>
                  <div className="outcome-badges">
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Real-World Ready</span>
                    </div>
                    {/* <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Editorial Certificate</span>
                    </div> */}
                  </div>
                </div>
                <div className="outcome-image">
                  <img src="https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=80" alt="Basic English" />
                </div>
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

export default BasicEnglish;