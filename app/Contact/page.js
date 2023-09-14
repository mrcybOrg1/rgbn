import React from 'react'
import GetInTouch from '@/Components/GetInTouch.js'
import Amination from '@/Components/Amination.js'



const contact = () => {
  return (
    <>
    <div className="section big-55-height over-hide z-bigger">
	
  <div className="parallax parallax-top" style={{backgroundImage: "url('img/gallery/10.jpg')"}}></div>
  <div className="dark-over-pages"></div>

  <div className="hero-center-section pages">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 parallax-fade-top">
          <div className="hero-text">Get in Touch</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="section padding-top-bottom-smaller background-dark-2 over-hide">		
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">	
        <h5 className="color-grey">A new dimension of luxury.</h5>
        <p className="color-white mt-3 mb-3"><em>our presentation, 0:48 min</em></p>
        <a href="https://vimeo.com/54851233" className="video-button" data-fancybox><i className="fa fa-play"></i></a>
      </div>
    </div>
  </div>	
</div>
    
<GetInTouch />
<Amination />

    </>
  )
}

export default contact