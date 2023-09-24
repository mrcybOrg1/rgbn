"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import Link from 'next/link'
import { motion } from "framer-motion"


const footer = () => {
  return (
    <>
	<motion.div 
	initial= {{opacity:0, scale: 0}}
	whileInView={{opacity: 1, scale: 1}}
	transition={{duration: 0.6}}
	>
	<div className="section padding-top-bottom-small background-black over-hide footer">
		<div className="container">
			<div className="row">
				<div className="col-md-3 text-center text-md-left">
					<h1>logo</h1>
					{/* <img src={IMAGES.logo} alt=""/> */}
					<p className="color-grey mt-4">2234, Near Mahila Urban Bank,<br/>Opp.to sant Muktabai Mandir,<br/>Datt Ghat,Pandharpur, Maharashtra 413304</p>
				</div>
				<div className="col-md-4 text-center text-md-left">
					<h6 className="color-white mb-3">information</h6>
					<Link href="/">Home</Link>
					<Link href="/Rooms">Rooms</Link>
					<Link href="/Explore">ExploreCity</Link>
					<Link href="/About">About</Link>
					<Link href="/Contact">Contact</Link>
				</div>
				<div className="col-md-5 mt-4 mt-md-0 text-center text-md-left logos-footer">
					<h6 className="color-white mb-3">about us</h6>
					<p className="color-grey mb-4">Established in the year 2015, Shree Radha Govind Bhakt Niwas in Pandharpur Bus Stand, Pandharpur is a top player in the category Hotels in the Pandharpur.</p>
				</div>
			</div>	
		</div>	
	</div>
	
	<div className="section py-4 background-dark over-hide footer-bottom">
		<div className="container">
			<div className="row">
				<div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
					<p>2023 © Krafitech All rights reserved.</p>
					<p>Build with ❤️ from Krafitech</p>
				</div>
				<div className="col-md-6 text-center text-md-right">
					<a href="#" className="social-footer-bottom">facebook</a>
					<a href="#" className="social-footer-bottom">twitter</a>
					<a href="#" className="social-footer-bottom">instagram</a>
				</div>
			</div>	
		</div>		
	</div>
	</motion.div>
    </>
  )
}

export default footer