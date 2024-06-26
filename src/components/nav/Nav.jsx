import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { MdOutlineSelfImprovement } from "react-icons/md";
import {MdWorkOutline} from "react-icons/md"
import { Link } from 'react-scroll';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100} 
       to="header_container" className= {activeNav === '#header_container' ? 'active' : ''}><AiOutlineHome/>
      </Link>
      <Link 
      activeClass="active" 
       
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100} 
      to="about"  className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></Link>
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100} 
        to="experience"  className={activeNav === '#experience' ? 'active': ''}><FaLaptopCode/></Link>
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100}  to="services"  className={activeNav === '#services' ? 'active': ''}><GrServices/></Link>
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100}  to="portfolio" className={activeNav === '#portfolio' ? 'active': ''}><MdWorkOutline/></Link>
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100}  to="testimonials"  className={activeNav === '#testimonials' ? 'active': ''}><MdOutlineSelfImprovement/></Link>
      
      <Link 
      activeClass="active" 
      
      spy={true} 
      smooth={true} 
      offset={-10} 
      duration={100}  to="contact"  className={activeNav === '#contact' ? 'active': ''}><MdContactMail/></Link>
    </nav>
  )
}

export default Nav
