
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer  className="footer">

       <div className="container">
        <div className="footer__wrapper">
          
        <div className="logo">
                <h2 className="logo__title">AjinoFx</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam iusto delectus, dignissimos, expedita odit obcaecati quaerat,</p>
            </div>

            <div className="footer__box">

            
              <h2 className="footer__title">
                Support
              </h2>
             
             
                <ul>
                  <li><a href="#">Review Policy</a> </li>
                  <li><a href="#">FAQ</a> </li>
                </ul>
            </div>



            <div className="footer__box">

             
                <h2 className="footer__title">
                  Our Company
                </h2>
              
                
                <ul>
                  <li><a href="#">Our program</a> </li>
                  <li><a href="#">Our Plan</a> </li>
                </ul>
            </div>

            
            <div className="footer__box">

            
                <h2 className="footer__title">
                  Viewers Guide
                </h2>
            
                <ul>
                  <li><a href="#">Product</a> </li>
                  <li><a href="#">Product</a> </li>
                </ul>
            </div>


        </div>
       
      </div>
      &copy;All Right Reserved <i>Ajinofx</i> 2023
    </footer>
   
  )
}

export default Footer