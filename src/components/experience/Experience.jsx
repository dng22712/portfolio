import React from 'react'
import './experience.css'
import { BiSolidBadgeCheck} from "react-icons/bi";

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
       <div className="experience__frontend">
       <h3>FrontEnd Developement</h3>
       <div className="experience__content">
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon' />
         <div>
         <h4>HTML</h4>
         <small className='text-ligght'>Experienced</small>
         </div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon' />
         <div> <h4>CSS</h4>
         <small className='text-ligght'>Experienced</small></div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon'  />
          <div>
          <h4>Bootstrap</h4>
          <small className='text-ligght'>Experienced</small></div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon'  />
          <div>
          <h4>Material UI</h4>
          <small className='text-ligght'>Experienced</small></div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon' />
          <div><h4>Javascript</h4>
          <small className='text-light'>Experienced</small></div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon'  />
          <div>
          <h4>ReactJS</h4>
          <small className='text-ligght'>Experienced</small></div>
       </article>
       <article className="experience__details">
          <BiSolidBadgeCheck className='experience__details-icon' />
          <div>
          <h4>Angular</h4>
          <small className='text-ligght'>Experienced</small></div>
       </article>
       </div>
       </div>
       <div className="experience__backend">
       <h3>BackEnd Developement</h3>
      <div className="experience__content">
      <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon'/>
     <div> <h4>Node Js</h4>
     <small className='text-ligght'>Intermediete</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon'/>
      <div><h4>Python</h4>
      <small className='text-ligght'>Intermediete</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon'/>
      <div><h4>Kotlin</h4>
      <small className='text-ligght'>Beginner</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon' />
      <div><h4>PHP</h4>
      <small className='text-light'>Intermediete</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon' />
      <div><h4>MongoDB</h4>
      <small className='text-ligght'>Intermediete</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon' />
      <div><h4>MySQL</h4>
      <small className='text-ligght'>Intermediete</small></div>
   </article>
   <article className="experience__details">
      <BiSolidBadgeCheck className='experience__details-icon' />
      <div><h4>Data Science and Analysis</h4>
      <small className='text-ligght'>Beginner</small></div>
   </article>
      </div>
       </div>
    </div>


    </section>
  )
}

export default Experience
