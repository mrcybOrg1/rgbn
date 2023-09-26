"use client"
import React from 'react';
import Link from 'next/link';
// import './styles/style.css'
import IMAGES from '@/../public/index'



const MobileMenu = () => {
  return (
    <>
    {/* <div className="mobile-menu-toggle">
      <ul className='show-on-mobile'>
        <li><Link href="/">Home</Link></li>
        </ul>
        <ul>
        <li><Link href="/Rooms">Rooms</Link></li>
        <li><Link href="/Explore">Explore Pandharpur</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><a href="https://pms-main.vercel.app/bookingengine?id=HOTL20230303AA00001" target="_blank">Book Now</a></li>
      </ul>
    </div> */}

<div className="menu">
			<a href="index-2.html">
				<div className="logo">
					<img src={IMAGES.logo} alt=""/>
				</div>
			</a>
			<a href="#" className="menu-mobile"></a>
      <ul className='show-on-mobile'>
				<li className="menu-dropdown-icon">
					<a className="curent-page" href="#">home</a>
					<ul className="normal-sub">
						<li><a href="index-2.html">Flip Slider</a></li>
						<li><a className="curent-page" href="index-1.html">Video Background</a></li>
						<li><a href="index-3.html">Moving Image</a></li>
					</ul>
				</li>
				<li className="menu-dropdown-icon">
					<a href="#">rooms</a>
					<ul className="normal-sub" >
						<li><a href="rooms.html">Our Rooms</a></li>
						<li><a href="rooms-gallery.html">Room Gallery</a></li>
						<li><a href="rooms-video.html">Room Video</a></li>
					</ul>
				</li>
				<li className="menu-dropdown-icon">
					<a href="#">pages</a>
					<ul className="normal-sub">
						<li><a href="explore.html">Explore</a></li>
						<li><a href="search.html">Search</a></li>
						<li><a href="tandc.html">Terms &amp; Conditions</a></li>
						<li><a href="services.html">Services</a></li>
						<li><a href="restaurant.html">Restaurant</a></li>
						<li><a href="testimonials.html">Testimonials</a></li>
						<li><a href="gallery.html">Gallery</a></li>
					</ul>
				</li>
				<li>
					<a href="about.html">about us</a>
				</li>
				<li>
					<a href="blog.html">news</a>
				</li>
				<li>
					<a href="contact.html">contact</a>
				</li>
				<li>
					<a href="search.html"><span>book now</span></a>
				</li>
			</ul>
		</div>



    </>
  );
};

export default MobileMenu;
