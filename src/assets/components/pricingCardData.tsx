import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
const redCrossIconStyle = {
  color: 'red',
  fontSize: '1.5rem'
};
export const pricingOptions = [
    {
      option: "basic",
      title: "Startup",
      description: "Complete 4 page website design with HTML , CSS , Javascript , React Js only",
      price: "$200.00",
      services: [
        { icon: <FaCheck />, text: "2 pages" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Hosting setup" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "E-commerce functionality" },
        { icon: <FaCheck />, text: "Responsive design" },
        { icon: <RxCross2 style={redCrossIconStyle} />, text: "Payment processing" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Autoresponder integration" },
        { icon: <FaCheck />, text: "Design customization" },

      ],
      servicesTwo: [
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Opt-in form" },
        { icon: <FaCheck />, text: "Source code" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Content upload" },
        { icon: <RxCross2 style={redCrossIconStyle} />, text: "Website Domain" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Speed optimization" },
        { icon: <FaCheck />, text: "Social media icons" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Functional website" },
      ],
      delivery: [
        { icon: <FaRegClock />, text: "2 Days Delivery" },
        { icon: <FaArrowsRotate />, text: "infinity" },
      ],
    },
    {
      option: "standard",
      title: "diamond",
      description: "A standard full stack responsive website using Next JS to make it SEO friendly.",
      price: "$150.00",
      services: [
        { icon: <FaCheck />, text: "2 pages" },
        { icon: <RxCross2  style={redCrossIconStyle}/>, text: "Functional website" },
        { icon: <FaCheck />, text: "Responsive design" },
        { icon: <FaCheck />, text: "Design customization" },
        { icon: <FaCheck />, text: "E-commerce functionality" },
        { icon: <RxCross2 style={redCrossIconStyle} />, text: "Payment processing" },
        { icon: <FaCheck />, text: "Autoresponder integration" },
      ],
      servicesTwo: [
        { icon: <FaCheck />, text: "Opt-in form" },
        { icon: <RxCross2 style={redCrossIconStyle} />, text: "Website Domain" },
        { icon: <FaCheck />, text: "Content upload" },
        { icon: <FaCheck />, text: "Speed optimization" },
        { icon: <RxCross2 style={redCrossIconStyle}  />, text: "Hosting setup" },
        { icon: <FaCheck />, text: "Social media icons" },
        { icon: <FaCheck />, text: "Source code" },
      ],
      delivery: [
        { icon: <FaRegClock />, text: "10 Days Delivery" },
        { icon: <FaArrowsRotate />, text: "unlimited" },
      ],
    },
    {
      option: "premium",
      title: "platinum",
      price: "$400.00",
      description: "Develop complete custom coded Next js And node js  web application",
      services: [
        { icon: <FaCheck />, text: "2 pages" },
        { icon: <FaCheck />, text: "Source code" },
        { icon: <FaCheck />, text: "Responsive design" },
        { icon: <FaCheck />, text: "Design customization" },
        { icon: <FaCheck />, text: "E-commerce functionality" },
        { icon: <FaCheck />, text: "Payment processing" },
        { icon: <FaCheck />, text: "Autoresponder integration" },
      ],
      servicesTwo: [
        { icon: <FaCheck />, text: "Opt-in form" },
        { icon: <FaCheck />, text: "Hosting setup" },
        { icon: <FaCheck />, text: "Content upload" },
        { icon: <FaCheck  />, text: "Website Domain" },
        { icon: <FaCheck />, text: "Speed optimization" },
        { icon: <FaCheck />, text: "Social media icons" },
        { icon: <FaCheck />, text: "Functional website" },
      ],
      delivery: [
        { icon: <FaRegClock />, text: "15 days delivery" },
        { icon: <FaArrowsRotate />, text: "Unlimited Revisions" },
      ],
    },
  ];