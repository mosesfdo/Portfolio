import React from 'react'
import './App.css'
import animeMe from './assets/Images/anime-me.png'
import LinkedInIcon from './assets/Images/linkedin.svg'
import GitHubIcon from './assets/Images/github.svg'
import aboutImage from './assets/Images/ha.jpg'

function App() {
  return (
    <div className="App">
      <section id="home" className="home-section wrapper">
        <div className="intro-text">
          <div className="intro-text-main">
            <h1 className='name'>Moses D</h1>
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

      <section className="about-section wrapper" id="about">
        <div className="about-img">
          <img src={aboutImage} alt="About Me"  className="about-image"/>
        </div>
        <div className="about-contents">
          <div className="about-header">
          <h2>I'm Moses</h2>
            <p>I design and build because I don’t like stopping at the surface.
                Whether it’s a React UI, a Python backend, or an IoT system — 
                I’m always breaking things down, asking why, and making it all click.

                  Full-stack to me isn’t frontend or backend — it’s the mindset of owning the whole product.
                  If it feels smooth, works fast, and solves the right problem without needing a tutorial, I’ve done my job.</p>
          </div>
          
        <div className="three-section">
          <div className="section-1">
            <h2>Experiences</h2>
            <ul>
              <li>Developed a full-stack web application using React and Node.js</li>
              <li>Contributed to open-source projects on GitHub</li>
              <li>Worked with cross-functional teams to deliver high-quality software</li>
            </ul>
          </div>
          <div className="section-2">
            <h2>Skills</h2>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>  
          <div className="section-3">
            <h2>Contact</h2>
            <p>Feel free to reach out for collaboration or just to say hi!</p>
          </div>
          </div>
        </div>
      

      </section>


    </div>
  )
}

export default App