import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  duration?: string;
  level?: string;
  topics?: string[];
}

const Courses: React.FC = () => {
  const navigate = useNavigate();

  const courses: Course[] = [
    {
      id: "basic-english",
      title: "Basic English",
      description: "Start your English journey",
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=80",
      fullDescription: "Learn the fundamentals of English language including grammar, vocabulary, and basic conversation skills. Perfect for beginners who want to build a strong foundation.",
      duration: "8 weeks",
      level: "Beginner",
      topics: ["Alphabet & Pronunciation", "Basic Grammar", "Common Phrases", "Simple Conversations", "Vocabulary Building"]
    },
    {
      id: "daily-communication",
      title: "Daily Communication",
      description: "Enhance your fluency",
      image: "https://images.unsplash.com/photo-1758270705087-76e81a5117bd?w=400&q=80",
      fullDescription: "Master everyday English conversations for various situations. Improve your speaking and listening skills for real-world interactions.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Shopping & Dining", "Travel & Tourism", "Social Interactions", "Telephone Conversations", "Email Writing"]
    },
    {
      id: "interview-preparation",
      title: "Interview Preparation",
      description: "Excel in job interviews",
      image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?w=400&q=80",
      fullDescription: "Prepare for job interviews with confidence. Learn common interview questions, professional vocabulary, and effective communication strategies.",
      duration: "4 weeks",
      level: "Advanced",
      topics: ["Common Interview Questions", "Professional Vocabulary", "Body Language", "Mock Interviews", "Resume Tips"]
    }
  ];

  const handleExploreClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div key={idx} className="course-card">
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
                <button 
                  className="course-btn"
                  onClick={() => handleExploreClick(course.id)}
                >
                  Explore Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;