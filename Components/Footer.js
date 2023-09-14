import React from 'react'
import IMAGES from '../public/index'
import Link from 'next/link'




const footer = () => {
  return (
    <>
    
	<div className="section padding-top-bottom-small background-black over-hide footer">
		<div className="container">
			<div className="row">
				<div className="col-md-3 text-center text-md-left">
					<h1>logo</h1>
					{/* <img src={IMAGES.logo} alt=""/> */}
					<p className="color-grey mt-4">2234, Bank Mahila Branch,<br/>near Pandharpur, Chouphala,<br/>Pandharpur, Maharashtra 413304</p>
				</div>
				<div className="col-md-4 text-center text-md-left">
					<h6 className="color-white mb-3">information</h6>
					<Link href="/">Home</Link>
					<Link href="/Rooms">Rooms</Link>
					<Link href="/Explore">ExploreCity</Link>
					<Link href="/About">About</Link>
					<Link href="/Contact">Contact</Link>
				</div>
				<div className="col-md-5 mt-4 mt-md-0 text-center text-md-left logos-footer">
					<h6 className="color-white mb-3">about us</h6>
					<p className="color-grey mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
					<img src={IMAGES.logo1} alt=""/>
					<img src={IMAGES.logo2} alt=""/>
					<img src={IMAGES.logo3} alt=""/>
				</div>
			</div>	
		</div>	
	</div>
	
	<div className="section py-4 background-dark over-hide footer-bottom">
		<div className="container">
			<div className="row">
				<div className="col-md-6 text-center text-md-left mb-2 mb-md-0">
					<p>2023 © SRGBN All rights reserved.</p>
					<p>Build with ❤️ from Krafitech</p>
				</div>
				<div className="col-md-6 text-center text-md-right">
					<a href="#" className="social-footer-bottom">facebook</a>
					<a href="#" className="social-footer-bottom">twitter</a>
					<a href="#" className="social-footer-bottom">instagram</a>
				</div>
			</div>	
		</div>		
	</div>

    </>
  )
}

export default footer