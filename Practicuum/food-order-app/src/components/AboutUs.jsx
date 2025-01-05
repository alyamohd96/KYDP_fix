import bgPhoto from "../assets/Appbar-photo.jpg";
import "../style/AboutUs.css";
import React from 'react';


const AboutUs = () => {

  return (
    <div>
        <div className="banner">
            <img src={bgPhoto} alt="Banner" className="banner-image"/>
        </div>
        <div className="center-banner">
          <h1 className="marquee">YOU'RE GOING TO FALL IN LOVE</h1>            
        </div>
    </div>
  );
};

export default AboutUs;