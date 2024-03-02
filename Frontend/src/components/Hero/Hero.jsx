import React from 'react'
import './Hero.css'
import img1 from './img1.svg'

const Hero = () => {
  return (
    <div>
      <h1> <span className="one">CONNECTING DREAMS TO REALITY  <br /></span> 
<span className="two">YOUR PREMIER <br /> </span> 
<span className="three">REAL ESTATE MARKETPLACE </span></h1> 

    <h3>Where every search ends with a home</h3>

    <div className='btn101'>
        <button className='btn11'>Find Your Home  &rarr;</button>
        <button className='btn21'>List Your Property &rarr;</button>
    </div>
   
    <div className="img1">
<img src={img1} alt="" srcset="" />
</div>
    </div>
  )
}

export default Hero
