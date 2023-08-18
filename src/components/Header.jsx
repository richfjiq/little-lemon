import { Link } from 'react-router-dom';

import imageFood from '../assets/images/header_food.jpg';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <div className="header_row">
          <div className="header_content">
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <Link aria-label="Link to Booking Page" to={'/booking'}>
              <button>Reserve a Table</button>
            </Link>
          </div>
          <div className="header_image_container">
            <img
              className="header_image"
              src={imageFood}
              alt="restaurant food"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
