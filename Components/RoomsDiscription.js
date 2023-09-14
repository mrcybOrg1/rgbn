import React from 'react'

const RoomsDiscription = () => {
  return (
    <>
    
    <div className="section padding-top-bottom z-bigger">
		<div className="section z-bigger">		
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mt-4 mt-lg-0">
						<div className="section">
							<div className="customNavigation rooms-sinc-1-2">
								<a className="prev-rooms-sync-1"></a>
								<a className="next-rooms-sync-1"></a>
							</div>		
							<div id="rooms-sync1" className="owl-carousel">
								<div className="item">
									<img src="img/gallery/2.jpg" alt=""/>						
								</div>
								<div className="item">	
									<img src="img/gallery/3.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/4.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/5.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/6.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/7.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/8.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/9.jpg" alt=""/>					
								</div>
							</div>
						</div>
						<div className="section">
							<div id="rooms-sync2" className="owl-carousel">
								<div className="item">
									<img src="img/gallery/2-s.jpg" alt=""/>						
								</div>
								<div className="item">	
									<img src="img/gallery/3-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/4-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/5-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/6-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/7-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/8-s.jpg" alt=""/>					
								</div>
								<div className="item">	
									<img src="img/gallery/9-s.jpg" alt=""/>					
								</div>
							</div>
						</div>
						<div className="section pt-5">
							<h5>discription</h5>
							<p className="mt-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
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
									<p><strong className="color-black">Swimming pool:</strong> Yes</p>	
								</div>	
							</div>		
						</div>
						<div className="section pt-4">
							<h5>Features</h5>
							<p className="mt-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
						</div>
					</div>
					<div className="col-lg-4 order-first order-lg-last">
						<div className="section background-dark p-4">	
							<div className="row">
								<div className="col-12">
									<div className="input-daterange input-group" id="flight-datepicker">
										<div className="row">	
											<div className="col-12">
												<div className="form-item">
													<span className="fontawesome-calendar"></span>
													<input className="input-sm" type="text" autocomplete="off" id="start-date-1" name="start" placeholder="chech-in date" data-date-format="DD, MM d"/>
													<span className="date-text date-depart"></span>
												</div>
											</div>
											<div className="col-12 pt-4">
												<div className="form-item">
													<span className="fontawesome-calendar"></span>
													<input className="input-sm" type="text" autocomplete="off" id="end-date-1" name="end" placeholder="check-out date" data-date-format="DD, MM d"/>
													<span className="date-text date-return"></span>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div className="col-12">
									<div className="row">
										<div className="col-12 pt-4">
											<select name="adults" className="wide">
												<option data-display="adults">adults</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
										</div>
										<div className="col-12 pt-4">
											<select name="children" className="wide">
												<option data-display="children">children</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-12 pt-4">
									<a className="booking-button" href="search.html">book now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>					
		</div>
	</div>
    
    </>
  )
}

export default RoomsDiscription