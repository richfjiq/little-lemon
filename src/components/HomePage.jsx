import { useEffect } from 'react';

import About from './About';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navbar from './Navbar';
import Testimonials from './Testimonials';

const HomePage = () => {
  // awake the API hosted on heroku
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/availability`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

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
