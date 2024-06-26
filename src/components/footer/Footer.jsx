import React from 'react'
import './footer.css'
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <footer>
   <a href="#" className='footer__logo'>Dhanush</a>

   <ul className='permalinks'>

   <li><a href="#">Home</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#experience">Experience</a></li>
   <li><a href="#services">Services</a></li>
   <li><a href="#testimonials">Interests</a></li>
   <li><a href="#contact">Contact</a></li>
   </ul>
   <div className="footer__socials">
   <a href="https://facebook.com/dhanush.ngowda.1"> <FaFacebook/> </a>
      <a href="https://www.linkedin.com/in/dhanush-gowda-42a41a1b6/"> <FaLinkedin/> </a>
      <a href="https://github.com/dng22712"><FaGithub/></a>
   </div>
   <div className="footer__copyright">
   <small>&copy; Dhanush WebBio. All rights reserved.</small>
   </div>
   </footer>
  )
}

export default Footer
