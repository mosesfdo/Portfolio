import React from 'react'
import './ProjectCard.css'
import lightbar from '../../Images/lightbar.png'
import arrow from '../../Images/arrow.svg'


const ProjectCard = ({ projecttitle, skill1, skill2, skill3 }) => {
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
            <a href="#">Read More </a>
            <img src={arrow} alt="Arrow" />
        </div>
        </div>
        <img src={lightbar} alt="Project Thumbnail" className="project-thumbnail" />
    </div>
  )
}

export default ProjectCard