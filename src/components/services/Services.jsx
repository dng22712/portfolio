import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Web Developement</h3>
          </div>
          <ul className=" service__list">
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Developing responsive user interfaces using Bootstrap, Material UI, and Tailwind CSS. 
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Utilizing ES6 features for writing clean and concise JavaScript code.
              </p>
            </li>
           
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Creating reusable React components for building modular and maintainable user interfaces.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Designing and implementing database schemas using MongoDB, SQL, Firebase Firestore.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Implementing RESTful APIs using Node.js to handle requests and responses, also having PHP experience.
              </p>
            </li>
            
            </ul>
         </article>
         <article className="service">
          <div className="service__head">
            <h3>Mobile App Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Implementing complex UI layouts and interactions by combining XML views.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Implementing CRUD operations using Firebase APIs to manage user-generating data. 
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Utilizing Firebase Authentication's methods for email/password authentication.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Developing backend functionality using Kotlin, including data models and business logic.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Implementing data synchronization logic using Kotlin to keep the local app data in sync.
              </p>
            </li>
       
            </ul>
         </article>
            <article className="service">
          <div className="service__head">
            <h3>Data Science and Machine Learning</h3>
          </div>
          <ul className="service__list">
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Cleaning and preprocessing the collecting CSV data to handle missing values.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Visualizing the data using libraries like Matplotlib, Seaborn, or Plotly.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Implementing model training, validation, and evaluation procedures.
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Integrating machine learning pipelines with existing systems or applications. 
              </p>
            </li>
            <li>
               <BiCheck className='service__list-icon'/>
              <p>
              Monitoring model performance and data drift over time, implementing strategies for model accuracy.
              </p>
            </li>
           
          </ul>
        </article>
            
        
      
      </div>
    </section>
  );
};

export default Services;
