import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CourseCard from '../../controller/CourseCard';
import CourseSearch from '../../controller/CourseSearch';
function Home() {
  return (
    <>
      <HeroSection />
      <CourseSearch/>
      <CourseCard/>
      <Footer />
    </>
  );
}

export default Home;