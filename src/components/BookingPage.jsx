import { useNavigate } from 'react-router-dom';

import { BookingForm } from './BookingForm';
import chef from '../assets/images/chef.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import restaurant from '../assets/images/restaurant.jpg';
import useAvailableTimes from '../hooks/useAvailableTimes';

const BookingPage = () => {
  const navigate = useNavigate();
  const { availableTimes, updateTimes } = useAvailableTimes();

  return (
    <>
      <Navbar />
      <div className="booking">
        <div className="booking_container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h2>Find a table for any occasion</h2>
          <div className="booking_images_container">
            <img src={restaurant} alt="Restaurant" />
            <img src={chef} alt="Chef" />
          </div>
          <BookingForm
            updateTimes={updateTimes}
            availableTimes={availableTimes}
            navigate={navigate}
          />
        </div>
      </div>
      <Footer white />
    </>
  );
};

export default BookingPage;
