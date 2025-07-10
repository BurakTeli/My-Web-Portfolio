import React from "react";
import "../../style/components/InternshipSection/InternshipSection.css";

import InternshipCard from "../InternshipCard/InternshipCard";

const internships = [
  { logo: "/assets/images/logos/Atlaspad.jpeg", company: "Atlaspad" },
  { logo: "/assets/images/logos/Otto.jpg", company: "OTTO Games" },
  { logo: "/assets/images/logos/On7.jpeg", company: "ON7 Yazılım" },
  { logo: "/assets/images/logos/Badi.png", company: "Badi Etkinlik" },
  { logo: "/assets/images/logos/Ordulu.jpeg", company: "Ordulu Teknoloji" },
  { logo: "/assets/images/logos/Ventura.jpeg", company: "Ventura Yazılım" },
];

const InternshipSection: React.FC = () => {
  return (
    <section className="internship-section">
      <h2>Staj Deneyimlerim</h2>
      <div className="internship-grid">
        {internships.map((item, index) => (
          <InternshipCard key={index} logo={item.logo} company={item.company} />
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
