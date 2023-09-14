"use client"
import React from 'react'
import VIDEOS from '../public/video/index'
import ChecAvailability from '@/Components/ChecAvailability.js'




const Hero = () => {
  return (
    <>
<div className="section hero-full-height over-hide">
	
    <div id="poster_background"></div>
    <div id="video-wrap" className="parallax-top">
      <video id="video_background" preload="auto" autoplay loop="loop" muted="muted" poster="img/trans.png"> 
        <source src={VIDEOS.heroVideo} type="video/mp4"/> 
      </video>


    </div>
    <div className="dark-over-video"></div>
  
    <div className="hero-center-section ver-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 parallax-fade-top">
            <div className="hero-text-ver-2">For the Joy<br/>of Life</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ChecAvailability />
    
    
    </>
  )
}

export default Hero