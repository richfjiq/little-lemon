import { ReactComponent as Facebook } from '../assets/facebook_white.svg';
import { ReactComponent as Instagram } from '../assets/instagram_white.svg';
import { ReactComponent as TikTok } from '../assets/tiktok_white.svg';
import { ReactComponent as WhatsApp } from '../assets/whatsapp_white.svg';
import footerLogo from '../assets/logo_footer.png';
import footerLogoWhite from '../assets/logo_footer_white.png';

const Footer = ({ white = false }) => {
  return (
    <footer className={white ? 'footer' : 'footer_green'}>
      <div className="footer_container">
        <div className="footer_subcontainer">
          {white ? (
            <img src={footerLogoWhite} alt="Logo" />
          ) : (
            <img src={footerLogo} alt="Logo" />
          )}
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
              <Facebook
                className={`footer_media_icon ${
                  white ? 'footer_media_icon_green' : ''
                }`}
              />
            </li>
            <li>
              <Instagram
                className={`footer_media_icon ${
                  white ? 'footer_media_icon_green' : ''
                }`}
              />
            </li>
            <li>
              <TikTok
                className={`footer_media_icon ${
                  white ? 'footer_media_icon_green' : ''
                }`}
              />
            </li>
            <li>
              <WhatsApp
                className={`footer_media_icon ${
                  white ? 'footer_media_icon_green' : ''
                }`}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
