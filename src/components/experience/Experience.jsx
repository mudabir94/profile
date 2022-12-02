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
                <h4>HTML & CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* End */}
            {/* <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            {/* End */}
          </div>
        </div>
        {/* Backend */}
        <div className="experience_backend">
          <h3>Back End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div> 
                <h4>Django</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>  
                <h4> MySQL, PostgreSQL, MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* End */}
          </div>
        </div>
        <div className="experience_devops">
          <h3>DevOps</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div> 
                <h4>
                  AWS
                </h4>
                <small className='text-light'>Beginner</small></div>
            </article>
            {/* End */}
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Jenkins</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icons'/>
              <div>  
                <h4>Jira</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
           
            {/* End */}
            {/* End */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience