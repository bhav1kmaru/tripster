import { Button, Card, CardBody, CardFooter, Container, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

const HotelCard = ({image,title,price,provider,review_count,price2,cartArr}) => {



  const onAdd=(title,price,image)=>{
let arr=price.split("₹")
let arr2=arr[1].split(",")
let finalPrice=arr2[0]+arr2[1]
    const send={
      title: title,
      image: image,
      price: Number(finalPrice),
    }
    console.log(send)
    cartArr.push(send)
    console.log(cartArr)
    localStorage.setItem("Basket",JSON.stringify(cartArr))
  }


  return (
    <div style={{margin:"auto",marginBottom:"20px"}}>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>

  <Image
    objectFit='cover'
    width={{base:"250px",lg:"350px",md:"250px"}}
    src={image}
    alt='Caffe Latte'
  />

<HStack >

  <Stack>
    <CardBody>
    <Heading _hover={{cursor:"pointer",textDecoration:"underline"}} width="250px" size='md'>{title}</Heading>
      <Image height="50px" src={provider} />

      <Text fontSize="20px" fontWeight="bold" py='2'>
       {price}
      </Text>
      <Text as='del' color="red">{price2}</Text>
      
    </CardBody>

    <CardFooter>
      <a href='https://www.agoda.com/search?cid=1856692&currency=INR&checkin=2022-12-27&checkout=2023-01-03&NumberofAdults=1&NumberofChildren=0&childages=&Rooms=1&mcid=27800&pid=804ad829-7077-4b74-8e1e-ecbf6c0fc6f9&audid=&audm=&MBL=M&BaseRate=7458.13&TaxandFee=967.84&BasePriceDisplay=L&DisplayCurrency=INR&ccallout=FALSE&source=sp&hl=en&tag=hid237607,pid804ad829-7077-4b74-8e1e-ecbf6c0fc6f9&n=0&selectedproperty=237607&city=14552&adults=1&children=0&hc=INR&los=7'><Button mr="10px" borderRadius="20px" variant='solid' backgroundColor="#f2b203">
        View Deal
      </Button></a>
      <Button onClick={()=>onAdd(title,price,image)} borderRadius="20px" variant='solid' backgroundColor="#f2b203">Add to Basket</Button>
    </CardFooter>
    <div style={{padding:"10px"}}>
    <p style={{fontSize:'12px'}}>Free Cancellation</p>
    <p style={{fontSize:'12px'}}>Reserve now, pay at stay</p>
    </div>
  </Stack>
  <Stack>
    <Text fontWeight="bold">Hotel info</Text>
  <Text fontSize="xs">Visit Website</Text>
  <Text fontSize="xs">022 6692 7777</Text>
  <Text fontSize="xs">Special Offer</Text>
  </Stack>
  <Stack>
    <HStack spacing="" pl="10px">
    <Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
<Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon><Icon viewBox='0 0 200 200' color='#48BB78'>
  <path
    fill='transparent'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
    </HStack>
    <p style={{fontSize:"12px",marginLeft:"10px"}}>{review_count}</p>
  <img src="https://i.ibb.co/BZVzhY9/image-38.png" alt="image-38" border="0" />
  </Stack>
  </HStack>
</Card>
    </div>
  )
}

export default HotelCard