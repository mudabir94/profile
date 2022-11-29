import React from 'react'
import './experience.css'

import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
       {/* Frontend */}
        <div className="experience_frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>

            </div>

            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
       
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>

            </div>

            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="experience_backend">
          <h3>Back End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>

              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>

              </article>
            <article className='experience_details'>
         
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div> 
              <h4>Node</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>Django</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>  
              <h4>Python</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience