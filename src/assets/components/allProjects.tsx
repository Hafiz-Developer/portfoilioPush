import React, { useEffect, useState } from "react";
import { FaArrowRight, FaRegHeart, FaHeart } from "react-icons/fa";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to WebSocket server

const Allproject: React.FC = () => {
  const [shuffledProjectData, setShuffledProjectData] = useState<any[]>([]);

  const projectData = [
    {
      projectId: 1,
      projectName: "Project 1",
      projectDescription: "Description for Project 1",
      imageUrl1: "seo.png",
      imageUrl2: "Seo4.png",
      url: "http://example.com/project1",
    },
    {
      projectId: 2,
      projectName: "Project 2",
      projectDescription: "Description for Project 2",
      imageUrl1: "seo.png",
      imageUrl2: "Seo4.png",
      url: "http://example.com/project2",
    },
    {
      projectId: 3,
      projectName: "Project 3",
      projectDescription: "Description for Project 3",
      imageUrl1: "seo.png",
      imageUrl2: "Seo4.png",
      url: "http://example.com/project3",
    },
  ];

  
  useEffect(() => {
    setShuffledProjectData(shuffleArray(projectData));
  }, []);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const useProjectLike = (projectId: number) => {
    const [like, setLike] = useState(() => {
      return localStorage.getItem(`like-${projectId}`) === "true" || false;
    });
    const [likeCount, setLikeCount] = useState(() => {
      return Number(localStorage.getItem(`likeCount-${projectId}`)) || 0;
    });
    const itemId = `uniqueItemId-${projectId}`;

    useEffect(() => {
      // Listen for like count updates from the server
      socket.on("likeCountUpdate", (newLikeCount: number) => {
        setLikeCount(newLikeCount);
      });

      // Fetch initial like count when component mounts
      fetchLikeCount();

      // Clean up socket connection on component unmount
      return () => {
        socket.disconnect();
      };
    }, []);

    const fetchLikeCount = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/like/${itemId}`
        );
        const data = await response.json();
        setLikeCount(data.likeCount);
        setLike(data.userLiked);
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    const handleLikeClick = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/like", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId }),
        });

        const data = await response.json();
        setLikeCount(data.likeCount);
        setLike(true);
        localStorage.setItem(`like-${projectId}`, "true");
        localStorage.setItem(`likeCount-${projectId}`, data.likeCount); // Update like count in localStorage

        // Send the updated like count to the WebSocket server
        socket.emit("likeCountChange", data.likeCount);
      } catch (error) {
        console.error("Error liking item:", error);
      }
    };

    const handleUnlikeClick = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/like/${itemId}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();
        setLikeCount(data.likeCount);
        setLike(false);
        localStorage.setItem(`like-${projectId}`, "false");
        localStorage.setItem(`likeCount-${projectId}`, data.likeCount); // Update like count in localStorage

        // Send the updated like count to the WebSocket server
        socket.emit("likeCountChange", data.likeCount);
      } catch (error) {
        console.error("Error unliking item:", error);
      }
    };

    return { like, likeCount, handleLikeClick, handleUnlikeClick };
  };

  const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
    const { projectId, projectName, projectDescription, imageUrl1, imageUrl2, url } = project;
    const { like, likeCount, handleLikeClick, handleUnlikeClick } =
      useProjectLike(projectId);

    return (
   
       <div className="project-data">
        <div className="project-img">
          <img src={imageUrl1} alt="" />
          <img src={imageUrl2} alt="" />
        </div>
        <div className="project-text">
          <div className="love">
            <h1>{projectName}</h1>
            <div
              className="love2"
              onClick={like ? handleUnlikeClick : handleLikeClick}
            >
              {like ? <FaHeart className="heart" /> : <FaRegHeart />}
              {likeCount}
            </div>
          </div>
          <p>{projectDescription}</p>
          <a href={url}>
            live demo <FaArrowRight />
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mainProject" style={{
        marginTop: '0rem'
      }}>
        {/* Project data */}
        {shuffledProjectData.map((project) => (
          <ProjectItem key={project.projectId} project={project} />
        ))}
      </div>
    </>
  );
};

export default Allproject;
