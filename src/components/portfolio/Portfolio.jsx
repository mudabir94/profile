import React from 'react'
import './portfolio.css'
import pfimg1 from '../../assets/portfolio2.jpg'
import pfimg2 from '../../assets/portfolio3.jpg'

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {/* Web development */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
          <img src={pfimg1} alt=""/>
          </div>
          <h3>Title</h3>
          <div className="portforlio_item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href=""className='btn btn-primary' target='_blank'>demo</a>

          </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio