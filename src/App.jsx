import React from 'react'
import './App.css'
import HeroBg from './assets/Components/HeroBg/HeroBg'
import heroimg from './assets/Images/hero-img copy.png'
import AboutCard from './assets/Components/AboutCard/AboutCard'
import ProjectCard from './assets/Components/ProjectCard/ProjectCard'
import lightbar from './assets/Images/lightbar.png'


const App = () => {
  return (
    <div className="App">
      <section id="hero" className="hero-section wrapper">
        <div className="hero-text" >
          <HeroBg />
        </div>
        <div className="hero-img-container">
          <img src={heroimg} alt="Hero" className="hero-image" />
        </div>
      </section>
      
      <section id="projects" className="projects-section wrapper">
        <div className="project-top-element">
        <p>"These projects were developed either during my learning process or as part of college coursework."</p>
        </div>
        <img src={lightbar} alt="" />
        <ProjectCard 
        projecttitle={"React Portfolio"}
          skill1="React"
          skill2="JavaScript"
          skill3="CSS"
          link="https://github.com/mosesfdo/Portfolio-react"
        />
        <ProjectCard 
        projecttitle={"TempMail"}
          skill1="HTML"
          skill2="JavaScript"
          skill3="CSS"
          link="https://github.com/mosesfdo/TempMail"
        />
        <ProjectCard 
        projecttitle={"TuneGrab"}
          skill1="Python"
          skill2="yt-dlp"
          skill3="Custom"
          link="https://github.com/mosesfdo/tunegrab"
        />
      </section>
    </div>
  )
}

export default App