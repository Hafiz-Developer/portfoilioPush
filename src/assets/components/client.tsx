import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
const Client: React.FC = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const openPopup = () => {
    const overlay: HTMLElement | null = document.getElementById("popup1");
    if (overlay) {
      overlay.style.visibility = "visible";
      overlay.style.opacity = "1";
    }
  };
  const closePopup = () => {
    // Your closePopup2 function implementation here
    const overlay = document.getElementById("popup1");
    if (overlay) {
      overlay.style.visibility = "hidden";
      overlay.style.opacity = "0";
    }
  };
const client = [
    {
        clientImg : 'https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/247929685_579726496572647_4337561081330159885_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFMMTC1w2Bh1jRiN8jXiZfEgt2dn6KJaTOC3Z2foolpM8uhv824dIhCGwDr7Oeq3FysJBo85yHtajnSke7_WfoB&_nc_ohc=gTI82Rp4Xp4AX9B41Si&_nc_ht=scontent.flhe3-2.fna&oh=00_AfC2iwzaWotquvWSX3Z9R5s6yuPW-kQuuretkdMXPENxqw&oe=65CED4B9',
        clientName: 'hafiz ahmad',
        clientScreen: 'https://cdn.pixabay.com/photo/2020/06/25/14/08/whatsapp-5339803_1280.png',
        clientWebsiteName: 'hafizdeveloper.com',
        clientTitle:'web app development',
        clientPlatform:'via up work - mar 4 ,2015 - aug 30 , 2021',
        clientWebsiteLink:'http://localhost:5173/',
        clientRating: 5,
        clientF:"  LoremlaksclANVWE  ipsum dolor sit amet consectetur adipisicing elit Cum  exercitationem blanditiis  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Cum Exercitationem Blanditiis Quo Soluta Commodi Sed Suscipitquo soluta commodi sed suscipit", 
    },
    {
        clientImg : 'https://images.unsplash.com/photo-1633532445251-1c376f9c5291?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTA0NDQ0NHx8ZW58MHx8fHx8',
        clientName: 'hafiz ahmad 2',
        clientWebsiteName: 'mbnecom.com',
        clientTitle:'mobile app development',
        clientScreen: 'https://cdn.pixabay.com/photo/2020/06/25/14/08/whatsapp-5339803_1280.png',
        clientPlatform:'facebook - mar 4 ,2015 - aug 30 , 2021',
        clientWebsiteLink:'http://localhost:youtube,com',
        clientRating: 4,
        clientF:"  LoremlaksclANVWE  ipsum dolor sit amet consectetur adipisicing elit Cum  exercitationem blanditiis  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Cum Exercitationem Blanditiis Quo Soluta Commodi Sed Suscipitquo soluta commodi sed suscipit", 
    }
]
   
useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex((prevIndex) => (prevIndex + 1) % client.length);
    }, 9000); // Change client every 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [client.length]);

  const handleNextClick = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % client.length);
  };

  const handlePrevClick = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex - 1 + client.length) % client.length);
  };
    
      // const renderStars = (rating: number) => {
      //   const stars = [];
      //   for (let i = 0; i < rating; i++) {
      //     stars.push(<FaStar key={i} className="startIcon" />);
      //   }
      //   return stars;
      // };
      const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<FaStar key={i} className="starIcon" />);
          } else {
            stars.push(<CiStar key={i} className="starIcon" />);
          }
        }
        return stars;
      };
      
    
  return (
    <div className="client" id="reviews">
      <div className="clientTitle">
        <p>what client say</p>
        <h1>testimonial</h1>
        <p style={{
            marginTop: '0.7rem'
        }}>total client review {client.length}</p>
      </div>
      <div className="main-client-data">
        <div className="client-id">
          <div className="client-img">
            <img
              src={client[currentUserIndex].clientImg}
              alt=""
            />
          </div>
          <div className="client-info">
            <h2>
              <h3>{client[currentUserIndex].clientName}</h3>
            </h2>
            <h2>
              <span>website : </span> <a href="">{client[currentUserIndex].clientWebsiteName}</a>
            </h2>
          </div>
        </div>
        <div className="client-web-info">
          <div className="client-first">
          <LiaQuoteRightSolid className="hanogutsIcons" />
            <div className="button-right-left">
              <button type="button" onClick={handlePrevClick}>
                <FaArrowLeft className="arrow" />
              </button>
              <button type="button" onClick={handleNextClick}>
                <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
          <div className="client-seocnd">
            <div className="client-info-card">
              <div className="title-work">
                <h1>{client[currentUserIndex].clientTitle}</h1>
                <p>{client[currentUserIndex].clientPlatform}</p>
                <a href="#popup1" onClick={openPopup}>review screenshot</a>
              </div>
         
              <div className="rating">
              {renderStars(client[currentUserIndex].clientRating)}
              </div>
            </div>
            <div className="desec">
              <span>website link : </span>
              <a href={client[currentUserIndex].clientWebsiteLink}> {client[currentUserIndex].clientWebsiteLink}</a>

              <p>
              {client[currentUserIndex].clientF}
              </p>
            </div>
          </div>
        </div>
      </div>
           <div id="popup1" className="overlay">
            <div className="popup">
            <p className="close"  onClick={closePopup}>
              &times;
            </p>
             <img src={client[currentUserIndex].clientScreen} alt="" />
            </div>
          </div>
      <div className="inputButton">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Client;
