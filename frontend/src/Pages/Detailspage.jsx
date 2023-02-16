import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import CommentSection from "../components/Comment/CommentSection";
import Details from "./SinglePage/Details";


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
      { product.length !== 0 && <Details {...product} /> }
    

      <CommentSection/>
    </>
  );
};

export default Detailspage;
