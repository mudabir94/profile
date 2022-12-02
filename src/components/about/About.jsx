import React from 'react'
import './about.css'
import aboutme from '../../assets/me-about.jpg'
import mypic  from '../../assets/my_pic.jpg'

import {BsAward} from 'react-icons/bs'
import {BsFolderMinus} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={mypic} alt='About'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5> Experience</h5>
              <small> +2 Years </small>
            </article>
            <article className='about_card'>
              <BsFolderMinus className='about_icon'/>
              <h5> Projects</h5>
              <small> 10+ </small>
            </article>
          </div>
          <p>
          I am an enthusiastic software enginer with expertise in
          data science along with a knack for cloud computing. I have experience
          in designing, implementing, automating, and optimizing mission-critical
          deployments onto the AWS stack with considerable experience in machine
          learning/deep learning applications and product development. I am a
          collaborative team player who is enthusiastic to learn new skills in the domain of
          artificial intelligence and information technology.

          </p>
          <a href='#content' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About