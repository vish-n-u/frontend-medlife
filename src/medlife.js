import {  Box,Button,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerOverlay,Text, useDisclosure } from '@chakra-ui/react';
import { AddIcon,ChevronDownIcon,RepeatClockIcon, } from "@chakra-ui/icons"
import React from 'react';
import {FaTasks} from "react-icons/fa"
import { Icon } from '@chakra-ui/react'




function Medlife(){
    return <Box w="16%" display={{xl:"flex",base:"none"}} maxW={"16%"} minW={"16%"} flexDirection={"column"} alignItems={"flex-start"} borderRight={"1px"} borderRightColor={"#6363692b"}  h="full">
    <Text fontWeight={'bold'} mt={"15px"} ml={"20px"} fontSize={'2xl'}>Medlife</Text>
   <Button color={"white"} alignSelf={"flex-end"} w="90%"  textAlign={"center"} mt="30px" bgColor={"#04095A"}>Add Clinical <ChevronDownIcon mx={3} boxSize={7}/></Button> 
   <Box w="full" mt="30px"    display={"flex"} justifyContent={"center"}>
     <RepeatClockIcon boxSize={5}></RepeatClockIcon>
     <Text fontSize={"md"} fontWeight={"semibold"} color={"#88888c"} ml={"18px"}>Appointments</Text>
   </Box>
   <Box w="full" mt="30px" bg={"blue.50"} h="50px" justifyContent={"center"} alignItems={"center"} borderRight={"2px"} borderRightColor={"#04095A"} display={"flex"} >
     <Icon as={FaTasks} boxSize={5}/>
     <Text fontSize={"md"} fontWeight={"bold"} color={"#04095A"} ml={"18px"}>Tasks</Text>
   </Box>
   </Box>
}

export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button bgColor='#04095A' color={"white"} onClick={onOpen}>
          Appoint +
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
            <DrawerBody>
               <Box w="100%" maxW={"100%"} minW={"100%"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"}  borderRightColor={"#6363692b"}  h="full">
         <Text fontWeight={'bold'} mt={"15px"} ml={"20px"} fontSize={'2xl'}>Medlife</Text>
        <Button color={"white"} alignSelf={"flex-end"} w="90%"  textAlign={"center"} mt="30px" bgColor={"#04095A"}>Add Clinical <ChevronDownIcon mx={3} boxSize={7}/></Button> 
        <Box w="full" mt="30px"    display={"flex"} justifyContent={"center"}>
          <RepeatClockIcon boxSize={5}></RepeatClockIcon>
          <Text fontSize={"md"} fontWeight={"semibold"} color={"#88888c"} ml={"18px"}>Appointments</Text>
        </Box>
        <Box w="full" mt="30px" bg={"blue.100"} h="50px" justifyContent={"center"} alignItems={"center"} borderRight={"2px"} borderRightColor={"#04095A"} display={"flex"} >
          <Icon as={FaTasks} boxSize={5}/>
          <Text fontSize={"md"} fontWeight={"bold"} color={"#04095A"} ml={"18px"}>Tasks</Text>
        </Box>
        </Box>
  
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
  export default Medlife