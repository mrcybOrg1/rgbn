"use client"
import React, { useState } from 'react';
import IMAGES from '@/../public/index';
import RoomsGallery from '@/Components/Layouts/RoomsGallery'
import LuxuryOurRooms from '@/Components/Layouts/LuxuryOurRooms';
import { motion } from "framer-motion"



const AcSingleBed = () => {
    const imgs=[
        {id:0,value: IMAGES.room11},
        {id:1,value: IMAGES.room9},
        {id:2,value: IMAGES.room12},
        {id:3,value: IMAGES.room13},
        {id:4,value: IMAGES.room14},
        {id:5,value: IMAGES.room17},
    ];


    const [sliderData,setSliderData]=useState(imgs[0])
    const handleclick = (index)=>{
        const slider=imgs[index];
        setSliderData(slider);
    }

  return (
    <>
    <RoomsGallery />

    <motion.div className="section padding-top-bottom z-bigger"
    initial= {{opacity:0, scale: 0}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.6}}
    >
	
    <div className="section padding-bottom over-hide">
		<div className="section z-bigger">	

    <div className='flex_row'>
      <div className="container">
        <div className="col-12 mt-2">
        <div className="img-wrap">
      <img src={sliderData.value} height="200" width="400" />
    </div>
    </div>
    
      
    <div className="col-12 mt-4 text-center">
        {
          imgs.map((data,i)=>
          <img key={data.id} src={data.value} onClick={()=>handleclick(i)} height="70" width="100" />
          )
        }
        </div>
        </div>
    </div>
    </div>
    </div>

    
						
    <div className="section z-bigger">		
			<div className="container">
				<div className="row">
					<div className="col-lg-12 mt-4 mt-lg-0">
						<div className="section pt-5">
            <h1 className='text-center padding-bottom-small'>Ac Double Bed</h1>
							<h5>discription</h5>
							<p className="mt-3">This room Available with AC</p>
						</div>
						<div className="section pt-4">
							<div className="row">
								<div className="col-12">
									<h5 className="mb-3">Overview</h5>
								</div>
								<div className="col-lg-6">
									<p><strong className="color-black">Room size:</strong> 47 - 54 sq m</p>	
									<p><strong className="color-black">Occupancy:</strong> Up to 4 adulds</p>	
									<p><strong className="color-black">View:</strong> Sea view</p>	
									<p><strong className="color-black">Smoking:</strong> No smoking</p>	
								</div>	
								<div className="col-lg-6">
									<p><strong className="color-black">Bed size:</strong> King and regular</p>	
									<p><strong className="color-black">Location:</strong> Big room 2nd floor</p>	
									<p><strong className="color-black">Room service:</strong> Yes</p>	
									<p><strong className="color-black">Car Parking:</strong> Yes</p>	
								</div>	
							</div>		
						</div>
						<div className="section pt-4">
							<h5>Features</h5>
							<p className="mt-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
						</div>
					</div>
				
				</div>
			</div>					
		</div>
	</motion.div>
			
		<LuxuryOurRooms />



    </>
  )
}

export default AcSingleBed