// Projects.tsx
// This React component creates a 3D rotating image carousel with a centered title.
// Images are dynamically generated from the /assets/images/projects folder.

import React from "react";
import "../style/components/ProjectCard/ProjectCard.css";

// Number of images to include in the carousel
const imageCount = 10;

const Projects: React.FC = () => {
  return (
    <div className="banner">
      {/* 3D rotating image slider container */}
      <div className="slider" style={{ ["--quantity" as any]: imageCount }}>
        {/* Dynamically render 'imageCount' number of images */}
        {Array.from({ length: imageCount }, (_, i) => (
          <div
            key={i}
            className="item"
            style={{ ["--position" as any]: i + 1 }}
          >
            <img
              src={`/assets/images/projects/dragon_${i + 1}.jpg`}
              alt={`Dragon ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Fixed image in the center of the rotating ring */}
      {/* <div className="slider-center-image">
        <img src="/assets/images/BurakP.png" alt="Center Logo" />
      </div> */}

      {/* Static content section at the bottom of the banner */}
      <div className="content">
        {/* Large title displayed in the center */}
        <h1 data-content="Projelerim">Projelerim</h1>

        {/* Author section (currently commented out) */}
        {/* 
        <div className="author">
          <h2>Burak Telli</h2>
          <p>
            <b>Web Developer</b>
          </p>
          <p>
            Explore my creative and technical work through immersive visuals.
          </p>
        </div> 
        */}

        {/* Background model image (purely decorative) */}
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Projects;
