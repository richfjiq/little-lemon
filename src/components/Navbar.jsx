import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Basket } from '../assets/icons/basket.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Menu } from '../assets/icons/hamburger_menu.svg';

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
            <NavLink
              aria-label="Homepage"
              className={({ isActive }) =>
                isActive ? 'navbar_link_active' : 'navbar_link'
              }
              to="/"
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="About Us" className="navbar_link" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Menu" className="navbar_link" to="/">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-label="Reservations"
              className={({ isActive }) =>
                isActive ? 'navbar_link_active' : 'navbar_link'
              }
              to="/booking"
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Order Online" className="navbar_link" to="/">
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Login" className="navbar_link" to="/">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
