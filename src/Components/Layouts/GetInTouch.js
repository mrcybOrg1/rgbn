"use client"
import React from 'react'
import { motion } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'

const GetInTouch = () => {
	const [state, handleSubmit] = useForm("xeqbvngn");
	if (state.succeeded) {
		return Swal.fire({
			icon: 'success',
			title: 'Message Send',
			text: 'Thank you for contacting us here at RGBN. We will be in touch soon. We look forward to serving you....',
			showConfirmButton: false,
		});
	}


	return (
		<>
			<form onSubmit={handleSubmit}>
				<motion.div className="section padding-top z-bigger"
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				>
					<div className="container">
						<div className="row justify-content-center padding-bottom-smaller">
							<div className="col-md-8">
								<div className="subtitle with-line text-center mb-4">get in touch</div>
								<h3 className="text-center padding-bottom-small">drop us a line</h3>
							</div>
							<div className="section clearfix"></div>
							<div className="col-md-4 ajax-form">
								<input id="name" type="text" name="name" placeholder="Your Name: *" />
								<ValidationError prefix="text" field="name" errors={state.errors} />
							</div>


							<div className="col-md-4 mt-4 mt-md-0 ajax-form">
								<input id="email" type="email" name="email" placeholder="E-Mail: *" />
								<ValidationError prefix="Email" field="email" errors={state.errors} />
							</div>


							<div className="section clearfix"></div>
							<div className="col-md-8 mt-4 ajax-form">
								<textarea id="message" name="message" placeholder="Tell Us Everything" />
								<ValidationError prefix="Message" field="message" errors={state.errors} />
							</div>


							<div className="section clearfix"></div>

							<div className="section clearfix"></div>
							<div className="col-md-8 mt-3 ajax-form text-center">
								<button className="send_message" id="send" data-lang="en" type="submit" disabled={state.submitting}><span>submit</span></button>
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
			</form>
		</>
	)
}

export default GetInTouch