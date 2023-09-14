import React from 'react'
import Hero from '@/Components/Hero.js'
import HotelDescrip from '@/Components/HotelDescrip.js'
import Amination from '@/Components/Amination.js'
import Aminities from '@/Components/Aminities.js'
import OurRooms from '@/Components/OurRooms.js'
import Review from '@/Components/Review.js'
import Restaurant from '@/Components/Restaurant.js'
import GetInTouch from '@/Components/GetInTouch.js'
import ImageSlider from '@/Components/ImageSlider.js'
import Reservation from '@/Components/Reservation.js'
import Loader from '@/Components/Loader.js'



const page = () => {
  return (

    <>
    <Hero />
    <HotelDescrip />
    <Amination />
    <Aminities />
    <Reservation />
    <OurRooms />
    <Review />
    <Restaurant />
    <GetInTouch />
    <ImageSlider />
    </>


  )
}

export default page