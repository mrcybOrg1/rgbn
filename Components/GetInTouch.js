import React from 'react'

const GetInTouch = () => {
  return (
    <>
    
    <div className="section padding-top z-bigger">
		<div className="container">
			<div className="row justify-content-center padding-bottom-smaller">
				<div className="col-md-8">
					<div className="subtitle with-line text-center mb-4">get in touch</div>
					<h3 className="text-center padding-bottom-small">drop us a line</h3>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-6 col-lg-4">
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">Address:</p>
						</div>
						<div className="address-in text-right">
							<p>test</p>
						</div>
					</div>
					<div className="address">
						<div className="address-in text-left">
							<p className="color-black">City:</p>
						</div>
						<div className="address-in text-right">
							<p>Test</p>
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
							<p>info@hotel.com</p>
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
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="subscribe-home">
						<input type="text" placeholder="your email here"/>
						<button data-lang="en">subscribe</button>
					</div>
				</div>
			</div>
		</div>	
	</div>
    
    </>
  )
}

export default GetInTouch