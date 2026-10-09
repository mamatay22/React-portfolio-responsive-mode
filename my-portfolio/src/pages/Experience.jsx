import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">

      <h1>Experience</h1>

      {/* BOX 1 */}
      <div className="exp-card">

        <h2>Explore The Beauty of Mumbai</h2>
        <h4>HTML, CSS, JavaScript</h4>

        <p>
          Developed a responsive travel website showcasing the beauty of Mumbai
          using HTML, CSS, and JavaScript.
        </p>

        <p>
          Focused on clean UI design, proper layout structure, and navigation.
        </p>

        <p>
          Improved skills in responsive design, positioning, and frontend development.
        </p>

      </div>

      {/* BOX 2 */}
      <div className="exp-card">

        <h2>Todo App</h2>
        <h4>React, Hooks, Local Storage</h4>

        <p>
          Built a dynamic Todo application using React and Hooks.
        </p>

        <p>
          Implemented add, delete, and store tasks functionality using local storage.
        </p>

        <p>
          Strengthened knowledge of state management and component-based architecture.
        </p>

      </div>

      {/* BOX 3 */}
      <div className="exp-card">

        <h2>Hospital Website</h2>
        <h4>Bootstrap, CSS, JavaScript</h4>

        <p>
          Created a responsive hospital website using Bootstrap framework.
        </p>

        <p>
          Focused on professional UI design, grid system, and mobile responsiveness.
        </p>

        <p>
          Improved understanding of layout structuring and real-world website design.
        </p>

      </div>

    </div>
  );
}

export default Experience;