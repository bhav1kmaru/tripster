import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Alerts from './Alerts'
import BasketPage from './Basket/BasketPage'
import Home from './Home/Home'
import HotelPage from './HotelPage/HotelPage'
import Review from './Review'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:city" element={<HotelPage/>} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/review' element={<Review />} />
    </Routes>
  )
}

export default AllRoutes