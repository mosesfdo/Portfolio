import React from 'react'
import './App.css'
import animeMe from './assets/Images/anime-me.png'
import LinkedInIcon from './assets/Images/linkedin.svg'
import GitHubIcon from './assets/Images/github.svg'

function App() {
  return (
    <div className="App">
      
      <section id="home" className="home-section wrapper">
        <div className="intro-text">
          <div className="intro-text-main">
            <h1 className='name'>I'm Moses</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className="description">
            <p>
              Most students pick one, design or code. I chose both.
              <br />
              3 years building real skills across AI, frontend, and engineering.
              </p>
          </div>
          <div className="cta-buttons">
            <a href="https://www.linkedin.com/in/mosesfdo" target="_blank" rel="noopener noreferrer">
              <button className="btn">
                <img src={LinkedInIcon} alt="LinkedIn" />
                linkedin
              </button>
            </a>
            <a href="https://github.com/mosesfdo" target="_blank" rel="noopener noreferrer">
              <button className="btn">
                <img src={GitHubIcon} alt="Github" />
                Github
              </button>
            </a>
          </div>
        </div>

        <div>
          <img src={animeMe} alt="Description of image" className="anime-image" />
        </div>


      </section>








    </div>
  )
}

export default App