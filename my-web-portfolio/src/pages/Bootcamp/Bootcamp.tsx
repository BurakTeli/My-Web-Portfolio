import React from "react";
import "../../style/components/Bootcamp/Bootcamp.css";

const Bootcamp = () => {
  return (
    <div className="bootcamp-container">
      <div className="bootcamp-grid">
        <div className="bootcamp-card large-card">
          <h3>AI Bootcamp</h3>
          <p>
            Completed a full-stack AI bootcamp focused on Python, ML, and
            deployment.
          </p>
        </div>
        <div className="bootcamp-card frontend-card">
          <h3>Frontend Camp</h3>
          <p>React, Tailwind, and GitHub projects.</p>
        </div>
        <div className="bootcamp-card netcore-card">
          <h3>.NET Core Bootcamp</h3>
          <p>Backend architecture, EF Core, REST APIs.</p>
        </div>
        <div className="bootcamp-card data-card">
          <h3>Data Analytics</h3>
          <p>Pandas, Power BI, and visualization techniques.</p>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
