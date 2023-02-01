import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/product/ProductCard";
import styles from "../Styles/Product.module.css";
import axios from "axios";
import Footer from "../components/homepage/Footer";

const Productpage = () => {
  const [mobiledata, setMobileData] = useState([]);
  const [page, setPage] = useState(0)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/mobile/?page=${page*10}&limit=9`)
      .then((res) => setMobileData(res.data));
  }, [page]);

  const handlePagination = (value) => {
   setPage(page + value )
   }
  return (
    <>
      <Navbar />
      {/* <ProductCard/> */}
      <Box bg="white" className={styles.productpage_container}>
        <Box bg="white"></Box>
        <Box bg="white" p={"10px"}>
          <Flex
            gap={5}
            borderBottom={"1px solid gray"}
            h="50px"
            alignItems={"center"}
          >
            <Text fontWeight={700}>SortBy</Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: "brown" }}
              fontWeight={500}
              fontSize={15}
            >
              Price -- Low to High
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "brown" }} fontSize={15}>
              Price -- High to Low
            </Text>
          </Flex>

          {mobiledata?.map((elem, i) => (
            <ProductCard key={i} {...elem} />
          ))}
        </Box>
      </Box>
      <Box bg="white" textAlign={"center"}>
      <Button bg="#f3bd69"  disabled={page == 0} onClick={()=>handlePagination(-1)} >prev</Button>
      <Button>{page}</Button>
      <Button bg="#f3bd69"  disabled={page == 1} onClick={()=>handlePagination(1)} >next</Button>
      </Box>

      <Footer/>
    </>
  );
};

export default Productpage;
