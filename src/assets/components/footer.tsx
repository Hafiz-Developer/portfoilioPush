import React from "react";


import { FaArrowUp } from "react-icons/fa";
const Footer: React.FC = () => {
    // const currentYear = new Date().getFullYear();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
      });
    };
  return (
    <>

      <div className="footer">
        <div className="footer-text">
          <h1>hafiz developer</h1>
          <p>  
          © Copyright {currentYear} All Rights Reserved By ahmad iftikhar or hawebteam
          </p>
        </div>
        <div className="arrow-up">
<button type="button" onClick={scrollToTop} >
              <FaArrowUp className='iconsFooter' />
            </button>

        </div>
      </div>
    </>
  );
};

export default Footer;
