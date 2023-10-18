"use client"
import React from 'react'
import VIDEOS from '@/../public/video'
import { motion } from "framer-motion"

const Hero = () => {

  return (
    <>
      <div className="section hero-full-height over-hide">
        <div id="poster_background"></div>
        <div id="video-wrap" className="parallax-top">
          <video src={VIDEOS.heroVideo} id="video_background" loading="lazy" muted="muted" type="video/mp4" autoplay="autoplay" loop="loop" class="appl1-hdvd-xx"></video>
        </div>
        <div className="dark-over-video"></div>
        <div className="hero-center-section ver-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 parallax-fade-top">
                <motion.div className="hero-text-ver-2"
                  initial={{ x: -1500 }}
                  animate={{ x: 0 }}
                  transition={{ delay: .5, duration: 1 }}
                  whileHover={{ scale: 1.3 }}
                >
                  Shree Radha Govind Bhakt Niwas
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero