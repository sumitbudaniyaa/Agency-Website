import "./header.css";
import { RxDragHandleVertical, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = ({handleHamburg}) => {
  return (
    <header>
    <img src="logowhite-01.png" alt="logo" />
    <div className="nav">
      <ul>
      <li> <Link to="home" smooth={true} duration={500}>
              Home
            </Link></li>
      <li> <Link to="services" smooth={true} duration={500}>
              Services
            </Link></li>
      <li> <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link></li>
      <li> <Link to="about" smooth={true} duration={1500}>
              About
            </Link></li>
      <li> <a
            href="https://drive.google.com/file/d/12j5rSNxa0GJK-whGwBa2ggQi-Lp7VslI/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none", color:'white'}}
          >Brochure</a></li>
      </ul>

      <RouterLink to="/contact"><button>Contact</button></RouterLink>
      
    </div>
    <RxHamburgerMenu id="hamburg-icon" onClick={handleHamburg}/>
    </header>
  );
};

export default Header;
