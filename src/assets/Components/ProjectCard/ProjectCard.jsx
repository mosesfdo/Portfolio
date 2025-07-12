
import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ projectImage, overlayContent, description, customWidth }) => {
  const cardStyle = {
    width: customWidth || '400px',
  };
  return (
    <div className="project-card" style={cardStyle}>
      <div className="project-image-container">
        <img className="project-image" src={projectImage} alt="Project" />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <div className="project-title">{overlayContent}</div>
            {description && <div className="project-description">{description}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard