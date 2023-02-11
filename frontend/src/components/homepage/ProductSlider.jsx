import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import styles from "../../Styles/Slider.module.css";
import Mycard from "./Mycard";

const ProductSlider = ({ sliderdata }) => {
  let box = useRef();

  const handleprev = () => {
    let width = box.current.clientWidth;
    box.current.scrollLeft -= width;
  };

  const handlenext = () => {
    let width = box.current.clientWidth;
    box.current.scrollLeft += width;
  };
  return (
    <>
      <Box pos="relative" m="10px 0px">
        <Flex className={styles.btn_product}>
          <button onClick={handleprev}>
            <BsChevronLeft size="35px" />
          </button>
          <button onClick={handlenext}>
            <BsChevronRight size="35px" />{" "}
          </button>
        </Flex>
        <Box ref={box} className={styles.productcontainer}>
          {sliderdata.map((el, i) => (
            <Mycard key={i} src={el.img} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductSlider;
