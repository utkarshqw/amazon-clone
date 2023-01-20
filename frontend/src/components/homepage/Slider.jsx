import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "../../Styles/Slider.module.css";

const Slider = () => {
  var sli = useRef();

  const handlemove = () => {
    // let width = sli.current.clientWidth;
    // sli.current.scrollLeft += width;

    // sli.current.style.border="5px solid blue"
  }

  return (
    
    <Box zIndex="1" className={styles.slider_container} overflow="hidden" pos={"relative"}>
      <input type="radio" name="rdo" id={styles.r1} />
      <input type="radio" name="rdo" id={styles.r2} />
      <input type="radio" name="rdo" id={styles.r3} />
      <input type="radio" name="rdo" id={styles.r4} />
      <input type="radio" name="rdo" id={styles.r5} />
      <input type="radio" name="rdo" id={styles.r6} />

      <Box display={"flex"}  id={styles.first}>
        <img src="slider1.jpg" id={styles.fimg} />
        <img src="slider2.jpg" />
        <img src="slider3.jpg" />
        <img src="slider4.jpg" />
        <img src="slider5.jpg" />
        <img src="slider6.jpg" />
      </Box>
    </Box>


    


    
  );
};

export default Slider;
