import React from 'react'
import './App.css'
import HeroBg from './assets/Components/HeroBg/HeroBg'
import heroimg from './assets/Images/hero-img copy.png'
import AboutCard from './assets/Components/AboutCard/AboutCard'
import ProjectCard from './assets/Components/ProjectCard/ProjectCard'


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
        <ProjectCard 
        projecttitle={"Project Title"}
          skill1="Skill 1"
          skill2="Skill 2"
          skill3="Skill 3"
        />
        <ProjectCard 
        projecttitle={"Project Title"}
          skill1="Skill 1"
          skill2="Skill 2"
          skill3="Skill 3"
        />
        <ProjectCard 
        projecttitle={"Project Title"}
          skill1="Skill 1"
          skill2="Skill 2"
          skill3="Skill 3"
        />
      </section>
    </div>
  )
}

export default App