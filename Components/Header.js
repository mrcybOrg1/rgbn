"use client"
import React from 'react'
import Link from 'next/link'
import IMAGES from '../public/index'



const Header = () => {
  return (
    <>
	<nav id="menu-wrap" classNameName="menu-back cbp-af-header">
		<div className="menu">
			<a href="/" >
				<div className="logo">
          <h1>logo</h1>
					{/* <img src={IMAGES.logo} alt=""/> */}
				</div>
			</a>
			<ul>
        <li>
       <Link href="/">Home</Link>
       </li>
       <li>
       <Link href="/Rooms">Rooms</Link>
       </li>
       <li>
       <Link href="/Explore">ExploreCity</Link>
       </li>
       <li>
       <Link href="/About">About</Link>
       </li>
       <li>
       <Link href="/Contact">Contact</Link>
       </li>
        <li>
				<a href="https://pms-main.vercel.app/bookingengine?id=HOTL20230303AA00001" target="_blank"><span>book now</span></a>
				</li>
			</ul>
		</div>
	</nav>
    </>
  )
}

export default Header