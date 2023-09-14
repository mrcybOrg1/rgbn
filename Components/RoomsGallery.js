import React from 'react'

const RoomsGallery = () => {
  return (
    <>
    
    <div className="section big-55-height over-hide">
	
		<div className="parallax parallax-top" style={{backgroundImage: "url('img/rooms.jpg')"}}></div>
		<div className="dark-over-pages"></div>
	
		<div className="hero-center-section pages">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 parallax-fade-top">
						<div className="hero-text">Rooms Gallery</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="section background-dark padding-top-bottom-smaller over-hide">
		<div className="section z-bigger">		
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
						<div className="amenities">
							<img src="img/icons/1.svg" alt=""/>
							<p>no smoking</p>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center">
						<div className="amenities">
							<img src="img/icons/2.svg" alt=""/>
							<p>big beds</p>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-md-0">
						<div className="amenities">
							<img src="img/icons/3.svg" alt=""/>
							<p>yacht riding</p>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
						<div className="amenities">
							<img src="img/icons/4.svg" alt=""/>
							<p>free drinks</p>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
						<div className="amenities">
							<img src="img/icons/5.svg" alt=""/>
							<p>swimming pool</p>
						</div>
					</div>
					<div className="col-6 col-sm-6 col-md-4 col-lg-2 text-center mt-4 mt-lg-0">
						<div className="amenities">
							<img src="img/icons/6.svg" alt=""/>
							<p>room breakfast</p>
						</div>
					</div>
				</div>
			</div>					
		</div>
	</div>

    </>
  )
}

export default RoomsGallery