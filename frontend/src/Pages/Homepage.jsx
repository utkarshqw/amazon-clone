import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card_one from '../components/homepage/Card_one'
import ProductSlider from '../components/homepage/ProductSlider'
import Slider from '../components/homepage/Slider'
import {carddata1, carddata2, carddata3, carddata4, carddata5, carddata6, carddata7} from "../data/Data"

const Homepage = () => {
  return (
    <>
    
    <Slider/>
    <Box pos={"relative"} zIndex={1} mt="-290px" padding="0px 15px"> 
    <Flex justifyContent={"center"} gap="25px" m="10px 0px">
    <Card_one bimg="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/BAU/Kamya/JanART/PC_CategoryCard_758X608_2._SY304_CB615772840_.jpg" show={false} text="Up to 60% | Upgrade to Smart TVs" />
    <Card_one data={carddata1} show={true} text="Most Searched smartphone series on..." />
    <Card_one data={carddata2} show={true} text="Starting ₹79 | Home, kitchen & more" />
    <Card_one data={carddata3} show={true} text="Starting ₹199 | Men's fashion" />
    </Flex>

    <ProductSlider />
   
     
     <Flex justifyContent={"center"} gap="25px" >
    <Card_one data={carddata4} show={true} text="Shop by brand" />
    <Card_one data={carddata5} show={true} text="Starting ₹199 | Women's fashion" />
    <Card_one data={carddata6} show={true} text="Amazon Pay | Pay utility bills fast & conveniently" />
    <Card_one data={carddata7} show={true} text="Great Republic Day Sale | Brands in Focus" />
    </Flex>

    </Box>

    

    </>
  )
}

export default Homepage