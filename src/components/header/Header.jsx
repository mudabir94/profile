import React from 'react'
import './header.css'
import CTA from './CTA'
import PF from '../../assets/pf.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mudabir Ahmad</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA/>
        <div className='pf'>
          <img src={PF} alt='pf'/>
        </div>
        <HeaderSocials/>
      
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
  )
}

export default Header