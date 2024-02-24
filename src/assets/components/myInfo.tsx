import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Info: React.FC = () => {
  return (
    <div className="mainInfo">
      <div className="info">
        {/* <h6>welcome to my world</h6> */}
        <h2>Hi I’m</h2>
        <h3>
          <span>hafiz</span>
          <span>Ahmad</span>
        </h3>
        <div className="dot">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          I am a Full Stack Web Developer proficient in both Frontend and
          Backend development. I specialize in developing web applications and
          e-commerce websites using React js , Next js, and  Node js.
        </p>
        <div className="find">
          <a
            href="https://www.instagram.com/hafizdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icons" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <TbBrandFiverr className="icons" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icons" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icons" />
          </a>
        </div>
        <Link className="button" to="/cv">
        View My CV
        </Link>
      </div>
      <div className="box">
        <div className="img">
          <img src="mainImage.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
