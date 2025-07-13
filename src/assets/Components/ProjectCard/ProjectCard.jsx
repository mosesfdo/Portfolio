import React from 'react'
import './ProjectCard.css'
import tempmailimg from '../../../assets/Images/tempmail-scrn.png'
import tunegrabimg from '../../../assets/Images/tunegrab-scrn.png'
import reactportfolioimg from '../../../assets/Images/react-portfolio.jpeg'

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="row-one">
        <div className="project-card-image-container projectcard">
          <img src={tempmailimg} alt="TempMail" className="project-image tempmail" />
          <div className="project-card-gradient-overlay"></div>
          <div className="project-card-overlay-content">
            <h3 className="project-card-title">TempMail | <a href="https://github.com/Moses-01/TempMail">View Project </a></h3>
            <p>
              TempMail is a learning-focused temporary email generator
               built with HTML, CSS, and vanilla JavaScript.
            </p>
          </div>
        </div>
        <div className="project-card-image-container projectcard">
          <img src={reactportfolioimg} alt="React Portfolio" className="project-image react-portfolio" />
          <div className="project-card-gradient-overlay"></div>
          <div className="project-card-overlay-content">
            <h3 className="project-card-title">React Portfolio | <a href="https://github.com/Moses-01/React-Portfolio">View Project</a></h3>
            <p>A personal portfolio website built with React to show
               case my projects and skills as a developer.</p>
          </div>
        </div>
      </div>
      <p className='project-content'>"These projects were developed either during my learning process or as part of college coursework."</p>

      <div className="row-two">
        <div className="project-card-image-container projectcard">
          <img src={tunegrabimg} alt="TuneGrab" className="project-image tunegrab" />
          <div className="project-card-gradient-overlay"></div>
          <div className="project-card-overlay-content">
            <h3 className="project-card-title">TuneGrab | <a href="https://github.com/Moses-01/TuneGrab">View Project</a></h3>
            <p>TuneGrab  uses CustomTkinter for the interface, integrates with the Spotify Web API, and handles audio downloads and conversions using yt-dlp and FFmpeg.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard