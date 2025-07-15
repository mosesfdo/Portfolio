import React from 'react'
import './HeroBg.css'
import heroimage from '../../Images/hero-img.png'

const HeroBg = () => {
  return (
    <div className="hero-bg">
        <div className="hero-img-overlay">
            <img src={heroimage} alt="Hero" />
        </div>

        <div className="big-text">
            <div className="bg-top-element">
                <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="bg-main-element">
                <h1>MOSESFDO</h1>
            </div>
             <div className="bg-bottom-element">
                <p className='bottom-left-element'>
                Most  students  pick one  path  design or code. 
                I chose both 3 years building real skills across AI,
                 frontend, and systems engineering. 
                </p>
                <p className='bottom-right-element'>
                    モーセ フェルナンド
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroBg