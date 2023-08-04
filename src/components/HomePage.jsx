import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Testimonials from './Testimonials';
import About from './About';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
