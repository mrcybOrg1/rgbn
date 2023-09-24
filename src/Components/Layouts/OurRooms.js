"use client"
import React from 'react'
import Rooms from '@/Components/Ui/Rooms'
import roomdata from '@/../public/roomdata'
import { motion } from "framer-motion"


const OurRooms = () => {
	return (
		<>
			<motion.div className="section padding-top-bottom over-hide background-grey"
			initial= {{opacity:0, scale: 0}}
			whileInView={{opacity: 1, scale: 1}}
			transition={{duration: 0.6}}
			>
				<div className="container">
				<div className="row justify-content-center">
				{roomdata.map((val) =>(
				<Rooms name= {val.name}
				description= {val.description}
				price= {val.price}
				src= {val.src}
				roomlink= {val.roomlink}
				/>
				))}
				</div>		
				</div>
			</motion.div>
		</>
	)
}

export default OurRooms