import React from 'react'
import './App.css'
import heroimage from './assets/Images/anime-me.png'
import HeroText from './assets/Components/HeroText/HeroText'
import ProjectCard from './assets/Components/ProjectCard/ProjectCard'
import tempmailimg from './assets/Images/tempmail-scrn.png'
import tunegrabimg from './assets/Images/tunegrab-scrn.png'
import reactportfolioimg from './assets/Images/react-portfolio.png'

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
        <div className="row-one">
          <ProjectCard 
          projectImage={tempmailimg} 
          overlayContent="TempMail" 
          description={<p>This is a temporary email service.</p>}
          />
          <ProjectCard 
          projectImage={reactportfolioimg} 
          overlayContent="React Portfolio" 
          description={<p>This is a portfolio website built with React.</p>} 
          width="fit-content"
          height="min-content"
          />
        </div>

        <div className="row-two">
          <ProjectCard 
          projectImage={tunegrabimg} 
          overlayContent="TuneGrab" 
          description={<p>TuneGrab is a music download application.</p>} 
          width="fit-content"
          height="300px"
          />
        </div>
      </section>

      <section id="about" className="about-section wrapper">

      </section>

    </div>
  )
}

export default App