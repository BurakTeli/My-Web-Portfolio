import React, { useState } from "react";
import "../../style/components/InternshipSection/InternshipCard.css";

interface InternshipCardProps {
  logo: string;
  company: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ logo, company }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="internship-card">
      <img src={logo} alt={company} className="internship-logo" />
      <h3>{company}</h3>

      {/* Toggle Button */}
      <div
        className={`toggle-switch ${isToggled ? "on" : ""}`}
        onClick={() => setIsToggled(!isToggled)}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default InternshipCard;
