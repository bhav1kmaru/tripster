import { Box, Button } from '@chakra-ui/react'
import React from 'react'
//https://i.ibb.co/Xt4s2Gk/image-35.png

const LastBanner = () => {
  return (
    <Box w="100%" m="auto" mt="100px" mb="200px" height="600px" backgroundImage="url('https://i.ibb.co/Xt4s2Gk/image-35.png')"><Button w='155px' h='50px' variant="solid"  borderRadius="20px" bgColor="black" color="white" _hover={{backgroundColor:"#202020"}} ml="437px" mt="408px">See the winners</Button></Box>
  )
}

export default LastBanner