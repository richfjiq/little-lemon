import { useEffect, useReducer } from 'react';

import { BookingForm } from './BookingForm';
import Footer from './Footer';
import Navbar from './Navbar';
import restaurant from '../assets/restaurant.jpg';
import chef from '../assets/chef.jpg';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return {
        ...state,
        availableTimes: action.payload,
      };
    case 'UPDATE_TIMES':
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const initialState = { availableTimes: [], date: '' };
  const [{ availableTimes, date }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const initializeTimes = (times) => {
    dispatch({ type: 'INITIALIZE_TIMES', payload: times });
  };

  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  useEffect(() => {
    if (date) {
      console.log('running ++++++++++++++++++++');
      fetch('http://localhost:8080/api/availability')
        .then((res) => res.json())
        .then((data) => initializeTimes(data.availableTimes));
    }
  }, [date]);

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
          />
        </div>
      </div>
      <Footer white />
    </>
  );
};

export default BookingPage;
