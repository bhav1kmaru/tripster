import { Box, Card, Checkbox, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Skeleton, SkeletonCircle, SkeletonText, SliderFilledTrack, SliderThumb, SliderTrack, VStack, } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import HomeTopButtons from '../Home/HomeTopButtons'
import HotelCard from './HotelCard'
import MumbaiHotels from './MumbaiHotels.json'
import DelhiHotels from './DelhiHotels.json'

const HotelPage = () => {
const [isLoading,setIsLoading]=useState(true)
  let cartArr=[]
    const [hotels,setHotels]=useState([])
    const {city}=useParams()
    const getData=()=>{
        return axios.get(`https://tripster-chi.vercel.app/${city}`)
    }

    useEffect(()=>{
      setIsLoading(true)
        getData().then((res)=>{
            console.log(res)
            setHotels(res.data)
            setIsLoading(false)
        })
    },[city])

if(isLoading){
  return (<>
  <Skeleton w='60%' m='auto' startColor='pink.500' endColor='orange.500' height='20px' />
  <Box padding='6' w="60%" m='auto'  boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' w="60%" m='auto'  boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' w="60%" m='auto'  boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' w="60%" m='auto'  boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' w="60%" m='auto' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box></>)
}

  return (
    <>
    
    <Heading width="60%" m='auto' mb='50px'>{city==="mumbai"?"Mumbai":"Delhi"} Hotels and Places to Stay</Heading>
    <Flex w='60%' m='auto' mb='30px'>
    
      <FormControl isRequired>
  <FormLabel>Check In Date & Check Out Date</FormLabel>
  <Input w='30%' color="green" placeholder='First name' type='datetime-local' />
  <Input w='30%' color="red" placeholder='First name' type='datetime-local' />
</FormControl>
<Select onChange={(e)=>{
  axios.get(`https://tripster-chi.vercel.app/${city}?_sort=price&order=${e.target.value}`).then((res)=>{
    console.log(res)
    setHotels(res.data)
})
}} w="40%" placeholder='sort by'>
  <option value='asc'>Price (low to high)</option>
  <option value='desc'>Price (high to low)</option>
</Select>
</Flex>
    <Flex spacing="10px" width="100%">
      <Box w='150px' ml='90px'>
        <VStack>
          <Heading size='md'>Deals</Heading>
        <Checkbox isChecked='true'>Free Cancellation</Checkbox>
        <Checkbox isChecked='true'>Reserve now,pay at stay</Checkbox>
        <Checkbox>Properties with special offers</Checkbox>
        <h1>-----------------</h1>
        <Heading size='md'>Hotel Class</Heading>
        <Checkbox>5 stars</Checkbox>
        <Checkbox onChange={(e)=>{
          if(e.target.checked===true){
            setHotels(city==="mumbai"?MumbaiHotels.star4:DelhiHotels.star4)
          }else{
            getData().then((res)=>{
              console.log(res)
              setHotels(res.data)
          })
          }
          }}>4 stars</Checkbox>
        <Checkbox onChange={(e)=>{
          if(e.target.checked===true){
            setHotels(city==="mumbai"?MumbaiHotels.star3:DelhiHotels.star3)
          }else{
            getData().then((res)=>{
              console.log(res)
              setHotels(res.data)
          })
          }
          }}>3 stars</Checkbox>
        <Checkbox onChange={(e)=>{
          if(e.target.checked===true){
            setHotels(city==="mumbai"?MumbaiHotels.star2:DelhiHotels.star2)
          }else{
            getData().then((res)=>{
              console.log(res)
              setHotels(res.data)
          })
          }
          }}>2 stars</Checkbox>
        </VStack>
        
      </Box>
    <Box w="60%" m='auto'>
    {hotels.map((hotel)=>(<HotelCard cartArr={cartArr} price2={hotel.price2} title={hotel.title} provider={hotel.providerlogo} review_count={hotel.review_count} price={hotel.price}  image={hotel.image} />))}
    </Box>
    </Flex></>
  )
}

export default HotelPage