"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import { motion } from "framer-motion"



const Aminities = () => {
  return (
    <>
    	<motion.div className="section padding-top-bottom over-hide"
		initial= {{opacity:0, scale: 0}}
		whileInView={{opacity: 1, scale: 1}}
		transition={{duration: 0.6}}
		>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 align-self-center">
					<div className="subtitle with-line text-center mb-4">Shree Radha Govind Bhakt Niwas</div>
					<h3 className="text-center padding-bottom-small">Unpretentious luxury</h3>
				</div>
				<div className="section clearfix"></div>
				<div className="col-sm-6 col-lg-4">
					<div className="services-box text-center">
						<img src={IMAGES.Aminities1} alt=""/>
						<h5 className="mt-2">smoking free</h5>
						<p className="mt-3">We have available smoking free rooms for our guest</p>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
					<div className="services-box text-center">
						<img src={IMAGES.Aminities2} alt=""/>
						<h5 className="mt-2">king beds</h5>
						<p className="mt-3">Both room has King size beds.</p>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
					<div className="services-box text-center">
					<img src={IMAGES.Aminities3} alt=""/>
						<h5 className="mt-2">24-hour reception</h5>
						<p className="mt-3">Our reception will be available for 24 x 7</p>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
					<div className="services-box text-center">
						<img src={IMAGES.Aminities4} alt=""/>
						<h5 className="mt-2">24-hour security</h5>
						<p className="mt-3">Be fearless becouse we are here for your security.</p>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
					<div className="services-box text-center">
						<img src={IMAGES.Aminities5} alt=""/>
						<h5 className="mt-2">Car hire</h5>
						<p className="mt-3">We have also car hire service</p>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4 mt-5 mt-sm-0">
					<div className="services-box text-center">
						<img src={IMAGES.Aminities6} alt=""/>
						<h5 className="mt-2">Car Parking</h5>
						<p className="mt-3">We have sepreat area for car Parking.</p>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
    </>
  )
}

export default Aminities