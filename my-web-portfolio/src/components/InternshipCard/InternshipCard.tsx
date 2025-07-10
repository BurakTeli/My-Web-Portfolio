import React from "react";
import "../../style/components/InternshipSection/InternshipCard.css";

interface InternshipCardProps {
  logo: string;
  company: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ logo, company }) => {
  return (
    <div className="internship-card">
      <img src={logo} alt={company} className="internship-logo" />
      <h3>{company}</h3>
      <button className="detail-button">Detay</button>
    </div>
  );
};

export default InternshipCard;
