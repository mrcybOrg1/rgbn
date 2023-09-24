import React from 'react'
import IMAGES from '@/../public/index'


const Roomview = (props) => {
  return (
   <>
   <div class="section padding-bottom over-hide">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
					<div class="room-box background-grey">
						<div class="room-name">{props.name}</div>
						<div class="room-per">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
						</div>
						<img src="img/room3.jpg" alt=""/>
						<div class="room-box-in">
							<h5 class="">{props.name}</h5>
							<p class="mt-3">{props.description}</p>
							<a class="mt-1 btn btn-primary" href="rooms-gallery.html">book from {props.price}</a>
							<div class="room-icons mt-4 pt-4">
								<img src="img/5.svg" alt=""/>
								<img src="img/2.svg" alt=""/>
								<img src="img/3.svg" alt=""/>
								<a href="rooms-gallery.html">full info</a>
							</div>
						</div>
					</div>
				</div></div></div></div>

   </>
  )
}

export default Roomview