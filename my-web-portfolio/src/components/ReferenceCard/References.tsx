// References.tsx
// This React component displays a visually rich References section
// adapted from a pure HTML/CSS layout to a JSX-based structure.

import React from "react";
import "../../style/components/References/References.css";

const References: React.FC = () => {
  return (
    <div className="references-wrapper">
      {/* Header Section with Title and Main Image */}
      <header className="references-header">
        <div className="left center-title">
          <h1>Referanlarım</h1>
        </div>

        {/* Author Section becomes 'My References' title only */}
        <div className="author">
          <h3>My References</h3>

          {/* Each image serves as a link to LinkedIn recommendation page */}
          <a
            href="https://www.linkedin.com/in/burak-telli-840468280/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/references/code.png"
              alt="LinkedIn Reference 1"
            />
          </a>

          {/* You can copy and customize more images below for future additions */}
          {/*
          <a href="..." target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/references/another.png" alt="Another Reference" />
          </a>
          */}
        </div>
      </header>

      {/* Visual Banner with Layered Background Effects */}
      <div className="banner">
        <div className="product">
          <div
            className="soda"
            style={{
              ["--url" as any]: "url(/assets/images/references/bg1.png)",
            }}
          ></div>
          <div
            className="soda"
            style={{
              ["--url" as any]: "url(/assets/images/references/bg2.png)",
            }}
          ></div>
        </div>

        <div className="rock">
          <img src="/assets/images/references/rock1.png" alt="Rock 1" />
          <img src="/assets/images/references/rock2.png" alt="Rock 2" />
          <img src="/assets/images/references/rock3.png" alt="Rock 3" />
        </div>
      </div>
    </div>
  );
};

export default References;
