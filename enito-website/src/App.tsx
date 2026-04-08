import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import BetterWay from './components/BetterWay/BetterWay';
import CoreValues from './components/CoreValues/CoreValues';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Courses from './components/Courses/Courses';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import BasicEnglish from './components/CourseDetails/BasicEnglish';
import DailyCommunication from './components/CourseDetails/DailyCommunication';
import InterviewPreparation from './components/CourseDetails/InterviewPreparation';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ FIXED POSITION */}

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BetterWay />
                <CoreValues />
                <WhyChoose />
                <Courses />
                <HowItWorks />
                <Testimonials />
                <CTA />
                {/* <Footer /> */}
              </>
            }
          />

          {/* ✅ Keep route naming consistent */}
          <Route path="/course/basic-english" element={<BasicEnglish />} />
          <Route path="/course/daily-communication" element={<DailyCommunication />} />
          <Route path="/course/interview-cracker" element={<InterviewPreparation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;