import './App.css';
import { Avatar, Box,Button,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,Text, useDisclosure } from '@chakra-ui/react';
import {QuestionOutlineIcon,BellIcon, SettingsIcon,} from "@chakra-ui/icons"
import React from 'react';


function Header(){
    return  <Box display="flex" justifyContent="space-between" borderBottom={"1px"} borderBottomColor={"#6363692b"} alignItems="center" w="100%" h="80px" >
    <Text minW={{lg:"16%",xl:"16%",base:"40%"}}   height={"100%"} display={"flex"} alignItems={"center"} borderRightColor={"#6363692b"} alignSelf={"center"} borderRight={"1px"} fontSize="4xl" fontWeight={'bold'} >logo</Text>
    <Box display={{xl:"flex",lg:"flex",base:"none"}} w="60%" justifyContent="start" overflowX={'auto'} alignItems="center" color="#1b1b1c" h="100%" >
        <Text fontSize='lg' mx={4}>Dashboard</Text>
        <Text fontSize='lg' mx={4}>Patients</Text>
        <Text fontSize='lg' mx={4}>Human Resources</Text>
        <Text fontSize='lg' color={"#04095A"} borderBottom="2px" borderBottomColor="blue" h="100%" display={"flex"} alignItems={"center"}  mx={4}>Clinical</Text>
        <Text fontSize='lg' mx={4}>Compliance</Text>
        <Text fontSize='lg' mx={4}>Billing</Text>
        <Text fontSize='lg' mx={4}>Reports</Text>


    </Box>
    <Box display={{xl:"flex",lg:"flex",base:"none"}}  alignItems={"center"}  h="100%" bg="white">
    <Button color='#09063d' mx={3} borderColor="#04095A" borderWidth="2px" variant='outline'>
Clocked-In
</Button>
<QuestionOutlineIcon mx={3} boxSize={8}/>
<BellIcon mx={3} boxSize={8}/>
<Avatar mx={3} name='Maliene Aioluwani' src='https://bit.ly/tioluwani-kolawole' />
<Text mx={1} fontSize={"medium"}>Account</Text>
    </Box>
<Box display={{base:"flex",lg:"flex",xl:"flex"}}>
    <HeaderMedium/>
</Box>
  </Box>
}



function HeaderMedium() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} backgroundColor={"#04095A"} color={"white"} onClick={onOpen}>
          <SettingsIcon boxSize={5}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Settings</DrawerHeader>
  
            <DrawerBody display={"flex"} flexDirection={"column-reverse"} >
            <Box display="flex" w="full" flexDirection={"column"} justifyContent="start" overflowX={'auto'} alignItems="center" color="#1b1b1c" h="100%" >
    <Text fontSize='lg' my={4}>Dashboard</Text>
    <Text fontSize='lg' my={4}>Patients</Text>
    <Text fontSize='lg' my={4}>Human Resources</Text>
    <Text fontSize='lg'my={4} color={"#04095A"} borderBottom="2px" borderBottomColor="blue" display={"flex"} alignItems={"center"}  mx={4}>Clinical</Text>
    <Text fontSize='lg' my={4}>Compliance</Text>
    <Text fontSize='lg' my={4}>Billing</Text>
    <Text fontSize='lg' my={4}>Reports</Text>
 </Box>
 <Button color='#09063d' py="6" mx={3} mb="30" borderColor="#04095A" borderWidth="2px" variant='outline'>
        Clocked-In
    </Button>

<Box display="flex"  alignItems={"center"}  mb="30px" bg="white">
   
<QuestionOutlineIcon mx={3} boxSize={8}/>
<BellIcon mx={3} boxSize={8}/>
<Avatar mx={3} name='Maliene Aioluwani' src='https://bit.ly/tioluwani-kolawole' />
`   <Text mx={1} fontSize={"medium"}>Account</Text>

</Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

function x(){
    return <> <Box display="flex" w="60%" flexDirection={"column"} justifyContent="start" overflowX={'auto'} alignItems="center" color="#1b1b1c" h="100%" >
    <Text fontSize='lg' mx={4}>Dashboard</Text>
    <Text fontSize='lg' mx={4}>Patients</Text>
    <Text fontSize='lg' mx={4}>Human Resources</Text>
    <Text fontSize='lg' color={"#04095A"} borderBottom="2px" borderBottomColor="blue" h="100%" display={"flex"} alignItems={"center"}  mx={4}>Clinical</Text>
    <Text fontSize='lg' mx={4}>Compliance</Text>
    <Text fontSize='lg' mx={4}>Billing</Text>
    <Text fontSize='lg' mx={4}>Reports</Text>
 </Box>

<Box display="flex" flexDirection={"column"} alignItems={"center"}  h="100%" bg="white">
    <Button color='#09063d' mx={3} borderColor="#04095A" borderWidth="2px" variant='outline'>
        Clocked-In
    </Button>
<QuestionOutlineIcon mx={3} boxSize={8}/>
<BellIcon mx={3} boxSize={8}/>
<Avatar mx={3} name='Maliene Aioluwani' src='https://bit.ly/tioluwani-kolawole' />
`   <Text mx={1} fontSize={"medium"}>Account</Text>

</Box>
</>
}
export default Header