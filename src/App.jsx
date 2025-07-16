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

      <section id="about" className="about-section wrapper">
      </section>
      
      <section id="projects" className="projects-section wrapper">
        <img src={lightbar} alt="" />
        <ProjectCard 
        projecttitle={"React Portfolio"}
          skill1="React"
          skill2="JavaScript"
          skill3="CSS"
        />
        <ProjectCard 
        projecttitle={"Temporary Email Generator"}
          skill1="HTML"
          skill2="JavaScript"
          skill3="CSS"
        />
        <ProjectCard 
        projecttitle={"Spotify Music Downloader"}
          skill1="Python"
          skill2="yt-dlp"
          skill3="Custom"
        />
      </section>
    </div>
  )
}

export default App