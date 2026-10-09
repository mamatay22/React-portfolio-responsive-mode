import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <span>Welcome to Explore my Portfolio</span>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/Experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>

      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;