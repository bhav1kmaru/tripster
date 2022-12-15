import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import BasketCard from './BasketCard'

const BasketPage = () => {

    const [total,setTotal]=useState(0)
    const [subTotal,setSubTotal]=useState(0)
    const [promoApplied,setPromoApplied]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showOtp,setShowOtp]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    

    let data=JSON.parse(localStorage.getItem('Basket')) || []

    const [cartItems,setCartItems]=useState(data)

const emptyBasket=(<><Heading mb='30px'>Basket</Heading>
<Heading mb='30px' size='md'>Your Basket is Empty</Heading>
<Heading mb='30px' size='md'>Add Things to Do to your basket. Now you can shop for tours, attractions, and experiences. <Link to='/hotels/mumbai'><u>Explore Now</u></Link></Heading></>)

const paid=()=>{
    return <Navigate to='/alerts' />
}

useEffect(()=>{
    let sum=0
    for(let i of data){
        sum+=i.price
    }
    setSubTotal(sum)
    setTotal(subTotal)
},)

const proceedPayment=()=>{
    setIsLoading(true)
    setTimeout(()=>{setIsLoading(false)},2000)
    setShowOtp(false)
    setTimeout(()=>{setShowOtp(true)},2000)
}

  return (
    <Flex style={{width:"60%",margin:"auto",marginBottom:"50px"}}>
        <Box mr='40px' w='50%'>
        {data.length===0?emptyBasket:data.map((item)=>(
            <BasketCard setCartItems={setCartItems} data={data} title={item.title} price={item.price} image={item.image} />
        ))}</Box>
        <Box border="1px solid" height="300px" p="20px" borderRadius="12px">
            <Heading mb='30px'>Review Order Details</Heading>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Text>Booking Fee</Text>
                <Text>₹0.00</Text>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Text>Subtotal</Text>
                <Text>₹{subTotal}</Text>
            </div>
            
            {promoApplied===false?(<div style={{display:"flex",justifyContent:"space-between",marginBottom:"30px"}}>
                <Input w='50%' placeholder='Promo code' />
                <Button onClick={()=>setPromoApplied(true)} mr='20px' borderRadius="20px" variant='solid' backgroundColor="#f2b203">
        Apply
      </Button>
            </div>):(<div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                <Text fontWeight="bold">TRIP30</Text>
                <Text fontWeight="bold">-₹{(30*total)/100}</Text>
            </div>)}
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                <Text fontWeight="bold">Total({data.length})</Text>
                <Text fontWeight="bold">₹{promoApplied?(total-((30*total)/100)):total}</Text>
            </div>
            <Button onClick={onOpen} mr='20px' borderRadius="20px" variant='solid' backgroundColor="#f2b203">
        Proceed to checkout
      </Button>
        </Box>
        <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input placeholder='16 Digit Card Number' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Name on Card</FormLabel>
              <Input placeholder='Name on Card' />
            </FormControl>

          <Flex>
          <FormControl mr="5px" mb="20px" mt={4}>
              <FormLabel>CVV</FormLabel>
              <Input placeholder='3 Digit CVV' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Card Expiry Date</FormLabel>
              <Input placeholder='eg: 11/05' />
            </FormControl>
          </Flex>
          <Button isLoading={isLoading} onClick={proceedPayment} borderRadius="20px" variant='solid' backgroundColor="#f2b203" mb="10px">Proceed</Button>
          {showOtp?(<><FormLabel>An OTP has been sent to your registered phone number, Enter it to complete the payment.</FormLabel><HStack  mb='10px'>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Link to='/alerts'><Button onClick={()=>{localStorage.removeItem('Basket')}} borderRadius="20px" variant='solid' backgroundColor="#f2b203" mb="10px">Confirm Payment</Button></Link>
</>):""}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    
  )
}

export default BasketPage