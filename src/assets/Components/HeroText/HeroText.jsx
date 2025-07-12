import React from 'react'
import './HeroText.css' // Assuming you have a CSS file for styling
import herotext from '../../Images/MOSESFDO.png'

const HeroText = () => {
  return (
    <div className="HeroText">
        <div className="full-graphic">
        <div className="hero-top-element">
        <p>FULL STACK DEVELOPER</p>
        </div>
        <div className="hero-big-text">
            <img src={herotext} alt="" />
      </div>
      <div className="hero-bottom-element">
      <p className="hero-bottom-left">
        Most Students Pick One Path: Design Or Code. I Chose Both—Three Years Building Real Skills Across AI, Frontend, And Systems Engineering.
      </p>

      <p className="hero-bottom-right">
        モーセ フェルナンド
      </p>
      </div>
      </div>
    </div>
  )
}

export default HeroText