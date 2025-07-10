import React from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import InternshipSection from "./components/InternshipSection/InternshipSection";
import ContactSection from "./components/ContactForm/ContactSection";
import ScrollElements from "./components/ScrollElements/ScrollElements";

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <InternshipSection />
      <ScrollElements />
      <ContactSection />
    </div>
  );
}

export default App;
