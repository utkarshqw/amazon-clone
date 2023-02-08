import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFillGridFill} from "react-icons/bs"
import {MdViewAgenda} from "react-icons/md"

const TopBar = ({setGrid}) => {
    const GridOn = ()=>setGrid(true)
    const GridOff = ()=>setGrid(false)
  return (
    <Flex
            
    gap={5}
    borderBottom={"1px solid gray"}
    h="50px"
    alignItems={"center"}
  >
    <Text fontWeight={700}>SortBy</Text>
    <Text
      cursor={"pointer"}
      _hover={{ color: "brown" }}
      fontWeight={500}
      fontSize={15}
    >
      Price -- Low to High
    </Text>
    <Text cursor={"pointer"} _hover={{ color: "brown" }} fontSize={15}>
      Price -- High to Low
    </Text>

    <BsFillGridFill onClick={GridOn} />
    <MdViewAgenda onClick={GridOff} />
    
  </Flex>
  )
}

export default TopBar