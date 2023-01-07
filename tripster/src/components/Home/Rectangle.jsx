import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Rectangle = () => {
  return (
    <Box style={{margin:"auto",width:"60%",marginTop:"80px",padding:"20px",backgroundColor:"#faf1ed"}} display={{sm:"none",md:"flex",lg:"flex"}}>
        <Card
    variant='unstyled'
    gap="20px"
    width="2500px"
  >
    
  
    <Stack>
      <CardBody>
        <Heading size='md'>Get out there</Heading>
  
        <Text py='2'>
          Best of the Best tours, attractions & activities you won’t want to miss.
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button borderRadius="20px"  variant='solid' bg="black" color="white" size="lg">
          See the List
        </Button>
      </CardFooter>
    </Stack>
  </Card>
            
  <Image boxSize="100%"
      maxW={{ base: '100%', sm: '200px' }}
      src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1'
      alt='Caffe Latte'
    /></Box>
        
    
  )
}

export default Rectangle