import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "../Styles/Slider.module.css";

const Slider = () => {

  var sli = useRef()
 
  
  
   
  
   
  
  return (
    <>
  
      <input type="radio" name="rdo" id={styles.r1} />
      <input type="radio" name="rdo" id={styles.r2} />
      <input type="radio" name="rdo" id={styles.r3} />
      <input type="radio" name="rdo" id={styles.r4} />

      <Box display={"flex"}  overflow="hidden" id={styles.first}>
        <img src="slider1.jpg" ref={sli} id={styles.fimg} />
        <img src="slider2.jpg" />
        <img src="slider3.jpg" />
        <img src="slider4.jpg" />
      </Box>
      
    </>
  );
};

export default Slider;
