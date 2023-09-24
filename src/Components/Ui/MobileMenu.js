"use client"
import React from 'react';
import Link from 'next/link';
import './styles/style.css'


const MobileMenu = () => {
  return (
    <>
    <div className="mobile-menu-toggle">
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
    </div>

    </>
  );
};

export default MobileMenu;
