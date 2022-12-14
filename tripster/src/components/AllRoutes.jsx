import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import HotelCard from './HotelPage/HotelCard'
import HotelPage from './HotelPage/HotelPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:city" element={<HotelPage/>} />
    </Routes>
  )
}

export default AllRoutes