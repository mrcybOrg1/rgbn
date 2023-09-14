import React from 'react'
import IMAGES from '../public/index'
import Button from '@/Components/Ui/Button'
import Link from 'next/link'



const OurRooms = () => {
  return (
    <>
    
    <div className="section padding-top-bottom over-hide background-grey">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 align-self-center">
					<div className="subtitle with-line text-center mb-4">luxury</div>
					<h3 className="text-center padding-bottom-small">Our rooms</h3>
				</div>
				<div className="section clearfix"></div>
				<div className="col-md-6">
					<div className="room-box background-white">
						<div className="room-name">suite tanya</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<img src={IMAGES.room3} alt=""/>
						<div className="room-box-in">
							<h5 className="">pool suite</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 130$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<img src="img/1.svg" alt=""/>
       							<Link href="/Rooms">full info</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-4 mt-md-0">
					<div className="room-box background-white">
						<div className="room-name">suite helen</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-o"></i>
						</div>
						<img src={IMAGES.room4} alt=""/>
						<div className="room-box-in">
							<h5 className="">small room</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 80$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/4.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/6.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<Link href="/Rooms">full info</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-4">
					<div className="room-box background-white">
						<div className="room-name">suite andrea</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<img src={IMAGES.room5} alt=""/>
						<div className="room-box-in">
							<h5 className="">Apartment</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 110$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<img src="img/6.svg" alt=""/>
								<Link href="/Rooms">full info</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-4">
					<div className="room-box background-white">
						<div className="room-name">suite diana</div>
						<div className="room-per">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div>
						<img src={IMAGES.room6} alt=""/>
						<div className="room-box-in">
							<h5 className="">big Apartment</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="rooms-gallery.html">book from 160$</a>
							<div className="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<img src="img/6.svg" alt=""/>
								<Link href="/Rooms">full info</Link>
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

export default OurRooms