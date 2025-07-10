import React, { useState } from "react";
import "../../style/components/InternshipSection/InternshipCard.css";

interface InternshipCardProps {
  logo: string;
  company: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ logo, company }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsToggled(!isToggled);
  };

  return (
    <div className={`internship-card ${isToggled ? "card-flip" : ""}`}>
      <img src={logo} alt={company} className="internship-logo" />
      <h3>{company}</h3>

      {/* Toggle Switch Button */}
      <div
        className={`toggle-switch ${isToggled ? "on" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default InternshipCard;
