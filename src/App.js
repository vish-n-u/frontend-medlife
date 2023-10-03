
import './App.css';
import { Avatar, Box,Button,Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerFooter,DrawerHeader,DrawerOverlay,FormLabel,Input,InputGroup,InputLeftAddon,InputLeftElement,InputRightAddon,Select,Stack,Text, Textarea, useDisclosure } from '@chakra-ui/react';
import {QuestionOutlineIcon,BellIcon, AddIcon,ChevronDownIcon,RepeatClockIcon, PhoneIcon, SearchIcon} from "@chakra-ui/icons"
import React from 'react';
import {FaTasks} from "react-icons/fa"
import { Icon } from '@chakra-ui/react'
import {FiFilter} from "react-icons/fi"

import Header from './header';
import Medlife from './medlife';
import Body from './body';

function App() {
  return (
    <Box w="100vw" h="100vh" bg="white" display={'flex'} flexDirection={"column"}>     
        <Header/>        
        <Box display={"flex"} w="100%" h="full">    
          <Medlife/> 
          <Body/>      
        </Box>
  </Box>
  );
}


export default App;
