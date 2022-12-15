import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const BasketCard = ({setCartItems,data,title,image,price}) => {

const remove=(title)=>{
    let newData=data.filter((item)=>{
       return item.title!==title
    })
    console.log(newData)
    localStorage.setItem('Basket',JSON.stringify(newData))
    setCartItems(newData)
}

  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mb="20px"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
      ₹ {price}
      </Text>

      <Heading size='sm'>2-day stay</Heading>
    </CardBody>

    <CardFooter>
      <Button onClick={()=>remove(title)} mr='20px' borderRadius="20px" variant='solid' backgroundColor="#f2b203">
        Remove from Basket
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default BasketCard