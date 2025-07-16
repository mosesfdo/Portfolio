import React from 'react'
import './ProjectCard.css'
import lightbar from '../../Images/lightbar.png'
import arrow from '../../Images/arrow.svg'

import { useState } from 'react';

const ProjectCard = ({ projecttitle, skill1, skill2, skill3, projectDescription }) => {
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="project-card">
      <div className="project-card-contents">
        <div className="left-elements">
          <h3 className="project-title">{projecttitle}</h3>
          <div className="skills">
            <ul>
              <li>{skill1}</li>
              <li>{skill2}</li>
              <li>{skill3}</li>
            </ul>
          </div>
        </div>

        <div className="right-elements">
          <a href="#" onClick={handleReadMore}>Read More </a>
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
      <img src={lightbar} alt="Project Thumbnail" className="project-thumbnail" />

      {showModal && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="modal-content" style={{
            background: '#f0f0f0',
            padding: '30px',
            borderRadius: '12px',
            minWidth: '300px',
            maxWidth: '90vw',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            <button onClick={handleCloseModal} style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}>&times;</button>
            <h2>{projecttitle}</h2>
            <p>{projectDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard