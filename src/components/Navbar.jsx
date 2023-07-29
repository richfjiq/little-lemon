import { ReactComponent as Logo } from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a href="/home">Homepage</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
