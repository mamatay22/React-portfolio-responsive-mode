import React from "react";
import "./Footer.css";

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Mamata Yadav</h2>

      <p>Frontend Developer | React Developer</p>

      {/* SOCIAL ICONS */}
      <div className="social-icons">

        <a href="https://github.com/mamatay22" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/mamata22" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

       

        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>

      </div>

      <p className="copyright">
        © 2026 Mamata Yadav. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;