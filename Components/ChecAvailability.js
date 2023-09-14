import React from 'react'

const ChecAvailability = () => {
  return (
    <>
    <div className="section background-dark z-too-big">		
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="row justify-content-center home-translate">
						<div className="col-xl-8">
							<div className="row justify-content-center home-shadow">
								<div className="col-md-6 px-sm-0">
									<div className="booking-sep-wrap">
										<div className="input-daterange input-group" id="flight-datepicker-1">
											<div className="form-item">
												<span className="fontawesome-calendar"></span>
												<input className="input-sm" type="text" autocomplete="off" id="start-date" name="start" placeholder="check-in" data-date-format="DD, MM d"/>
												<span className="date-text date-depart"></span>
											</div>
											<div className="form-item">
												<span className="fontawesome-calendar"></span>
												<input className="input-sm" type="text" autocomplete="off" id="end-date" name="end" placeholder="check-out" data-date-format="DD, MM d"/>
												<span className="date-text date-return"></span>
											</div>
										</div>	
									</div>
								</div>
								<div className="col-md-3 px-sm-0">
									<div className="quantity">
										<input type="number" min="1" max="9999" step="1" value="1" />
									</div>	
								</div>	
								<div className="col-md-3 px-sm-0">
									<a className="booking-button-big" href="search.html">check<br/>availability</a>
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

export default ChecAvailability