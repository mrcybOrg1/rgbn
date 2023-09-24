"use client"
import React from 'react'
import GetInTouch from '@/Components/Layouts/GetInTouch.js'
import { motion } from "framer-motion"


const contact = () => {
  return (
    <>
    <div className="section big-55-height over-hide z-bigger">
  <div className="parallax parallax-top" style={{backgroundImage: "url('src/img/1.jpg')"}}></div>
	
  <div className="dark-over-pages"></div>

  <div className="hero-center-section pages">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 parallax-fade-top">
          <motion.div className="hero-text"
          initial={{x: -1500}}
          animate={{x:0}}
          transition={{delay:.5, duration:1}}
          >Get in Touch</motion.div>
        </div>
      </div>
    </div>
  </div>
</div>
<GetInTouch />
    </>
  )
}

export default contact