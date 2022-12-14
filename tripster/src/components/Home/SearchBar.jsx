import { Box, Center, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon} from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <Center width="80%" m="auto" height="350px"
  backgroundImage="url('https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
>
<InputGroup width="55%" m="auto">
    <InputLeftElement marginTop="15px"
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input borderRadius="32px" height="70px"  bg="white" placeholder='Where to?' />
  </InputGroup>
 </Center>

// shorthand

  )
}

export default SearchBar