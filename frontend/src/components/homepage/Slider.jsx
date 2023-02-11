import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/Slider.module.css";

const Slider = () => {
  return (
    <Box
      zIndex="1"
      className={styles.slider_container}
      overflow="hidden"
      pos={"relative"}
    >
      <input type="radio" name="rdo" id={styles.r1} />
      <input type="radio" name="rdo" id={styles.r2} />
      <input type="radio" name="rdo" id={styles.r3} />
      <input type="radio" name="rdo" id={styles.r4} />
      <input type="radio" name="rdo" id={styles.r5} />
      <input type="radio" name="rdo" id={styles.r6} />

      <Box display={"flex"} id={styles.first}>
        <img alt="#" src="slider1.jpg" id={styles.fimg} />
        <img alt="#" src="slider2.jpg" />
        <img alt="#" src="slider3.jpg" />
        <img alt="#" src="slider4.jpg" />
        <img alt="#" src="slider5.jpg" />
        <img alt="#" src="slider6.jpg" />
      </Box>
    </Box>
  );
};

export default Slider;
