import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { PiPenNibStraightLight } from "react-icons/pi";
import { IoWifiOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
const Services: React.FC = () => {
  return (
    <>
      <div className="services" id="services">
        <div className="services_text">
          <p>My Services</p>
          <h2>Offerings</h2>
        </div>
        <div className="services_grid">
          <div className="services_box">
            <div className="services_tex">
              <HiCodeBracket className="servicesIcon" />
              <h2>web app</h2>
              <p>
                We offer end-to-end website solutions. From hosting and domain
                registration to crafting custom static, dynamic, and e-commerce
                websites, we've got you covered. Our services include SEO and
                ensuring full responsiveness across devices for an optimal user
                experience.
              </p>
              <a className="button" href="">
                Buy Now
              </a>
            </div>
          </div>
          <div className="services_box">
            <div className="services_tex">
              <PiPenNibStraightLight className="servicesIcon" />
              <h2>ui / ux</h2>
              <p>
                We specialize in crafting exceptional UI/UX designs using Figma
                and Adobe, ensuring seamless user experiences across all
                devices. Once the design is finalized, we will provide you with
                all the necessary assets for easy implementation and maintenance
                .
              </p>
              <a className="button" href="">
                Buy Now
              </a>
            </div>
          </div>
          <div className="services_box">
            <div className="services_tex">
              <RxHamburgerMenu className="servicesIcon" />
              <h2>domain & hosting</h2>
              <p>
                We offer a wide range of domain options, including .com and more
                , Additionally, our hosting services cater to all needs and
                budgets, whether you need shared hosting, VPS, or dedicated
                servers, we will provide you with affordable options to suit
                your needs.
              </p>
              <a className="button" href="">
                Buy Now
              </a>
            </div>
          </div>
          <div className="services_box">
            <div className="services_tex">
              <IoWifiOutline className="servicesIcon" />
              <h2>seo markting</h2>
              <p>
                Our SEO services drive organic traffic by employing proven
                strategies like keyword research,  and link
                building. With our comprehensive approach, we ensure your
                website stays ahead in the digital landscape, attracting more
                visitors and maximizing online presence effectively .
              </p>
              <a className="button" href="">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
