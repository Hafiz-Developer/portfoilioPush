import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Cvdownload: React.FC = () => {
  const birthdate = new Date("2004-04-25");
  const ageDate = new Date(Date.now() - birthdate.getTime());
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  const startDate = new Date("2022-01-01");
  const currentDate = new Date();
  const durationInMs = currentDate.getTime() - startDate.getTime();
  const years = Math.floor(durationInMs / (1000 * 60 * 60 * 24 * 365)); // Calculate years
  const remainingMonths = Math.floor(
    (durationInMs % (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  ); // Calculate remaining months

  const startDate2 = new Date("2023-04-01");
  const currentDate2 = new Date();
  const durationInMs2 = currentDate2.getTime() - startDate2.getTime();
  const years2 = Math.floor(durationInMs2 / (1000 * 60 * 60 * 24 * 365)); // Calculate years
  const remainingMonths2 = Math.floor(
    (durationInMs % (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  ); // Calculate remaining months

  return (
    <>
      <div className="page-content">
        <div className="firstHead">
          <div className="my-data">
            <div className="imgCover">
              <img src="anthony.jpg" alt="" />
            </div>
            <h2>Hafiz Ahmad Iftikhar</h2>
            <p>BS COMPUTER SCIENCE , WEB DEVELOPER</p>

            <div className="iconMain">
              <div className="iconCv">
                <a
                  href="https://mailto:ahmaddeveloper122@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlineMarkEmailRead className="icons" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hafiz-ahmad-523a54296/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="icons" />
                </a>
                <a
                  href="https://wa.me/+923193223060?text=Hello! We can help you with building your website ?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="icons" />
                </a>
              </div>
            </div>
            <div className="buttonCv">
              <button>hire me </button>
              <button>download cv</button>
            </div>
          </div>
        </div>
        <div className="about-cv">
          <div className="aboutCv">
            <h1>about</h1>
            <h2>
              Hello! I am a Full Stack Web Developer proficient in both Frontend
              and Backend development. I specialize in developing web
              applications and e-commerce websites using React js , Next js, and
              Node js.
            </h2>
            <h2>
              I have recently completed my intermediate education and am
              currently pursuing a Bachelor's degree in Computer Science at
              Riphah University. I am currently in my first semester. I am
              proficient in JavaScript, TypeScript, React JS, Next JS, Node JS,
              MongoDB, MySQL, and PostgreSQL, I excel in crafting stunning
              front-end and robust server-side solutions. Elevate your online
              presence with a developer who understands the intricacies of the
              MERN stack. <a href="/">lear more</a>
            </h2>
          </div>
          <div className="info-cv">
            <h1>Basic Information</h1>
            <div className="flex-info">
              <div className="left">
                <h2>age :</h2>
                <h2>EMAIL :</h2>
                <h2>PHONE :</h2>
                <h2>ADDRESS :</h2>
                <h2>LANGUAGE :</h2>
              </div>
              <div className="right">
                <p>{age}</p>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p>ahmaddeveloper122@gmail.com.com</p>
                </a>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p>+92 3204052642</p>
                </a>
                <p>92, City Lahore, Shahdara Bagh , P.k</p>
                <p>HTml , Css , Next Js , Node Js , Mongo Db </p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-skills">
          <div className="education">
            <h2>education :</h2>
            <div className="flexEd">
              <div className="ed">
                <h1>Intermediate Degree in Computer Science (ICS)</h1>
                <p>Civil Line College</p>
                <strong>
                  <SlCalender />
                  2022-2024
                </strong>
              </div>
              <div className="ed">
                <h1>
                  Currently pursuing a bachelor's degree in computer science.
                </h1>
                <p>Riphah University</p>
                <strong>
                  <SlCalender />
                  2024 - Present
                </strong>
              </div>
            </div>
          </div>
          <div className="skills">
            <h2>My skills :</h2>
            <div className="allskills">
              <button type="button">html</button>
              <button type="button">css</button>
              <button type="button">tailwind css</button>
              <button type="button">bootstrap css</button>
              <button type="button">javascript</button>
              <button type="button">react javascript</button>
              <button type="button">next js </button>
              <button type="button">node javascript</button>
              <button type="button">express js</button>
              <button type="button">mongo db</button>
            </div>
          </div>
        </div>
        <div className="workExperience">
          <h1>Work Experience</h1>
          <div className="topMarigin">
            <div className="work">
              <h2>
                Frontend Developer <span>Specialist</span>
              </h2>
              <h4>May, 2015 - Present</h4>
              <div className="projects">
                <span>only Fronted Projects :</span>
                <a href="https://mbnecom.com/">mbnecom.som</a>
                <a href="https://restaurantw.netlify.app/">
                  restaurantw.netlify.app
                </a>
                <a href="https://hcars.netlify.app/">hcars.netlify.app</a>
              </div>
              <p>
                In the {years > 0 && `${years} year${years !== 1 ? "s" : ""}`}{" "}
                {remainingMonths > 0 &&
                  ` ${remainingMonths} month${
                    remainingMonths !== 1 ? "s" : ""
                  }`}{" "}
                . I have been working as a frontend developer at Creative
                Agency. My responsibilities include developing responsive and
                interactive user interfaces using React.js, HTML, and CSS. I
                have contributed to various projects, such as mbnecom.com,
                restaurantw.netlify.app, and hcars.netlify.app. These projects
                showcase my expertise in frontend development and demonstrate my
                ability to deliver high-quality web applications.
              </p>
            </div>
            <div className="work">
              <h2>
                Backend Development <span>Specialist</span>{" "}
              </h2>
              <h4>May, 2015 - Present</h4>
              <div className="projects">
                <span>Dynamic Website Projects :</span>
                <a href="https://hafizdeveloper.com/">hafizdeveloper.som</a>
                <a href="https://www.seotoolers.com/">.seotoolers.som</a>
              </div>
              <p>
                In the{" "}
                {years2 > 0 && `${years2} year${years2 !== 1 ? "s" : ""}`}{" "}
                {remainingMonths2 > 0 &&
                  ` ${remainingMonths2} month${
                    remainingMonths2 !== 1 ? "s" : ""
                  }`}{" "}
                . As a backend developer, I have worked on dynamic website
                projects, including hafizdeveloper.com and seotoolers.com. In
                this role, I have implemented server-side logic, database
                integration, and API development using technologies such as
                Node.js, Express.js, and MongoDB. I have collaborated with
                frontend developers to deliver seamless user experiences and
                ensure the functionality and performance of web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="References">
          <h1>References</h1>
          <div className="flex-r">
            <div className="card">
              <div className="references-img">
                <div className="img">
                  <img src="anthony.jpg" alt="" />
                </div>
                <div className="text-references">
                  <h3>AIYANA</h3>
                  <p>CEO / Web Design Company</p>
                </div>
              </div>
              <h6>
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </h6>
            </div>
            <div className="card">
              <div className="references-img">
                <div className="img">
                  <img src="anthony.jpg" alt="" />
                </div>
                <div className="text-references">
                  <h3>AIYANA</h3>
                  <p>CEO / Web Design Company</p>
                </div>
              </div>
              <h6>
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cvdownload;
