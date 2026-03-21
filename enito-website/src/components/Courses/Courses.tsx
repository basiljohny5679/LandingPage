import React from 'react';
import './Courses.css';

interface Course {
  title: string;
  description: string;
  image: string;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      title: "Basic English ",
      description: "Start your English journey",
      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=80"
    },
    {
      title: "Daily Communication",
      description: "Enhance your fluency",
      image: "https://images.unsplash.com/photo-1758270705087-76e81a5117bd?w=400&q=80"
    },
   
    {
      title: "Interview Preparation",
      description: "Excel in job interviews",
      image: "https://images.unsplash.com/photo-1770364019741-3518f4f05513?w=400&q=80"
    }
  ];

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;