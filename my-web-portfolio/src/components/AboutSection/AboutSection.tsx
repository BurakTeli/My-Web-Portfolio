import React from "react";
import "../../style/components/AboutSection/AboutSection.css";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <AboutImage />
      <AboutText />
    </section>
  );
};

export default AboutSection;
