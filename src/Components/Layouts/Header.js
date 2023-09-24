"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import IMAGES from '@/../public/index'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import MobileMenu from '../Ui/MobileMenu'


const Header = () => {
  const { scrollY } = useScroll ();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 250 ) {
      setHidden(true);
    }else {
      setHidden(false)
    }
  });


  return (
    <>
	<motion.nav id="menu-wrap" classNameName="menu-back cbp-af-header"
  style={{ backgroundColor: "#181c1b61" }}
  variants={{
    visible: { y: 0 },
    hidden: { y: "-100%" },
  }}
  animate={hidden ? "hidden" : "visible"}
  transition={{ duration: 0.35, ease: "easeInOut"}}
  >
		<div className="menu">
			<a href="/" >
				<div className="logo">
          <motion.h1 animate={{
      scale: [1, 2, 2, .5, 1],
      rotate: [0, 0, 360],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
      transition={{delay:1, duration:1.5}}
      whileHover={{
        scale: [1, 2, 2, .5, 1],
        rotate: [0, 360, 0]
      }}>
      logo</motion.h1>
					{/* <img src={IMAGES.logo} alt=""/> */}
				</div>
			</a>
			<ul>
        <motion.li 
        whileHover={{scale: 1.2}}
        >
       <Link href="/">Home</Link>
       </motion.li>
       <motion.li 
        whileHover={{scale: 1.2}}>
       <Link href="/Rooms">Rooms</Link>
       </motion.li>
       <motion.li 
        whileHover={{scale: 1.2}}>
       <Link href="/Explore">Explore Pandharpur</Link>
       </motion.li>
       <motion.li 
        whileHover={{scale: 1.2}}>
       <Link href="/About">About</Link>
       </motion.li>
       <motion.li 
        whileHover={{scale: 1.2}}>
       <Link href="/Contact">Contact</Link>
       </motion.li>
        <motion.li 
        whileHover={{scale: 1.2}}>
				<a href="https://pms-main.vercel.app/bookingengine?id=HOTL20230303AA00001" target="_blank"><span>book now</span></a>
				</motion.li>
			</ul>
		</div>
  {/* <MobileMenu /> */}
	</motion.nav>


      {/* Button to toggle mobile menu */}
      {/* <div className="mobile-menu-toggle" onClick={() => setHidden(!hidden)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
       </div> */}

    </>
  )
}

export default Header