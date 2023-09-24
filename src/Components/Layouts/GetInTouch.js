"use client"
import React from 'react'
import { motion } from "framer-motion"


const GetInTouch = () => {
  return (
    <>
<motion.div className="section padding-top z-bigger"
initial= {{opacity:0, scale: 0}}
whileInView={{opacity: 1, scale: 1}}
transition={{duration: 0.6}}
>
		<div className="container">
			<div className="row justify-content-center padding-bottom-smaller">
				<div className="col-md-8">
					<div className="subtitle with-line text-center mb-4">get in touch</div>
					<h3 className="text-center padding-bottom-small">drop us a line</h3>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-4 ajax-form">
					<input name="name" type="text" placeholder="Your Name: *" autocomplete="off"/>
				</div>
				<div className="col-md-4 mt-4 mt-md-0 ajax-form">
					<input name="email" type="text"  placeholder="E-Mail: *" autocomplete="off"/>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-8 mt-4 ajax-form">
					<textarea name="message" placeholder="Tell Us Everything"></textarea>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-8 mt-3 ajax-checkbox">
					<ul className="list">
						<li className="list__item">
							<label className="label--checkbox">
								<input type="checkbox" className="checkbox"/>
								collect my details through this form
							</label>
						</li>
					</ul>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-8 mt-3 ajax-form text-center">
					<button className="send_message" id="send" data-lang="en"><span>submit</span></button>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-8 padding-top-bottom">
					<div className="sep-line"></div>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-6 col-lg-4">
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Address:</p>
						</div>
						<div className="address-in text-right">
							<p>2234 Near Mahila Urban</p>
						</div>
					</div>
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">City:</p>
						</div>
						<div className="address-in text-right">
							<p>Pandharpur</p>
						</div>
					</div>
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Check-In:</p>
						</div>
						<div className="address-in text-right">
							<p>14:00 pm</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-4">
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Phone:</p>
						</div>
						<div className="address-in text-right">
							<p>+91 74983 50445</p>
						</div>
					</div>
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Email:</p>
						</div>
						<div className="address-in text-right">
							<p>amalatul0@gmail.com</p>
						</div>
					</div>
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Check-Out:</p>
						</div>
						<div className="address-in text-right">
							<p>11:00 am</p>
						</div>
					</div>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-8 text-center mt-5" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
					<p className="mb-0"><em>available at: 8am - 10pm</em></p>
					<h2 className="text-opacity">+91 74983 50445</h2>
				</div>
			</div>
			
		</div>	
	</motion.div>



    </>
  )
}

export default GetInTouch