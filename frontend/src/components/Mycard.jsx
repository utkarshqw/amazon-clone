import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Slider.module.css"

const Mycard = ({src}) => {
  return (
    <Box className={styles.mycard} align="center" >
      <Img src={src} mt="20px"/>
    </Box>
  )
}

export default Mycard