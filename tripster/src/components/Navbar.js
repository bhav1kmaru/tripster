import { ChatIcon } from "@chakra-ui/icons";
import React, { useContext, useState } from 'react'
import {TbPencil} from 'react-icons/tb'
import {FiHeart} from'react-icons/fi'
import {BsBell} from 'react-icons/bs'
import {BsCart3} from 'react-icons/bs'
import { Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Heading, Image, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure,Modal, Avatar } from "@chakra-ui/react";
import HomeTopButtons from "./Home/HomeTopButtons";
import {AuthContext} from '../components/contexts/AuthContext'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar(){

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [isLoading,setIsLoading]=useState(false)

  const createAccount=(<><FormControl>
    <FormLabel>First name</FormLabel>
    <Input placeholder='First name' />
  </FormControl>

  <FormControl mt={4}>
    <FormLabel>Last name</FormLabel>
    <Input placeholder='Last name' />
  </FormControl>
  <FormControl mt={4}>
    <FormLabel>Email</FormLabel>
    <Input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
  </FormControl>
  <FormControl mt={4}>
    <FormLabel>Password</FormLabel>
    <Input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
  </FormControl>
  </>)

const signIn=(<>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
            </FormControl>
            <Text mt='20px'>Not a user? <u onClick={()=>setNewUser(true)} style={{cursor:"pointer"}}>Create an account</u></Text>
</>)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const {isAuth,setIsAuth,newUser,setNewUser}=useContext(AuthContext)
  const onSubmit=()=>{
    const data={
      email:email,
      password:password
    }
  if(newUser===false){
    setIsLoading(true)
    axios.post(`https://reqres.in/api/login`,data).then((response)=>{
      console.log(response.data)
      if(response.data.token){
        setIsAuth(true)
        onClose()
        setIsLoading(false)
        setEmail("")
  setPassword("")
      }
  })
  }else if(newUser===true){
    setIsLoading(true)
    axios.post(`https://reqres.in/api/register`,data).then((response)=>{
      console.log(response.data)
      if(response.data.token){
        setNewUser(false)
        setIsLoading(false)
        setEmail("")
  setPassword("")
      }
  })
  }
  
  }

  return(<><Flex maxWidth={{base:"60%",sm:"100%",md:"70%",lg:"60%"}} m="auto" alignItems='center' gap='2'>
  <Box p='2'>
    <Link to='/'><Heading size='md'><Image height={{base:"90px",sm:"70px",md:"80px",lg:"90px"}} src="https://i.ibb.co/3rcKh77/Tripster-removebg-preview.png" alt="Tripster" border="0" /></Heading></Link>
  </Box>
  <Spacer />
  <Flex gap='2'>
    <Link to='/review'><Button variant="ghost" colorScheme='gray' borderRadius="20px"><TbPencil />&nbsp;<Text display={{base:"block",sm:"none",md:"block",lg:"block"}}>Review</Text></Button></Link>
    <Button variant="ghost" colorScheme='gray' borderRadius="20px"><FiHeart />&nbsp;<Text display={{base:"block",sm:"none",md:"block",lg:"block"}}>Trips</Text></Button>
    <Link to='/alerts'><Button variant="ghost" colorScheme='gray' borderRadius="20px"><BsBell />&nbsp;<Text display={{base:"block",sm:"none",md:"block",lg:"block"}}>Alerts</Text></Button></Link>
    {isAuth?(<Avatar name='Eve Holt' src='https://bit.ly/kent-c-dodds' />):(<Button onClick={onOpen} bgColor="black" color="white" borderRadius="20px">Sign In</Button>)}
    <Link to='/basket'><Button variant="ghost" colorScheme='gray' borderRadius="20px"><BsCart3 />&nbsp;<Text display={{base:"block",sm:"none",md:"block",lg:"block"}}>Basket</Text></Button></Link>
  </Flex>
</Flex>
<Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{newUser===true?"Create New Account":"Sign In"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {newUser?createAccount:signIn}
          </ModalBody>

          <ModalFooter>
            <a href='https://tripster-dashboard-bhav1kmaru.vercel.app/login'>Login as admin</a>
            <Button isLoading={isLoading} onClick={onSubmit} backgroundColor="black" color="white" ml={3} mr={3}>
              {newUser?"Create Account":"Sign In"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
<HomeTopButtons />
</>)
}