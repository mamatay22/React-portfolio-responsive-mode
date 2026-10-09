import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from "./pages/Projects.jsx";
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './Components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  </StrictMode>
)