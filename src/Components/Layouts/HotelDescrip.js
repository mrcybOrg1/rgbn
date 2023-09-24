"use client"
import React from 'react'
import IMAGES from '@/../public/index'
import CheckAvailability from '@/Components/Ui/CheckAvailabilityButton'
import { motion } from "framer-motion"


const HotelDescrip = () => {
  return (
    <>
    <motion.div className="section padding-top-bottom over-hide"
	initial= {{opacity:0, scale: 0}}
	whileInView={{opacity: 1, scale: 1}}
	transition={{duration: 0.6}}
	>
		<div className="container">
			<div className="row">
				<div className="col-md-6 align-self-center">
					<motion.div className="row justify-content-center"
					initial={{x: -1500}}
					animate={{x:0}}
					transition={{delay:1.2, duration:1}}
					>
						<div className="col-10">
							<div className="subtitle text-center mb-4">Shree Radha Govind Bhakt Niwas</div>
							<h2 className="text-center">Here is a tribute to good life!</h2>
							<p className="text-center mt-5">This is a holy place of <b>Shri.Vitthal & Shri.Rukmini.</b><br/>It is also known as the <b>Southern Kashi of India & Kuldaivat of Maharashtra State.</b> It is located at a distance of 72 kms by road. from Solapur District headquarters. The Pandharpur Railway Station falls on the Miraj-Kurduwadi-Latur railway track.
											The ancient temple of <b>Shri.Vitthal</b> was renovated in 1195 A.D. There are many other temples of Indian Dieties and Mathas <b>(Dharmshalas)</b> of many Saints. The Chandrabhaga <b>(Bhima)</b> river flows through the City. Large number of devotees from all over Maharashtra and surrounding States gather at Pandharpur 
											mainly to celebrate the Aashadhi and Kartiki Ekadashis every year in addition to the regular rush of devotees everyday.
											</p>
											</div>
					</motion.div>
				</div>
				<div className="col-md-6 mt-4 mt-md-0">
					<div className="img-wrap">
						<img src={IMAGES.explore2} alt=""/>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
	
	<motion.div className="section background-grey over-hide"
	initial= {{opacity:0, scale: 0}}
	whileInView={{opacity: 1, scale: 1}}
	transition={{duration: 0.6}}
	>
		<div className="container-fluid px-0">
			<div className="row mx-0">
				<div className="col-xl-6 px-0">
					<div className="img-wrap" id="rev-1">
						<img src={IMAGES.room6} alt=""/>
						<div className="text-element-over">2 Single Bed</div>
					</div>
				</div>
				<div className="col-xl-6 px-0 mt-4 mt-xl-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-10 col-xl-8 text-center">
							<h3 className="text-center">2 Single Bed</h3>
							<p className="text-center mt-4">2 Single Bed with Ac & Non Ac Facaltis Available in Pandharpur</p>
						<CheckAvailability />
						</div>	
					</div>
				</div>
			</div>
			<div className="row mx-0">
				<div className="col-xl-6 px-0 mt-4 mt-xl-0 pb-5 pb-xl-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-10 col-xl-8 text-center">
							<h3 className="text-center">2 Double Bed</h3>
							<p className="text-center mt-4">2 Double Bed with Ac & Non Ac Facaltis Available in Pandharpur</p>
						<CheckAvailability />
						</div>	
					</div>
				</div>
				<div className="col-xl-6 px-0 order-first order-xl-last mt-5 mt-xl-0">
					<div className="img-wrap" id="rev-2">
						<img src={IMAGES.room11} alt=""/>
						<div className="text-element-over">2 Double Bed</div>
					</div>
				</div>
			</div>
		</div>
	</motion.div>
    </>
  )
}

export default HotelDescrip