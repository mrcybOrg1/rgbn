"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import { motion } from "framer-motion"

const RoomsGallery = () => {
	return (
		<>
			<div className="section big-55-height over-hide">
				<div className="parallax parallax-top" style={{ backgroundImage: "url('src/img/move-img.jpg')" }}></div>
				<div className="dark-over-pages"></div>
				<div className="hero-center-section pages">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 parallax-fade-top">
								<motion.div className="hero-text"
									initial={{ x: 1500 }}
									animate={{ x: 0 }}
									transition={{ delay: .5, duration: 1 }}
								>Rooms Gallery</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<motion.div className="section background-dark padding-top-bottom-smaller over-hide"
				initial={{ x: -1500 }}
				animate={{ x: 0 }}
				transition={{ delay: 1.2, duration: 1 }}
			>
				<div className="section z-bigger">
					<div className="container">
						<div className="row">
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
								<div className="amenities">
									<img src={IMAGES.Aminities8} alt="" />
									<p>no smoking</p>
								</div>
							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
								<div className="amenities">
									<img src={IMAGES.Aminities9} alt="" />
									<p>big beds</p>
								</div>
							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-md-0">
								<div className="amenities">
									<img src={IMAGES.Aminities3} alt="" />
									<p>24-Hour Reception</p>
								</div>
							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
								<div className="amenities">
									<img src={IMAGES.Aminities10} alt="" />
									<p>24-Hour Security</p>
								</div>
							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
								<div className="amenities">
									<img src={IMAGES.Aminities5} alt="" />
									<p>Car Hire</p>
								</div>
							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
								<div className="amenities">
									<img src={IMAGES.Aminities6} alt="" />
									<p>Car Parking</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default RoomsGallery