import React from 'react'
import './services.css'
import {RiCheckFill} from 'react-icons/ri'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {/* Web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Front-End Development using React Framework</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Back-End Development using Django, Flask and NodeJS Framework</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Template Customization</p>
            </li>
          </ul>

        </article>
        {/*End of Web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Data Science</h3>
          </div>
          <ul className="service_list">
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Data cleaning and converting raw data to structured data.</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Exploratory Data Analysis</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Python & R Language</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Machine/Deep Learning</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>PowerBI</p>
            </li>
          </ul>

        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Cloud Computing</h3>
          </div>
          <ul className="service_list">
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Docker</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>AWS Services</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>CI/CD Pipeline</p>
            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Github Version Control</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services