import { Box } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Product.css"

const Mycard = ({cardno}) => {
  return (
    <Box className="mycard" >My card No {cardno}</Box>
  )
}

export default Mycard