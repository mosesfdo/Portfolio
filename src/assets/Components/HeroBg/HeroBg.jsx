import React from 'react'
import './HeroBg.css'


const HeroBg = () => {
  return (
    <div className="hero-bg">
        <div className="big-text">
            <div className="bg-top-element">
                <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="bg-main-element noise">
                <h1>MOSESFDO</h1>
            </div>
             <div className="bg-bottom-element">
                <pre className='bottom-left-element'>
                Most  students  pick one  path  design or code. <br />
                I chose both 3 years building real skills across AI,<br />
                 frontend, and systems engineering. 
                </pre>
                <p className='bottom-right-element'>
                    モーセ フェルナンド
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroBg