import React, { useState } from "react";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuFileType2 } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";
import { toast } from "react-toastify";
import { Flip } from "react-toastify";

import axios from "axios";
const Card: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    projectType: "",
    projectBudget: "",
    projectDesc: "",
    googleMeet: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.contactNumber ||
      !formData.email ||
      !formData.projectType ||
      !formData.projectBudget ||
      !formData.projectDesc ||
      !formData.googleMeet
    ) {
      // Display an error toast message if any field is emptyz
      toast.error("Please fill all the input fields.", {
        position: "top-center",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
        transition: Flip,
        className: "custom-toast-one",
      });
      return; // Prevent form submission if any field is empty
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/contact/register",
        formData
      );
      toast.success(
        "Your contact form has been sent to the admin, please contact them promptly from now on.",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "dark",
          className: "custom-toast",
          transition: Flip,
        }
      );
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        projectType: "",
        projectBudget: "",
        projectDesc: "",
        googleMeet: "",
      });
      console.log("Response:", response.data);
      // Optionally, you can handle success (e.g., show a success message)
    }
    catch (error:any) {
      if (error.response && error.response.status === 400) {
        // If the backend returns a 400 status, display the error message to the user
        toast.warning(error.response.data.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "dark",
          transition: Flip,
          className: "custom-toast",
        });
      } else {
        // If there's any other error, display a generic error message
        toast.error(
          "Your contact form couldn't be submitted. Please try again in a few minutes.",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            className: "custom-toast",
            theme: "dark",
            transition: Flip,
          }
        );
      }

      console.error("Error:", error);
      // Optionally, you can handle other errors (e.g., show a generic error message)
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="grid">
          <div className="inputBox">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              
            />
            <RiContactsLine className="i" />
            <span>Full Name</span>
          </div>
          <div className="inputBox">
            <input
              type="number"
              
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            <BsTelephoneForward className="i" />
            <span>Contact No</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              list="browsers"
              id="browser"
              
              name="projectType"
              onChange={handleChange}
              value={formData.projectType}
            />
            <LuFileType2 className="i" />
            <span>Project Type</span>
            <datalist id="browsers">
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
              name="projectBudget"
              id="browser"
              
              onChange={handleChange}
              value={formData.projectBudget}
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
            <input
              type="text"
              
              onChange={handleChange}
              value={formData.email}
              name="email"
            />
            <MdOutlineMarkEmailUnread className="i" />
            <span>Email Address</span>
          </div>
          <div className="google_meet">
            <h2>Schedule a Google Meet</h2>
            <input
              type="datetime-local"
              onChange={handleChange}
              value={formData.googleMeet}
              name="googleMeet"
            />
          </div>
          <div className="inputBox inputbox3">
            <textarea
              cols={30}
              rows={10}
              onChange={handleChange}
              value={formData.projectDesc}
              name="projectDesc"
            ></textarea>
            <FaProjectDiagram className="i" />
            <span>Project Description</span>
          </div>
          <div className="order">
            <button type="submit">
              Send Message <FaArrowRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
