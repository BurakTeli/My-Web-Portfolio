import React from "react";
import "../style/components/achievements/achievements.css";

const Achievements = () => {
  return (
    <>
      <header>
        <div className="left">
          <h1>CSS ONLY</h1>
          <img src="/assets/images/Achievements/2.png" alt="Logo" />
        </div>
        <div className="author">
          <h3>LUN DEV</h3>
          <div>
            <p>Design By</p>
            <p>Lun Dev</p>
          </div>
          <div>
            <p>Code By</p>
            <p>Lun Dev</p>
          </div>
          <img src="/assets/images/Achievements/code.png" alt="Code" />
        </div>
      </header>

      <div className="banner">
        <div className="product">
          <div
            className="soda"
            style={
              {
                "--url": `url(/assets/images/Achievements/bg.png)`,
              } as React.CSSProperties
            }
          ></div>
          <div
            className="soda"
            style={
              {
                "--url": `url(/assets/images/Achievements/bg2.png)`,
              } as React.CSSProperties
            }
          ></div>
        </div>

        <div className="rock">
          <img src="/assets/images/Achievements/rock1.jpeg" alt="rock1" />
          <img src="/assets/images/Achievements/rock2.jpeg" alt="rock2" />
          <img src="/assets/images/Achievements/rock3.jpeg" alt="rock3" />
        </div>
      </div>
    </>
  );
};

export default Achievements;
