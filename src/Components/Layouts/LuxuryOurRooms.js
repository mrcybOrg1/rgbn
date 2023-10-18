"use client"
import React from 'react'
import OurRooms from './OurRooms'
import { motion } from "framer-motion"


const LuxuryOurRooms = () => {
	return (
		<>
			<motion.div className="section padding-top-bottom over-hide background-grey"
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.2 }}
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 align-self-center">
							<div className="subtitle with-line text-center mb-4">luxury</div>
							<h1 className="text-center padding-bottom-small">Our rooms</h1>
						</div>
						< OurRooms />
					</div>
				</div>
			</motion.div>

		</>
	)
}

export default LuxuryOurRooms