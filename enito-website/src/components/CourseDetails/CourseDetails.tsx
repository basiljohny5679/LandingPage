import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './CourseDetails.css';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  duration: string;
  level: string;
  topics: string[];
}

const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Course data (in a real app, this would come from an API or context)
  const courses: Course[] = [
    {
      id: "basic-english",
      title: "Basic English",
      description: "Start your English journey",
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=80",
      fullDescription: "Learn the fundamentals of English language including grammar, vocabulary, and basic conversation skills. Perfect for beginners who want to build a strong foundation. This comprehensive course covers all essential aspects of English language learning, ensuring you develop a solid understanding that will serve as a springboard for further language acquisition.",
      duration: "8 weeks",
      level: "Beginner",
      topics: ["Alphabet & Pronunciation", "Basic Grammar Rules", "Common Phrases & Expressions", "Simple Conversations", "Vocabulary Building", "Reading Comprehension", "Writing Basics"]
    },
    {
      id: "daily-communication",
      title: "Daily Communication",
      description: "Enhance your fluency",
      image: "https://images.unsplash.com/photo-1758270705087-76e81a5117bd?w=400&q=80",
      fullDescription: "Master everyday English conversations for various situations. Improve your speaking and listening skills for real-world interactions. This course focuses on practical communication skills that you can use immediately in your daily life, from shopping to socializing.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Shopping & Dining Out", "Travel & Tourism", "Social Interactions", "Telephone Conversations", "Email & Messaging", "Cultural Etiquette", "Idioms & Slang"]
    },
    {
      id: "interview-preparation",
      title: "Interview Preparation",
      description: "Excel in job interviews",
      image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?w=400&q=80",
      fullDescription: "Prepare for job interviews with confidence. Learn common interview questions, professional vocabulary, and effective communication strategies. This intensive course is designed to help you stand out in competitive job markets and land your dream position.",
      duration: "4 weeks",
      level: "Advanced",
      topics: ["Common Interview Questions", "Professional Vocabulary", "Body Language & Presence", "Mock Interviews", "Resume & Cover Letter", "Salary Negotiation", "Follow-up Strategies"]
    }
  ];

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <div className="course-details-container">
        {/* Navigation */}
        <div className="course-nav">
          <Link to="/" className="back-link">← Back to Home</Link>
          <div className="course-nav-links">
            <Link to="/course/basic-english" className={`nav-link ${course.id === 'basic-english' ? 'active' : ''}`}>
              Basic English
            </Link>
            <Link to="/course/daily-communication" className={`nav-link ${course.id === 'daily-communication' ? 'active' : ''}`}>
              Daily Communication
            </Link>
            <Link to="/course/interview-preparation" className={`nav-link ${course.id === 'interview-preparation' ? 'active' : ''}`}>
              Interview Preparation
            </Link>
          </div>
        </div>

        {/* Course Header */}
        <div className="course-header">
          <div className="course-image-large">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course-info">
            <h1 className="course-title-large">{course.title}</h1>
            <p className="course-description-large">{course.fullDescription}</p>
            <div className="course-meta">
              <div className="meta-item">
                <span className="meta-label">Duration:</span>
                <span className="meta-value">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Level:</span>
                <span className="meta-value">{course.level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="course-content-details">
          <h2>What You'll Learn</h2>
          <div className="topics-grid">
            {course.topics.map((topic, index) => (
              <div key={index} className="topic-card">
                <span className="topic-icon">✓</span>
                <span className="topic-text">{topic}</span>
              </div>
            ))}
          </div>

          <div className="course-actions">
            <button className="enroll-btn">Enroll Now</button>
            <Link to="/" className="explore-more-btn">Explore More Courses</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;


// import React from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import './CourseDetails.css';

// interface Course {
//   id: string;
//   title: string;
//   shortTitle: string;
//   description: string;
//   image: string;
//   fullDescription: string;
//   duration: string;
//   format: string;
//   prerequisites: string;
//   level: string;
//   levelBadge: string;
//   topics: string[];
//   whoIsFor: string[];
//   trainingFormats: {
//     oneToOne: {
//       title: string;
//       description: string;
//       tag: string;
//     };
//     group: {
//       title: string;
//       description: string;
//       tag: string;
//     };
//   };
//   outcome: string;
//   outcomeBadges: string[];
//   colorTheme: {
//     primary: string;
//     primaryDim: string;
//     primaryContainer: string;
//     tertiaryContainer: string;
//     gradient: string;
//   };
// }

// const CourseDetails: React.FC = () => {
//   const { courseId } = useParams<{ courseId: string }>();
//   const navigate = useNavigate();

//   // Course data with different color themes
//   const courses: Course[] = [
//     {
//       id: "basic-english",
//       title: "Basic English",
//       shortTitle: "BASIC ENGLISH",
//       description: "Start your English journey",
//       image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=80",
//       fullDescription: "A foundational journey designed for absolute beginners. We strip away the complexity to focus on the essential pillars of the English language through our editorial learning method.",
//       duration: "15 Days",
//       format: "Digital Atelier",
//       prerequisites: "None",
//       level: "Introductory",
//       levelBadge: "Level 01 • Introductory",
//       topics: [
//         {
//           title: "Foundational Phonetics",
//           description: "Master the English alphabet and the essential sounds that form the basis of clear pronunciation.",
//           icon: "abc"
//         },
//         {
//           title: "Primary Grammar Hooks",
//           description: "Understanding the 'To Be' verb, basic sentence structures, and present simple tense.",
//           icon: "edit"
//         },
//         {
//           title: "Personal Identification",
//           description: "How to introduce yourself, describe your background, and share personal interests elegantly.",
//           icon: "person"
//         },
//         {
//           title: "Daily Architecture",
//           description: "Vocabulary for time, days, and common daily routines to navigate everyday life.",
//           icon: "schedule"
//         },
//         {
//           title: "Essential Interactions",
//           description: "Navigating markets, cafes, and transportation with confidence and courtesy.",
//           icon: "shopping_basket"
//         },
//         {
//           title: "Spatial Navigation",
//           description: "Prepositions of place and giving/receiving basic directions in a city environment.",
//           icon: "explore"
//         }
//       ],
//       whoIsFor: [
//         "Absolute beginners with zero prior exposure.",
//         "Professionals needing to build a base from scratch.",
//         "Lifelong learners pursuing English as a secondary passion."
//       ],
//       trainingFormats: {
//         oneToOne: {
//           title: "One-to-One Training",
//           description: "A personalized, high-intensity experience tailored to your specific pace and goals. Direct editorial guidance for those seeking rapid refinement.",
//           tag: "Deep Focus"
//         },
//         group: {
//           title: "Group Training",
//           description: "Collaborative learning in small, curated cohorts. Engage in dynamic editorial discussions that mirror the rhythm of real-world discourse.",
//           tag: "Collaborative Atelier"
//         }
//       },
//       outcome: "Upon completion, you won't just 'know' English words; you will possess the structural framework to hold simple conversations, read basic news reports, and—most importantly—have the confidence to progress to intermediate mastery.",
//       outcomeBadges: ["CEFR A1 Mastery", "Editorial Certificate"],
//       colorTheme: {
//         primary: "#CC5500",
//         primaryDim: "#a34400",
//         primaryContainer: "#CC5500",
//         tertiaryContainer: "#fcecd9",
//         gradient: "linear-gradient(135deg, #CC5500 0%, #ff8c42 100%)"
//       }
//     },
//     {
//       id: "daily-communication",
//       title: "Daily Communication",
//       shortTitle: "DAILY COMMUNICATION",
//       description: "Enhance your fluency",
//       image: "https://images.unsplash.com/photo-1758270705087-76e81a5117bd?w=400&q=80",
//       fullDescription: "Master everyday English conversations for real-world situations. Transform your communication skills with practical, scenario-based learning that builds confidence in daily interactions.",
//       duration: "8 Weeks",
//       format: "Interactive Workshop",
//       prerequisites: "Basic English or equivalent",
//       level: "Intermediate",
//       levelBadge: "Level 02 • Intermediate",
//       topics: [
//         {
//           title: "Conversational Fluency",
//           description: "Develop natural flow in everyday conversations with native-like expressions and responses.",
//           icon: "record_voice_over"
//         },
//         {
//           title: "Social Etiquette",
//           description: "Master polite expressions, cultural nuances, and appropriate responses in various social settings.",
//           icon: "handshake"
//         },
//         {
//           title: "Professional Communication",
//           description: "Learn workplace vocabulary, email writing, and professional phone conversation skills.",
//           icon: "work"
//         },
//         {
//           title: "Digital Discourse",
//           description: "Navigate social media, messaging apps, and online communication platforms effectively.",
//           icon: "chat"
//         },
//         {
//           title: "Travel Talk",
//           description: "Essential phrases for hotels, airports, restaurants, and tourist interactions worldwide.",
//           icon: "flight"
//         },
//         {
//           title: "Cultural Intelligence",
//           description: "Understand idioms, slang, and cultural references used in native English conversations.",
//           icon: "language"
//         }
//       ],
//       whoIsFor: [
//         "Intermediate learners looking to enhance conversational fluency.",
//         "Professionals seeking better workplace communication skills.",
//         "Travelers wanting confident English interactions abroad.",
//         "Students preparing for English-speaking environments."
//       ],
//       trainingFormats: {
//         oneToOne: {
//           title: "Personalized Coaching",
//           description: "Custom-tailored sessions focusing on your specific communication challenges and goals for rapid improvement.",
//           tag: "Personalized Growth"
//         },
//         group: {
//           title: "Interactive Workshops",
//           description: "Dynamic group sessions with real-world scenarios, role-playing, and peer feedback for practical learning.",
//           tag: "Collaborative Practice"
//         }
//       },
//       outcome: "Graduates of this course will navigate daily English interactions with confidence and cultural awareness. You'll be able to engage in meaningful conversations, express opinions clearly, and adapt your communication style to various social and professional contexts.",
//       outcomeBadges: ["CEFR B1 Level", "Communication Certificate", "Real-World Ready"],
//       colorTheme: {
//         primary: "#4A90E2",
//         primaryDim: "#357ABD",
//         primaryContainer: "#4A90E2",
//         tertiaryContainer: "#E3F2FD",
//         gradient: "linear-gradient(135deg, #4A90E2 0%, #6B9FE3 100%)"
//       }
//     },
//     {
//       id: "interview-preparation",
//       title: "Interview Preparation",
//       shortTitle: "INTERVIEW PREP",
//       description: "Excel in job interviews",
//       image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?w=400&q=80",
//       fullDescription: "Prepare for job interviews with confidence. Learn common interview questions, professional vocabulary, and effective communication strategies to land your dream job.",
//       duration: "4 Weeks",
//       format: "Intensive Bootcamp",
//       prerequisites: "Daily Communication or equivalent",
//       level: "Advanced",
//       levelBadge: "Level 03 • Advanced",
//       topics: [
//         {
//           title: "Common Interview Questions",
//           description: "Master responses to frequently asked questions with the STAR method.",
//           icon: "quiz"
//         },
//         {
//           title: "Professional Vocabulary",
//           description: "Learn industry-specific terminology and professional language for your field.",
//           icon: "school"
//         },
//         {
//           title: "Body Language & Presence",
//           description: "Understand non-verbal communication and build confident presence.",
//           icon: "accessibility"
//         },
//         {
//           title: "Mock Interviews",
//           description: "Practice with realistic scenarios and receive constructive feedback.",
//           icon: "record_voice_over"
//         },
//         {
//           title: "Resume & Cover Letter",
//           description: "Create compelling application materials that stand out to employers.",
//           icon: "description"
//         },
//         {
//           title: "Salary Negotiation",
//           description: "Learn effective strategies for discussing compensation packages.",
//           icon: "payments"
//         }
//       ],
//       whoIsFor: [
//         "Job seekers preparing for interviews",
//         "Professionals looking to advance their careers",
//         "Recent graduates entering the workforce",
//         "Career changers transitioning to new industries"
//       ],
//       trainingFormats: {
//         oneToOne: {
//           title: "Executive Coaching",
//           description: "One-on-one personalized interview coaching with industry experts.",
//           tag: "Career Focus"
//         },
//         group: {
//           title: "Peer Practice Sessions",
//           description: "Collaborative interview practice with diverse scenarios and feedback.",
//           tag: "Group Simulation"
//         }
//       },
//       outcome: "Complete the program interview-ready with proven strategies, refined responses, and the confidence to excel in any interview setting. Stand out from other candidates with polished communication skills and professional presence.",
//       outcomeBadges: ["Interview Ready", "Career Certificate", "Job Success"],
//       colorTheme: {
//         primary: "#9B59B6",
//         primaryDim: "#8E44AD",
//         primaryContainer: "#9B59B6",
//         tertiaryContainer: "#F3E5F5",
//         gradient: "linear-gradient(135deg, #9B59B6 0%, #AF7AC5 100%)"
//       }
//     }
//   ];

//   const course = courses.find(c => c.id === courseId);

//   if (!course) {
//     return (
//       <div className="course-not-found">
//         <h2>Course not found</h2>
//         <Link to="/" className="back-home-btn">Back to Home</Link>
//       </div>
//     );
//   }

//   const theme = course.colorTheme;

//   return (
//     <div className="course-details-page" style={{ '--primary-color': theme.primary, '--primary-dim': theme.primaryDim, '--tertiary-container': theme.tertiaryContainer } as React.CSSProperties}>
//       {/* Navigation Bar */}
//       <nav className="course-navbar">
//         <div className="nav-container">
//           <div className="logo">Linguist Editorial</div>
//           <div className="nav-links">
//             <a href="#" className="nav-link">Curriculum</a>
//             <a href="#" className="nav-link">Methodology</a>
//             <a href="#" className="nav-link">Resources</a>
//           </div>
//           <span className="material-symbols-outlined account-icon">account_circle</span>
//         </div>
//       </nav>

//       <div className="course-layout">
//         {/* Side Navigation */}
//         <aside className="side-nav">
//           <div className="side-nav-header">
//             <div className="atelier-title">Academic Atelier</div>
//             <div className="atelier-subtitle">English Mastery</div>
//           </div>
//           <div className="nav-items">
//             <Link to="/course/interview-preparation" className={`nav-item ${course.id === 'interview-preparation' ? 'active' : ''}`}>
//               <span className="material-symbols-outlined">record_voice_over</span>
//               Interview Prep
//             </Link>
//             <Link to="/course/daily-communication" className={`nav-item ${course.id === 'daily-communication' ? 'active' : ''}`}>
//               <span className="material-symbols-outlined">chat</span>
//               Daily Usage
//             </Link>
//             <Link to="/course/basic-english" className={`nav-item ${course.id === 'basic-english' ? 'active' : ''}`}>
//               <span className="material-symbols-outlined">menu_book</span>
//               Basic Grammar
//             </Link>
//             <a href="#" className="nav-item">
//               <span className="material-symbols-outlined">query_stats</span>
//               My Progress
//             </a>
//           </div>
//           <div className="user-profile">
//             <div className="avatar">
//               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjIHcK7_-3ZTT8QQLZT7v-AEJQCIU7-NCmWQclCui_W-BlrRE7N9g-JkiKHKeAvOOZ-tAY_rQx50lQrmfALB_ZtMzxNVNeLrrsnItb9pA_KrcxI40Kk-UduL7XV8nnF-ZKbT4__SML5CFI4GKAq44tBhN7MVNQ0-L8tCfIYzPhs5NP0bwk5OqvJScsm2pmJ79UMjMW5E71ueERFBiJwRkQMDmOPSGEMYkVTe3py_Uom6n_oIzJbtTBCnlWTvORxSV8K5OeW-cecsQ" alt="User avatar" />
//             </div>
//             <div>
//               <p className="user-name">Alex Mercer</p>
//               <p className="user-level">Master Level</p>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="main-content">
//           {/* Course Header */}
//           <header className="course-header">
//             <div className="header-content">
//               <div className="level-badge" style={{ backgroundColor: theme.tertiaryContainer, color: theme.primary }}>
//                 {course.levelBadge}
//               </div>
//               <h1 className="course-title">
//                 {course.shortTitle.split(' ')[0]} <br />
//                 <span style={{ color: theme.primary }}>{course.shortTitle.split(' ')[1] || course.shortTitle}</span>
//               </h1>
//               <p className="course-description">{course.fullDescription}</p>
//             </div>
//             <div className="info-card">
//               <div className="info-item">
//                 <div className="info-label">Duration</div>
//                 <div className="info-value">{course.duration}</div>
//               </div>
//               <div className="info-item">
//                 <div className="info-label">Format</div>
//                 <div className="info-value">{course.format}</div>
//               </div>
//               <div className="info-item">
//                 <div className="info-label">Prerequisites</div>
//                 <div className="info-value">{course.prerequisites}</div>
//               </div>
//               <button className="begin-btn" style={{ background: theme.gradient || theme.primary }}>
//                 Begin Journey
//               </button>
//             </div>
//           </header>

//           {/* Overview Section */}
//           <section className="overview-section">
//             <div className="overview-text">
//               <h2 className="section-title">Course Overview</h2>
//               <p className="overview-description">
//                 The {course.title} course at Linguist Editorial is more than just grammar drills. It is a curated experience that introduces you to the rhythm, structure, and essential vocabulary of the modern world.
//               </p>
//               <p className="overview-description">
//                 Through our signature "Atelier Method," students engage with simplified editorial content—news snippets, classic literature summaries, and professional dialogues—ensuring that even at the earliest stages, your learning feels sophisticated and relevant.
//               </p>
//             </div>
//             <div className="who-for-card">
//               <h3 className="who-for-title" style={{ color: theme.primary }}>Who This Course Is For</h3>
//               <ul className="who-for-list">
//                 {course.whoIsFor.map((item, index) => (
//                   <li key={index}>
//                     <span className="material-symbols-outlined" style={{ color: theme.primary }}>circle</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </section>

//           {/* Training Formats */}
//           <section className="training-section">
//             <h2 className="section-title">Training Formats</h2>
//             <div className="training-grid">
//               <div className="training-card" style={{ backgroundColor: `${theme.tertiaryContainer}30` }}>
//                 <div className="training-icon" style={{ backgroundColor: `${theme.primary}10` }}>
//                   <span className="material-symbols-outlined" style={{ color: theme.primary }}>person_search</span>
//                 </div>
//                 <h3 className="training-title">{course.trainingFormats.oneToOne.title}</h3>
//                 <p className="training-description">{course.trainingFormats.oneToOne.description}</p>
//                 <div className="training-tag" style={{ color: theme.primary }}>
//                   <span>{course.trainingFormats.oneToOne.tag}</span>
//                   <span className="tag-line" style={{ backgroundColor: theme.primary }}></span>
//                 </div>
//               </div>
//               <div className="training-card">
//                 <div className="training-icon" style={{ backgroundColor: `${theme.primary}10` }}>
//                   <span className="material-symbols-outlined" style={{ color: theme.primary }}>groups</span>
//                 </div>
//                 <h3 className="training-title">{course.trainingFormats.group.title}</h3>
//                 <p className="training-description">{course.trainingFormats.group.description}</p>
//                 <div className="training-tag" style={{ color: theme.primary }}>
//                   <span>{course.trainingFormats.group.tag}</span>
//                   <span className="tag-line" style={{ backgroundColor: theme.primary }}></span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Topics Covered */}
//           <section className="topics-section">
//             <h2 className="section-title">Topics Covered</h2>
//             <div className="topics-grid">
//               {course.topics.map((topic, index) => (
//                 <div key={index} className="topic-card">
//                   <div className="topic-icon-wrapper">
//                     <span className="material-symbols-outlined" style={{ color: theme.primary }}>{topic.icon}</span>
//                   </div>
//                   <h4 className="topic-title">{topic.title}</h4>
//                   <p className="topic-description">{topic.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Course Outcome */}
//           <section className="outcome-section">
//             <div className="outcome-wrapper" style={{ backgroundColor: `${theme.primary}10` }}>
//               <div className="outcome-content">
//                 <h2 className="outcome-title">The Outcome</h2>
//                 <p className="outcome-description">{course.outcome}</p>
//                 <div className="outcome-badges">
//                   {course.outcomeBadges.map((badge, index) => (
//                     <div key={index} className="badge">
//                       <span className="material-symbols-outlined" style={{ color: theme.primary }}>verified</span>
//                       <span>{badge}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="outcome-image">
//                 <img src={course.image} alt={course.title} />
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="course-footer">
//         <div className="footer-content">
//           <div>
//             <div className="footer-logo">Linguist Editorial</div>
//             <p className="footer-copyright">© 2024 Linguist Editorial. Focus on Fluency.</p>
//           </div>
//           <div className="footer-links">
//             <a href="#">Academic Integrity</a>
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Excellence</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CourseDetails;