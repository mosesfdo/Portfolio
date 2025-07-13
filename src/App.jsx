import React from 'react'
import './App.css'
import heroimage from './assets/Images/anime-me.png'
import HeroText from './assets/Components/HeroText/HeroText'
import ProjectCard from './assets/Components/ProjectCard/ProjectCard'

const App = () => {
  return (
    <div className="App">
      <section id="hero" className="hero-section wrapper">
        <div className="hero-text" >
          <HeroText />
        </div>
        <div className="hero-image">
          <img src={heroimage} alt="Hero"  className="anime-img"/>
        </div>
      </section>

      <section id="projects" className="projects-section wrapper">
        <ProjectCard/>
      </section>

    </div>
  )
}

export default App