import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/Homepage.module.css";

const Card_one = ({ text, data, show = false, bimg = "" }) => {
  return (
    <Box className={styles.cardone_container} bg="white">
      <Text h="60px" lineHeight={7} fontSize={22} pb="8px" fontWeight="700">
        {text}
      </Text>

      <Box h="75%" display={"flex"} gap="10px" flexWrap="wrap">
        {show &&
          data.map((elem, i) => (
            <Box w="48%" key={i}>
              <Img alt="cardimage" src={elem.img} />
              <Text color={"blackAlpha.700"} fontSize={13}>
                {elem.msg}
              </Text>
            </Box>
          ))}
        {!show && <Img src={bimg} />}
      </Box>

      <Text
        color="blue.400"
        fontSize={13}
        _hover={{ color: "orange", textDecor: "underline" }}
        cursor="pointer"
        pt="5px"
      >
        Primary Early Deals | See all offers
      </Text>
    </Box>
  );
};

export default Card_one;
