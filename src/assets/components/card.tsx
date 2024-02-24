import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuFileType2 } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";
const Card: React.FC = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="grid">
          <div className="inputBox">
            <input type="text" required />
            <RiContactsLine className="i" />
            <span>Full Name</span>
          </div>
          <div className="inputBox">
            <input type="number" required />
            <BsTelephoneForward className="i" />
            <span>Contact No</span>
          </div>
       
          <div className="inputBox">
            <input
              type="text"
              list="browsers"
              name="browser"
              id="browser"
              required
            />
            <LuFileType2 className="i" />
            <span>Project Type</span>
            <datalist id="browsers" >
              <option value="Static Website" />
              <option value="Dynamic Website" />
              <option value="E-commerce Website" />
              <option value="Portfolio Site" />
              <option value="Landing Page" />
              <option value="Blog" />
              <option value="Website Modifications" />
            </datalist>
          </div>
          <div className="inputBox">
            <input
              type="text"
              list="browserss"
              name="browser"
              id="browser"
              required
            />
            <GiTakeMyMoney className="i" />
            <span>Project Budget</span>
            <datalist id="browserss">
              <option value="$70" />
              <option value="$100" />
              <option value="$200" />
              <option value="$300" />
              <option value="$500" />
              <option value="$1000" />
              <option value="$1500" />
            </datalist>
          </div>
        </div>
        <div>
          <div className="inputBox inputbox3">
            <input type="text" required />
            <MdOutlineMarkEmailUnread className="i" />
            <span>Email Address</span>
          </div>
          <div className="google_meet">
            <h2>Schedule a Google Meet</h2>
            <input type="datetime-local" />
          </div>
          <div className="inputBox inputbox3">
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <FaProjectDiagram className="i" />
            <span>Project Description</span>
          </div>
          <div className="order">
          <button type="button">
           Send Message <FaArrowRight />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
