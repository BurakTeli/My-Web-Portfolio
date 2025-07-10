import React from "react";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to Burak Telli's Portfolio</h1>
        <p>This section will display dynamic content later.</p>
      </main>
    </div>
  );
}

export default App;
