import React from "react";
import "../../style/components/AboutSection/AboutImage.css";
import profileImg from "../../assets/images/Burak.jpeg"; // doğru yol ve uzantı

const AboutImage: React.FC = () => {
  return (
    <div className="about-image">
      <img src={profileImg} alt="Burak Telli" />
    </div>
  );
};

export default AboutImage;
