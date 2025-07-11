import React from "react";
import "../../style/components/Bootcamp/Bootcamp.css";

const Bootcamp = () => {
  return (
    <div className="bootcamp-container">
      <div className="bootcamp-grid">
        {/* Fullstack Bootcamp - with image */}
        <div className="bootcamp-card large-card">
          <div className="bootcamp-content">
            <img
              src="/assets/images/bootcamp/patika.png"
              alt="AI Bootcamp"
              className="bootcamp-image ai-image"
            />
            <div className="bootcamp-text">
              <h3>Fullstack Web Development Bootcamp</h3>
              <p>
                Türkiye’nin en çok tercih edilen bootcamp programlarından birine
                katıldım. 8 ay süren bu yoğun eğitim sürecinde hem frontend hem
                de backend alanlarında 300’den fazla projede aktif olarak görev
                aldım. React, C# ve .NET teknolojileri üzerine yoğunlaşarak bu
                alanlarda ciddi bir tecrübe kazandım.
              </p>
            </div>
          </div>
        </div>

        {/* Frontend Bootcamp - with image only */}
        <div className="bootcamp-card frontend-card">
          <div className="bootcamp-content">
            <img
              src="/assets/images/bootcamp/unnamed.png"
              alt="Frontend Camp"
              className="bootcamp-image frontend-image"
            />
          </div>
        </div>

        {/* .NET Core Bootcamp - with image only */}
        <div className="bootcamp-card netcore-card">
          <div className="bootcamp-content">
            <img
              src="/assets/images/bootcamp/pupilica.png"
              alt=".NET Core Bootcamp"
              className="bootcamp-image netcore-image"
            />
          </div>
        </div>

        {/* Data Analytics Bootcamp - with image only */}
        <div className="bootcamp-card data-card">
          <div className="bootcamp-content">
            <img
              src="/assets/images/bootcamp/global.jpeg"
              alt="Data Analytics"
              className="bootcamp-image data-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
