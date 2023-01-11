import {
  Box,
  Button,
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

      <Box border="1px solid white">
        <Text fontSize={"130%"}>Hello, sign in</Text>
        <Flex alignItems="center" >
        <Text fontSize={"150%"} fontWeight={500}>Account & Lists</Text>
        <AiFillCaretDown style={{marginLeft:"3px",marginTop:"5px"}}  size="13px" />
        </Flex>
      </Box>
      
      <CartIcon/>

    </Box>
  );
};

export default Navbar;
