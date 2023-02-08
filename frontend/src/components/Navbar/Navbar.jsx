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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import React from "react";
import styles from "../../Styles/Navbar.module.css";
import CartIcon from "./CartIcon";
import Navlinks from "./Navlinks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        className={styles.nav_container}
        fontSize={[4, 7, 10]}
        gap={["4%", "4%", "5%"]}
        pl={["1px", "10px", "20px"]}
        pr={["1px", "10px", "20px"]}
      >
        <Img cursor={"pointer"} src="logo.png" w="10%" onClick={()=> navigate("/")} />

        <InputGroup w="45%">
          <Input
            className={styles.nav_input}
            borderRadius="2px"
            bg="white"
            fontSize={13}
            fontWeight={600}
            placeholder="Serch product..."
          />
          <InputRightElement
            className={styles.nav_right}
            children={<BsSearch size={"1.5em"} color="black" />}
          />
        </InputGroup>

        {/* sign in box */}
        <Box h="100%" className={styles.hello}>
          <Text mt="10px" fontSize={"140%"}>
            Hello, sign in
          </Text>
          <Flex className={styles.signin}>
            <Text fontSize={"150%"} fontWeight={500}>
              Account & Lists
            </Text>
            <AiFillCaretDown
              style={{ marginLeft: "3px", marginTop: "5px" }}
              size="13px"
            />
          </Flex>

          {/* dropdown content start*/}
          <Box w={["270px", "270px", "350px"]} id={styles.dropdown}>
            <Box align="center">
              <Button
                onClick={() => navigate("/Signin")}
                className={styles.drop_button}
                bg="#febd69"
              >
                Sign in{" "}
              </Button>
              <Text fontSize={"120%"} mb="2">
                New customer?{" "}
                <span style={{ color: "skyblue", cursor: "pointer" }}>
                  Start here
                </span>
              </Text>
            </Box>
            <Divider />
            <Flex mt="5" lineHeight={6} gap="10px">
              <Box w="50%" className={styles.drop_text}>
                <Text fontWeight={600} fontSize={"170%"}>
                  Your Lists
                </Text>
                <p>Create a Wish List</p>
                <p>Wish from Any Website</p>
                <p>Baby Wishlist</p>
                <p>Discover Your Style</p>
                <p>Explore Showroom</p>
              </Box>

              <Box className={styles.drop_text} w="50%">
                <Text fontSize={"170%"} fontWeight={600}>
                  Your Account
                </Text>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Your Wish List</p>
                <p>Your Recommendations</p>
              </Box>
            </Flex>
          </Box>
          {/* Dropdown contend end */}
        </Box>
        {/* signin box end */}

        {/* Cart icon component  */}
        <CartIcon />
      </Flex>
      <Box h={"60px"}></Box>

      <Navlinks />
    </>
  );
};

export default Navbar;
