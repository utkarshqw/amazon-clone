import { Box, Flex, Img, Text } from "@chakra-ui/react";
import styles from "../../Styles/Product.module.css";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import ProductStar from "./ProdctStar";

const ProductCard = ({
  mainimg = "https://m.media-amazon.com/images/I/71mjJcG-F4L._AC_UY218_.jpg",
  heading = "IKALL Z12 4G Smartphone with 4GB RAM, 64 Internal Memory (6.53 Inch HD+ Display) (Jude Green)",
  price = 6499,
  base = 10000,
  discount = 40,
  star = 4,
}) => {
  const [grid, setGrid] = useState(true);

  return (
    <Flex bg="white" m="10px 0px" className={styles.Productcard_container}>
      <Box
        p="10px"
        align="center"
        bg="rgba(128, 128, 128, .30)"
        borderRadius={"5px"}
        maxH={"230px"}
      >
        {/* change is made */}
        <Img borderRadius={"5px"} h={"100%"} src={mainimg} />
      </Box>
      <Box p="10px">
        <Text  noOfLines={2} mb="5px" fontSize={17} fontWeight="bold">
          {heading}
        </Text>

        <ProductStar star={star} />

        <Flex alignItems={"flex-end"} gap="10px" w="300px">
          <Text fontSize={24}>{`₹ ${price.toLocaleString()}`}</Text>
          <Flex pb="6px" gap={"5px"}>
            <Text fontSize={15} color={"gray"} textDecor="line-through">
              ₹{base}
            </Text>
            <Text fontSize={14}>({`${discount}% off`})</Text>
          </Flex>
        </Flex>
        <Text color={"orange.900"} fontSize={14} fontWeight={600}>
          Free Delivery by Amazon
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard;
