import React from 'react'
import '../styles/Hero.css'
import Img from "../asset/img1.jpg"

const Hero = () => {
  return (
    <section  className="hero">
    <div className="container">
        <div className="hero__wrapper">

  {/*========Hero Text===========*/}
  <div className="hero__content"  data-aos='zoom-in'>
    <h2  className="section__title"  data-aos='fade-up'  data-aos-duration='2000'>We offer the best <span className="highlights">Gym Service</span>in the world</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae officiis est, aut non accusantium necessitatibus impedit quo explicabo ipsa architecto, 
        ratione earum iure perspiciatis aperiam maxime ab nostrum beatae!</p>
  </div>


{/*=======Home-img==========*/}
<div className="hero__img"  data-aos='flip-left'  data-aos-duration='2000'>
  <img src={Img}   alt="" />

</div>


        </div>
    </div>

    </section>
  )
}

export default Hero