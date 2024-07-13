import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
        <p>Technologies used: Tech1, Tech2, ...</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
        <p>Technologies used: Tech1, Tech2, ...</p>
      </div>
    </div>
  );
}

export default Projects;
