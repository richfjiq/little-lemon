import footerLogo from '../assets/logo_footer.png';
import { ReactComponent as Facebook } from '../assets/facebook_white.svg';
import { ReactComponent as Instagram } from '../assets/instagram_white.svg';
import { ReactComponent as TikTok } from '../assets/tiktok_white.svg';
import { ReactComponent as WhatsApp } from '../assets/whatsapp_white.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_subcontainer">
          <img src={footerLogo} alt="Logo" />
        </div>
        <div className="footer_subcontainer">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer_subcontainer">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer_subcontainer">
          <h3>Social Media</h3>
          <ul>
            <li>
              <Facebook className="footer_media_icon" />
            </li>
            <li>
              <Instagram className="footer_media_icon" />
            </li>
            <li>
              <TikTok className="footer_media_icon" />
            </li>
            <li>
              <WhatsApp className="footer_media_icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
