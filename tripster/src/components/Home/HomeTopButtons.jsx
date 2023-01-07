import { Box, Button, ButtonGroup, Container, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react'
import {HiOutlineHomeModern} from 'react-icons/hi2'
import {MdAutoAwesome} from 'react-icons/md'
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
import {IoRestaurantOutline} from 'react-icons/io5'
import {BsGlobe2} from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'
import {GoLocation} from 'react-icons/go'

export default function HomeTopButtons(){

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

return (
  <Stack
    width={{ sm: "100%", lg: "60%" }}
    m="30px auto 30px auto"
    direction={["column", null, "row"]}
    align="center"
  >
    <Button
      onClick={onOpen}
      _hover={{ bg: "black", color: "white" }}
      borderRadius="12px"
      width={["250px", null, "150px"]}
      height="50px"
      bgColor="white"
      border="1px solid black"
      size="md"
    >
      Hotels&nbsp; <MdBed />
    </Button>
    <Button
      onClick={onOpen}
      _hover={{ bg: "black", color: "white" }}
      borderRadius="12px"
      width="250px"
      height="50px"
      bgColor="white"
      border="1px solid black"
      size="md"
    >
      Holiday Homes&nbsp; <HiOutlineHomeModern />
    </Button>
    <Button
      onClick={onOpen}
      _hover={{ bg: "black", color: "white" }}
      borderRadius="12px"
      width="250px"
      height="50px"
      bgColor="white"
      border="1px solid black"
      size="md"
    >
      Things to Do&nbsp; <MdAutoAwesome />
    </Button>
    <Button
      onClick={onOpen}
      _hover={{ bg: "black", color: "white" }}
      borderRadius="12px"
      width="250px"
      height="50px"
      bgColor="white"
      border="1px solid black"
      size="md"
    >
      Restaurants&nbsp; <IoRestaurantOutline />
    </Button>
    <Button
      _hover={{ bg: "black", color: "white" }}
      borderRadius="12px"
      width={["250px", null, "150px"]}
      height="50px"
      bgColor="white"
      border="1px solid black"
      size="md"
    >
      Travel Stories&nbsp; <BsGlobe2 />
    </Button>
    <Menu>
      <MenuButton
        height="50px"
        borderRadius="12px"
        _hover={{ bg: "black", color: "white" }}
        bgColor="white"
        border="1px solid black"
        as={Button}
      >
        More ...
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
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl mb="10px">
            <InputGroup m="auto">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input borderRadius="32px" bg="white" placeholder="Where to?" />
            </InputGroup>
          </FormControl>
          <Flex
            mt="20px"
            mb="10px"
            p="5px 10px"
            borderRadius="10px"
            border="1px solid #e4eaf1"
          >
            {" "}
            <Box mr="5px" mt="5px">
              <GoLocation />
            </Box>
            Nearby{" "}
          </Flex>
          <hr></hr>
          <Text mt="20px">Recently Searched</Text>
          <Link to="/hotels/mumbai">
            <Text
              onClick={onClose}
              mb="10px"
              p="5px 10px"
              borderRadius="10px"
              border="1px solid #e4eaf1"
            >
              Mumbai
            </Text>
          </Link>
          <Link to="hotels/delhi">
            <Text
              onClick={onClose}
              p="5px 10px"
              borderRadius="10px"
              border="1px solid #e4eaf1"
            >
              Delhi
            </Text>
          </Link>
        </ModalBody>

        <ModalFooter>
          <Link to="/hotels/mumbai">
            <Button
              onClick={() => onClose()}
              _hover={{ bg: "black", color: "white" }}
              borderRadius="12px"
              width="100px"
              height="50px"
              bgColor="white"
              border="1px solid black"
              size="md"
              mr="5px"
            >
              Search
            </Button>
          </Link>
          <Button
            onClick={onClose}
            _hover={{ bg: "black", color: "white" }}
            borderRadius="12px"
            width="100px"
            height="50px"
            bgColor="white"
            border="1px solid black"
            size="md"
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Stack>
);
}