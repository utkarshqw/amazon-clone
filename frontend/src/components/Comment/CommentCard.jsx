import { Box, Button, Flex, Img, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'
import ReplyForm from './ReplyForm'
import ProdctStar from '../product/ProdctStar'

const CommentCard = ({ _id,  date, user,heading,stars,  message}) => {
    const [show, setShow] = useState(false)
    const [replies, setreplies] = useState([])
   

    useEffect(()=>{
    axios.post("http://localhost:8080/comment/getrootcomment",{id: _id})
    .then(res=> setreplies(res.data))
    },[replies])


  return (
    <>
    <Box border="1px" m="5px" p="5px">
        <Flex alignItems={"center"}>
        <Img w="60px" src={"/"+user.userpicture} />
        <Text color="gray" fontSize="14px" >{user.username}</Text>
        </Flex>

        <Flex gap="10px" alignItems="center" >
       { stars && <ProdctStar star={stars} /> }
        {heading && <Text fontWeight={"bold"} fontSize={"15px"} >{heading}</Text> }

        
        </Flex>
        <Text>{date}</Text>
        <Text>{message}</Text>
       
      
        <Button onClick={()=>setShow(!show)} >reply</Button>
        
       { show &&  <ReplyForm setShow={setShow} parentId={_id} /> }
        
    
    </Box>

    {
        replies.map((elem , index)=>(
            <CommentCard key={index} {...elem} />
        ))
    }
    </>
  )
}

export default CommentCard