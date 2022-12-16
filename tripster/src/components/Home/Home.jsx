import { Heading, Skeleton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import UncontrolledExample from '../../testcomponents/Uncontrolled'
import UncontrolledExample2 from '../../testcomponents/Uncontrolled2'
import Experiences from './Experiences'
import HomeTopButtons from './HomeTopButtons'
import LastBanner from './LastBanner'
import Places from './Places'
import Places2 from './Places2'
import Rectangle from './Rectangle'
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css' // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import UncontrolledExample3 from '../../testcomponents/Uncontrolled3'


const Home = () => {
const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{setIsLoading(false)},1000)
},[])

  if(isLoading){
    return (<>
    <Stack w='60%' m='auto'>
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
</Stack>
    </>)
  }
  return (<>
    <SearchBar />
    <div style={{width:"60%",margin:"auto",marginTop:"80px"}}><Heading size="lg" marginBottom="20px" color="black">Top experiences on Tripster</Heading>
    <Heading size="sm" marginBottom="30px" color="gray">The best yours,activities and tickets</Heading></div>
    <UncontrolledExample />
    <Rectangle />
    <div style={{width:"60%",margin:"auto",marginTop:"80px"}}><Heading size="lg" marginBottom="20px" color="black">Ring in the new year</Heading>
        <Heading size="sm" marginBottom="30px" color="gray">New Year's Eve Spots to welcome 2023</Heading></div>
    <UncontrolledExample2 />
  <div style={{width:"60%",margin:"auto",marginTop:"80px"}}><Heading size="lg" marginBottom="20px" color="black">Top destinations for beach lovers</Heading>
        <Heading size="sm" marginBottom="30px" color="gray">Recommended based on your activity</Heading></div>
        <UncontrolledExample3 />
    <LastBanner />
    </>
  )
}

export default Home