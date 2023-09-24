"use client"
import React from 'react'
import Hero from '@/Components/Layouts/Hero'
import HotelDescrip from '@/Components/Layouts/HotelDescrip.js'
import Aminities from '@/Components/Layouts/Aminities.js'
import LuxuryOurRooms from '@/Components/Layouts/LuxuryOurRooms'
import GetInTouch from '@/Components/Layouts/GetInTouch'

const page = (val) => {
  return (
    <>
    <Hero />
    <HotelDescrip />
    <Aminities />
    <LuxuryOurRooms />
    <GetInTouch />
    </>


  )
}

export default page