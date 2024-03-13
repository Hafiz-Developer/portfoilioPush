import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Card from "./card";
const Contact: React.FC = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_text">
          <p>I'll contact you soon</p>
          <h1>contact me</h1>
        </div>
        <div className="contact_info">
          <div className="contact-id">
            <div className="contact-img">
              <img src="contactImage.jpg" alt="" />
            </div>
            <div className="contact-info">
              <h1>hafiz m.ahmad</h1>
              <span>
                <h2>Address :</h2>
                <a
                  
                  href="https://www.google.com/maps/place/Shad+Bagh,+Lahore,+Punjab/@31.6003399,74.3410379,15z/data=!3m1!4b1!4m6!3m5!1s0x39191b0b83c7ea7d:0x51cf9a6d6eb7bbf0!8m2!3d31.6000644!4d74.3396851!16zL20vMDlxMWpz?entry=ttu"
                >
                  92, City Lahore, Shahdara Bagh , P.k
                </a>
              </span>
              <span>
                <h2>phone :</h2>
                <a href="tel:03204052642">03204052642</a>
              </span>
              <span>
                <h2>email :</h2>
                <a href="">ahmaddeveloper122@gmail.com</a>
              </span>
              <div className="findContact">
                <h4>find with me </h4>
                <div className="contactIcons">
                  <a
                    href="https://wa.me/+923193223060?text=Hello! We can help you with building your website ?"
                    
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="icons" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hafiz-ahmad-523a54296/"
                    
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="icons" />
                  </a>
                  <a href=""  rel="noopener noreferrer">
                    <TbBrandFiverr className="icons" />
                    <a
                      href="https://mailto:ahmaddeveloper122@gmail.com"
                      
                      rel="noopener noreferrer"
                    >
                      <MdOutlineMarkEmailRead className="icons" />
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Contact;
