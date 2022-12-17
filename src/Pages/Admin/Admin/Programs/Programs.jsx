import React from 'react';
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text, useToast} from '@chakra-ui/react'
import AddProgram from './AddProgram';
import AllCards from './AllCards';
import Navbar from '../Navbar';


const Programs = () => {
    const toast = useToast();

    function alreadyPage(){
        toast({
            title: 'Already on this Page',
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
    }

    function usersButton(){
      toast({
        title: 'Under Maintaince',
        status: "warning",
        duration: 1000,
        isClosable: true,
      })
    }
      
  
  return (
    
    <Box>
    <Navbar />
    <Flex justifyContent="space-between">
        <Box h="700" w="20%"  boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Button colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> <Link to="/dashboard">Dashboard</Link> </Button>
            <Button onClick={alreadyPage} colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> Programs </Button>
            <Button colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%"> <Link to="/workout">Workout</Link> </Button>
            <Button onClick={usersButton} colorScheme="orange" boxShadow= "rgb(253, 227, 167) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%">Users</Button>
            <Button colorScheme="red" boxShadow= "rgb(242, 121, 53) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" h="20" w="100%" mt="240">Logout</Button>
        </Box>
        <Box h="700" w="78%" boxShadow= "rgba(0, 0, 0, 0.15) 0px 2px 8px">
        <Flex justifyContent="space-between" mb="5" mt="5">
        <Flex>
          <Text fontSize="20" color="gray" fontWeight="600" >Total Programs: </Text>
          <Text ml="5" fontSize="23" fontWeight="700">20</Text>
        </Flex>
        <AddProgram />
      </Flex>
            <AllCards />
        </Box>
    </Flex>
    </Box>
   
  )
}
export default Programs;