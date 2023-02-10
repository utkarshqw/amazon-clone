import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/product/ProductCard";
import styles from "../Styles/Product.module.css";
import axios from "axios";
import Footer from "../components/homepage/Footer";
import ProductCard2 from "../components/product/ProductCard2";
import TopBar from "../components/product/TopBar";
import Pagination from "../components/pagination/Pagination";

const Productpage = () => {
  const [mobiledata, setMobileData] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("unSorted")
  const [grid, setGrid] = useState(true);

  var productDataMap = mobiledata?.map((elem, i) => {
    if (grid) return <ProductCard key={i} {...elem} />;
     return <ProductCard2 key={i} {...elem} />;
  });

 
  const MOBILEDATA_URL =`http://localhost:8080/product/mobile_sort/?_sortby=price&_order=${order}&_limit=9&_page=${page * 10}`
  function GetData (URL) {
    axios
    .get(URL)
    .then((res) => setMobileData(res.data));
  }
   
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    GetData(MOBILEDATA_URL)
  }, [page,order]);
  

 

 const handlePagination = (value) => {
    setPage(page + value);
  };
  return (
    <>
      <Navbar />
      <Box bg="white" className={styles.productpage_container}>
        <Box bg="white"></Box>
        <Box bg="white" p={"10px"}>
            {/* Top Bare here */}
          <TopBar  order={order} grid={grid} setOrder={setOrder} setGrid={setGrid} />
          <Flex gap={"3%"} flexWrap={"wrap"}>
            {productDataMap}
          </Flex>
        </Box>
      </Box>
      <Box bg="white" textAlign={"center"}>
        <Pagination page={page} handlePagination={handlePagination} />
      </Box>

      <Footer />
    </>
  );
};

export default Productpage;
