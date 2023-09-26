"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import IMAGES from '@/../public/index'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import $ from 'jquery';




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

 
  useEffect(() => {
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

    $(".menu > ul > li").hover(function (e) {
      if ($(window).width() > 1170) {
        $(this).children("ul").stop(true, false).fadeToggle(300);
        e.preventDefault();
      }
    });

    $(".menu > ul > li").on('click', function () {
      if ($(window).width() <= 1170) {
        $(this).children("ul").fadeToggle(300);
      }
    });

    $(".menu-mobile").on('click', function (e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
  }, []);



  return (
    <>
	<motion.nav id="menu-wrap" classNameName="menu-back cbp-af-header"
  style={{ backgroundColor: "#000000" }}
  variants={{
    visible: { y: 0 },
    hidden: { y: "-100%" },
  }}
  animate={hidden ? "hidden" : "visible"}
  transition={{ duration: 0.35, ease: "easeInOut"}}
  >
    <div className="menu">
			<a href="/" >
				<motion.div className="logo"
        animate={{
          scale: [1, 2, 2, .5, 1],
          rotate: [0, 0, 360],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
          transition={{delay:1, duration:1.5}}
          whileHover={{
            scale: [1, 2, 2, .5, 1],
            rotate: [0, 360, 0]
          }}
        >
					<img src={IMAGES.logo} alt=""/>
				</motion.div>
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

      <div id="mobile">
        
        <div className="menue-mobile">
          <div ></div>
        </div>       
        </div>  

	</motion.nav>
    </>
  )
}

export default Header