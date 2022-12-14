import React from 'react'
import Experiences from './Experiences'
import HomeTopButtons from './HomeTopButtons'
import LastBanner from './LastBanner'
import Places from './Places'
import Places2 from './Places2'
import Rectangle from './Rectangle'
import SearchBar from './SearchBar'

const Home = () => {
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