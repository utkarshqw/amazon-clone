import { Box, Button } from '@chakra-ui/react'
import React, { useRef } from 'react'
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
    <Box>
         <Button className={styles.btnpre} onClick={handleprev} ><p>&lt;</p></Button>
        <Button className= {styles.btnnext} onClick={handlenext} ><p>&gt;</p> </Button> 
        
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