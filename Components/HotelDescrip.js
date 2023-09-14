import React from 'react'
import IMAGES from '../public/index'


const HotelDescrip = () => {
  return (
    <>
    
    <div className="section padding-top-bottom over-hide">
		<div className="container">
			<div className="row">
				<div className="col-md-6 align-self-center">
					<div className="row justify-content-center">
						<div className="col-10">
							<div className="subtitle text-center mb-4">Shree Radha Govind Bhakt Niwas</div>
							<h2 className="text-center">Here is a tribute to good life!</h2>
							<p className="text-center mt-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mt-4 mt-md-0">
					<div className="img-wrap">
						<img src={IMAGES.room1} alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div className="section background-grey over-hide">
		<div className="container-fluid px-0">
			<div className="row mx-0">
				<div className="col-xl-6 px-0">
					<div className="img-wrap" id="rev-1">
						<img src={IMAGES.room1} alt=""/>
						<div className="text-element-over">private pool suite</div>
					</div>
				</div>
				<div className="col-xl-6 px-0 mt-4 mt-xl-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-10 col-xl-8 text-center">
							<h3 className="text-center">Private pool suite</h3>
							<p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-5 btn btn-primary" href="search.html">check availability</a>
						</div>	
					</div>
				</div>
			</div>
			<div className="row mx-0">
				<div className="col-xl-6 px-0 mt-4 mt-xl-0 pb-5 pb-xl-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-10 col-xl-8 text-center">
							<h3 className="text-center">Sea view suite</h3>
							<p className="text-center mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-5 btn btn-primary" href="search.html">check availability</a>
						</div>	
					</div>
				</div>
				<div className="col-xl-6 px-0 order-first order-xl-last mt-5 mt-xl-0">
					<div className="img-wrap" id="rev-2">
						<img src={IMAGES.room2} alt=""/>
						<div className="text-element-over">sea view suite</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    
    </>

  )
}

export default HotelDescrip