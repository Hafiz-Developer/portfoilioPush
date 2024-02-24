import React, { useState } from "react";
import img from "../img/seo.png";
import img2 from "../img/Seo4.png";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Project: React.FC = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (like) {
      setLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <>
      <div className="mainProject" id="project">
        <div className="client-project">
          <p>my Completed Projects</p>
          <h1>Portfolio</h1>
        </div>
        <div className="project-data">
          <div className="project-img">
            <img src={img} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="project-text">
            <div className="love">
            <h1>mbnecom</h1>
            <div className="love2" onClick={handleLikeClick}>
            {like ? <FaHeart className="heart" /> : <FaRegHeart  />}
                {likeCount}
            </div>
            </div>
            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <a href="">
              live demo <FaArrowRight />
            </a>
          </div>
        </div>
     
        <div className="see">
          <a href="">See <span> more projects</span> <MdDoubleArrow className="seIcon"/></a>
        </div>
      </div>
    </>
  );
};

export default Project;
