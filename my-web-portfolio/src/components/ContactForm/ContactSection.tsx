import React from "react";
import "../../style/components/ContactSection/ContactSection.css";

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="social-icons">
        <a
          href="https://github.com/BurakTeli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/images/social/Github.png"
            alt="GitHub"
            className="icon-img"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/burak-telli-840468280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/images/social/Linkedin.png"
            alt="LinkedIn"
            className="icon-img"
          />
        </a>
        <a href="mailto:tellibrk216@gmail.com">
          <img
            src="/assets/images/social/Gmail.png"
            alt="Email"
            className="icon-img"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
