import React from 'react'
import'./Header.css'
const Header = () => {
  return (
    <div className='navbar'>
      <div className="left">
       <span>XYZ</span>  INDUSTRIES
      </div>
      <div className="middle">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Property</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="btn1">
            <button>Sign Up</button>
        </div>
        <div className="btn2">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header
