import { Box, Button, Divider, Img, Input, Text } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Signup = () => {
  const [registrationdata , setRegistrationdata] = useState({username:"",email:"",password:""}) 
  const navigate = useNavigate();

  const handleChange = (e) => {
  const {name, value} = e.target
  setRegistrationdata({...registrationdata, 
  [name]:value 
  })
  }

  const handleSubmit = () => {
     if(!registrationdata.username || !registrationdata.email || !registrationdata.password  ) 
     {
      return alert("please fill all the fields")
     }
     axios.post(" http://localhost:8080/user/registeruser",registrationdata)
     .then((res)=> console.log(res))
     .then((res)=> navigate("/signin"))

 


  }
  return (
    <Box bg="white" align="center">
      <Img src="logo2.png" w="150px" mb="20px" />

      <Box
        boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        borderRadius="5px"
        p="25px"
        w="30%"
        align="left"
      >
        <Text mb="25px" fontSize={35}>
          Create Account
        </Text>

        <Text fontWeight={600}>Username </Text>
        <Input mb="15px" type="text" name="username" value={registrationdata.username} onChange={handleChange} />
        <Text fontWeight={600}>Email </Text>
        <Input mb="15px" type="text" name="email" value={registrationdata.email} onChange={handleChange} />
        <Text fontWeight={600}>Password</Text>
        <Input mb="15px" name="password" value={registrationdata.password} onChange={handleChange} />

        <Button mb="15px" w="100%" bg="#f4d27f" onClick={handleSubmit}>
          Continue
        </Button>

        <Text fontSize={14}>
          By continuing, you agree to Amazon's{" "}
          <span style={{ color: "skyblue", cursor: "pointer" }}>
            Conditions of Use{" "}
          </span>{" "}
          and{" "}
          <span style={{ color: "skyblue", cursor: "pointer" }}>
            Privacy Notice
          </span>
          .
        </Text>
      </Box>

      <Box display={"flex"} mt="25px" w="30%" alignItems="center">
        <Divider w="30%" />
        <Text w="40%" fontSize={14}>
          Already have account?
        </Text>
        <Divider w="30%" />
      </Box>

      <Button
        onClick={() => navigate("/Signin")}
        bg="#e9eaed"
        w="30%"
        mt="15px"
      >
        Signin to your Amazon account
      </Button>
    </Box>
  );
};

export default Signup;
