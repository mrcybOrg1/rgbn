import React from 'react'
import Head from 'next/head';

const Reservation = () => {
  return (
    <>
    <Head>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/popper.min.js"></script> 
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/plugins.js"></script> 
      <script src="/js/reveal-home.js"></script>  
      <script src="/js/custom.js"></script>
    </Head>
    <div class="section padding-top-bottom-big over-hide">
		<div class="parallax" style={{backgroundImage: "url('img/4.jpg')"}}></div>
		<div class="section z-bigger">		
			<div class="container">
				<div class="row">
					<div class="col-md-12 py-5">
						<div class="booking-hero-wrap">
							<div class="row justify-content-center">
								<div class="col-5 no-mob">
									<div class="input-daterange input-group" id="flight-datepicker">
										<div class="row">	
											<div class="col-6">
												<div class="form-item">
													<span class="fontawesome-calendar"></span>
													<input class="input-sm" type="text" autocomplete="off" id="start-date-1" name="start" placeholder="chech-in date" data-date-format="DD, MM d"/>
													<span class="date-text date-depart"></span>
												</div>
											</div>
											<div class="col-6">
												<div class="form-item">
													<span class="fontawesome-calendar"></span>
													<input class="input-sm" type="text" autocomplete="off" id="end-date-1" name="end" placeholder="check-out date" data-date-format="DD, MM d"/>
													<span class="date-text date-return"></span>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div class="col-5 no-mob">
									<div class="row">
										<div class="col-6">
											<select name="adults" class="wide">
												<option data-display="adults">adults</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
											</select>
										</div>
										<div class="col-6">
											<select name="children" class="wide">
												<option data-display="children">children</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-6  col-sm-4 col-lg-2">
									<a class="booking-button" href="search.html">book now</a>
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

export default Reservation