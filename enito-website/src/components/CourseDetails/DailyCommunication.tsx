import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import './DailyCommunication.css';

const DailyCommunication: React.FC = () => {
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
    <div className="daily-communication-page">
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
            <button className="nav-link-btn">Daily Communication</button>
            <button className="nav-link-btn">8 Weeks</button>
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
          
         
            <Link to="/course/basic-english" className="nav-item" onClick={closeSideNav}>
              <span className="material-symbols-outlined">menu_book</span>
              Basic English
            </Link>
               <Link to="/course/daily-communication" className="nav-item active" onClick={closeSideNav}>
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
              <div className="level-badge">Level 02 • Intermediate</div>
              <h1 className="course-title">
                DAILY <br /> 
                <span className="highlight">ENGLISH</span>
              </h1>
              <p className="course-description">
                Master everyday English conversations for real-world situations. Build confidence through practical, scenario-based learning that transforms your daily interactions.
              </p>
            </div>
            <div className="info-card">
              <div className="info-item">
                <div className="info-label">Duration</div>
                <div className="info-value">8 Weeks</div>
              </div>
              <div className="info-item">
                <div className="info-label">Format</div>
                <div className="info-value">Interactive Workshop</div>
              </div>
              <div className="info-item">
                <div className="info-label">Prerequisites</div>
                <div className="info-value">Basic English</div>
              </div>
              <button className="begin-btn" onClick={handleBeginJourney}>Begin Journey</button>
            </div>
          </header>

          {/* Overview Section */}
          <section className="overview-section">
            <div className="overview-text">
              <h2 className="section-title">Course Overview</h2>
              <p className="overview-description">
                Daily English is a personalised one-to-one spoken English course designed for learners who want to use English confidently in everyday life.
The course focuses on practical words, natural phrases, and real conversations, while gently removing fear, hesitation, and self-doubt.
              </p>
              <p className="overview-description">
               This is not a grammar-heavy course.
It is a confidence-first, usage-based program that helps learners think, speak, and respond in English naturally.
              </p>
            </div>
            <div className="who-for-card">
              <h3 className="who-for-title">Who This Course Is For</h3>
              <ul className="who-for-list">
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Learners who understand English but struggle to speak.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>People who hesitate or panic while forming sentences.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Anyone who wants to sound natural, clear, and confident in daily conversations.</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">circle</span>
                  <span>Beginners and false beginners who need personal attention.</span>
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
                <h3 className="training-title">Personalized Coaching</h3>
                <p className="training-description">
                  Custom-tailored sessions focusing on your specific communication challenges and goals for rapid improvement.
                </p>
                <div className="training-tag">
                  <span>Personalized Growth</span>
                  <span className="tag-line"></span>
                </div>
              </div>
              <div className="training-card">
                <div className="training-icon">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="training-title">Interactive Workshops</h3>
                <p className="training-description">
                  Dynamic group sessions with real-world scenarios, role-playing, and peer feedback for practical learning.
                </p>
                <div className="training-tag">
                  <span>Collaborative Practice</span>
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
                  <span className="material-symbols-outlined">record_voice_over</span>
                </div>
                <h4 className="topic-title"> English Vocabularies and Synonyms</h4>
                <p className="topic-description">Develop natural flow in everyday conversations with native-like expressions and responses.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <h4 className="topic-title">Games on Grammar</h4>
                <p className="topic-description">Master polite expressions, cultural nuances, and appropriate responses in various social settings.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">work</span>
                </div>
                <h4 className="topic-title">Expressions and Idioms</h4>
                <p className="topic-description">Learn workplace vocabulary, email writing, and professional phone conversation skills.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <h4 className="topic-title"> Conversational English</h4>
                <p className="topic-description">Navigate social media, messaging apps, and online communication platforms effectively.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">flight</span>
                </div>
                <h4 className="topic-title"> Games and Detours</h4>
                <p className="topic-description">Essential phrases for hotels, airports, restaurants, and tourist interactions worldwide.</p>
              </div>
              <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <h4 className="topic-title">Psychology of English</h4>
                <p className="topic-description">Understand idioms, slang, and cultural references used in native English conversations.</p>
              </div>
               <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <h4 className="topic-title"> Introduction to Literature</h4>
                <p className="topic-description">Understand idioms, slang, and cultural references used in native English conversations.</p>
              </div>
               <div className="topic-card">
                <div className="topic-icon-wrapper">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <h4 className="topic-title">Communicative English</h4>
                <p className="topic-description">Understand idioms, slang, and cultural references used in native English conversations.</p>
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
                    Graduates of this course will navigate daily English interactions with confidence and cultural awareness. You'll be able to engage in meaningful conversations, express opinions clearly, and adapt your communication style to various social and professional contexts.
                  </p>
                  <div className="outcome-badges">
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>CEFR B1 Level</span>
                    </div>
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Communication Certificate</span>
                    </div>
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Real-World Ready</span>
                    </div>
                  </div>
                </div>
                <div className="outcome-image">
                  <img src="https://images.unsplash.com/photo-1758270705087-76e81a5117bd?w=400&q=80" alt="Daily Communication" />
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

export default DailyCommunication;