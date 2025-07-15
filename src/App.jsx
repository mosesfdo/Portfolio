import React from 'react'
import './App.css'
import HeroBg from './assets/Components/HeroBg/HeroBg'
import heroimage from './assets/Images/hero-img copy.png'
import AboutCard from './assets/Components/AboutCard/AboutCard'


const App = () => {
  return (
    <div className="App">
      <section className='hero-section wrapper'>
        <div className="hero-img-overlay">
          <img src={heroimage} alt="hero image" className='hero-img'/>
        </div >
      <div className='hero-bg-container'>
      <HeroBg />
      </div>
      </section>

    </div>
  )
}

export default App