import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from "react-icons/bs"

import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk837t8', 'template_ifi0d3a', form.current, 'xNtU49KrkRvn95Re3')
      .then((result) => {
        e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h2>Email</h2>
            <h5>mudabirahmad1994@gmail.com</h5>
            
            <a href="mailto:mudabirahmad1994@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h2>LinkedIn</h2>
            <h5>Mudabir Ahmad</h5>
            
            <a href="https://www.linkedin.com/in/mudabir-ahmad-42411766/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact