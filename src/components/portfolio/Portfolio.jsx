import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id:1,
    image : IMG1,
    title : 'ProAct',
    github : 'https://github.com/dng22712',
    
  },
  {
    id:2,
    image : IMG2,
    title : 'Music Store E-commerce project',
    github : 'https://github.com/dng22712/Music_store',
    
  },
  {
    id:3,
    image : IMG3,
    title : 'Smart Home web application',
    github : 'https://github.com/dng22712/smart-home-web',
   
  },{
    id:4,
    image : IMG4,
    title : 'Stress Detection Sensor Analysis using Data Science',
    github : 'https://github.com/dng22712/Assignment-University-Trials-2202203',
   
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) => {
        return(
          <article key={id} className="portfolio__item">
    <div className="portfolio__item-image">
    <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <div className="portfolio__item-cta">
    <a href={github} className='btn'>Github</a>
   
    </div>
    </article>
        )
      })
    }
    </div>
    </section>
  )
}

export default Portfolio
