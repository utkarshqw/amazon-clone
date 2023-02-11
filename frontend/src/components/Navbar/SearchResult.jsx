import { Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchResult = ({mainimg, heading, _id}) => {
    const navigate = useNavigate()
  return (
    <Flex onClick={()=>navigate(`/details/${_id}`)}  _hover={{border:"2px solid skyblue",bg:"rgba(243,189,105,.7)"}}  color="black" border="2px solid white" p="4px" h="70px" gap="15px" mb="5px">
        <Img src={mainimg} alt="search result" />
        <Text fontSize={13} fontWeight={600}  noOfLines={2} >{heading}</Text>

    </Flex>
  )
}

export default SearchResult