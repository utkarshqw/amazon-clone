import { Box, Flex, Img, Text } from "@chakra-ui/react";
import styles from "../../Styles/Product.module.css";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const ProductCard = ({
  mainimg = "https://m.media-amazon.com/images/I/71mjJcG-F4L._AC_UY218_.jpg",
  heading = "IKALL Z12 4G Smartphone with 4GB RAM, 64 Internal Memory (6.53 Inch HD+ Display) (Jude Green)",
  price = 6499,
  base = 10000,
  discount = 40,
  star = 4,
}) => {
  return (
    <Box h="400px" bg="white" m="10px 0px" className={styles.Productcard_container}>
      <Box
        p="10px"
        maxW="230px"
        minW="230px"
        align="center"
        bg="rgba(128, 128, 128, .15)"
      >
        <Img src={mainimg} h="100%" />
      </Box>
      <Box p="10px">
        <Text mb="5px" fontSize={18}>
          {heading}
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent="center"
          borderRadius={3}
          p="2px 2px "
          bg="#febd69"
          w="40px"
        >
          <Text>{star} </Text>
          <AiFillStar color="brown" />
        </Flex>
        <Flex alignItems={"flex-end"} gap="10px" w="300px">
          <Text fontSize={30}>{`₹ ${price.toLocaleString()}`}</Text>
          <Flex pb="6px" gap={"5px"}>
            <Text color={"gray"} textDecor="line-through">
              ₹{base}
            </Text>
            <Text>({`${discount}% off`})</Text>
          </Flex>
        </Flex>
        <Text fontSize={14} fontWeight={600}>
          Free Delivery by Amazon
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
