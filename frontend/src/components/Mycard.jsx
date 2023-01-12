import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/Slider.module.css"

const Mycard = ({cardno}) => {
  return (
    <Box className={styles.mycard} >My card No {cardno}</Box>
  )
}

export default Mycard