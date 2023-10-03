import './App.css';
import {  Box,Button,Image,Input,InputGroup,InputLeftElement,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Stack,Text, useDisclosure } from '@chakra-ui/react';
import { CalendarIcon, InfoIcon, PhoneIcon, SearchIcon} from "@chakra-ui/icons"
import React, { useState } from 'react';
import { Icon } from '@chakra-ui/react'
import {FiFilter} from "react-icons/fi"
import {DrawerExample} from "./medlife"


function Body(){
    const [isUpcomingTaskClicked,setIsUpcomingTaskClicked] =useState(true)
    const upComingTask ={
        "334214":[
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
                status :"Overdue"
            },
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
                status :"Overdue"
            }
        ],
        "990292":[
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
                status :"Upcoming",
            }
        ]
    }

    const completedTask = {
        "334214":[
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
            },
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
            }
        ],
        "990292":[
            {
                img:"",
                name:"Melanie Laurent",
                appointmentId:"334214",
                assessment :"Intake Comprehensive Assessment",
                taskId :232323,
                dateTime :"December 22, 2022 10:30Am",
                duration:"1 hour",
            }
        ]
    }
    let currObject = isUpcomingTaskClicked?upComingTask:completedTask
    return <Box w="full"  h="full" bg="gray.200" display={"flex"} flexDirection={"column"}>
    <Box w="full" min-h="100px" h={"20%"} borderBottom={"1px"} borderBottomColor={"#6363692b"} bgColor={"white"} display={"flex"}  justifyContent={"space-between"}>
      <Box w={"full"} h="full" display={"flex"} flexDirection={"column"}>
      <Box pb={"18px"} pt={"6px"} display={"flex"} flexDirection={"column"}>
      <Text fontSize={"2xl"} pl={"28px"} fontWeight={"semibold"}>Tasks</Text>
      <Text fontSize={"md"} pl={"28px"} color={"#88888c"} ml={"1px"}>{"Clinical > Tasks"}</Text>
      </Box>
      

      <Box display={"flex"} h="full" >
        <Text onClick={()=>setIsUpcomingTaskClicked(true)} cursor={"pointer"} fontSize={"large"} h="full" borderBottom={"2px"} color={isUpcomingTaskClicked?"blue":"#88888c"} borderBottomColor={isUpcomingTaskClicked?"blue":"transparent"}  display={"flex"} alignContent={"flex-start"} fontWeight={"medium"}  mx={"40px"}>Upcoming Tasks</Text>
        <Text onClick={()=>setIsUpcomingTaskClicked(false)} cursor={"pointer"} fontSize={"large"} ml={"20px"} borderBottom={"2px"} fontWeight={"medium"} color={!isUpcomingTaskClicked?"blue":"#88888c"} borderBottomColor={!isUpcomingTaskClicked?"blue":"transparent"} >Completed Tasks</Text>
      </Box>
      </Box>
      <Box display={{ base: 'flex',  xl: 'none' }} w="full" mt={3} alignItems={"flex-start"}>
      <DrawerExample/>
      </Box>

    </Box>
    <Box mt={"20px"} width={"98%"} height={"95%"} display={"flex"}  flexDirection={"column"}>
      <Box  width={"98%"} height={"100%"} rounded={'xl'} bg={"white"} justifyItems={"center"} alignItems={"center"} alignSelf={"flex-end"} display={"flex"} flexDirection={"column"}>
          <Box width={"100%"} minH={"100px"} height={"15%"} display={'flex'} justifyContent={"space-around"} alignItems={"center"}>
            
            <Box w="70%"  display={"flex"} flexDirection={{base:"column",md:'row',lg:"row",xl:"row"}} justifyContent={"space-around"} alignItems={{base:"start",md:"center",lg:"center",xl:"center"}}>
            <Box w={{base:"70%"}}   display={"flex"}  justifyContent={{lg:"space-around",xl:"space-around",base:"space-around"}} alignItems={"center"}>
            <InputGroup w="50%">
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input type='text' placeholder='Search' />
  </InputGroup>
              <Box display={"flex"} w={"30%"} alignItems={"center"}>
              <InputGroup mx="5px" w="40%">
    <InputLeftElement pointerEvents='none'>
      <CalendarIcon color='gray.300' />
    </InputLeftElement>
    <Input type='date' />
  </InputGroup>
                <Text mx="9px">to</Text>
                <InputGroup w="40%">
                    <InputLeftElement pointerEvents='none'>
                    <CalendarIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='date' />
                </InputGroup>

              </Box>
              </Box>
              <Box display={"flex"} w={{md:"30%",lg:"30%",xl:"30%",base:"90%"}} mt="10px" justifyContent={"space-around"} alignItems={"center"}>
                <Button bg="#04095A" color={"white"} borderLeftRadius={"full"} w="45%" borderRightRadius={"full"}>Apply</Button>
                <Button bg="white" borderColor={"#04095A"} border="1px"  w="45%" color={"#04095A"}  borderLeftRadius={"full"} borderRightRadius={"full"}>Reset</Button>
              </Box>
            </Box>
            <Box border="2px" rounded={"md"} justifyContent={"center"} height={"50px"} width={"10%"} display={"flex"} alignItems={"center"} borderColor={"#04095A"}>
            <Icon as={FiFilter} boxSize={6}/>
            <Text display={{base:"none",md:"flex",lg:'flex',xl:"flex"}}>  Filter</Text>
            </Box>

          </Box>
    <Box width={"95%"} height="full" mt="10px" >
            {
                Object.keys(currObject).map((key)=>{
                   return <Box w={'full'} maxHeight={"450px"} h="auto">
                    <Text fontSize={"2xl"} fontWeight={"bold"}>Thursday</Text>
                    <Box width={"100%"} min-height={"80px"} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                   { currObject[key].map((obj)=>{
                     return <UserAppointmentDetailLarge obj={obj} isUpcomingTaskClicked={isUpcomingTaskClicked}/>
                   })}
                </Box>
                </Box>
                })
            }

    </Box>


    </Box>
    </Box>
   

  </Box>
}

