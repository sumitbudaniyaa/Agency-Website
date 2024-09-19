import { useState } from "react";
import "./hero.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Hero = ({ handleHamburg, isOpen }) => {
  return (
    <div className="herosection" id="home">
      <div className="text-box">
        <p id="relvl">relvl</p>
        <p id="yourbrand">your brand</p>
        <p id="withour">with our</p>
        <div className="text-box-btns">
          <button>Design</button>
          <button>Development</button>
          <button>Branding</button>
          <button>Marketing</button>
        </div>
      </div>

      <div className="img-box">
        <img id="rocketimg" src="rocket-01.png" alt="" />
        <img id="cloudimg" src="cloud-01.png" alt="" />
        <img id="cloudimg1" src="cloud-01.png" alt="" />
      </div>

      {isOpen ? (
        <div className="nav-box">
          <RxCross1 id="close-btn" onClick={handleHamburg} />
          <ul>
            <li><Link to="services" smooth={true} duration={500}>
              Services
            </Link></li>
            <li><Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link></li>
            <li><Link to="about" smooth={true} duration={1500}>
              About
            </Link></li>
            <a
            href="https://drive.google.com/file/d/12j5rSNxa0GJK-whGwBa2ggQi-Lp7VslI/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none" }}
          ><li>Brochure</li></a>
            <RouterLink to="/contact" style={{textDecoration:'none'}}><li>Contact</li></RouterLink>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hero;
