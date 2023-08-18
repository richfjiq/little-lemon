import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Birthday } from '../assets/icons/cake.svg';
import { ReactComponent as Champagne } from '../assets/icons/champagne.svg';
import Footer from './Footer';
import Navbar from './Navbar';

const BookingConfirm = () => {
  const params = useLocation();

  return (
    <>
      <Navbar />
      <div className="booking">
        <div className="booking_container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className="booking_confirm">
            <div className="booking_confirm_container">
              <h1>
                Your booking <br /> has been confirmed.
              </h1>
              <div className="booking_confirm_occasion">
                {params.state.occasion === 'Birthday' ? (
                  <Birthday className="booking_confirm_icon" />
                ) : (
                  <Champagne className="booking_confirm_icon" />
                )}
                <h3>{`Happy ${params.state.occasion}`}</h3>
              </div>
              <div className="booking_confirm_details">
                <h3>{params.state.guests}</h3>
                <h3>{params.state.date}</h3>
              </div>
            </div>
            <Link
              aria-label="Link to Home"
              className="booking_confirm_button"
              to="/"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
      <Footer white />
    </>
  );
};

export default BookingConfirm;
