import React from 'react'
import Link from 'next/link'
import IMAGES from '@/../public/index'

const Rooms = (props) => {
  return (
    <>
							<div className="col-md-6">
							<div className="room-box background-white">
								<div className="room-name">{props.name}</div>
								<div className="room-per">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
								</div>
								<img src={props.src} alt="" />
								<div className="room-box-in">
									<h5 className="">{props.name}</h5>
									<p className="mt-3">{props.description}</p>
									<a className="mt-1 btn btn-primary" href="https://pms-main.vercel.app/bookingengine?id=HOTL20230303AA00001">book from {props.price}</a>
									<div className="room-icons mt-4 pt-4">
									<img src={IMAGES.Aminities1} alt=""/>
								<img src={IMAGES.Aminities2} alt=""/>
								<img src={IMAGES.Aminities3} alt=""/>
								<img src={IMAGES.Aminities4} alt=""/>
								<img src={IMAGES.Aminities5} alt=""/>
								<img src={IMAGES.Aminities6} alt=""/>
								<Link href={props.roomlink}>full info</Link>
								</div>
								</div>
							</div>
						</div>
    </>
  )
}

export default Rooms