import { Skeleton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Experiences from './Experiences'
import HomeTopButtons from './HomeTopButtons'
import LastBanner from './LastBanner'
import Places from './Places'
import Places2 from './Places2'
import Rectangle from './Rectangle'
import SearchBar from './SearchBar'

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
    <Experiences />
    <Rectangle />
    <Places />
    <Places2 />
    <LastBanner />
    </>
  )
}

export default Home