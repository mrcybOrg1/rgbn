import React from 'react'

const Restaurant = () => {
  return (
    <>
    
    <div className="section padding-top-bottom background-grey over-hide">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8 align-self-center">
					<div className="subtitle with-line text-center mb-4">Excellent restaurant</div>
					<h3 className="text-center padding-bottom-small">Dining &amp; Bars</h3>
				</div>
				<div className="section clearfix"></div>
			</div>
			<div className="row background-white p-0 m-0">
				<div className="col-xl-6 p-0">
					<div className="img-wrap" id="rev-3">
						<img src="img/rest-1.jpg" alt=""/>
					</div>
				</div>
				<div className="col-xl-6 p-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-9 pt-4 pt-xl-0 pb-5 pb-xl-0 text-center">
							<h5 className="">beach restaurant</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="restaurant.html">explore</a>
						</div>
					</div>	
				</div>
			</div>
			<div className="row background-white p-0 m-0">
				<div className="col-xl-6 p-0 align-self-center">
					<div className="row justify-content-center">
						<div className="col-9 pt-4 pt-xl-0 pb-5 pb-xl-0 text-center">
							<h5 className="">pool restaurant</h5>
							<p className="mt-3">Sed ut perspiciatis unde omnis, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
							<a className="mt-1 btn btn-primary" href="restaurant.html">explore</a>
						</div>
					</div>
				</div>
				<div className="col-xl-6 order-first order-xl-last p-0">
					<div className="img-wrap" id="rev-4">
						<img src="img/rest-2.jpg" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    </>
  )
}

export default Restaurant