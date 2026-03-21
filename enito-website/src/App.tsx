import React from 'react';
import Hero from './components/Hero/Hero';
import BetterWay from './components/BetterWay/BetterWay';
import CoreValues from './components/CoreValues/CoreValues';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Courses from './components/Courses/Courses';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <BetterWay />
      <CoreValues />
      <WhyChoose />
      <Courses />
      <HowItWorks />
      <Testimonials />
      <CTA />
   
    </div>
  );
}

export default App;