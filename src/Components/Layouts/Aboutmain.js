"use client"
import React from 'react'
import { motion } from "framer-motion"



const Aboutmain = () => {
    return (
        <>
            <div className="section big-55-height over-hide z-bigger">
                <div id="poster_background-about"></div>
                <div id="video-wrap" className="parallax-top">
                    <div className="parallax parallax-top" style={{ backgroundImage: "url('src/img/about.jpg')" }}></div>
                </div>
                <div className="dark-over-pages"></div>
                <div className="hero-center-section pages">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 parallax-fade-top">
                                <motion.div className="hero-text"
                                    initial={{ x: -1500 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: .1, duration: 1 }}
                                >About Us</motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutmain