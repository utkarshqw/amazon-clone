import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getcartQuantity } from "../../app/reducers/cartSlice";
const CartIcon = () => {
  const cart_quantity = useSelector(getcartQuantity);
  return (
    <Box h="70%" w="60px" cursor={"pointer"}>
      <Box w="15px" h="3.5px" bg="white" borderRadius={2}></Box>
      <Box
        w="25px"
        h="3.5px"
        bg="white"
        transform={"rotate(65deg)"}
        mt="7px"
        ml="6px"
      ></Box>
      <Box w="20px" h="3.5px" bg="white" ml="23px" mt="7px"></Box>
      <Box
        w="17px"
        h="3.5px"
        bg="white"
        transform={"rotate(-65deg)"}
        ml="36px"
        mt="-10px"
        borderRadius={2}
      ></Box>
      <Text
        ml={cart_quantity > 9?"22px":"28px"}
        mt="-22px"
        fontWeight={700}
        fontSize="16px"
        color="#fb9236"
        
      >
        {cart_quantity}
      </Text>
      <Box
        w="7px"
        h="7px"
        bg="white"
        borderRadius={"50%"}
        mt="10px"
        ml="22px"
      ></Box>
      <Box
        w="7px"
        h="7px"
        bg="white"
        borderRadius={"50%"}
        ml="35px"
        mt="-7px"
      ></Box>
    </Box>
  );
};

export default CartIcon;
