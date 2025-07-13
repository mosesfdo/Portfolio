import React from 'react'
import './App.css'
import heroimage from './assets/Images/anime-me.png'
import HeroText from './assets/Components/HeroText/HeroText'
import ProjectCard from './assets/Components/ProjectCard/ProjectCard'
import aboutimg from './assets/Images/about.webp'
import abouttext from './assets/Images/MOSESD.svg'
import linkedinicon from './assets/Images/linkedin.svg'
import githubicon from './assets/Images/github.svg'
import instagramicon from './assets/Images/instagram.svg'

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

      <section id="about" className="about-section wrapper">
        <div className="about-img">
          <img src={aboutimg} alt="About Me"  className="about-img"/>

          <div className="about-overlay">
            <h2>MosesFdo</h2>
            <p>Sophomore</p>
            <p>Thoothukudi</p>
            <h4>creating projects that make me even lazier.</h4>
            <h5>Always open to learning, collaborating, and building something great. Let’s connect!</h5>
          </div>
        </div>

        <div className="about-text">
          <div className="about-name">
        <img src={abouttext} alt="About Name" className='about-name-img' />
        </div>
        <div className="about-description">
          <p>
            I’m  Moses — a full-stack developer and UI/UX designer based in India. Currently pursuing B.tech degree at karunya institute of technology and science in Coimbatore.
             I love turning ideas into fast, intuitive, and polished digital experiences. With 3+ years of hands-on experience, I’ve built everything from clean React frontends 
             to backend logic in Python always with a focus on performance and simplicity. Currently diving deep into AI engineering, I’m all about building smarter, more human
             -centred tech. Outside of tech, I’m either lifting weights, watching anime, or bringing my ideas to life through digital art and side projects. I’m always learning,
              experimenting, and sharing what I build.
          </p>
        </div>
        <div className="about-buttons">
          <a href="https://github.com/MosesD" target="_blank" rel="noopener noreferrer" className='github-link'>
            <img src={githubicon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/moses-d-123456789/" target="_blank" rel="noopener noreferrer" className='linkedin-link'>
            <img src={linkedinicon} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/MosesD" target="_blank" rel="noopener noreferrer" className='instagram-link'>
            <img src={instagramicon} alt="Instagram" />
          </a>

        </div>

        <div className="about-details">
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React, Node.js, Express</li>
              <li>Python, Django</li>
              <li>UI/UX Design</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            <ul>
              <li>3+ years of experience in web development</li>
              <li>Worked on various projects using React, Node.js, and Python</li>
              <li>Experience in UI/UX design and implementation</li>
              <li>Contributed to open-source projects on GitHub</li>
            </ul>
          </div>

        </div>

        </div>

      </section>
    </div>
  )
}

export default App