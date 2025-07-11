import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import animeMe from './assets/Images/anime-me.png'
import LinkedInIcon from './assets/Images/linkedin.svg'
import GitHubIcon from './assets/Images/github.svg'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);
  const [moveSplash, setMoveSplash] = useState(false);
  const splashImgRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    // Start fade out after animation duration
    const popUpDuration = 2200;
    const moveDuration = 1200;
    // After pop up, start move
    const moveTimer = setTimeout(() => {
      setMoveSplash(true);
    }, popUpDuration);
    // After move, hide splash
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, popUpDuration + moveDuration);
    return () => {
      clearTimeout(moveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Calculate transform for splash image to move to hero image
  const [splashTransform, setSplashTransform] = useState('');
  useEffect(() => {
    if (moveSplash && splashImgRef.current && heroImgRef.current) {
      const splashRect = splashImgRef.current.getBoundingClientRect();
      const heroRect = heroImgRef.current.getBoundingClientRect();
      const scaleX = heroRect.width / splashRect.width;
      const scaleY = heroRect.height / splashRect.height;
      const translateX = heroRect.left + heroRect.width / 2 - (splashRect.left + splashRect.width / 2);
      const translateY = heroRect.top + heroRect.height / 2 - (splashRect.top + splashRect.height / 2);
      setSplashTransform(`translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`);
    }
  }, [moveSplash]);

  return (
    <div className="App">
      {showSplash && (
        <div className={`splash-overlay${fadeSplash ? ' splash-fade-out' : ''}`}>
          <img
            src={animeMe}
            alt="Splash anime"
            className={`splash-anime-image${moveSplash ? ' splash-move' : ''}`}
            ref={splashImgRef}
            style={moveSplash && splashTransform ? { transform: splashTransform, transition: 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)' } : {}}
          />
        </div>
      )}
      {!showSplash && (
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
            <img src={animeMe} alt="Description of image" className="anime-image" ref={heroImgRef} />
          </div>
        </section>
      )}
    </div>
  )
}

export default App