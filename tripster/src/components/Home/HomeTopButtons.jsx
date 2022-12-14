import { Button, ButtonGroup, Container, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {MdBed} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {SearchIcon} from '@chakra-ui/icons'

export default function HomeTopButtons(){

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

return (
    <Stack width="60%" m="30px auto 30px auto"  direction='row' align='center'>
  <Button onClick={onOpen} _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="150px" height="50px" bgColor="white" border="1px solid black" size="md">
    Hotels
  </Button>
  <Button _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="250px" height="50px" bgColor="white" border="1px solid black" size="md">
    Holiday Homes
  </Button>
  <Button _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="250px" height="50px" bgColor="white" border="1px solid black" size="md">
    Things to Do
  </Button>
  <Button _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="250px" height="50px" bgColor="white" border="1px solid black" size="md">
    Restaurants
  </Button>
  <Button _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="150px" height="50px" bgColor="white" border="1px solid black" size="md">
    Travel Stories
  </Button>
  <Menu>
  <MenuButton height="50px" borderRadius="12px" _hover={{ bg: 'black',color:"white" }} bgColor="white" border="1px solid black" as={Button} >
    More
  </MenuButton>
  <MenuList>
    <MenuItem>Add a Place</MenuItem>
    <MenuItem>Airlines</MenuItem>
    <MenuItem>Flights</MenuItem>
    <MenuItem>Help Centre</MenuItem>
    <MenuItem>Package Holidays</MenuItem>
    <MenuItem>Travel Forums</MenuItem>
    <MenuItem>Travellers' Choice</MenuItem>
  </MenuList>
</Menu>
<Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6} >
            <FormControl mb='10px'>
            <InputGroup  m="auto">
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input borderRadius="32px" bg="white" placeholder='Where to?' />
  </InputGroup>
            </FormControl>
            <hr></hr>
            <Text mt='20px' mb='10px' p="5px 10px" borderRadius="10px" border="1px solid gray">Nearby</Text>
            <hr></hr>
            <Text mt='20px'>Recently Searched</Text>
            <Link to='/hotels/mumbai'><Text onClick={onClose} mb='10px' p="5px 10px" borderRadius="10px" border="1px solid gray">Mumbai</Text></Link>
            <Link to='hotels/delhi'><Text p="5px 10px" borderRadius="10px" border="1px solid gray">Delhi</Text></Link>
          </ModalBody>

          <ModalFooter>
            <Button  _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="100px" height="50px" bgColor="white" border="1px solid black" size="md" mr='5px'>
              Search
            </Button>
            <Button onClick={onClose} _hover={{ bg: 'black',color:"white" }} borderRadius="12px" width="100px" height="50px" bgColor="white" border="1px solid black" size="md">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Stack>
)
}