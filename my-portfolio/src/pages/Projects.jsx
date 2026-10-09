import React from "react";
import "./Projects.css";
import exploremumbai from "../assets/explore mumbai.png";
import todos from "../assets/todos.png";
import hospital from "../assets/hospital.png";
import sweetshop from "../assets/sweetshop.png";
import calculator from "../assets/calculator .png";


const projects = [
  {
    title: "Explore The Beauty of Mumbai",
    desc: "Modern responsive portfolio using React.",
    tech: "React, CSS, JavaScript",
    image: exploremumbai,
    live: "#",
    github: "https://github.com/mamatay22/Explore-the-Beauty-of-Mumbai",
  },
  {
    title: "Todo App",
    desc: "Task management app with local storage.",
    tech: "React, Hooks, CSS",
    image: todos,
    live: "#",
    github: "https://github.com/mamatay22/Todo-App",
  },

   {
    title: "Hospital Website",
    desc: "Modern responsive Hospital using bootstrap.",
    tech: "Bootstrap, CSS, JavaScript",
    image: hospital,
    live: "#",
    github: "https://github.com/mamatay22/Hospital-Website-responsive-",
  },
 
  {
  title: "Sweet Shop Website",
  desc: "A beautiful and responsive sweet shop website showcasing delicious sweets and desserts.",
  tech: "HTML, CSS, JavaScript, Bootstrap",
  image: sweetshop,
  live: "#",
  github: "https://github.com/mamatay22/Sweetshop",
},

  {
    title: "Python Calculator",
    desc: "A simple calculator application with a clean GUI for performing basic arithmetic operations.",
    tech: "Python, Tkinter",
    image: calculator,
    live: "#",
    github: "https://github.com/mamatay22/Modern-Calculator",
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
           <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.desc}</p>

              <h4>{project.tech}</h4>

              <div className="buttons">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;