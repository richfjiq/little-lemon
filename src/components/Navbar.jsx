import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Menu } from '../assets/hamburger_menu.svg';
import { ReactComponent as Basket } from '../assets/basket.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar_container">
        <Menu className="navbar_menu_icon" />
        <Link to="/">
          <Logo className="navbar_logo" />
        </Link>
        <Basket className="navbar_basket_icon" />
        <ul className="navbar_links_container">
          <li>
            <Link aria-label="Homepage" className="navbar_link" to="/">
              Homepage
            </Link>
          </li>
          <li>
            <a aria-label="About Us" className="navbar_link" href="#about">
              About Us
            </a>
          </li>
          <li>
            <a aria-label="Menu" className="navbar_link" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <Link
              aria-label="Reservations"
              className="navbar_link"
              to="/booking"
            >
              Reservations
            </Link>
          </li>
          <li>
            <a
              aria-label="Order Online"
              className="navbar_link"
              href="#order_online"
            >
              Order Online
            </a>
          </li>
          <li>
            <a aria-label="Login" className="navbar_link" href="#login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
