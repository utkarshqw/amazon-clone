import { Box, Button, Divider, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
  return (
    <Box bg="white" align="center">
    <Img src="logo2.png" w="150px" mb="20px" />

   
    <Box boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px"} borderRadius="5px" p="25px" w="30%" align="left">
        <Text mb="25px" fontSize={35} >Sign in</Text>
        <Text fontWeight={600}>Email </Text>
        <Input mb="15px" type="text" />
        <Text fontWeight={600}>Password</Text>
        <Input mb="15px" />

        <Button mb="15px" w="100%" bg="#f4d27f">Continue</Button>

        <Text fontSize={14}>By continuing, you agree to Amazon's <span style={{color:"skyblue", cursor:"pointer"}}>Conditions of Use </span> and <span style={{color:"skyblue",cursor:"pointer"}}>Privacy Notice</span>.</Text>
    </Box>

    <Box display={"flex"} mt="25px" w="30%"  alignItems="center" >
        <Divider  />
        <Text w="70%" fontSize={14}>New to Amazon?</Text>
        <Divider/>
    </Box>

    <Button onClick={()=>navigate("/Signup")} bg="#e9eaed" w="30%" mt="15px" >Create your Amazon account</Button>

    </Box>
  )
}

export default Signin