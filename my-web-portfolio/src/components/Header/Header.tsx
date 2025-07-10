import React from 'react';
import '../../style/components/Header/Header.css';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      {/* Logo area */}
      <div className="logo">Burak Telli</div>

      {/* Navigation links */}
      <nav className="nav-links">
        <a href="#about">Hakkımda</a>
        <a href="#projects">Projelerim</a>
        <a href="#internships">Stajlarım</a>
        <a href="#references">Referanslarım</a>
        <a href="#contact">İletişim</a>
      </nav>
    </header>
  );
};

export default Header;
