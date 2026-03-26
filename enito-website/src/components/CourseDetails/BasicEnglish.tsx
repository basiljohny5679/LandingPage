import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import './BasicEnglish.css';

const BasicEnglish: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
             <Link to="/course/interview-preparation" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">record_voice_over</span>
              Interview Preparation
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
                Basic English is a focused one-to-one spoken English course designed for learners who are at the very beginning of their English-speaking journey.
The course introduces essential English words, simple phrases, and basic sentence patterns used in everyday communication.
              </p>
              <p className="overview-description">
                It is designed to make learners comfortable with English through simple explanations, guided practice, and interactive activities.
This course builds a strong foundation and prepares learners to move confidently into regular spoken English practice.
              </p>
            </div>
            <div className="who-for-card">
              <h3 className="who-for-title">Who This Course Is For</h3>
              <ul className="who-for-list">
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Absolute beginners who want to start learning English.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Learners who know very little English and need step-by-step guidance.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>People who want to build basic speaking confidence in a short time.</span>
                </li>
                  <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Anyone looking for a simple and supportive introduction to spoken English.</span>
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
                  A personalized, high-intensity experience tailored to your specific pace and goals. Direct editorial guidance for those seeking rapid refinement.
                </p>
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
                  Collaborative learning in small, curated cohorts. Engage in dynamic editorial discussions that mirror the rhythm of real-world discourse.
                </p>
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
                <h4 className="topic-title">Foundational Phonetics</h4>
                <p className="topic-description">Master the English alphabet and the essential sounds that form the basis of clear pronunciation.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">edit</span>
                </div>
                <h4 className="topic-title">Primary Grammar Hooks</h4>
                <p className="topic-description">Understanding the 'To Be' verb, basic sentence structures, and present simple tense.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h4 className="topic-title">Personal Identification</h4>
                <p className="topic-description">How to introduce yourself, describe your background, and share personal interests elegantly.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h4 className="topic-title">Daily Architecture</h4>
                <p className="topic-description">Vocabulary for time, days, and common daily routines to navigate everyday life.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">shopping_basket</span>
                </div>
                <h4 className="topic-title">Essential Interactions</h4>
                <p className="topic-description">Navigating markets, cafes, and transportation with confidence and courtesy.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">explore</span>
                </div>
                <h4 className="topic-title">Spatial Navigation</h4>
                <p className="topic-description">Prepositions of place and giving/receiving basic directions in a city environment.</p>
              </div>
            </div>
          </section>

          {/* Course Outcome */}
          <section className="outcome-section">
            <div className="outcome-wrapper">
              <div className="outcome-content">
                <div className="outcome-text">
                  <h2 className="outcome-title">The Outcome</h2>
                  <p className="outcome-description">
                    Upon completion, you won't just "know" English words; you will possess the structural framework to hold simple conversations, read basic news reports, and—most importantly—have the confidence to progress to intermediate mastery.
                  </p>
                  <div className="outcome-badges">
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>CEFR A1 Mastery</span>
                    </div>
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Editorial Certificate</span>
                    </div>
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
          <div>
            <div className="footer-logo">Linguist Editorial</div>
            <p className="footer-copyright">© 2024 Linguist Editorial. Focus on Fluency.</p>
          </div>
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