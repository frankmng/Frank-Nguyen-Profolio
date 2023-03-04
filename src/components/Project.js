import React from "react";
import '../styles/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ title, description, image, projectLink, githubRepo }) {
  return (
    <div className="project">
      <div className="text">
      <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project_links">
        {githubRepo && 
          (<a href={githubRepo} className="link1" target="_blank" rel="noopener noreferrer"> Github <FontAwesomeIcon icon={faSquareGithub} /></a>
          )}
          <a href={projectLink} target="_blank" rel="noopener noreferrer">Website <FontAwesomeIcon icon={faSquareUpRight}  /></a>
        </div>
      </div>
    </div>
  );
}

export default Project;