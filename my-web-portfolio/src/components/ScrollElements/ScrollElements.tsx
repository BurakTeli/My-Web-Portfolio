import React, { useEffect, useRef, useState } from "react";
import "../../style/components/ScrollElements/ScrollElements.css";

const ScrollElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Section reference
  const [offsetX, setOffsetX] = useState(400); // Start position (right)
  const [hasEntered, setHasEntered] = useState(false); // Animation trigger

  const SPEED = 1800; // Controls movement speed (higher = faster)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Check if the component is visible in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!hasEntered) setHasEntered(true);

        // Calculate visibility percentage
        const visibleRatio = 1 - rect.top / window.innerHeight;

        // Update X position based on scroll
        const offset = SPEED - visibleRatio * SPEED;
        setOffsetX(offset);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasEntered]);

  return (
    <div className="scroll-container" ref={containerRef}>
      <img
        src="/assets/images/Gt3rs.png"
        alt="GT3 RS"
        className={`scroll-image ${hasEntered ? "entered" : ""}`}
        style={{
          transform: `translateX(${offsetX}px)`, // Move image horizontally
        }}
      />
    </div>
  );
};

export default ScrollElements;
