import React from 'react'
import airBnbLogo from '../images/airbnb-logo.png'
import '../styles/App.css'


const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={airBnbLogo} className="nav--logo"/>
      </nav>
    </div>
  )
}

export default Navbar
