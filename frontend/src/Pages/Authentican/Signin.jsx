import { Box, Button, Divider, Img, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie } from '../../misc/Allfunctions'

const Signin = () => {
    const [userData, setuserData] = useState({email:"",password:""}) 
    const navigate = useNavigate() 
    
    const handleChange = (e) => {
      const {name, value} = e.target 
      setuserData({...userData,
      [name]:value 
      })
    }

    const handleSubmit = () => {
     if(!userData.email || !userData.password)
     {
      return alert("please fill all the fields")
     }
     
     axios.post(" http://localhost:8080/user/login",userData)
     .then((res)=>{
      if(res.data !== false){
        setCookie("JWT_TOKEN",res.data)
        console.log(res.data)
        navigate("/")
      }
      else console.log(res.data)
     })
    }
    
  return (
    <Box bg="white" align="center">
    <Img alt="#" src="logo2.png" w="150px" mb="20px" />

   
    <Box boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px"} borderRadius="5px" p="25px" w="30%" align="left">
        <Text mb="25px" fontSize={35} >Sign in</Text>
        <Text fontWeight={600}>Email </Text>
        <Input mb="15px" type="text" name="email" value={userData.email} onChange={handleChange} />
        <Text fontWeight={600}>Password</Text>
        <Input mb="15px" name="password" value={userData.password} onChange={handleChange} />

        <Button mb="15px" w="100%" bg="#f4d27f" onClick={handleSubmit} >Continue</Button>

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