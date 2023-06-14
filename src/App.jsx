import React from 'react';
import BlogsPost from './components/BlogPost';
import LandingPage from './components/LandingPage';
import UpcomingEvent from './components/UpcomingEvent';
import JobsPage from './components/JobsPage';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar/>
      <LandingPage/>
      <BlogsPost/>
      <UpcomingEvent/>
      <JobsPage/>
      <Footer/>
    </div>
  );
};

export default App; 