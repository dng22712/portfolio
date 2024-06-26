import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me6.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>
      Hello I Am 
      </h5>
      <h1>Dhanush Nalinikantha Gowda</h1>
      <h5 className="text-light"> Fullstack developer </h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
  <img src={ME} alt="" />   
     </div>
     <a href="#contact" className="scroll_down"> Scroll Down</a>
      </div>
     
    </header>
  )
}

export default Header