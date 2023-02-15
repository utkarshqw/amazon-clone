import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import CommentSection from "../components/Comment/CommentSection";

const Detailspage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/details/${params.id}`)
      .then((res) => setProduct(res.data));
  }, [params.id]);
  return (
    <>
      <Navbar />
      <Box >
        Details page
        <br />
        {product.heading}
      </Box>

      <CommentSection/>
    </>
  );
};

export default Detailspage;
