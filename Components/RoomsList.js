import React from 'react'

const RoomsList = () => {
  return (
    <>
    
    <div className="section padding-bottom over-hide">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
					<div className="room-box background-grey">
						<div className="room-name">suite tanya</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<img src="img/room3.jpg" alt=""/>
						<div className="room-box-in">
							<h5 className="">pool suite</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 130$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<a href="rooms-gallery.html">full info</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
					<div className="room-box background-grey">
						<div className="room-name">suite helen</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-o"></i>
						</div>
						<img src="img/room4.jpg" alt=""/>
						<div className="room-box-in">
							<h5 className="">small room</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 80$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/4.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/6.svg" alt=""/>
								<a href="rooms-gallery.html">full info</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 mt-4 mt-lg-0" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.6s">
					<div className="room-box background-grey">
						<div className="room-name">suite andrea</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<img src="img/room5.jpg" alt=""/>
						<div className="room-box-in">
							<h5 className="">Apartment</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 110$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<a href="rooms-gallery.html">full info</a>
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

export default RoomsList