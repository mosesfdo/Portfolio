import React from 'react'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className="nav-logo">
            <h1>mosesfdo</h1>
        </div>

        <div className="floating-nav">
            <div className='nav-buttons'>
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar