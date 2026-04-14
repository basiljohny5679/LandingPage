import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import './DailyCommunication.css';
import { Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';


const DailyCommunication: React.FC = () => {
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
//       {
//         name: "WhatsApp",
//         url: "https://wa.me/919544830199?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20English",
//         icon: <MessageCircle size={22} />,
//         class: "whatsapp"
//       },
//       {
//         name: "Instagram",
//         url: "https://instagram.com/enito",
//         icon: <Instagram size={22} />,
//         class: "instagram"
//       },
//       {
//         name: "Facebook",
//         url: "https://facebook.com/enito",
//         icon: <Facebook size={22} />,
//         class: "facebook"
//       },
//     {
//       name: "X (Twitter)",
//       url: "https://twitter.com/enito",
//       icon: <FaXTwitter size={22} />, // Updated icon component
//       class: "twitter"
// }
//     ];
  

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
     const message = "Hello ENITO, I'm interested in learning Daily English";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

   const handlePhoneCalls = () => {
    window.location.href = 'tel:+919496687327';
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
            <button className="nav-link-btn">Daily English</button>
            <button className="nav-link-btn">30 Days</button>
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
               <Link to="/course/daily-english" className="nav-item active" onClick={closeSideNav}>
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
               Learn to communicate effectively in everyday situations through practical conversations. Build your confidence and improve your fluency with simple real life learning.
              </p>
            </div>
            <div className="info-card">
              <div className="info-item">
                <div className="info-label">Duration</div>
                <div className="info-value">30 Days</div>
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
                Daily English is a personalised spoken English course designed for learners who want to communicate confidently in everyday life. The course focuses on practical words, natural phrases, and real conversations, helping you gradually overcome fear, hesitation, and self doubt.

              </p>
              <p className="overview-description">
              This is not a grammar heavy course. It is a confidence first, usage based program that enables you to think, speak, and respond in English with ease and clarity.
              </p>
            </div>
            <div className="who-for-card">
              <h3 className="who-for-title">Who Should Enroll</h3>
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
        <span className="material-symbols-outlined">menu_book</span>
      </div>
      <h4 className="topic-title">English Vocabularies and Synonyms</h4>
      <p className="topic-description">
        Learn a variety of words and their synonyms to improve your understanding in English
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">sports_esports</span>
      </div>
      <h4 className="topic-title">Games on Grammar</h4>
      <p className="topic-description">
        Build your grammar skills through interactive games designed to make learning simple and effective
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">auto_awesome</span>
      </div>
      <h4 className="topic-title">Expressions and Idioms</h4>
      <p className="topic-description">
        Enhance your communication with simple expressions and idioms that make your English more engaging.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">forum</span>
      </div>
      <h4 className="topic-title">Conversational English</h4>
      <p className="topic-description">
        Practice real life conversations to communicate naturally and confidently in daily situations.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">celebration</span>
      </div>
      <h4 className="topic-title">Games and Detours</h4>
      <p className="topic-description">
        Improve your fluency through fun games and creative activities that make learning engaging and enjoyable.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">psychology</span>
      </div>
      <h4 className="topic-title">Psychology of English</h4>
      <p className="topic-description">
        Understand the mindset behind learning English and build the confidence to think, speak, and respond naturally.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">auto_stories</span>
      </div>
      <h4 className="topic-title">Introduction to Literature</h4>
      <p className="topic-description">
        Explore the foundations of English literature and how it has shaped the language.
      </p>
    </div>
    
    <div className="topic-card">
      <div className="topic-icon-wrapper">
        <span className="material-symbols-outlined">record_voice_over</span>
      </div>
      <h4 className="topic-title">Communicative English</h4>
      <p className="topic-description">
        Develop the ability to communicate clearly and confidently in everyday situations.
      </p>
    </div>
  </div>
</section>

          {/* Course Outcome */}
          <section className="outcome-section">
            <div className="outcome-wrapper">
              <div className="outcome-content">
                <div className="outcome-text">
                  <h2 className="outcome-title">THE FINAL GOAL </h2>
                  <p className="outcome-description">
                  Upon completion, you will have the confidence to handle daily interactions, take part in meaningful conversations, and communicate effectively in various situations.
                  </p>
                  <div className="outcome-badges">
                    {/* <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>CEFR B1 Level</span>
                    </div>
                    <div className="badge">
                      <span className="material-symbols-outlined">verified</span>
                      <span>Communication Certificate</span>
                    </div> */}
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
      
          {/* LEFT SIDE */}
          <div className="footer-left">
            <div className="footer-logo">Linguist Editorial</div>
            <p className="footer-copyright">
              © 2026 Linguist Editorial. Focus on Fluency.
            </p>
      
            {/* 📞 Phone */}
           <div className="footer-contact" onClick={handlePhoneCalls} style={{ cursor: 'pointer' }}>
                        <Phone size={16} />
                        <span>+91 9496687327</span>
                      </div>
                    </div>
      
          {/* CENTER - SOCIAL */}
          <div className="footer-social">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20ENITO%2C%20I'm%20interested%20in%20learning%20Daily%20English`}
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

export default DailyCommunication;