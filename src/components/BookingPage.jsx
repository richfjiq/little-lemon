import { useEffect, useReducer, useState } from 'react';

import { BookingForm } from './BookingForm';
import Footer from './Footer';
import Navbar from './Navbar';
import restaurant from '../assets/restaurant.jpg';
import chef from '../assets/chef.jpg';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const initialState = { availableTimes: [] };
  const [{ availableTimes }, dispatch] = useReducer(reducer, initialState);
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const onChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateTimes = (times) => {
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  useEffect(() => {
    if (booking.date) {
      fetch('http://localhost:8080/api/availability')
        .then((res) => res.json())
        .then((data) => updateTimes(data.availableTimes));
    }
  }, [booking.date]);

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
            availableTimes={availableTimes}
          />
        </div>
      </div>
      <Footer white />
    </>
  );
};

export default BookingPage;
