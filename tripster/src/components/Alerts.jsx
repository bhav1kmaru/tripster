import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Alerts = () => {
  return (
    <div style={{width:"60%",margin:"auto"}}>
        <Heading mb='40px'>Inbox</Heading>
        <Box mb='40px' border="1px solid" p="10px" borderRadius="10px">
            <Text>Order Id : qty87Tr2</Text>
            <Heading size='md'>Start Packing!</Heading>
            <Text>Your Stay has been booked successfully, Booking details have been sent to your email. Have a safe trip!</Text>
        </Box>

        <Link to='/hotels/mumbai'><Button m='auto' mb='40px' borderRadius="20px" variant='solid' backgroundColor="#f2b203">Plan Another Trip</Button></Link>
    </div>
  )
}

export default Alerts