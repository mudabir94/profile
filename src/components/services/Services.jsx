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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </li>
            <li>
              <RiCheckFill className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              
            </li>
          </ul>

        </article>
        {/*End of Web development */}

      </div>
    </section>
  )
}

export default Services