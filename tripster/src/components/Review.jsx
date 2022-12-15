import { SearchIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'

const Review = () => {
  return (
    <div style={{width:"100%",margin:"auto",backgroundColor:"#faf1ed",padding:"20px",marginBottom:"50px"}}>
        <Box w='60%' m='auto'>
        <Heading mb='30px' size="xl">Write a review, make someone's trip</Heading>
        <Text mb='50px'>Stories like yours are what helps travellers have better trips. Share your experience and help out a fellow traveller!</Text>
        </Box>
        <InputGroup width="55%" m="auto" mb="50px">
    <InputLeftElement marginTop="15px"
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input border="1px solid black" borderRadius="32px" height="70px"  bg="white" placeholder='What would you like to review?' />
  </InputGroup>
  <Image m='auto' mb='50px' src="https://i.ibb.co/16QgXTy/image-40.png" alt="image-40" border="0"/>
    </div>
  )
}

export default Review