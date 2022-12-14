import { Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'

{/* <img src="https://i.ibb.co/M7mSSx0/image-34.png" alt="image-34" border="0">
<img src="https://i.ibb.co/hVyPhLw/image-33.png" alt="image-33" border="0">
<img src="https://i.ibb.co/qrLTg1c/image-32.png" alt="image-32" border="0">
<img src="https://i.ibb.co/YjCMjLM/image-31.png" alt="image-31" border="0"></img> */}
const Places2 = () => {
  return (
    <div style={{width:"60%",margin:"auto",marginTop:"80px"}}>
    <Heading size="lg" marginBottom="20px" color="black">Top destinations for beach lovers</Heading>
        <Heading size="sm" marginBottom="30px" color="gray">Recommended based on your activity</Heading>
    <HStack spacing="20px">
        
<Image _hover={{cursor:"pointer"}}  src="https://i.ibb.co/M7mSSx0/image-34.png" alt="image-28" border="0"/>
<Image _hover={{cursor:"pointer"}} src="https://i.ibb.co/hVyPhLw/image-33.png" alt="image-33" border="0"/>
<Image _hover={{cursor:"pointer"}} src="https://i.ibb.co/qrLTg1c/image-32.png" alt="image-32" border="0"/>
<Image _hover={{cursor:"pointer"}} src="https://i.ibb.co/YjCMjLM/image-31.png" alt="image-30" border="0"></Image>
    </HStack></div>
  )
}

export default Places2