function UserAppointmentDetailLarge({obj,isUpcomingTaskClicked}){
    return <Box w="100%" border={"1px"} my="10px" rounded={"lg"} height={"full"} py="18px" display={"flex"} justifyContent={"space-around"}>
    <Box display={"flex"} flexDirection={"flex"} justifyContent={"space-around"} alignItems={"center"} h="full" w={{xl:"40%",lg:"40%",base:"70%"}}>
        <Image alt="img.png" display={{base:"none",lg:'flex',xl:"flex"}} rounded="full" src="https://images.unsplash.com/photo-1571931264778-8ca45c9bb16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmljfGVufDB8fDB8fHww&w=1000&q=80" w="20%" maxH="80px"  />
        <Box display={"flex"}  flexDirection={"column"}>
            <Text fontSize={"2xl"} my="6px" fontWeight="bold">{obj.name}</Text>
            <Text fontSize={"sm"} fontWeight="medium">AppointmentId:  {obj.appointmentId}</Text>
            <Text fontSize={"md"} fontWeight="bold">{obj.assessment}</Text>

        </Box>
        
        </Box>
        <Box display={{xl:"flex",lg:'flex',base:'none'}} flexDirection={"row"} w="30%" justifyContent={"space-around"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Text fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Task ID: </Text>
                <Text fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>{"Date & Time:"}</Text>
                <Text fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Duration: </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Text fontSize={"medium"} fontWeight={'bold'}>{obj.taskId}</Text>
                <Text fontSize={"medium"} fontWeight={'bold'}>{obj.dateTime}</Text>
                <Text fontSize={"medium"} fontWeight={'bold'}>{obj.duration}</Text>
            </Box>
        </Box>
        <Box display={{xl:"flex",lg:'flex',base:'none'}} w="20%"  flexDirection={"column"} justifyContent={"space-around"}>
            <Box display={"flex"} justifyContent={"space-around"}>
                <Text display={!isUpcomingTaskClicked&&"none"} fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Status:  </Text>
                <Text display={!isUpcomingTaskClicked&&"none"} fontSize={"lg"} fontWeight={'bold'} color={obj.status=="Overdue"?"red":"green"}>{obj.status}</Text>
            </Box>
            <Button color={"white"} alignSelf={"flex-end"} minW="180px" bgColor={"#04095A"} w="70%">{obj.status=="Overdue"?"Start Assessment":"Continue Assessment"}</Button>

        </Box>
        <Box display={{xl:"none",lg:"none",base:"flex"}} justifyContent={"center"} alignItems={"center"}>
            <UserAppointmentDetailModel obj={obj} isUpcomingTaskClicked={isUpcomingTaskClicked}/>

        </Box>


      </Box>
}

function UserAppointmentDetailModel({obj,isUpcomingTaskClicked}){

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>
            <InfoIcon boxSize={4}/> 

        </Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Appointment Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody w="full" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <Image alt="img.png" rounded="full" src="https://images.unsplash.com/photo-1571931264778-8ca45c9bb16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmljfGVufDB8fDB8fHww&w=1000&q=80" w="20%" maxH="80px"  />

            <Box display={"flex"} flexDirection={"row"} w="80%" justifyContent={"space-around"}>
            <Box my="20px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Text my="4px" fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Task ID: </Text>
                <Text my="4px" fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>{"Date & Time:"}</Text>
                <Text my="4px" fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Duration: </Text>
            </Box>
            <Box  my="20px" display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
                <Text my="4px" fontSize={"medium"} fontWeight={'bold'}>{obj.taskId}</Text>
                <Text my="4px" fontSize={"medium"} fontWeight={'bold'}>{obj.dateTime}</Text>
                <Text my="4px" fontSize={"medium"} fontWeight={'bold'}>{obj.duration}</Text>
            </Box>
        </Box>
        <Box display={"flex"} w="90%"  flexDirection={"column"} justifyContent={"space-around"}>
            <Box display={"flex"} justifyContent={"space-around"}>
                <Text display={!isUpcomingTaskClicked&&"none"} fontSize={"medium"} fontWeight={'medium'} color={"#7b808a"}>Status:  </Text>
                <Text display={!isUpcomingTaskClicked&&"none"} fontSize={"lg"} fontWeight={'bold'} color={obj.status=="Overdue"?"red":"green"}>{obj.status}</Text>
            </Box>
            <Button my="20px" color={"white"} alignSelf={"center"} minW="180px" bgColor={"#04095A"} w="70%">{obj.status=="Overdue"?"Start Assessment":"Continue Assessment"}</Button>

        </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  

}



export default Body