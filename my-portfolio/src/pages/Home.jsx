import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import mamtaimg from "../pages/mamtaimg.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="home-left">

        <h1 className="typing">Frontend Developer</h1>

        <h2>
          Hi, I'm <span>Mamta Yadav</span>
        </h2>

        <h2>
          I create modern, responsive and interactive websites using React and JavaScript
        </h2>

        <p>
          Welcome to my portfolio. Here you can explore my projects and skills.
        </p>

        <button onClick={() => navigate("/projects")}>
          Explore My Work
        </button>

      </div>

      <div className="home-right">
        <img src={mamtaimg} alt="profile" className="profile-img" />
      </div>

    </div>
  );
}

export default Home;