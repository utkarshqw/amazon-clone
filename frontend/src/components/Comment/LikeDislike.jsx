import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"

const LikeDislike = ({show, setShow, handleDelete}) => {
  return (
    <Flex alignItems={"center"} gap="10px" >
          <AiOutlineLike/>
          <AiOutlineDislike/>
        <Button h="25px" w="50px" fontSize={"13px"} onClick={() => setShow(!show)}>reply</Button>
        <Button h="25px" w="50px" fontSize={"13px"} onClick={handleDelete}>Delete</Button>
        </Flex>
  )
}

export default LikeDislike