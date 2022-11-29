import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Mudabir</a>
    <ul className='parmalink'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    {/* <div className="footer_socials">
      <a href="https://facebook.com"></a>
    </div> */}
    <div className="footer_copyright">
      <small>&copy;Mudabir Ahmad. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer