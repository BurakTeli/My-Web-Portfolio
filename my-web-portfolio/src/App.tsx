import React from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import InternshipSection from "./components/InternshipSection/InternshipSection";
import ContactSection from "./components/ContactForm/ContactSection";

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <InternshipSection />
      <ContactSection />
    </div>
  );
}

export default App;
