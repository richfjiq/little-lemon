import { useState } from 'react';

import { BookingForm } from './BookingForm';
import Footer from './Footer';
import Navbar from './Navbar';
import restaurant from '../assets/restaurant.jpg';
import chef from '../assets/chef.jpg';

const BookingPage = () => {
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    guests: 0,
    occasion: '',
  });

  console.log({ booking });
  const onChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            onChange={onChange}
            date={booking.date}
            tine={booking.time}
            guests={booking.guests}
            occasion={booking.occasion}
          />
        </div>
      </div>
      <Footer white />
    </>
  );
};

export default BookingPage;
