import React from 'react'
import '../styles/Pricing.css'

const Pricing = () => {
  return (
    <section>
        <div className="container"  >
            {/*=======Heading=========*/}
            <div className="pricing__top" data-aos='zoom-in-left'  data-aos-duration='2000'>
                <h2 className="section__title"  >
                    Gym <span className="highlights">Pricing</span> Plan
                </h2>
   <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis voluptatem sint, quos, corrupti quisquam, 
    </p>
            </div>

    <div className="pricing__wrapper">

        <div className="pricing__item" data-aos='zoom-in' data-aos-duration='2000'>
            <div className="pricing__card-top">
                <h2 className="section__title">
                    Regular Member

                </h2>
                <h2 className="pricing section__title">
                    $50 <span  className="pricing__menu">Month<i class='bx bxs-map'></i></span>
                    </h2>
    </div>

<div className="service">
    <ul>
    <li>Active customer service</li>
    <li>24/7 Hour Service</li>
    <li>Customer Support</li>
    <li>Fastest Pyout</li>
    <li>Personal Trainer</li>
    </ul>

    <button className="register__btn">Join Now</button>

</div>

        </div>

        <div className="pricing__item" data-aos='zoom-in'  data-aos-duration='2000'>
            <div className="pricing__card-top">

                <h2 className="section__title">
                    Premium Member

                </h2>
                <h2 className="pricing section__title">
                    $50 <span  className="pricing__menu">Month<i class='bx bxs-map'></i></span>
                    </h2>
    </div>

<div className="service">

    <ul>
    <li>Active customer service</li>
    <li>24/7 Hour Service</li>
    <li>Customer Support</li>
    <li>Fastest Pyout</li>
    <li>Personal Trainer</li>

    </ul>

    <button className="register__btn">Join Now</button>
</div>

        </div>
        

        <div className="pricing__item"  data-aos='zoom-in'  data-aos-duration='2000'>
            <div className="pricing__card-top">
                <h2 className="section__title">
                    Standard Member

                </h2>
                <h2 className="pricing section__title">
                    $50 <span  className="pricing__menu">Month<i class='bx bxs-map'></i></span>
                    </h2>
    </div>

<div className="service">
    <ul>
    <li>Active customer service</li>
    <li>24/7 Hour Service</li>
    <li>Customer Support</li>
    <li>Fastest Pyout</li>
    <li>Personal Trainer</li>
    </ul>

    <button className="register__btn">Join Now</button>

</div>

        </div>
        

    </div>

    
            
        </div>
    </section>
  )
}

export default Pricing