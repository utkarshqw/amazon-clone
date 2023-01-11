import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import {BsSearch} from "react-icons/bs"
import {AiFillCaretDown} from "react-icons/ai"
import React from "react";
import styles from "../Styles/Navbar.module.css";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <>
    <Box bg="#131921" fontSize={ [4,7,10]} color="white" h="60px" display={"flex"} alignItems="center" justifyContent={"center"}  gap={["4%","4%","5%"]} pl={["1px","10px","20px"]} pr={["1px","10px","20px"]}>

      <Img src="logo.png" w="10%" />

      <InputGroup w="45%"  >
        <Input bg="white" borderRadius={"3px"} fontSize="13px" placeholder="Serch product..." color="black" />
        <InputRightElement
          bg="#febd69"
          borderRadius={"3px"}
          children={<BsSearch size={"1.5em"} color="black"  />}
        />
      </InputGroup>
      
      <Box border="1px solid white" h="100%" display={"flex"} flexDir="column" justifyContent="center" className={styles.hello} lineHeight="18px" posotion="relative" >
        <Text fontSize={"140%"}>Hello, sign in</Text>
        <Flex alignItems="center" >
        <Text fontSize={"150%"} fontWeight={500}>Account & Lists</Text>
        <AiFillCaretDown style={{marginLeft:"3px",marginTop:"5px"}}  size="13px" />
        </Flex>

        {/* dropdown */}
       <Box id={styles.dropdown} w="350px"  position="absolute" zIndex={2} right={["10%","7%","11%"]} top="27.5px" p="50px 15px 20px 15px"  >
        
        <Box align="center">
        <Button bg="#febd69" color="black" w="60%" fontSize="130%" mb={1} >Sign in </Button>
        <Text fontSize={"120%"} mb="2">New customer? <span style={{color:"skyblue"}}>Start here</span></Text>
        </Box>
        <Divider/>
        <Flex mt="5" lineHeight={6} gap="10px">
        <Box  w="50%">
          <Text fontWeight={600} fontSize={"170%"}>Your Lists</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Create a Wish List</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Wish from Any Website</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Baby Wishlist</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Discover Your Style</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Explore Showroom</Text>
        </Box>
        
        <Box  w="50%">
          <Text fontSize={"170%"} fontWeight={600} >Your Account</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Your Account</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Your Orders</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Your Wish List</Text>
          <Text _hover={{color:"#febd69",textDecoration:"underline"}} fontSize={"120%"} >Your Recommendations</Text>
        
        </Box>
        </Flex>


        
       </Box>

      </Box>


      
      <CartIcon/>

    </Box>
    </>
  );
};

export default Navbar;
