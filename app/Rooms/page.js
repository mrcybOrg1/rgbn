import React from 'react'
import RoomsGallery from '@/Components/RoomsGallery.js'
import RoomsDiscription from '@/Components/RoomsDiscription.js'
import RoomsList from '@/Components/RoomsList.js'
import Amination from '@/Components/Amination.js'



const rooms = () => {
  return (
    <>
    <RoomsGallery />
    <RoomsDiscription />
    <RoomsList />
    <Amination />
    </>
  )
}

export default rooms