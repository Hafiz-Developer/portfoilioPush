import React from "react";
const About: React.FC = () => {
  return (
    <>
      <div className="about" id="about">
        <img src="/about.png" alt="" />
        <div className="about_text">
          <div className="client-about">
            <p>Educational Background</p>
            <h1>About Me</h1>
          </div>
          <p>
            I have recently completed my intermediate education and am currently
            pursuing a Bachelor's degree in Computer Science at Riphah
            University. I am currently in my first semester. I am proficient in
            JavaScript, TypeScript, React JS, Next JS, Node JS, MongoDB, MySQL,
            and PostgreSQL, I excel in crafting stunning front-end and robust
            server-side solutions. Elevate your online presence with a developer
            who understands the intricacies of the MERN stack.
          </p>
          <a href="https://www.linkedin.com/in/hafiz-ahmad-523a54296/">
          <button type="button">hire me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
