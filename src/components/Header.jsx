import { Link } from 'react-router-dom';
import imageFood from '../assets/header_food.jpg';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link to={'/booking'}>
            <button>Reserve a Table</button>
          </Link>
        </div>
        <img
          className="header_image"
          src={imageFood}
          alt="restaurant food"
          loading="lazy"
        />
      </div>
    </header>
  );
};

export default Header;
