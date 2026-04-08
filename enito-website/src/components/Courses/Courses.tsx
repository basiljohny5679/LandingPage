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
      description: "Fundamentals of English",
      image: "https://media.istockphoto.com/id/2147591354/photo/happy-businesswoman-smiling-in-a-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=-N1sBi7kk4oe_PgJ38Y-CyuXqa3vtZZIrhbVBHi_n4k=",
      fullDescription: "Learn the fundamentals of English language including grammar, vocabulary, and basic conversation skills. Perfect for beginners who want to build a strong foundation.",
      duration: "8 weeks",
      level: "Beginner",
      topics: ["Alphabet & Pronunciation", "Basic Grammar", "Common Phrases", "Simple Conversations", "Vocabulary Building"]
    },
    {
      id: "daily-communication",
      title: "Daily Communication",
      description: "Practical English for Daily Use",
      image: "https://plus.unsplash.com/premium_photo-1663051303500-c85bef3f05f6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      fullDescription: "Master everyday English conversations for various situations. Improve your speaking and listening skills for real-world interactions.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Shopping & Dining", "Travel & Tourism", "Social Interactions", "Telephone Conversations", "Email Writing"]
    },
    {
      id: "interview-cracker",
      title: "Interview Cracker",
      description: "Excel in job interviews",
      image: "https://media.istockphoto.com/id/1162354887/photo/businesspeople-handshaking-after-deal-or-interview.jpg?s=612x612&w=0&k=20&c=G4dic7x9xgmnDLB5HwZ-R9ZQOfbQ_hqyIyaHtl23K7M=",
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
    <section id="courses" className="courses-section">
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