import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/product/ProductCard";
import styles from "../Styles/Product.module.css";
import axios from "axios";
import ProductCard2 from "../components/product/ProductCard2";
import TopBar from "../components/product/TopBar";
import Pagination from "../components/pagination/Pagination";
import Footer from "../components/Footer/Footer";


const Productpage = () => {
  const [mobiledata, setMobileData] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("unSorted")
  const [grid, setGrid] = useState(true);
  const [limit , setLimit] = useState(9)
  let [totalproduct, setTotlaproduct] = useState(0)

  var productDataMap = mobiledata?.map((elem, i) => {
    if (grid) return <ProductCard key={i} {...elem} />;
     return <ProductCard2 key={i} {...elem} />;
  });

 
  const MOBILEDATA_URL =`http://localhost:8080/product/mobile_sort/?_sortby=price&_order=${order}&_limit=${limit}&_page=${page*10}`
  function GetData (URL) {
    axios
    .get(URL)
    .then((res) =>{ 
      setTotlaproduct(res.data.total_product)
      setMobileData(res.data.Data || res.data.sorted_Data)})
    
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
        <Pagination limit={limit} totalproduct={totalproduct} page={page} setPage={setPage} handlePagination={handlePagination} />
      </Box>

      <Footer />
    </>
  );
};

export default Productpage;
