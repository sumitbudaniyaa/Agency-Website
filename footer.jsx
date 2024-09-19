import "./footer.css";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <img src="logotext.png" alt="" />
      <a
        href="mailto:contact.relvl@gmail.com"
        style={{ textDecoration: "none" }}
      >
        <p>contact.relvl@gmail.com</p>
      </a>
      <div className="social-links">
        <ul>
          <a
            href="https://www.instagram.com/relvl.in"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li>
              <PiInstagramLogoBold />
            </li>
          </a>
          <li>
            {/* <FiLinkedin /> */}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;