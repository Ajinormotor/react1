
import React, {useEffect, useRef} from 'react'
import '../../styles/Header.css'


const nav__link = [
    {
      path:'#',
      display:'Home'
    },

    {
        path:'#',
        display:'Product'
      },

      {
        path:'#',
        display:'Review'
      },

      {
        path:'#',
        display:'About'
      },
]

const Header = () => {

const headerRef = useRef(null)

const headerFunc = () => {
if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
{
  headerRef.current.classList.add('sticky__header')
}else{
  headerRef.current.classList.remove('sticky__header')
  
}


}
 
useEffect(()=>{

window.addEventListener('scroll', headerFunc)

 return () => window.removeEventListener('scroll', headerFunc)

},[])


  return (
    <header class="header" ref={headerRef}>
    <div className="container">
        <div className="nav__wrapper">
            {/*========LOGO==========*/}
            <div className="logo">
                <h2>Ajino<span  className="highlight">Gym</span></h2>
            </div>

{/*======Navlink========*/}

<div className="navigation">

<ul  className="menu">
{
nav__link.map(item=>(

    <li className="nav__item">
        <a href={item.path}>{item.display}</a>
    </li>
))

}
</ul>
 </div>
 
 {/*========Button Section=============*/}
     <div className="nav__button">
 <button className='btn'>Register</button>
   </div>

        </div>

    </div>
    </header>
  )
}

export default Header