import React, { useState } from 'react'
import './nav.css'
export default function Nav() {
  const [Toggle, SetToggle] = useState(false)

  return (
    <nav className="navbar desktop" >
      <h4 className='nav-logo' >webdev.dhanji</h4>
      <div className="nav-list">
        <a href="#Home" className='active'>Home</a>
        <a href="#About">About</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="mobile-view">
        {Toggle ?
          <i className="fa-solid fa-xmark humberger" style={{zIndex:"99"}} onClick={() => SetToggle(false)} />
          : <i className="fa-solid fa-bars humberger" style={{zIndex:"99"}} onClick={() => SetToggle(true)} />
        }
        {
          Toggle && (
            <div className="white scale-up-center">
              <a href="#Home"onClick={()=>SetToggle(false)}>Home</a>
              <a href="#About"onClick={()=>SetToggle(false)}>About</a>
              <a href="#Project"onClick={()=>SetToggle(false)}>Project</a>
              <a href="#Contact"onClick={()=>SetToggle(false)}>Contact</a>
            </div>
          )
        }
      </div>




    </nav>
  )
}
