import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from "react-icons/bs"
import styles from "../Styles/Slider.module.css"
import Mycard from './Mycard'

const ProductSlider = () => {

    let box = useRef()

    const handleprev = () => {
      let width = box.current.clientWidth;
      box.current.scrollLeft -= width
    }


    const handlenext = () => {
        let width = box.current.clientWidth;
        box.current.scrollLeft += width
    }
  return (
    <Box pos="relative">
         <Flex className={styles.btn_product} >
        <button   onClick={handleprev} ><BsChevronLeft  size="35px" /></button>
        <button   onClick={handlenext} ><BsChevronRight size="35px" /> </button> 
        </Flex>
        <Box ref={box} className={styles.productcontainer} >
            <Mycard cardno="1" />
            <Mycard cardno="2" />
            <Mycard cardno="3" />
            <Mycard cardno="4" />
            <Mycard cardno="5" />
            <Mycard cardno="6" />
            <Mycard cardno="7" />
            <Mycard cardno="8" />
            <Mycard cardno="9" />
            <Mycard cardno="10" />
            <Mycard cardno="11" />
            <Mycard cardno="12" />
            <Mycard cardno="13" />

        </Box>


    </Box>
  )
}

export default ProductSlider