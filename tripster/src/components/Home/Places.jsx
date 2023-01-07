import { Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'


const Places = () => {
  return (
    <div style={{width:"60%",margin:"auto",marginTop:"0px"}}>
    
    <HStack spacing="20px">
        
<Image _hover={{cursor:"pointer"}}  src="https://i.ibb.co/g4SxBMS/image-28.png" alt="image-28" border="0"/>
<Image _hover={{cursor:"pointer"}} src="https://i.ibb.co/x2z6fY2/image-27.png" alt="image-27" border="0"/>
<Image _hover={{cursor:"pointer"}} src="https://i.ibb.co/mc4dsTD/image-26.png" alt="image-26" border="0"/>
<Image _hover={{cursor:"pointer"}} src="images/47.png" alt="image-30" border="0"></Image>
    </HStack></div>
  )
}

export default Places